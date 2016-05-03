import {
  colors as Color
} from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';
import ImageIcon from 'components/ImageIcon.jsx';
import FullWidthSection from 'components/FullWidthSection.jsx';
import fbIconLight from 'static/images/icons/facebook-light.png';
import twIconLight from 'static/images/icons/twitter-light.png';
import instaIconLight from 'static/images/icons/instagram-light.png';

const styles = {
  padding: '6em 2em',
  textAlign: 'center',
  color: Color.white,
  backgroundColor: Color.grey900
};

const socials = [{
  link: 'https://facebook.com/itso.mx',
  img: fbIconLight
}, {
  link: 'https://twitter.com/itsomx',
  img: twIconLight
}, {
  link: 'https://instagram.com/itsomx/',
  img: instaIconLight
}];

export default class Footer extends React.Component {
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

  render () {
    let {
      style,
      ...otherListProps
    } = this.getPropsListItem();

    return (
      <FullWidthSection
        style={styles} id='footer'
      >
        <div>
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
                Somos una empresa joven con ansias de innovar e integrar su empresa al mundo digital
            </p>
          </div>
          <div
            style={{
              width: '50%',
              float: 'right'
            }}>
            <List style={style} {...otherListProps}>
              {socials.map((social, index) => {
                return <ListItem
                  key={index}
                  disabled={true}>
                    <ImageIcon link={social.link} img={social.img} size={ImageIcon.SIZE.LARGE} />
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
