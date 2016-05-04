import {Divider} from 'material-ui';
import Section from './Section';
import BaseComponent from 'components/BaseComponent';

import {
  colors as Colors,
  getMuiTheme
} from 'material-ui/styles';

export default class MainBackground extends BaseComponent {
  static propTypes = {};

  constructor () {
    super();
    this.state = {
      theme: getMuiTheme()
    };
  }

  render () {
    return (
      <Section
        style={{
          backgroundColor: Colors.lightWhite,
          height: window.innerHeight - this.state.theme.appBar.height,
          padding: '0 20px 0 20px',
          color: Colors.fullWhite
        }}>
        <Divider
          muiTheme={this.state.theme}
          style={{
            backgroundColor: Colors.faintBlack,
            height: '1.5px'
          }} />
        <Section
          style={{
            paddingTop: (window.innerHeight - this.state.theme.appBar.height) / 3
          }}>
          <h1
            style={{
              color: this.state.theme.palette.textColor,
              fontWeight: 'normal',
              fontSize: 40
            }}>
            Tu tienes la idea, nosotros la realizamos
          </h1>
          <h2 style={{
            color: this.state.theme.palette.textColor,
            fontWeight: 'lighter'
          }}>
            Colocando tu empresa en la competencia digital
          </h2>
        </Section>
      </Section>
    );
  }
}
