import SectionTech from './partials/SectionTech';

export default class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
      <div className='container text-center'>
        <SectionTech/>
      </div>
    );
  }
}
