import { Parallax } from 'react-parallax';
import MainBar from 'components/MainBar';
import SectionBlack from 'components/MainBlack';

import backgroundImage from 'static/images/main-background.jpg';

export default class MainBlack extends React.Component {
  render = () => (
    <Parallax bgImage={backgroundImage} strength={400} blur={2}>
      <MainBar/>
      <SectionBlack/>
    </Parallax>
  );
}
