import {
  getMuiTheme,
  transitions
} from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';
import BaseComponent from 'components/BaseComponent';
import Section from 'components/Section';
import TechBlock from 'components/TechBlock';
import ImageIcon from 'components/ImageIcon';

// Images
import electronImg from 'static/images/tech/desktop/electron.png';
import githubImg from 'static/images/tech/desktop/github.png';
import gitlabImg from 'static/images/tech/desktop/gitlab.png';
import androidImg from 'static/images/tech/mobile/android.png';
import phonegapImg from 'static/images/tech/mobile/phonegap.png';
import angularImg from 'static/images/tech/web/angular.png';
import bowerImg from 'static/images/tech/web/bower.png';
import html5Img from 'static/images/tech/web/html5.png';
import nodejsImg from 'static/images/tech/web/nodejs.png';
import npmjsImg from 'static/images/tech/web/npmjs.png';
import reactImg from 'static/images/tech/web/react.png';
import webpackImg from 'static/images/tech/web/webpack.png';

const images = [
  electronImg,
  githubImg,
  gitlabImg,
  androidImg,
  phonegapImg,
  angularImg,
  bowerImg,
  html5Img,
  nodejsImg,
  npmjsImg,
  reactImg,
  webpackImg
];

const blocks = [{
  icon: 'devices',
  title: 'Web',
  text: 'Tecnología web de punta para cualquier dispositivo'
}, {
  icon: 'devices_other',
  title: 'Multiples dispositivos',
  text: 'Tecnología movil de punta para cualquier dispositivo'
}, {
  icon: 'desktop_mac',
  title: 'Aplicaciones de escritorio',
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

  get propsListItem () {
    let style = {
      display: 'inline-flex',
      backgroundColor: 'transparent',
      alignItems: 'center'
    };

    return {
      style: style
    };
  }

  onHoverTechImage = (event, imageIcon) => {
    imageIcon.setState({
      style: {
        width: '7em'
      }
    });
  }

  onHoverExitTechImage = (event, imageIcon) => {
    imageIcon.setState({
      style: {
        width: '3em'
      }
    });
  }

  render () {
    const {
      ...other
    } = this.props;

    const {
      ...otherListProps
    } = this.propsListItem;

    const techBlockWitdh = 100 / blocks.length;

    const _this = this;

    return (
      <Section className='tech' {...other}>
        <div className='container' style={{
          textAlign: 'center'
        }}>
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
            {blocks.map((techBlock, index) => {
              return <TechBlock
                key={index}
                icon={techBlock.icon}
                title={techBlock.title}
                style={{
                  width: `${techBlockWitdh}%`,
                  display: 'inline-block',
                  verticalAlign: 'top'
                }}>
                {techBlock.text}
              </TechBlock>;
            })}
            <div style={{
              width: '100%'
            }}>
              <List {...otherListProps}>
                {images.map((image, index) => {
                  return <ListItem
                    key={index}
                    disabled>
                    <ImageIcon
                      img={image}
                      onHover={_this.onHoverTechImage}
                      onHoverExit={_this.onHoverExitTechImage}
                      style={{
                        width: '3em',
                        transition: transitions.easeOut('1s', 'all')
                      }}
                      hoverable />
                  </ListItem>;
                })}
              </List>
            </div>
          </Section>
        </div>
      </Section>
    );
  }
}
