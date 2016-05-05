import {
  colors as Color
} from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';
import _ from 'lodash';

import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import ImageIcon from 'components/ImageIcon';
import FullWidthSection from 'components/FullWidthSection';
import fbIconLight from 'static/images/icons/facebook-light.png';
import twIconLight from 'static/images/icons/twitter-light.png';
import instaIconLight from 'static/images/icons/instagram-light.png';
import fbIconColor from 'static/images/icons/facebook-color.png';
import twIconColor from 'static/images/icons/twitter-color.png';
import instaIconColor from 'static/images/icons/instagram-color.png';

const styles = {
  padding: '0em 2em 2em 2em',
  textAlign: 'center',
  color: Color.white,
  backgroundColor: Color.grey900
};

const socials = [{
  link: 'https://facebook.com/itso.mx',
  img: fbIconLight,
  imgHover: fbIconColor
}, {
  link: 'https://twitter.com/itsomx',
  img: twIconLight,
  imgHover: twIconColor
}, {
  link: 'https://instagram.com/itsomx/',
  img: instaIconLight,
  imgHover: instaIconColor
}];

export default class Footer extends BaseComponent {
  static propTypes = {};

  getPropsListItem () {
    let style = {
      display: 'inline-flex',
      backgroundColor: 'transparent'
    };

    return {
      style: style
    };
  }

  get styles () {
    let styles = {
      wrapper: {
        [StyleResizable.sizes.SMALL]: {
          marginTop: '1em'
        },
        default: {}
      },
      about: {
        [StyleResizable.sizes.SMALL]: {},
        default: {
          textAlign: 'left',
          width: '50%',
          float: 'left'
        }
      },
      social: {
        [StyleResizable.sizes.SMALL]: {},
        default: {
          width: '50%',
          float: 'right'
        }
      }
    };

    const keySize = StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL) ? StyleResizable.sizes.SMALL : 'default';

    _.each(styles, function (style, key) {
      Object.assign(styles, {
        [key]: style[keySize]
      });
    });

    return styles;
  }

  render () {
    let {
      ...otherListProps
    } = this.getPropsListItem();

    const contentStyles = this.styles;

    return (
      <FullWidthSection
        style={styles} id='footer'
      >
        <div style={contentStyles.wrapper}>
          <div
            style={contentStyles.about}>
            <h3 style={{
              fontWeight: 'normal'
            }}>Sobre nosotros</h3>
            <p
              style={{
                fontWeight: 'lighter',
                textAlign: 'justify'
              }}>
              Somos una empresa joven con ansias de innovar y conectar tu empresa al mundo digital llevando a todas partes la imagen de tu empresa, desde un dispositivo móvil hasta un sistema de administración para agilizar tu producción, administración y generar mayor utilidad para tu empresa
            </p>
          </div>
          <div
            style={contentStyles.social}>
            <List {...otherListProps}>
              {socials.map((social, index) => {
                return <ListItem
                  key={index}
                  disabled>
                  <ImageIcon
                    link={social.link}
                    img={social.img}
                    imgHover={social.imgHover}
                    size={ImageIcon.SIZE.LARGE}
                    hoverable />
                </ListItem>;
              })}
            </List>
            <p>Todos los derechos reservados | ITSO - IT Solutions</p>
          </div>
        </div>
      </FullWidthSection>
    );
  }
}
