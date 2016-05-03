import styles from 'styles/components/_section.scss';
import ClearFix from 'material-ui/internal/ClearFix';

export default class Section extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render () {
    const {
      ...other
    } = this.props;
    return (
      <ClearFix className={'section ' + styles['section']} {...other}>
        {this.props.children}
      </ClearFix>
    );
  }
}
