import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import styles from 'styles/core.scss';
import MainTabs from 'components/MainTabs';

export default class MainBar extends React.Component {
  render () {
    return (
      <AppBar
        className={styles['main-bar']}
        iconElementLeft={<Link to='/'><img src='logo.png' className={styles['logo']}/></Link>}
        iconElementRight={<MainTabs/>}
      />
    );
  }
}
