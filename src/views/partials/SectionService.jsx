import {
  getMuiTheme
} from 'material-ui/styles';
import {
  Card,
  CardText
} from 'material-ui';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import Section from 'components/Section';

const services = [{
  name: 'ITSOProd',
  description: 'Sistema ágil para el buen manejo de la producción de tus productos, permitiendote mejorar tu proceso de producción y así mejorar tus tiempos y reducir costos',
  image: ''
}, {
  name: 'ITSOWeb',
  description: 'Mejoramos tu presencia en internet, acercandote a mas usuarios dejando una buena impresión de ti en los usuarios, ademas de conectar tus servicios con la posibilidad de utilizarlos desde cualquier lugar',
  image: ''
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
          return (<Card key={index} style={styles.block}>
            <h3 style={{
              fontWeight: 'lighter'
            }}>
              {service.name}
            </h3>
            <CardText>
              {service.description}
            </CardText>
          </Card>);
        })}
          {/* {services.map((service, index) => {
            return (<div key={index} style={styles.block}>
              <Section style={{}}>
                <h3 style={{
                  fontWeight: 'lighter'
                }}>{service.name}</h3>
                <p style={{}}>{service.description}</p>
              </Section>
            </div>);
          })}*/}
      </Section>
    </Section>);
  };
}
