import { useCallback, useContext, useReducer } from 'react';
import {
  LIGHTNESS_STEP,
  CHROMA_STEP,
  HUE_STEP,
  P3_CHROMA_LIMIT,
} from '../common/constants';
import { ThemeContext } from './contexts/ThemeContext';
import Button from './components/Button/Button';
import NumberField from './components/NumberField/NumberField';
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
      type: 'toggleBoolean';
      payload: keyof Pick<
        PaletteParam,
        'isHueRanged' | 'showDetail' | 'createApcaTable'
      >;
    };

function App() {
  const { theme, toggleTheme, syncHues } = useContext(ThemeContext);

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
      case 'toggleBoolean':
        return {
          ...paletteState,
          [paletteAction.payload]: !paletteState[paletteAction.payload],
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
          hue: state.hueFrom,
        },
      },
      '*'
    );
  };

  const onChangeLightnessAndChromaHandler = useCallback(() => {}, []);
  const onChangeLightnessHandler = useCallback(() => {}, []);
  const onChangeChromaHandler = useCallback(() => {}, []);
  const onChangeHueRangedHandler = useCallback(() => {}, []);
  const onChangeHueFromHandler = useCallback(() => {}, []);
  const onChangeHueToHandler = useCallback(() => {}, []);

  return (
    <>
      <div className="lighnessAndChroma">
        <div>
          <XYSlider
            // aria-labelledby={lAndCTitleId}
            className={cx('controller__xy-slider')}
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
          className={cx('controller__number-fields-l')}
          value={state.peakLightness}
          minValue={0}
          maxValue={1}
          step={LIGHTNESS_STEP}
          onChange={onChangeLightnessHandler}
        />
        <NumberField
          // aria-labelledby={lAndCTitleId}
          className={cx('controller__number-fields-c')}
          value={state.peakChroma}
          minValue={0}
          maxValue={P3_CHROMA_LIMIT}
          step={CHROMA_STEP}
          onChange={onChangeChromaHandler}
        />
      </div>
      <div className="hue">
        <Switch
          // aria-labelledby={huesTitleId}
          className={cx('controller__is-ranged')}
          isSelected={state.isHueRanged}
          onChange={onChangeHueRangedHandler}
        />
        <Slider
          // aria-labelledby={huesTitleId}
          className={cx('controller__slider-hue-from')}
          value={state.hueFrom}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueFromHandler}
          onChangeEnd={onChangeHueFromHandler}
        />
        <Slider
          // aria-labelledby={huesTitleId}
          className={cx('controller__slider-hue-to')}
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
          className={cx('controller__number-fields-hue-from')}
          value={state.hueFrom}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueFromHandler}
        />
        <NumberField
          // aria-labelledby={huesTitleId}
          className={cx('controller__number-fields-hue-to')}
          isDisabled={!state.isHueRanged}
          value={state.hueTo}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={onChangeHueToHandler}
        />
      </div>
      <div className="swatch-step"></div>
      <Button buttontype="filled" text="Create" onPress={sendMsg} />
    </>
  );
}

export default App;
