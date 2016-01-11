import SectionTech from './partials/SectionTech';
import SectionBlack from 'components/MainBlack';

export default class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
      <div className='container text-center'>
        <SectionBlack/>
        <SectionTech/>
      </div>
    );
  }
}
