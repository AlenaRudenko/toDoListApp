import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#4F2CD9',
          dark: '#f1f1f1',
        },
        secondary: {
          main: '#6C47FF',
        },
        error: {
          main: '#FF9898',
        },
        warning: {
          main: '#000000',
        },
        success: {
          main: '#7ACC7A',
        },
        info: {
          main: '#6788A5',
        },
        background: {
          default: 'linear-gradient(180deg, #076585,#92bbc9,#ffffff)',
          paper: '#fff',
        },
      },
      typography: {
        fontFamily: 'Jost',
        h2: {
          fontSize: '2.2rem',
          color:'#595959',
        },
        h3: {
          fontFamily: 'Jost',
          fontSize: '2.2rem',
        },
        h1: {
          fontFamily: 'Inter',
          fontSize: '48px',
          fontWeight: 400,
        },
        p: {
          fontFamily: 'Inter',
        },
        button: {
          fontFamily: 'Jost',
        },
        caption: {
          fontFamily: 'Jost',
        },
        overline: {
          fontFamily: 'Jost',
        },
      }
})