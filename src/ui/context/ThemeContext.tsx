import {
  createContext,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  PEAK_LIGHTNESS,
  CHROMA_STEP,
  LIGHTNESS_STEP,
  HUE_STEP,
  P3_PEAK_CHROMA_OFFSET,
  SECONDARY_CHROMA_MULT,
  UTILITY_PEAK_CHROMA,
  WARNING_HUE,
  ERROR_HUE,
  NEUTRAL_VARIANT_PEAK_CHROMA,
  NEUTRAL_PEAK_CHROMA,
} from '../../common/constants';
import { quantize } from '../../common/numberUtils';
import {
  replaceWordInCamelCase,
  camelCaseToKebabCase,
} from '../../common/stringUtils';
import {
  chromaForLightness,
  hueForLightness,
  peakChromaForLightnessAndHue,
} from '../../common/colour';

// ThemeContext의 타입 정의
interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
  hues: { from: number; to: number };
  setHues: React.Dispatch<React.SetStateAction<{ from: number; to: number }>>;
  syncHues: () => void;
}

// 기본값 설정
const defaultThemeContext: ThemeContextType = {
  theme: 'light', // 기본값은 'light' 테마
  setTheme: () => {},
  toggleTheme: () => {},
  hues: { from: 0, to: 0 },
  setHues: () => {},
  syncHues: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const vividsRef = useRef({
    name: {
      light: 0.4,
      dark: 0.8,
    },
    onName: {
      light: 1,
      dark: 0.2,
    },
    nameContainer: {
      light: 0.9,
      dark: 0.3,
    },
    onNameContainer: {
      light: 0.1,
      dark: 0.9,
    },
    nameFixed: {
      light: 0.9,
      dark: 0.9,
    },
    onNameFixed: {
      light: 0.1,
      dark: 0.1,
    },
    nameFixedDim: {
      light: 0.8,
      dark: 0.8,
    },
    onNameFixedDim: {
      light: 0.3,
      dark: 0.3,
    },
    inverseName: {
      light: 0.8,
      dark: 0.4,
    },
  });
  const neutralVariantsRef = useRef({
    surfaceVariant: {
      light: 0.9,
      dark: 0.3,
    },
    onSurfaceVariant: {
      light: 0.3,
      dark: 0.8,
    },
    outlineVariant: {
      light: 0.8,
      dark: 0.3,
    },
  });
  const neutralsRef = useRef({
    surface: {
      light: 0.98,
      dark: 0.06,
    },
    onSurface: {
      light: 0.1,
      dark: 0.9,
    },
    surfaceContainerHighest: {
      light: 0.9,
      dark: 0.22,
    },
    surfaceContainerHigh: {
      light: 0.92,
      dark: 0.17,
    },
    surfaceContainer: {
      light: 0.94,
      dark: 0.12,
    },
    surfaceContainerLow: {
      light: 0.96,
      dark: 0.1,
    },
    surfaceContainerLowest: {
      light: 1,
      dark: 0.04,
    },
    inverseSurface: {
      light: 0.2,
      dark: 0.9,
    },
    inverseOnSurface: {
      light: 0.95,
      dark: 0.2,
    },
    surfaceTint: {
      light: 0.4,
      dark: 0.8,
    },
    outline: {
      light: 0.5,
      dark: 0.6,
    },
    bg: {
      light: 0.98,
      dark: 0.06,
    },
    onBg: {
      light: 0.1,
      dark: 0.9,
    },
    surfaceBright: {
      light: 0.98,
      dark: 0.24,
    },
    surfaceDim: {
      light: 0.87,
      dark: 0.06,
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

  const [theme, setTheme] = useState('light');
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

  const applyStaticHueCssProperties = useCallback(
    (
      lightnessTable: { [key: string]: { light: number; dark: number } },
      name: string,
      peakChroma: number,
      hue: number,
      targetDom: HTMLElement
    ) => {
      Object.entries(lightnessTable).forEach(
        ([roleName, lightnessOfThemes]) => {
          Object.entries(lightnessOfThemes).forEach(
            ([themeName, lightness]) => {
              let chroma = chromaForLightness(
                lightness,
                PEAK_LIGHTNESS,
                peakChroma
              );
              chroma = quantize(chroma, CHROMA_STEP);

              let propertyName = replaceWordInCamelCase(roleName, 'name', name);
              propertyName = camelCaseToKebabCase(propertyName);
              propertyName = `--${propertyName}-${themeName}`;
              const propertyValue = `oklch(${quantize(
                lightness,
                LIGHTNESS_STEP
              )} ${chroma} ${quantize(hue, HUE_STEP)}deg)`;
              targetDom.style.setProperty(propertyName, propertyValue);
            }
          );
        }
      );
    },
    []
  );
  const applyDynamicHueCssProperties = useCallback(
    (
      lightnessTable: { [key: string]: { light: number; dark: number } },
      name: string,
      peakChroma: number,
      chromaMultiplier: number,
      targetDom: HTMLElement
    ) => {
      Object.entries(lightnessTable).forEach(
        ([roleName, lightnessOfThemes]) => {
          Object.entries(lightnessOfThemes).forEach(
            ([themeName, lightness]) => {
              let chroma =
                chromaForLightness(lightness, PEAK_LIGHTNESS, peakChroma) *
                chromaMultiplier;
              chroma = quantize(chroma, CHROMA_STEP);

              let hue = hueForLightness(lightness, hues);
              hue = quantize(hue, HUE_STEP);

              let propertyName = replaceWordInCamelCase(roleName, 'name', name);
              propertyName = camelCaseToKebabCase(propertyName);
              propertyName = `--${propertyName}-${themeName}`;
              const propertyValue = `oklch(${quantize(
                lightness,
                LIGHTNESS_STEP
              )} ${chroma} ${hue}deg)`;
              targetDom.style.setProperty(propertyName, propertyValue);
            }
          );
        }
      );
    },
    [hues]
  );

  useLayoutEffect(() => {
    const initTheme = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
    setTheme(initTheme);
  }, []);
  useLayoutEffect(() => {
    const body = document.body;
    body.dataset.theme = theme;
  }, [theme]);
  useLayoutEffect(() => {
    const root = document.documentElement;

    // const peakChroma =
    //   peakChromaForLightnessAndHue(PEAK_LIGHTNESS, hues) -
    //   P3_PEAK_CHROMA_OFFSET;
    const peakChroma = 0.11;

    applyDynamicHueCssProperties(
      vividsRef.current,
      'primary',
      peakChroma,
      1,
      root
    );
    applyDynamicHueCssProperties(
      vividsRef.current,
      'secondary',
      peakChroma,
      SECONDARY_CHROMA_MULT,
      root
    );
    applyStaticHueCssProperties(
      vividsRef.current,
      'warning',
      UTILITY_PEAK_CHROMA,
      WARNING_HUE,
      root
    );
    applyStaticHueCssProperties(
      vividsRef.current,
      'error',
      UTILITY_PEAK_CHROMA,
      ERROR_HUE,
      root
    );
    applyDynamicHueCssProperties(
      neutralVariantsRef.current,
      '',
      NEUTRAL_VARIANT_PEAK_CHROMA,
      1,
      root
    );
    applyDynamicHueCssProperties(
      neutralsRef.current,
      '',
      NEUTRAL_PEAK_CHROMA,
      1,
      root
    );

    root.style.setProperty(
      '--shadow-0',
      '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)'
    );
    root.style.setProperty(
      '--shadow-1-light',
      '0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30), 0rem .0625rem .1875rem .0625rem rgba(0, 0, 0, 0.15)'
    );
    root.style.setProperty(
      '--shadow-2-light',
      '0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30), 0rem .125rem .375rem .125rem rgba(0, 0, 0, 0.15)'
    );
    root.style.setProperty(
      '--shadow-3-light',
      '0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30), 0rem .0625rem .1875rem .0625rem rgba(0, 0, 0, 0.15)'
    );
    root.style.setProperty(
      '--shadow-4-light',
      '0rem .125rem .1875rem 0rem rgba(0, 0, 0, 0.30), 0rem .375rem .625rem .25rem rgba(0, 0, 0, 0.15)'
    );
    root.style.setProperty(
      '--shadow-5-light',
      '0rem .25rem .25rem 0rem rgba(0, 0, 0, 0.30), 0rem .5rem .75rem .375rem rgba(0, 0, 0, 0.15)'
    );
    root.style.setProperty(
      '--shadow-1-dark',
      '0rem .0625rem .1875rem .0625rem rgba(0, 0, 0, 0.15), 0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30)'
    );
    root.style.setProperty(
      '--shadow-2-dark',
      '0rem .125rem .375rem .125rem rgba(0, 0, 0, 0.15), 0rem .0625rem .125rem 0rem rgba(0, 0, 0, 0.30)'
    );
    root.style.setProperty(
      '--shadow-3-dark',
      '0rem .25rem .5rem .1875rem rgba(0, 0, 0, 0.15), 0rem .0625rem .1875rem 0rem rgba(0, 0, 0, 0.30)'
    );
    root.style.setProperty(
      '--shadow-4-dark',
      '0rem .375rem .625rem .25rem rgba(0, 0, 0, 0.15), 0rem .125rem .1875rem 0rem rgba(0, 0, 0, 0.30)'
    );
    root.style.setProperty(
      '--shadow-5-dark',
      '0rem .5rem .75rem .375rem rgba(0, 0, 0, 0.15), 0rem .25rem .25rem 0rem rgba(0, 0, 0, 0.30)'
    );
  }, [hues, applyStaticHueCssProperties, applyDynamicHueCssProperties]);

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

export default ThemeProvider;
