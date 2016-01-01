import { Link } from 'react-router';
import ImageIcon from 'components/ImageIcon.jsx';
import Section from 'components/Section.jsx';

export default class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
      <Section className='tech'>
        <div className='container'>Algo</div>
      </Section>
    );
  }
}
