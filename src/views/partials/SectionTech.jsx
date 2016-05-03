import { getMuiTheme } from 'material-ui/styles';
import coreStyles from 'styles/core.scss';
import BaseComponent from 'components/BaseComponent';
import Section from 'components/Section';
import TechBlock from 'components/TechBlock';

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

export default class SectionTech extends BaseComponent {
  constructor () {
    super();
    this.state = {
      theme: getMuiTheme()
    };
  }

  static propTypes = {};

  render () {
    let {
      ...other
    } = this.props;

    return (
      <Section className='tech' {...other}>
        <div className='container' style={{textAlign: 'center'}}>
          <div>
            <p
              style={{
                color: this.state.theme.palette.textColor,
                fontWeight: 'normal',
                fontSize: 20
              }}>
              Innovando para que tu enfoque sean tus clientes
            </p>
          </div>
          <TechBlock icon='devices' title='Web' imgPortrait={images.web.portrait} imgLandscape={images.web.landscape}>
            Tecnología de punta para cualquier dispositivo.
          </TechBlock>
          <TechBlock icon='devices_other' title='Multiples dispositivos' align='right' imgPortrait={images.mobile.portrait} imgLandscape={images.mobile.landscape}>
            Tecnología de punta para cualquier dispositivo.
          </TechBlock>
          <TechBlock icon='desktop_mac' title='Aplicaciones de escritorio' imgPortrait={images.desktop.portrait} imgLandscape={images.desktop.landscape}>
            Tecnología de punta para cualquier dispositivo.
          </TechBlock>
        </div>
      </Section>
    );
  }
}
