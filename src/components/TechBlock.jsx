import { ClearFix } from 'material-ui';
import coreStyles from 'styles/core.scss';
import MaterialIcon from 'components/MaterialIcon.jsx';
import ImageIcon from 'components/ImageIcon.jsx';

const styleBlock = {
  icon: {
    float: 'left',
    textAlign: 'left'
  },
  text: {
    textAlign: 'left',
    marginLeft: '60px'
  }
},
classes = {
  block: 'col-md-12'
};

export default class TechBlock extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.Required,
    text: React.PropTypes.string.Required,
    title: React.PropTypes.string.Required,
    style: React.PropTypes.object.Required
  };

  static defaultProps = {
      style: {}
  };

  render () {
    const {
      title,
      text,
      ...other
    } = this.props;
    // Using Bootstrap to wrap items
    return (
      <ClearFix className={classes.block} {...other}>
        <div className='col-md-4'>
          <MaterialIcon icon='devices' size={MaterialIcon.size.extraLarge} background={MaterialIcon.background.light} style={styleBlock.icon}></MaterialIcon>
          <h4 className={coreStyles['lighter']} style={styleBlock.text}>{title}</h4>
          <p style={styleBlock.text}>{text}</p>
        </div>
        <div className='col-md-offset-6'>
          <ImageIcon icon='facebook-light' size={ImageIcon.size.large} style={styleBlock.icon}/>
        </div>
      </ClearFix>
    );
  }
}
