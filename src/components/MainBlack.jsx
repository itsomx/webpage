import {Divider} from 'material-ui';
import Section from './Section';
import ReactMixin from 'react-mixin';
import {
  StylePropable,
  StyleResizable
} from 'material-ui/lib/mixins';
import {
  Colors
} from 'material-ui/lib/styles';
import {
  // Colors,
  ThemeManager
} from 'material-ui/lib/styles';

export default class MainBlack extends React.Component {
  static propTypes = {};

  constructor () {
    super();

    this.state = {};

    ReactMixin(this, StyleResizable);
    ReactMixin(this, StylePropable);
  }

  render () {
    return (
      <Section
        style={{backgroundColor: Colors.darkBlack, height: window.innerHeight - ThemeManager.getMuiTheme().appBar.height, padding: '0 20px 0 20px', color: Colors.white}}
      >
        <Divider style={{backgroundColor: Colors.grey600, height: '1.5px'}}/>
        Podemos poner lo que queramos aqui ya que nos sirve para mucho
      </Section>
    );
  }
}
