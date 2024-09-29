import {
  createContext,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  THEME_PEAK_LIGHTNESS,
  CHROMA_STEP,
  LIGHTNESS_STEP,
  HUE_STEP,
  // THEME_PEAK_CHROMA_HEADROOM,
  THEME_SECONDARY_CHROMA_MULT,
  THEME_UTILITY_PEAK_CHROMA,
  THEME_WARNING_HUE,
  THEME_ERROR_HUE,
  THEME_NEUTRAL_VARIANT_PEAK_CHROMA,
  THEME_NEUTRAL_PEAK_CHROMA,
} from '../../common/constants';
import {
  chromaForLightness,
  hueForLightness,
  // peakChromaForLightnessAndHue,
} from '../../common/colour';
import { quantize } from '../../common/numberUtils';
import {
  replaceWordInCamelCase,
  camelCaseToKebabCase,
} from '../../common/stringUtils';

type LightnessConfig = {
  [key: string]: { light: number; dark: number };
};

type colorConfig = {
  [key: string]: {
    reference: React.MutableRefObject<LightnessConfig>;
    replaceName: boolean;
    isDynamic: boolean;
    peakChroma: number;
    peakChromaMult: number;
    staticHue: number;
    hueShift: number;
  };
};

type ThemeContextType = {
  theme: 'light' | 'dark';
  hues: { from: number; to: number };
  setTheme?: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  toggleTheme?: () => void;
  setHues?: React.Dispatch<
    React.SetStateAction<{
      from: number;
      to: number;
    }>
  >;
  syncHues?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  hues: { from: 0, to: 0 },
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const vividsConfigRef = useRef<LightnessConfig>({
    name: {
      light: 0.4,
      dark: 0.82, // apca -66
    },
    onName: {
      light: 1,
      dark: 0.29, // apca 66
    },
    nameContainer: {
      light: 0.9,
      dark: 0.35, // apca 0 - 5step
    },
    onNameContainer: {
      light: 0.1,
      dark: 0.92, // apca -82
    },
    nameFixed: {
      light: 0.9,
      dark: 0.92, // apca -86
    },
    onNameFixed: {
      light: 0.1,
      dark: 0.26, // apca 86
    },
    nameFixedDim: {
      light: 0.8,
      dark: 0.82, // apca -66
    },
    onNameFixedDim: {
      light: 0.3,
      dark: 0.35, // apca 62
    },
    inverseName: {
      light: 0.8,
      dark: 0.43, // apca -16
    },
  });
  const neutralsConfigRef = useRef<LightnessConfig>({
    surface: {
      light: 0.98,
      dark: 0.23, // +17
    },
    onSurface: {
      light: 0.1,
      dark: 0.91, // apca -87
    },
    surfaceContainerHighest: {
      light: 0.9,
      dark: 0.39, // +17
    },
    surfaceContainerHigh: {
      light: 0.92,
      dark: 0.34, // +17
    },
    surfaceContainer: {
      light: 0.94,
      dark: 0.29, // +17
    },
    surfaceContainerLow: {
      light: 0.96,
      dark: 0.27, // +17
    },
    surfaceContainerLowest: {
      light: 1,
      dark: 0.21, // +17
    },
    inverseSurface: {
      light: 0.2,
      dark: 0.92, // apca -86
    },
    inverseOnSurface: {
      light: 0.95,
      dark: 0.29, // apca 85
    },
    surfaceTint: {
      light: 0.4,
      dark: 0.82, // apca -67
    },
    outline: {
      light: 0.5,
      dark: 0.63, // apca -35
    },
    bg: {
      light: 0.98,
      dark: 0.23, // +17
    },
    onBg: {
      light: 0.1,
      dark: 0.91, // apca -87
    },
    surfaceBright: {
      light: 0.98,
      dark: 0.41, // +17
    },
    surfaceDim: {
      light: 0.87,
      dark: 0.21, // +17
    },
    scrim: {
      light: 0,
      dark: 0,
    },
    shadow: {
      light: 0,
      dark: 0,
    },
  });
  const neutralVariantsConfigRef = useRef<LightnessConfig>({
    surfaceVariant: {
      light: 0.9,
      dark: 0.35, // apca 0 - 5step
    },
    onSurfaceVariant: {
      light: 0.3,
      dark: 0.82, // apca -63
    },
    outlineVariant: {
      light: 0.8,
      dark: 0.35, // apca -0 - 5step
    },
  });

  const colorConfigRef = useRef<colorConfig>({
    primary: {
      reference: vividsConfigRef,
      replaceName: true,
      isDynamic: true,
      peakChroma: 0.11,
      peakChromaMult: 1,
      staticHue: 0,
      hueShift: 0,
    },
    secondary: {
      reference: vividsConfigRef,
      replaceName: true,
      isDynamic: true,
      peakChroma: 0.11,
      peakChromaMult: THEME_SECONDARY_CHROMA_MULT,
      staticHue: 0,
      hueShift: 0,
    },
    tertiary: {
      reference: vividsConfigRef,
      replaceName: true,
      isDynamic: true,
      peakChroma: 0.11,
      peakChromaMult: 1,
      staticHue: 0,
      hueShift: 120,
    },
    neutral: {
      reference: neutralsConfigRef,
      replaceName: false,
      isDynamic: true,
      peakChroma: THEME_NEUTRAL_PEAK_CHROMA,
      peakChromaMult: 1,
      staticHue: 0,
      hueShift: 0,
    },
    neutralVariant: {
      reference: neutralVariantsConfigRef,
      replaceName: false,
      isDynamic: true,
      peakChroma: THEME_NEUTRAL_VARIANT_PEAK_CHROMA,
      peakChromaMult: 1,
      staticHue: 0,
      hueShift: 0,
    },
    error: {
      reference: vividsConfigRef,
      replaceName: true,
      isDynamic: false,
      peakChroma: 0.11,
      peakChromaMult: 1,
      staticHue: 65,
      hueShift: 0,
    },
    warning: {
      reference: vividsConfigRef,
      replaceName: true,
      isDynamic: false,
      peakChroma: 0.11,
      peakChromaMult: 1,
      staticHue: 75,
      hueShift: 0,
    },
  });

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [hues, setHues] = useState({ from: 0, to: 0 });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  }, []);

  const syncHues = useCallback(() => {
    setHues((prevHues) => {
      return { ...prevHues, ['to']: prevHues.from };
    });
  }, []);

  const applyCssCustomProperties = useCallback(
    (targetDom: HTMLElement) => {
      for (const [colorGroupName, colorGroupConfig] of Object.entries(
        colorConfigRef.current
      )) {
        const reference = colorGroupConfig.reference;
        const peakChromaMult = colorGroupConfig.peakChromaMult;
        const replaceName = colorGroupConfig.replaceName;
        const isDynamic = colorGroupConfig.isDynamic;
        const peakChroma = colorGroupConfig.peakChroma;
        const staticHue = colorGroupConfig.staticHue;
        const hueShift = colorGroupConfig.hueShift;
        Object.entries(reference.current).forEach(
          ([roleName, lightnessConfig]) => {
            let lightness = lightnessConfig[theme];

            let chroma =
              chromaForLightness(lightness, THEME_PEAK_LIGHTNESS, peakChroma) *
              peakChromaMult;
            chroma = quantize(chroma, CHROMA_STEP);

            let hue =
              (isDynamic ? hueForLightness(lightness, hues) : staticHue) +
              hueShift;
            hue = quantize(hue, HUE_STEP);

            let propertyName = replaceName
              ? replaceWordInCamelCase(roleName, 'name', colorGroupName)
              : roleName;
            propertyName = camelCaseToKebabCase(propertyName);
            propertyName = `--${propertyName}`;

            lightness = quantize(lightness, LIGHTNESS_STEP);

            targetDom.style.setProperty(
              propertyName,
              `oklch(${lightness} ${chroma} ${hue}deg)`
            );
          }
        );
      }
      targetDom.style.setProperty(
        '--shadow-0',
        '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)'
      );
      if (theme === 'light') {
        targetDom.style.setProperty(
          '--shadow-1',
          '0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30), 0rem .0625rem .1875rem .0625rem rgba(0, 0, 0, 0.15)'
        );
        targetDom.style.setProperty(
          '--shadow-2',
          '0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30), 0rem .125rem .375rem .125rem rgba(0, 0, 0, 0.15)'
        );
        targetDom.style.setProperty(
          '--shadow-3',
          '0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30), 0rem .0625rem .1875rem .0625rem rgba(0, 0, 0, 0.15)'
        );
        targetDom.style.setProperty(
          '--shadow-4',
          '0rem .125rem .1875rem 0rem rgba(0, 0, 0, 0.30), 0rem .375rem .625rem .25rem rgba(0, 0, 0, 0.15)'
        );
        targetDom.style.setProperty(
          '--shadow-5',
          '0rem .25rem .25rem 0rem rgba(0, 0, 0, 0.30), 0rem .5rem .75rem .375rem rgba(0, 0, 0, 0.15)'
        );
      } else {
        targetDom.style.setProperty(
          '--shadow-1',
          '0rem .0625rem .1875rem .0625rem rgba(0, 0, 0, 0.15), 0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30)'
        );
        targetDom.style.setProperty(
          '--shadow-2',
          '0rem .125rem .375rem .125rem rgba(0, 0, 0, 0.15), 0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30)'
        );
        targetDom.style.setProperty(
          '--shadow-3',
          '0rem .25rem .5rem .1875rem rgba(0, 0, 0, 0.15), 0rem .0625rem .1875rem 0rem rgba(0, 0, 0, 0.30)'
        );
        targetDom.style.setProperty(
          '--shadow-4',
          '0rem .375rem .625rem .25rem rgba(0, 0, 0, 0.15), 0rem .125rem .1875rem 0rem rgba(0, 0, 0, 0.30)'
        );
        targetDom.style.setProperty(
          '--shadow-5',
          '0rem .5rem .75rem .375rem rgba(0, 0, 0, 0.15), 0rem .25rem .25rem 0rem rgba(0, 0, 0, 0.30)'
        );
      }
    },
    [theme, hues]
  );

  useLayoutEffect(() => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('figma-light')) {
      setTheme('light');
    } else if (htmlElement.classList.contains('figma-dark')) {
      setTheme('dark');
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          if (htmlElement.classList.contains('figma-light')) {
            setTheme('light');
          } else if (htmlElement.classList.contains('figma-dark')) {
            setTheme('dark');
          }
        }
      });
    });
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    applyCssCustomProperties(root);
  }, [theme, hues]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        hues,
        setHues,
        syncHues,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
