import Color from 'material-ui/lib/styles/colors';

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
        Home
      </div>
    );
  }
}
