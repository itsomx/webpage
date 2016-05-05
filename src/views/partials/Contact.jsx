import {
  getMuiTheme
} from 'material-ui/styles';
import {
  Paper
} from 'material-ui';
import Formsy from 'formsy-react'
import {
  FormsyText
} from 'formsy-material-ui';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import Section from 'components/Section';

export default class Contact extends BaseComponent {
  constructor () {
    super();

    this.state = {
      theme: getMuiTheme()
    };
  }

  get carouselProps () {
    return {
      dragging: true,
      slidesToShow: 1,
      slidesToScroll: 'auto'
    };
  }

  get styles () {
    let styles = {
      container: {
        margin: '0 auto',
        padding: '1em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      block: {
        width: '50%',
        margin: '0 1em'
      }
    };

    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      Object.assign(styles.container, {
        flexDirection: 'column'
      });

      Object.assign(styles.block, {
        width: '100%',
        margin: '1em 0'
      });
    }

    return styles;
  }

  render () {
    const {
      ...other
    } = this.props;

    const styles = this.styles;

    return (<Section className='contact' {...other}>
      <Section style={{
        textAlign: 'left'
      }}>
        <h2
          style={{
            color: this.state.theme.palette.textColor,
            fontWeight: 'lighter'
          }}>
          Contacto
        </h2>
      </Section>
      <Section
        style={styles.container}>
        Formulario de contacto
      </Section>
    </Section>);
  };
}
