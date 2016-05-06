import Section from 'components/Section';
import MainBar from 'components/MainBar';
import MainBackground from 'components/MainBackground';

import backgroundImage from 'static/images/main-background.jpg';

export default class MainView extends React.Component {

  static propTypes = {
    style: React.PropTypes.object
  }

  static defaultProps = {
    style: {}
  }

  render = () => {
    let {
      style,
      ...other
    } = this.props;

    style = Object.assign({}, {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }, style);

    return (
      <Section style={style} className='here' {...other}>
        <MainBar />
        <MainBackground />
      </Section>
    );
  }
}
