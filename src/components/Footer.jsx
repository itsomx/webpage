import Color from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import MaterialIcon from 'components/MaterialIcon.jsx';
import ImageIcon from 'components/ImageIcon.jsx';

const styles = {
  padding: '6em 2em',
  textAlign: 'center',
  color: Color.white,
  backgroundColor: Color.grey900
};

export default class Footer extends React.Component {
  render () {
    return (
      <div
        className='footer'
        style={styles}
      >
        ITSO&nbsp;-&nbsp;2016&nbsp;
        <MaterialIcon icon='copyright' size={MaterialIcon.size.small} background={MaterialIcon.background.dark}/>
        <div>
        <List style={{display: 'inline-flex', 'backgroundColor': 'transparent'}}>
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
    </div>
    );
  }
}
