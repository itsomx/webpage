import {
  getMuiTheme
} from 'material-ui/styles';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import Section from 'components/Section';

export default class SectionClient extends BaseComponent {
  constructor () {
    super();

    this.state = {
      theme: getMuiTheme()
    };
  }

  render () {
    const {
      ...other
    } = this.props;

    return (<Section className='client' {...other}>
      <Section>
        <h2
          style={{
            color: this.state.theme.palette.textColor,
            fontWeight: 'lighter'
          }}>
          Algunos de nuestros clientes
        </h2>
      </Section>
    </Section>);
  };
}
