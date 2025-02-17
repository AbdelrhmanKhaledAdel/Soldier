export const Theme = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#8fae4d',
            },
            secondary: {
              main: '#fd723b',
            },
            text: {
              primary: '#2f2f2f',
              secondary: '#6b6b6b',
            },
            background: {
              main: '#2a84ff',
              body: '#ffffff',
              section: '#ececec',
              backMain: '#5fa3ff',
            },
            border: '#b8b8b8',
          }
        : {
            primary: {
              main: '#8fae4d',
            },
            secondary: {
              main: '#fd723b',
            },
            text: {
              primary: '#ffffff',
              secondary: '#6b6b6b',
            },
            background: {
              main: '#232625',
              body: '#171918',
              section: '#333534d4',
              backMain: '#ffffff26',
            },
            border: '#484848',
          }),
    },
  });