import { colors as Color } from 'material-ui/styles';
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

export default class Footer extends React.Component {
  static propTypes = {};

  constructor () {
    super();
  }

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
        ITSO - 2016
        <div>
          <List style={style} {...otherListProps}>
            <ListItem href='https://facebook.com/itso.mx' target='_blank'>
              <ImageIcon icon='facebook-light' size={ImageIcon.SIZE.LARGE} />
            </ListItem>
            <ListItem href='https://twitter.com/itsomx' target='_blank'>
              <ImageIcon icon='twitter-light' size={ImageIcon.SIZE.LARGE} />
            </ListItem>
            <ListItem href='https://instagram.com/itsomx/' target='_blank'>
              <ImageIcon icon='instagram-light' size={ImageIcon.SIZE.LARGE} />
            </ListItem>
          </List>
        </div>
      </FullWidthSection>
    );
  }
}
