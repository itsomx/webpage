import { getMuiTheme } from 'material-ui/styles';
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
    portrait: desktopImagePortrait,
    landscape: desktopImageLandscape
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

const blocks = [{
  icon: 'devices',
  title: 'Web',
  imgPortrait: images.web.portrait,
  imgLandscape: images.web.landscape,
  text: 'Tecnología web de punta para cualquier dispositivo'
}, {
  icon: 'devices_other',
  title: 'Multiples dispositivos',
  imgPortrait: images.mobile.portrait,
  imgLandscape: images.mobile.landscape,
  text: 'Tecnología movil de punta para cualquier dispositivo'
}, {
  icon: 'desktop_mac',
  title: 'Aplicaciones de escritorio',
  imgPortrait: images.desktop.portrait,
  imgLandscape: images.desktop.landscape,
  text: 'Tecnología de escritorio de punta para cualquier dispositivo'
}];

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

    const techBlockWitdh = 100 / blocks.length;

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
          <Section>
            {
              blocks.map((techBlock, index) => {
                return <TechBlock
                  key={index}
                  icon={techBlock.icon}
                  title={techBlock.title}
                  imgPortrait={techBlock.imgPortrait}
                  imgLandscape={techBlock.imgLandscape}
                  style={{
                    width: `${techBlockWitdh}%`,
                    display: 'inline-block',
                    verticalAlign: 'top'
                  }}>
                  {techBlock.text}
                </TechBlock>;
              })
            }
          </Section>
        </div>
      </Section>
    );
  }
}
