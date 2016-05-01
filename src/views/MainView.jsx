import { Parallax } from 'react-parallax';
import MainBar from 'components/MainBar';
import MainBackground from 'components/MainBackground';

import { StickyContainer } from 'react-sticky';
import backgroundImage from 'static/images/main-background.jpg';

export default class MainView extends React.Component {
  render = () => {
    let {
      ...other
    } = this.props;
    return (
      <Parallax bgImage={backgroundImage} strength={400} blur={2} {...other}>
        <MainBar/>
        <MainBackground/>
      </Parallax>
    );
  }
}
