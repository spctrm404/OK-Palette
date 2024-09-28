// todo: observe html class

import {
  createContext,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { LightnessTable } from '../../common/types';
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
  // const vividsRef = useRef({
  //   name: {
  //     light: 0.4,
  //     dark: 0.8,
  //   },
  //   onName: {
  //     light: 1,
  //     dark: 0.2,
  //   },
  //   nameContainer: {
  //     light: 0.9,
  //     dark: 0.3,
  //   },
  //   onNameContainer: {
  //     light: 0.1,
  //     dark: 0.9,
  //   },
  //   nameFixed: {
  //     light: 0.9,
  //     dark: 0.9,
  //   },
  //   onNameFixed: {
  //     light: 0.1,
  //     dark: 0.1,
  //   },
  //   nameFixedDim: {
  //     light: 0.8,
  //     dark: 0.8,
  //   },
  //   onNameFixedDim: {
  //     light: 0.3,
  //     dark: 0.3,
  //   },
  //   inverseName: {
  //     light: 0.8,
  //     dark: 0.4,
  //   },
  // });
  // const neutralVariantsRef = useRef({
  //   surfaceVariant: {
  //     light: 0.9,
  //     dark: 0.3,
  //   },
  //   onSurfaceVariant: {
  //     light: 0.3,
  //     dark: 0.8,
  //   },
  //   outlineVariant: {
  //     light: 0.8,
  //     dark: 0.3,
  //   },
  // });
  // const neutralsRef = useRef({
  //   surface: {
  //     light: 0.98,
  //     dark: 0.06,
  //   },
  //   onSurface: {
  //     light: 0.1,
  //     dark: 0.9,
  //   },
  //   surfaceContainerHighest: {
  //     light: 0.9,
  //     dark: 0.22,
  //   },
  //   surfaceContainerHigh: {
  //     light: 0.92,
  //     dark: 0.17,
  //   },
  //   surfaceContainer: {
  //     light: 0.94,
  //     dark: 0.12,
  //   },
  //   surfaceContainerLow: {
  //     light: 0.96,
  //     dark: 0.1,
  //   },
  //   surfaceContainerLowest: {
  //     light: 1,
  //     dark: 0.04,
  //   },
  //   inverseSurface: {
  //     light: 0.2,
  //     dark: 0.9,
  //   },
  //   inverseOnSurface: {
  //     light: 0.95,
  //     dark: 0.2,
  //   },
  //   surfaceTint: {
  //     light: 0.4,
  //     dark: 0.8,
  //   },
  //   outline: {
  //     light: 0.5,
  //     dark: 0.6,
  //   },
  //   bg: {
  //     light: 0.98,
  //     dark: 0.06,
  //   },
  //   onBg: {
  //     light: 0.1,
  //     dark: 0.9,
  //   },
  //   surfaceBright: {
  //     light: 0.98,
  //     dark: 0.24,
  //   },
  //   surfaceDim: {
  //     light: 0.87,
  //     dark: 0.06,
  //   },
  //   scrim: {
  //     light: 0,
  //     dark: 0,
  //   },
  //   shadow: {
  //     light: 0,
  //     dark: 0,
  //   },
  // });

  const vividsRef = useRef({
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
  const neutralVariantsRef = useRef({
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
  const neutralsRef = useRef({
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

  const applyStaticHueCssProperties = useCallback(
    (
      lightnessTable: LightnessTable,
      name: string,
      peakChroma: number,
      hue: number,
      targetDom: HTMLElement
    ) => {
      Object.entries(lightnessTable).forEach(
        ([roleName, lightnessOfThemes]) => {
          const lightness = lightnessOfThemes[theme];
          let chroma = chromaForLightness(
            lightness,
            THEME_PEAK_LIGHTNESS,
            peakChroma
          );
          chroma = quantize(chroma, CHROMA_STEP);
          let propertyName = replaceWordInCamelCase(roleName, 'name', name);
          propertyName = camelCaseToKebabCase(propertyName);
          propertyName = `--${propertyName}`;
          const propertyValue = `oklch(${quantize(
            lightness,
            LIGHTNESS_STEP
          )} ${chroma} ${quantize(hue, HUE_STEP)}deg)`;
          targetDom.style.setProperty(propertyName, propertyValue);
        }
      );
    },
    [theme]
  );
  const applyDynamicHueCssProperties = useCallback(
    (
      lightnessTable: LightnessTable,
      name: string,
      peakChroma: number,
      chromaMultiplier: number,
      targetDom: HTMLElement
    ) => {
      Object.entries(lightnessTable).forEach(
        ([roleName, lightnessOfThemes]) => {
          const lightness = lightnessOfThemes[theme];
          let chroma =
            chromaForLightness(lightness, THEME_PEAK_LIGHTNESS, peakChroma) *
            chromaMultiplier;
          chroma = quantize(chroma, CHROMA_STEP);
          let hue = hueForLightness(lightness, hues);
          hue = quantize(hue, HUE_STEP);
          let propertyName = replaceWordInCamelCase(roleName, 'name', name);
          propertyName = camelCaseToKebabCase(propertyName);
          propertyName = `--${propertyName}`;
          const propertyValue = `oklch(${quantize(
            lightness,
            LIGHTNESS_STEP
          )} ${chroma} ${hue}deg)`;
          targetDom.style.setProperty(propertyName, propertyValue);
        }
      );
    },
    [theme, hues]
  );

  const applyStatics = useCallback(
    (targetDom: HTMLElement) => {
      applyStaticHueCssProperties(
        vividsRef.current,
        'warning',
        THEME_UTILITY_PEAK_CHROMA,
        THEME_WARNING_HUE,
        targetDom
      );
      applyStaticHueCssProperties(
        vividsRef.current,
        'error',
        THEME_UTILITY_PEAK_CHROMA,
        THEME_ERROR_HUE,
        targetDom
      );
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
    [applyStaticHueCssProperties]
  );
  const applyDynamics = useCallback(
    (targetDom: HTMLElement) => {
      // const peakChroma =
      //   peakChromaForLightnessAndHue(PEAK_LIGHTNESS, hues) -
      //   P3_PEAK_CHROMA_OFFSET;
      const peakChroma = 0.11;
      applyDynamicHueCssProperties(
        vividsRef.current,
        'primary',
        peakChroma,
        1,
        targetDom
      );
      applyDynamicHueCssProperties(
        vividsRef.current,
        'secondary',
        peakChroma,
        THEME_SECONDARY_CHROMA_MULT,
        targetDom
      );
      applyDynamicHueCssProperties(
        neutralVariantsRef.current,
        '',
        THEME_NEUTRAL_VARIANT_PEAK_CHROMA,
        1,
        targetDom
      );
      applyDynamicHueCssProperties(
        neutralsRef.current,
        '',
        THEME_NEUTRAL_PEAK_CHROMA,
        1,
        targetDom
      );
    },
    [applyDynamicHueCssProperties]
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

    // 클래스 속성을 감시
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
    applyStatics(root);
    applyDynamics(root);
  }, [theme]);
  useLayoutEffect(() => {
    const root = document.documentElement;
    applyDynamics(root);
  }, [hues]);

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
