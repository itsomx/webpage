import coreStyles from 'styles/core.scss';
import Section from 'components/Section.jsx';
import TechBlock from 'components/TechBlock.jsx';

// Images
import webImageLandscape from 'static/images/tech/web/landscape.png';
import webImagePortrait from 'static/images/tech/web/portrait.png';
import mobileImageLandscape from 'static/images/tech/mobile/landscape.png';
import mobileImagePortrait from 'static/images/tech/mobile/portrait.png';
import desktopImageLandscape from 'static/images/tech/desktop/landscape.png';
import desktopImagePortrait from 'static/images/tech/desktop/portrait.png';

const images = {
  web: {
    portrait: webImagePortrait,
    landscape: webImageLandscape
  },
  mobile: {
    portrait: mobileImagePortrait,
    landscape: mobileImageLandscape
  },
  desktop: {
    portrait: desktopImagePortrait,
    landscape: desktopImageLandscape
  }
};

export default class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
      <Section className='tech'>
        <div className='container'>
          <div>
            <h1 className={coreStyles['lighter']}>Siempre lo mejor</h1>
            <p>Tu tienes la idea, nosotros la realizamos</p>
          </div>
          <TechBlock icon='devices' title='Web' imgPortrait={images.web.portrait} imgLandscape={images.web.landscape}>
            Tecnología de punta para cualquier dispositivo.
          </TechBlock>
          <TechBlock icon='devices_other' title='Multiples dispositivos' align='right' imgPortrait={images.mobile.portrait} imgLandscape={images.mobile.landscape}>
            Tecnología de punta para cualquier dispositivo.
          </TechBlock>
          <TechBlock icon='desktop_mac' title='Aplicaciones de escritorio' imgPortrait={images.mobile.portrait} imgLandscape={images.mobile.landscape}>
            Tecnología de punta para cualquier dispositivo.
          </TechBlock>
        </div>
      </Section>
    );
  }
}
