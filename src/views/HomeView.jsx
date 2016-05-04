import { Divider } from 'material-ui';
import BaseComponent from 'components/BaseComponent';
import SectionTech from './partials/SectionTech';
import SectionClient from './partials/SectionClient';

export default class HomeView extends BaseComponent {
  static propTypes = {};

  get dividerStyle () {
    return {
      marginLeft: 20,
      marginRight: 20
    };
  }

  render () {
    return (
      <div className='container text-center'>
        <SectionTech />
        <Divider style={this.dividerStyle} />
        <SectionClient />
      </div>
    );
  }
}
