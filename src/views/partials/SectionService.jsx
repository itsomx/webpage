import {
  getMuiTheme
} from 'material-ui/styles';
import {
  Paper
} from 'material-ui';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import Section from 'components/Section';
import ImageIcon from 'components/ImageIcon';

import itsoProd from 'static/images/services/itsoprod-logo.png';
import itsoWeb from 'static/images/services/itsoweb-logo.png';

const services = [{
  name: 'ITSOProd',
  description: 'Sistema ágil que te ayuda a mejorar tu proceso de producción y así optimizar tus tiempos y reducir costos generando una mayor utilidad',
  image: itsoProd
}, {
  name: 'ITSOWeb',
  description: 'Mejoramos tu presencia en internet, acercandote a mas usuarios dejando una buena impresión de ti en los usuarios, ademas de conectar tus servicios con la posibilidad de utilizarlos desde cualquier lugar',
  image: itsoWeb
}];

export default class SectionService extends BaseComponent {
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
        margin: '0 1em',
        padding: '2em'
      },
      serviceImg: {
        width: '12em'
      }
    };

    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      Object.assign(styles.container, {
        flexDirection: 'column'
      });

      Object.assign(styles.serviceImg, {
        width: '70%'
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

    return (<Section className='client' {...other}>
      <Section>
        <h2
          style={{
            color: this.state.theme.palette.textColor,
            fontWeight: 'lighter'
          }}>
          Algunos de nuestros servicios
        </h2>
      </Section>
      <Section
        style={styles.container}>
        {services.map((service, index) => {
          return (<Paper key={index} style={styles.block}>
            <h3 style={{
              fontWeight: 'lighter'
            }}>
              <ImageIcon
                img={service.image}
                style={styles.serviceImg} />
            </h3>
            <p style={{
              fontSize: 18
            }}>
              {service.description}
            </p>
          </Paper>);
        })}
      </Section>
    </Section>);
  };
}
