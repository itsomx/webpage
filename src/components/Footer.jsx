import Color from 'material-ui/lib/styles/colors';
import { List, ListItem } from 'material-ui/lib/lists';
import ImageIcon from 'components/ImageIcon.jsx';
import FullWidthSection from 'components/FullWidthSection.jsx';
import ReactMixin from 'react-mixin';
import { StyleResizable } from 'material-ui/lib/mixins';

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

    if (!this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {
      style.display = 'inline-block';
    }

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
            <ListItem disabled>
              <ImageIcon icon='facebook-light' size={ImageIcon.SIZE.LARGE}/>
            </ListItem>
            <ListItem disabled>
              <ImageIcon icon='twitter-light' size={ImageIcon.SIZE.LARGE}/>
            </ListItem>
            <ListItem disabled>
              <ImageIcon icon='instagram-light' size={ImageIcon.SIZE.LARGE}/>
            </ListItem>
          </List>
        </div>
      </FullWidthSection>
    );
  }
}
