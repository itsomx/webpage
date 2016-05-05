import {
  getMuiTheme,
  transitions
} from 'material-ui/styles';
import {
  List,
  ListItem
} from 'material-ui/List';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
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
  [
    electronImg,
    githubImg,
    gitlabImg,
    androidImg
  ], [
    phonegapImg,
    angularImg,
    bowerImg,
    html5Img
  ], [
    nodejsImg,
    npmjsImg,
    reactImg,
    webpackImg
  ]
];

const blocks = [{
  icon: 'devices',
  title: 'Web',
  text: 'Desarrollamos aplicaciones y páginas web que colocan a tu empresa en la mira de los usuarios'
}, {
  icon: 'devices_other',
  title: 'Multiples dispositivos',
  text: 'Utilizamos las mejores tecnologías móviles para que tu empresa esté en todos lados'
}, {
  icon: 'desktop_mac',
  title: 'Aplicaciones de escritorio',
  text: 'Desarrollamos sistemas de negocio para ágiles para el mejor funcionamiento interno y externo de tu empresa'
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
      display: 'flex',
      backgroundColor: 'transparent',
      alignItems: 'flex-end',
      flexDirection: 'row',
      flexGrow: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingRight: 0
    };

    return {
      style: style
    };
  }

  getTechLogoItem = (image, index) => {
    return (<ListItem
      key={index} disabled>
      <ImageIcon
        img={image}
        hoverable
        onHover={this.onHoverTechImage}
        onHoverExit={this.onHoverExitTechImage}
        style={{
          width: '3em',
          transition: transitions.easeOut('600ms', 'all')
        }} />
    </ListItem>);
  }

  get techLogos () {
    const {
      style,
      ...otherListProps
    } = this.propsListItem;

    return (<List {...otherListProps} style={Object.assign({}, style, {
      display: 'flex',
      minHeight: '10em'
    })}>
      {images.map((imagesSection, index) => {
        return imagesSection.map((image, index) => {
          return this.getTechLogoItem(image, index);
        });
      })}
    </List>);
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

    const techBlockWitdh = 100 / blocks.length;
    const techLogos = this.techLogos;

    return (
      <Section className='tech' {...other}>
        <div className='container' style={{
          textAlign: 'center'
        }}>
          <Section>
            <h2
              style={{
                color: this.state.theme.palette.textColor,
                fontWeight: 'lighter'
              }}>
              Innovando para que tu enfoque sean tus clientes
            </h2>
          </Section>
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
              // height: '9em'
            }}>
              {techLogos}
            </div>
          </Section>
        </div>
      </Section>
    );
  }
}
