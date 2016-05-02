import SectionTech from './partials/SectionTech';
import BaseComponent from 'components/BaseComponent';

export default class HomeView extends BaseComponent {
  static propTypes = {};

  render () {
    return (
      <div className='container text-center'>
        <SectionTech />
      </div>
    );
  }
}
