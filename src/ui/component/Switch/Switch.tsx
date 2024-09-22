import { useCallback, useContext, useId } from 'react';
import { Switch as AriaSwitch } from 'react-aria-components';
import { ThemeContext } from '../../context/ThemeContext.js';
import st from './_Switch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(st);

// Props 타입 정의
interface SwitchProps {
  materialIcon?: string;
  materialIconAlt?: string;
  isSelected?: boolean;
  onChange?: (newBoolean: boolean) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  materialIcon = '',
  materialIconAlt = '',
  isSelected = false,
  onChange = () => {},
  className = '',
  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  const id = useId();

  const onChangeHandler = useCallback(
    (newBoolean: boolean) => {
      onChange?.(newBoolean);
    },
    [onChange]
  );

  return (
    <AriaSwitch
      className={cx('switch', 'switch__root', className)}
      isSelected={isSelected}
      onChange={onChangeHandler}
      data-theme={theme}
      id={id}
      {...props}
    >
      <div className={cx('switch__track', 'switch-track')}>
        <div className={cx('switch__track__shape', 'switch-track-shape')} />
        <div className={cx('switch__thumb', 'switch-thumb')}>
          <div className={cx('switch__thumb__state', 'switch-thumb-state')} />
          <div className={cx('switch__thumb__shape', 'switch-thumb-shape')}>
            {materialIcon && materialIconAlt && (
              <>
                <div
                  className={cx(
                    'switch__icon',
                    'switch__icon--part-a',
                    'material-symbols-outlined',
                    'switch-icon-a'
                  )}
                >
                  {materialIcon}
                </div>
                <div
                  className={cx(
                    'switch__icon',
                    'switch__icon--part-b',
                    'material-symbols-outlined',
                    'switch-icon-b'
                  )}
                >
                  {materialIconAlt}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AriaSwitch>
  );
};

export default Switch;
