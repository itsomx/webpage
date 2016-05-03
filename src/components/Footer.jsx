import {
  colors as Color
} from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';
import ImageIcon from 'components/ImageIcon.jsx';
import FullWidthSection from 'components/FullWidthSection.jsx';

const styles = {
  padding: '6em 2em',
  textAlign: 'center',
  color: Color.white,
  backgroundColor: Color.grey900
};

const socials = [{
  link: 'https://facebook.com/itso.mx',
  icon: 'facebook-light'
}, {
  link: 'https://twitter.com/itsomx',
  icon: 'twitter-light'
}, {
  link: 'https://instagram.com/itsomx/',
  icon: 'instagram-light'
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
        <div
          style={{
            textAlign: 'left'
          }}>
          <span>Sobre nosotros</span>
          <p
            style={{
              fontWeight: 'lighter'
            }}>
              Somos una empresa joven con ansias de innovar y
          </p>
        </div>
        <div
          style={{
            textAlign: 'right'
          }}>
          <List style={style} {...otherListProps}>
            {socials.map((social, index) => {
              return <ListItem key={index} href={social.link} target='_blank'>
                <ImageIcon icon={social.icon} size={ImageIcon.SIZE.LARGE} />
              </ListItem>;
            })}
          </List>
        </div>
        Todos los derechos reservados | ITSO - IT Solutions
      </FullWidthSection>
    );
  }
}
