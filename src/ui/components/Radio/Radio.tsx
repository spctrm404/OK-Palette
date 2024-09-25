import { useCallback, useContext } from 'react';
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
} from 'react-aria-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import st from './_Radio.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(st);

type RadioProps = {
  radioItems?: { uid: string; value: string; text: string }[];
  value?: string;
  defaultValue?: string;
  onChange?: (newString: string) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
};

const Radio = ({
  radioItems = [],
  value = '',
  onChange = () => {},
  className,
  ...props
}: RadioProps) => {
  const { theme } = useContext(ThemeContext);

  const onChangeHandler = useCallback(
    (newString: string) => {
      onChange?.(newString);
    },
    [onChange]
  );

  return (
    <AriaRadioGroup
      value={value}
      onChange={onChangeHandler}
      className={cx('radio-group', 'radio-group__root', className)}
      data-theme={theme}
      {...props}
    >
      {radioItems.map((aRadioItem) => {
        return (
          <AriaRadio
            className={cx('radio')}
            key={aRadioItem.uid}
            value={aRadioItem.value}
            data-theme={theme}
          >
            <div className={cx('radio__button')}>
              <div className={cx('radio__button__state')} />
              <div className={cx('radio__button__shape')} />
            </div>
            <div className={cx('radio__text')}>{aRadioItem.text}</div>
          </AriaRadio>
        );
      })}
    </AriaRadioGroup>
  );
};

export default Radio;
