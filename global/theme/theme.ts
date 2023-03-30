import { extendTheme } from "native-base";

import { colors } from './colors';

export const theme = extendTheme({
  colors: {
    primary: {
      50: colors.BRAND_PRIMARY,
      100: colors.BRAND_PRIMARY,
      200: colors.BRAND_PRIMARY,
      300: colors.BRAND_PRIMARY,
      400: colors.BRAND_PRIMARY,
      500: colors.BRAND_PRIMARY,
      600: colors.BRAND_PRIMARY,
      700: colors.BRAND_PRIMARY,
      800: colors.BRAND_PRIMARY,
      900: colors.BRAND_PRIMARY,
    },
    secondary: {
      50: colors.YELLOW_GOLDEN,
      100: colors.YELLOW_GOLDEN,
      200: colors.YELLOW_GOLDEN,
      300: colors.YELLOW_GOLDEN,
      400: colors.YELLOW_GOLDEN,
      500: colors.YELLOW_GOLDEN,
      600: colors.YELLOW_GOLDEN,
      700: colors.YELLOW_GOLDEN,
      800: colors.YELLOW_GOLDEN,
      900: colors.YELLOW_GOLDEN,
    },
    gray: {
      50: colors.GRAY_LIGHTEST,
      100: colors.GRAY_LIGHTER,
      200: colors.GRAY_LIGHT3,
      300: colors.GRAY_LIGHT2,
      400: colors.GRAY_LIGHT,
      500: colors.GRAY,
      600: colors.GRAY_DARK,
      700: colors.GRAY_DARKER,
      800: colors.GRAY_DARKER,
      900: colors.GRAY_DARKER,
    }
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md',
      },
      defaultProps: {
        colorScheme: 'secondary',
        shadow: '1',
        _text: {
          color: 'primary.500',
          fontWeight: '500',
          textTransform: 'uppercase',
        },
      },
    },
  },
});
