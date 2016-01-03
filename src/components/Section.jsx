import styles from 'styles/components/_section.scss';
import {ClearFix} from 'material-ui';

export default class Section extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render () {
    return (
        <ClearFix className={'section ' + styles['section']}>
          {this.props.children}
        </ClearFix>
    );
  }
}
