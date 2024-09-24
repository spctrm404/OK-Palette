import {
  LIGHTNESS_INTEGER_LENGTH,
  LIGHTNESS_DECIMAL_LENGTH,
  LIGHTNESS_STEP,
  CHROMA_INTEGER_LENGTH,
  CHROMA_DECIMAL_LENGTH,
  CHROMA_STEP,
  HUE_INTEGER_LENGTH,
  HUE_DECIMAL_LENGTH,
  HUE_STEP,
  P3_CHROMA_LIMIT,
  THEME_PEAK_CHROMA_HEADROOM,
  THEME_PEAK_LIGHTNESS,
  THEME_SECONDARY_CHROMA_MULT,
  THEME_NEUTRAL_VARIANT_PEAK_CHROMA,
  THEME_NEUTRAL_PEAK_CHROMA,
  RGB_FLOAT_PRECISION,
} from '../common/constants';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext, useState } from 'react';
import './_App.scss';
import Button from './components/Button/Button';
import NumberFieldPropsType from './components/NumberField/NumberField';
import Slider from './components/Slider/Slider';
import Switch from './components/Switch/Switch';
import st from './_App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(st);

function App() {
  const { theme, toggleTheme, syncHues } = useContext(ThemeContext);

  const [isHueRanged, setHueRanged] = useState(false);

  const sendMsg = () => {
    const swatchStep = 10;
    const peakLightness = 0.5;
    const peakChroma = 0.11;
    const hue = 260;
    console.log('lightnessStep', swatchStep);
    console.log('peakLightness', peakLightness);
    console.log('peakChroma', peakChroma);
    console.log('hue', hue);
    parent.postMessage(
      {
        pluginMessage: {
          type: 'create-palette',
          swatchStep,
          peakLightness,
          peakChroma,
          hue,
        },
      },
      '*'
    );
  };

  return (
    <>
      <div
        className={cx('controller__section', 'controller__section--area-hues')}
      >
        <h3 className={cx('controller__section__title')}>Hue</h3>
        <Switch
          className={cx('controller__is-ranged')}
          isSelected={isHueRanged}
          onChange={() => {}}
        />
        <Slider
          className={cx('controller__slider-hue-from')}
          value={0}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={() => {}}
          onChangeEnd={() => {}}
        />
        <Slider
          className={cx('controller__slider-hue-to')}
          isDisabled={!isHueRanged}
          value={0}
          minValue={0}
          maxValue={360}
          step={HUE_STEP}
          onChange={() => {}}
          onChangeEnd={() => {}}
        />
        <div className={cx('controller__number-fields-hues')}>
          <NumberField
            className={cx('controller__number-fields-hue-from')}
            value={0}
            minValue={0}
            maxValue={360}
            step={HUE_STEP}
            onChange={() => {}}
            onChangeEnd={() => {}}
          />
          <NumberField
            className={cx('controller__number-fields-hue-to')}
            isDisabled={!isHueRanged}
            value={0}
            minValue={0}
            maxValue={360}
            step={HUE_STEP}
            onChange={() => {}}
            onChangeEnd={() => {}}
          />
        </div>
      </div>
      <Button buttontype="filled" text="Create" onPress={sendMsg} />
    </>
  );
}

export default App;
