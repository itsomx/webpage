import {
  getMuiTheme
} from 'material-ui/styles';
import Carousel from 'react-slick';
import BaseComponent from 'components/BaseComponent';
// import StyleResizable from 'utils/styleResizable';
import Section from 'components/Section';

import electronImg from 'static/images/tech/desktop/electron.png';
import githubImg from 'static/images/tech/desktop/github.png';
import gitlabImg from 'static/images/tech/desktop/gitlab.png';
import androidImg from 'static/images/tech/mobile/android.png';
import phonegapImg from 'static/images/tech/mobile/phonegap.png';
import angularImg from 'static/images/tech/web/angular.png';

const images = [
  electronImg,
  githubImg,
  gitlabImg,
  androidImg,
  phonegapImg,
  angularImg
];

export default class SectionService extends BaseComponent {
  constructor () {
    super();

    this.state = {
      theme: getMuiTheme()
    };
  }

  get carouselProps () {
    return {
      autoplay: true,
      // centerMode: true,
      dots: true,
      draggable: true,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true
    };
  }

  render () {
    const {
      ...other
    } = this.props;
    console.info(...this.carouselProps);

    return (<Section className='client' {...other}>
      <Section>
        <h2
          style={{
            color: this.state.theme.palette.textColor,
            fontWeight: 'lighter'
          }}>
          Algunos de nuestros servicios
        </h2>
      </Section>
      <Section>
        {/* <Carousel {...this.carouselProps}>
          {images.map((image, index) => {
            return (<div key={index}><img src={image} /></div>);
          })}
        </Carousel>*/}
      </Section>
    </Section>);
  };
}
