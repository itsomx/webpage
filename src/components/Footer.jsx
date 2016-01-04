import Color from 'material-ui/lib/styles/colors';
import { List, ListItem } from 'material-ui/lib/lists';
import MaterialIcon from 'components/MaterialIcon.jsx';
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
    super ();

    this.state = {};

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
        style={styles}
      >
        ITSO - 2016
        <div>
          <List style={style} {...otherListProps}>
            <ListItem disabled={true}>
              <ImageIcon icon='facebook-light' size={ImageIcon.size.large}/>
            </ListItem>
            <ListItem disabled={true}>
              <ImageIcon icon='twitter-light' size={ImageIcon.size.large}/>
            </ListItem>
            <ListItem disabled={true}>
              <ImageIcon icon='instagram-light' size={ImageIcon.size.large}/>
            </ListItem>
          </List>
        </div>
      </FullWidthSection>
    );
  }
}
