import AppBar from 'material-ui/lib/app-bar';
import styles from 'styles/core.scss'

export default class MainBar extends React.Component {
  render () {
    return (
      <AppBar
        className={styles['main-bar']}
        iconElementLeft={<img src='logo.png' className={styles['logo']}/>}
      />
    );
  }
}
