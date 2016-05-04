import {
  colors as Color
} from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';

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

  getStyles = () => {
    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      // Aplicar estilos para centrar todo el footer
    }

    return {};
  }

  render () {
    let {
      ...otherListProps
    } = this.getPropsListItem();

    const contentStyles = this.getStyles();

    return (
      <FullWidthSection
        style={styles} id='footer'
      >
        <div style={{
          marginTop: '5em'
        }}>
          <div
            style={{
              textAlign: 'left',
              width: '50%',
              float: 'left'
            }}>
            <span>Sobre nosotros</span>
            <p
              style={{
                fontWeight: 'lighter'
              }}>
                Somos una empresa joven con ansias de innovar y conectar tu empresa al mundo digital
            </p>
          </div>
          <div
            style={{
              width: '50%',
              float: 'right'
            }}>
            <List {...otherListProps}>
              {socials.map((social, index) => {
                return <ListItem
                  key={index}
                  disabled={true}>
                  <ImageIcon
                    link={social.link}
                    img={social.img}
                    imgHover={social.imgHover}
                    size={ImageIcon.SIZE.LARGE}
                    hoverable={true} />
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
