import { Divider } from 'material-ui';
import BaseComponent from 'components/BaseComponent';
import SectionTech from './partials/SectionTech';
import SectionService from './partials/SectionService';
import Contact from './partials/Contact';

export default class HomeView extends BaseComponent {
  static propTypes = {};

  get dividerStyle () {
    return {
      marginLeft: 20,
      marginRight: 20
    };
  }

  get sectionStyle () {
    return {
      padding: '0 40px'
    };
  }

  render () {
    return (
      <div className='container text-center'>
        <SectionTech style={this.sectionStyle} />
        <Divider style={this.dividerStyle} />
        <SectionService style={this.sectionStyle} />
        <Divider style={this.dividerStyle} />
        <Contact style={this.sectionStyle} />
      </div>
    );
  }
}
