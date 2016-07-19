import {Divider} from 'material-ui';
import Section from './Section';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import ImageIcon from 'components/ImageIcon';
import logoImg from 'static/logo.png';

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

  get styles () {
    let styles = {
      logo: {
        width: 512
      },
      sectionLogo: {
        paddingTop: '15em'
      }
    };

    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      Object.assign(styles, {
        logo: {
          width: 256
        },
        sectionLogo: {
          paddingTop: '5em'
        }
      });
    }

    return styles;
  }

  get headers () {
    let headers;

    let style = {
      color: this.state.theme.palette.textColor,
      fontWeight: 'lighter'
    };

    const messages = {
      main: 'Tu tienes la idea, nosotros la realizamos',
      secondary: 'Colocando tu empresa en la competencia digital'
    };

    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      headers = (<Section>
        <h2
          style={Object.assign({}, style, {
            fontWeight: 'normal'
          })}>
          {messages.main}
        </h2>
        <h3 style={style}>
          {messages.secondary}
        </h3>
      </Section>);
    } else {
      headers = (<Section>
        <h1
          style={Object.assign({}, style, {
            fontWeight: 'normal'
          })}>
          {messages.main}
        </h1>
        <h2 style={style}>
          {messages.secondary}
        </h2>
      </Section>);
    }

    return headers;
  }

  render () {
    const styles = this.styles;
    const headers = this.headers;

    return (
      <Section
        style={{
          backgroundColor: Colors.lightWhite,
          height: window.innerHeight - this.state.theme.appBar.height,
          padding: '0 20px',
          color: Colors.fullWhite
        }}>
        <Divider
          muiTheme={this.state.theme}
          style={{
            backgroundColor: Colors.faintBlack,
            height: '1.5px'
          }} />
        <Section
          style={styles.sectionLogo}>
          <ImageIcon
            img={logoImg}
            style={styles.logo} />
          {headers}
        </Section>
      </Section>
    );
  }
}
