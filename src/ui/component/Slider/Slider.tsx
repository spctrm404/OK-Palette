import { useCallback, useContext } from 'react';
import {
  Slider as AriaSlider,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from 'react-aria-components';
import { ThemeContext } from '../../context/ThemeContext';
import st from './_Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(st);

// Props 타입 정의
interface SliderProps {
  minValue?: number;
  maxValue?: number;
  step?: number;
  value?: number;
  onChangeEnd?: (newNumber: number) => void;
  onChange?: (newNumber: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  minValue = 0,
  maxValue = 100,
  step = 1,
  value = 50,
  onChangeEnd = () => {},
  onChange = () => {},
  className = '',
  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  const onChangeEndHandler = useCallback(
    (newNumber: number) => {
      onChangeEnd?.(newNumber);
    },
    [onChangeEnd]
  );
  const onChangeHandler = useCallback(
    (newNumber: number) => {
      onChange?.(newNumber);
    },
    [onChange]
  );

  const normalizedValue = useCallback(() => {
    const nomalizedValue = (value - minValue) / (maxValue - minValue);
    return nomalizedValue;
  }, [maxValue, minValue, value]);

  return (
    <AriaSlider
      className={cx('slider', 'slider__root', className)}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      value={value}
      onChangeEnd={onChangeEndHandler}
      onChange={onChangeHandler}
      data-theme={theme}
      style={{ '--normalized-val': normalizedValue() }}
      {...props}
    >
      <AriaSliderTrack className={cx('slider__track', 'slider-track')}>
        <div
          className={cx(
            'slider__track__shape',
            'slider__track__shape--part-active',
            'slider-track-active'
          )}
        />
        <div
          className={cx(
            'slider__track__shape',
            'slider__track__shape--part-inactive',
            'slider-track-inactive'
          )}
        />
        <AriaSliderThumb className={cx('slider__thumb', 'slider-thumb')}>
          <div className={cx('slider__thumb__state', 'slider-thumb-state')} />
          <div className={cx('slider__thumb__shape', 'slider-thumb-shape')} />
        </AriaSliderThumb>
      </AriaSliderTrack>
    </AriaSlider>
  );
};

export default Slider;
