
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import lessToJs from 'less-vars-to-js';

// Read the less file in as string: using the raw-loader to override the default loader
export const vars = lessToJs(require('!!raw-loader!./css/variables.less'), { resolveVariables: true, stripPrefix: true });

require('./css/netpyne.less');
require('./css/material.less');
require('./css/traceback.less');
require('./css/flexlayout.less');
require('./css/tree.less');

export const {
  primaryColor, secondaryColor, font, fontColor,
  bgLight, bgRegular, bgDark, bgDarker, bgDarkest, bgInputs, gutter, radius
} = vars;


const rawTheme = {
  darkMode: true,
  typography: {
    useNextVariants: true,
    htmlFontSize: 12,
    fontSize: 10,
    fontFamily: font,
    button: {
      textTransform: "none",
      fontSize: "1.0rem"
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: primaryColor, 
      dark: secondaryColor
    },
    secondary: { 
      main: secondaryColor, 
      dark: primaryColor 
    }
  },
  overrides: {
    MuiInput: {
      input: {
        outline: 'none !important', 
        border: 'none !important', 
        boxShadow: 'none !important',
      },
      root:{ color: fontColor }

    },
    MuiSelect: {
      root: {
        outline: 'none !important', 
        border: 'none !important', 
        boxShadow: 'none !important'
      },
      select: { "&:focus" :{ background: "none" } },
    },
    MuiGrid: {
      root: {
        display: 'flex',
        alignItems: 'stretch',
        flex: 1
      }
    },
    MuiCard: { root: { backgroundColor: bgDarker, overflowY: 'auto', flex: 1 } },
    MuiBottomNavigation: { root: { margin: gutter, backgroundColor: "transparent" } },
    MuiPaper: { root: { color: 'inherit', backgroundColor: bgRegular } },
    MuiBottomNavigationAction: { 
      root: { color: fontColor, textTransform: 'uppercase', maxwidth: 'auto' },
      label: { fontSize: "1rem", "&.Mui-selected": { fontSize: "1rem" } },
    },
    MuiFormControl: { root: { overflow: 'visible' } },
    MuiFab:{ 
      secondary: { color: fontColor },
      primary: { color: fontColor } 
    },
    MuiButton: { 
      contained: { 
        color: fontColor,
        backgroundColor: bgInputs
      },
      containedSecondary: { color: fontColor },
      containedPrimary: { color: fontColor },
    },
    MuiMenuItem: { 
      root:{
        color: fontColor,
        paddingTop: `calc(${gutter} / 2)`, 
        fontSize: '0.9rem', 
      },
      gutters: {
        paddingLeft: `calc(${gutter} * 2)`,
        paddingRight: `calc(${gutter} * 2)`
      }
       
    },
    MuiDialogTitle: { root: { color: fontColor } },
    MuiTypography: { root: { color: fontColor } },
    MuiCollapse: { 
      container: { padding: 0 },
      wrapper: { padding: "0px!important" }
    },
    MuiIcon: { fontSizeLarge: { fontSize: '1.75rem' } },
    MuiAccordionSummary: { 
      root: { padding: '0px!important', margin: 0, minHeight: 'unset!important' },
      content: { margin: '0px!important', cursor: 'auto' },
      expandIcon: { marginRight: 0 }
    },
    MuiAccordionDetails: { root: { padding: 0, margin: 0, minHeight: 'unset!important', flexDirection: 'column' } },
    MuiAccordion: { root: { padding: 0, margin: '0px!important', minHeight: 'unset' } },
    MuiAutocomplete: { popupIndicator: { marginRight: 0 } },
    MuiCardContent: { root: { padding: 8 } }
  }
}

export default createMuiTheme(rawTheme);