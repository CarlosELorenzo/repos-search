import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  typography: (palette) => ({
    p: {
      fontSize: 16,
      fontWeight: 400,
      color: palette.primary.main,
    },
    h1: {
      fontSize: 24,
      fontWeight: 600,
      color: palette.primary.main,
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      color: palette.primary.main,
    },
  }),
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: colors.grey[100],
          paddingTop: 4,
        },
      },
    },
  palette: {
    primary: {
      main: colors.grey[100],
    },
    secondary: {
      main: colors.lightBlue[500],
    },
  },
});
