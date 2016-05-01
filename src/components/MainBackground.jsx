import {Divider} from 'material-ui';
import Section from './Section';

import {
  colors as Colors,
  getMuiTheme
} from 'material-ui/styles';

export default class MainBackground extends React.Component {
  static propTypes = {};

  constructor () {
    super();

    this.state = {};
  }

  render () {
    return (
      <Section
        style={{
          backgroundColor: Colors.lightWhite,
          height: window.innerHeight - getMuiTheme().appBar.height,
          padding: '0 20px 0 20px',
          color: Colors.fullWhite
        }}>
        <Divider
          style={{
            backgroundColor: Colors.faintBlack,
            height: '1.5px'
          }} />
      </Section>
    );
  }
}
