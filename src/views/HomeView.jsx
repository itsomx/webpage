import SectionTech from './partials/SectionTech';
import BaseComponent from 'components/BaseComponent';

export default class HomeView extends BaseComponent {
  static propTypes = {};

  render () {
    console.info('rendering home');
    return (
      <div className='container text-center'>
        <SectionTech style={{margin: '15px 0'}}/>
      </div>
    );
  }
}
