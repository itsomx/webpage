import { fade } from 'material-ui/utils/colorManipulator';
import {
  colors as Colors,
  spacing as Spacing,
  zIndex
} from 'material-ui/styles';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#2E56A3',
    primary2Color: '#5B89E2',
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500
  }
};
