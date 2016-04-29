import { colors as Color } from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';
import ImageIcon from 'components/ImageIcon.jsx';
import FullWidthSection from 'components/FullWidthSection.jsx';
import ReactMixin from 'react-mixin';
import StyleResizable from 'material-ui/utils/styleResizable';

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

    ReactMixin(this, StyleResizable);
    this._updateDeviceSize = this._updateDeviceSize.bind(this);
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
            <ListItem value='https://facebook.com/itso.mx' target='_blank'>
              <ImageIcon icon='facebook-light' size={ImageIcon.SIZE.LARGE} />
            </ListItem>
            <ListItem value='https://twitter.com/itsomx' target='_blank'>
              <ImageIcon icon='twitter-light' size={ImageIcon.SIZE.LARGE} />
            </ListItem>
            <ListItem value='https://instagram.com/itsomx/' target='_blank'>
              <ImageIcon icon='instagram-light' size={ImageIcon.SIZE.LARGE} />
            </ListItem>
          </List>
        </div>
      </FullWidthSection>
    );
  }
}
