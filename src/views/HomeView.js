import { Link } from 'react-router';
import SectionTech from './partials/SectionTech.jsx';

export default class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
      <div className='container text-center'>
        <Link to='/about'>Go To About View</Link>
        <SectionTech/>
      </div>
    );
  }
}
