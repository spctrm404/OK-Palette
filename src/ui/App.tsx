import {
  useCallback,
  useContext,
  useEffect,
  useState,
  useReducer,
  useRef,
} from 'react';
import {
  LIGHTNESS_STEP,
  CHROMA_STEP,
  HUE_STEP,
  P3_CHROMA_LIMIT,
} from '../common/constants';
import { PlaneCoord } from '../common/types';
import { ThemeContext } from './contexts/ThemeContext';
import Button from './components/Button/Button';
import IconButton from './components/IconButton/IconButton';
import NumberField from './components/NumberField/NumberField';
import Radio from './components/Radio/Radio';
import Slider from './components/Slider/Slider';
import Switch from './components/Switch/Switch';
import XYSlider from './components/XYSlider/XYSlider';
import st from './_App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(st);

type PaletteParam = {
  swatchStep: number;
  peakLightness: number;
  peakChroma: number;
  isHueRanged: boolean;
  hueFrom: number;
  hueTo: number;
  showDetail: boolean;
  createApcaTable: boolean;
};

type PaletteAction =
  | {
      type: 'setNumber';
      payload: {
        field: keyof Omit<
          PaletteParam,
          'isHueRanged' | 'showDetail' | 'createApcaTable'
        >;
        value: number;
      };
    }
  | {
      type: 'setNumbers';
      payload: Array<{
        field: keyof Omit<
          PaletteParam,
          'isHueRanged' | 'showDetail' | 'createApcaTable'
        >;
        value: number;
      }>;
    }
  | {
      type: 'toggleBoolean';
      payload: keyof Pick<
        PaletteParam,
        'isHueRanged' | 'showDetail' | 'createApcaTable'
      >;
    }
  | {
      type: 'setBoolean';
      payload: {
        field: keyof Pick<
          PaletteParam,
          'isHueRanged' | 'showDetail' | 'createApcaTable'
        >;
        value: boolean;
      };
    };

function App() {
  const { setHues } = useContext(ThemeContext);

  const radioItemsRef = useRef([
    { uid: 'radioItemsRef_1', value: '1', text: '1' },
    { uid: 'radioItemsRef_2', value: '2', text: '2' },
    { uid: 'radioItemsRef_5', value: '5', text: '5' },
    { uid: 'radioItemsRef_10', value: '10', text: '10' },
  ]);

  const reducer = (
    paletteState: PaletteParam,
    paletteAction: PaletteAction
  ): PaletteParam => {
    switch (paletteAction.type) {
      case 'setNumber':
        return {
          ...paletteState,
          [paletteAction.payload.field]: paletteAction.payload.value,
        };
      case 'setNumbers':
        return paletteAction.payload.reduce(
          (acc, { field, value }) => ({ ...acc, [field]: value }),
          paletteState
        );
      case 'toggleBoolean':
        return {
          ...paletteState,
          [paletteAction.payload]: !paletteState[paletteAction.payload],
        };
      case 'setBoolean':
        return {
          ...paletteState,
          [paletteAction.payload.field]: paletteAction.payload.value,
        };
      default:
        throw new Error('Unknown action type');
    }
  };

  const initialState: PaletteParam = {
    swatchStep: 10,
    peakLightness: 0.5,
    peakChroma: 0.11,
    isHueRanged: false,
    hueFrom: 0,
    hueTo: 0,
    showDetail: true,
    createApcaTable: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const isHueRangedRef = useRef(state.isHueRanged);
  const hueFromRef = useRef(state.hueFrom);
  const [documentColorSpace, setDocumentColorSpace] = useState<
    'LEGACY' | 'SRGB' | 'DISPLAY_P3'
  >('LEGACY');

  const sendMsg = () => {
    console.log('lightnessStep', state.swatchStep);
    console.log('peakLightness', state.peakLightness);
    console.log('peakChroma', state.peakChroma);
    console.log('hue', state.hueFrom);
    console.log('hue', state.hueTo);
    parent.postMessage(
      {
        pluginMessage: {
          type: 'create-palette',
          swatchStep: state.swatchStep,
          peakLightness: state.peakLightness,
          peakChroma: state.peakChroma,
          hues: { from: state.hueFrom, to: state.hueTo },
        },
      },
      '*'
    );
  };

  const onChangeLightnessAndChromaHandler = useCallback(
    ({ x, y }: PlaneCoord) => {
      dispatch({
        type: 'setNumbers',
        payload: [
          { field: 'peakLightness', value: x },
          { field: 'peakChroma', value: y },
        ],
      });
    },
    []
  );
  const onChangeLightnessHandler = useCallback((newNumber: number) => {
    dispatch({
      type: 'setNumber',
      payload: { field: 'peakLightness', value: newNumber },
    });
  }, []);
  const onChangeChromaHandler = useCallback((newNumber: number) => {
    dispatch({
      type: 'setNumber',
      payload: { field: 'peakChroma', value: newNumber },
    });
  }, []);
  const onChangeHueRangedHandler = useCallback((newBoolean: boolean) => {
    dispatch({
      type: 'setBoolean',
      payload: { field: 'isHueRanged', value: newBoolean },
    });
    isHueRangedRef.current = newBoolean;
  }, []);
  const onChangeHueFromHandler = useCallback((newNumber: number) => {
    dispatch({
      type: 'setNumber',
      payload: { field: 'hueFrom', value: newNumber },
    });
    hueFromRef.current = newNumber;
  }, []);
  const onChangeHueToHandler = useCallback((newNumber: number) => {
    dispatch({
      type: 'setNumber',
      payload: { field: 'hueTo', value: newNumber },
    });
  }, []);
  const onChangeSwatchStepHandler = useCallback((newString: string) => {
    dispatch({
      type: 'setNumber',
      payload: { field: 'swatchStep', value: parseInt(newString) },
    });
  }, []);

  useEffect(() => {
    window.onmessage = (event) => {
      const { message, colorSpace } = event.data.pluginMessage;
      if (message === 'colorSpace') {
        setDocumentColorSpace(colorSpace);
      }
    };
  }, []);

  useEffect(() => {
    if (!state.isHueRanged) {
      dispatch({
        type: 'setNumber',
        payload: { field: 'hueTo', value: state.hueFrom },
      });
    }
  }, [state.isHueRanged, state.hueFrom]);

  useEffect(() => {
    setHues?.({ from: state.hueFrom, to: state.hueTo });
  }, [state.hueFrom, state.hueTo]);

  return (
    <>
      <h2>{documentColorSpace}</h2>
      <IconButton materialIcon="add" buttontype="filled" />
      <div className="lighnessAndChroma">
        <div>
          <XYSlider
            // aria-labelledby={lAndCTitleId}
            className={cx('lighnessAndChroma__xy-slider')}
            minValue={{ x: 0, y: 0 }}
            maxValue={{ x: 1, y: P3_CHROMA_LIMIT }}
            step={{ x: LIGHTNESS_STEP, y: CHROMA_STEP }}
            value={{
              x: state.peakLightness,
              y: state.peakChroma,
            }}
            onChangeEnd={onChangeLightnessAndChromaHandler}
            onChange={onChangeLightnessAndChromaHandler}
          />
        </div>
        <NumberField
          // aria-labelledby={lAndCTitleId}
          className={cx(
            'lighnessAndChroma__number-field',
            'lighnessAndChroma__number-field--l'
          )}
          value={state.peakLightness}
          minValue={0}
          maxValue={1}
          step={LIGHTNESS_STEP}
          onChange={onChangeLightnessHandler}
          noButton={true}
        />
        <NumberField
          // aria-labelledby={lAndCTitleId}
          className={cx(
            'lighnessAndChroma__number-field',
            'lighnessAndChroma__number-field--c'
          )}
          value={state.peakChroma}
          minValue={0}
          maxValue={P3_CHROMA_LIMIT}
          step={CHROMA_STEP}
          onChange={onChangeChromaHandler}
          noButton={true}
        />
      </div>
      <div className="hue">
        <Switch
          // aria-labelledby={huesTitleId}
          className={cx('hue__switch')}
          isSelected={state.isHueRanged}
          onChange={onChangeHueRangedHandler}
        />
        <Slider
          // aria-labelledby={huesTitleId}
          className={cx('hue__slider', 'hue__slider--from')}
          value={state.hueFrom}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueFromHandler}
          onChangeEnd={onChangeHueFromHandler}
        />
        <Slider
          // aria-labelledby={huesTitleId}
          className={cx('hue__slider', 'hue__slider--to')}
          isDisabled={!state.isHueRanged}
          value={state.hueTo}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueToHandler}
          onChangeEnd={onChangeHueToHandler}
        />
        <NumberField
          // aria-labelledby={huesTitleId}
          className={cx('hue__number-field', 'hue__number-field--from')}
          value={state.hueFrom}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueFromHandler}
          // noButton={true}
        />
        <NumberField
          // aria-labelledby={huesTitleId}
          className={cx('hue__number-field', 'hue__number-field--to')}
          isDisabled={!state.isHueRanged}
          value={state.hueTo}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueToHandler}
          noButton={true}
        />
      </div>
      <div className="step">
        <Radio
          className={cx('step__radio')}
          radioItems={radioItemsRef.current}
          value={`${state.swatchStep}`}
          onChange={onChangeSwatchStepHandler}
          orientation="horizontal"
        />
      </div>
      <Button buttontype="filled" text="Create" onPress={sendMsg} />
    </>
  );
}

export default App;
