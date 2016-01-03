import { Link } from 'react-router';
import { ClearFix } from 'material-ui';
import coreStyles from 'styles/core.scss';
import Section from 'components/Section.jsx';
import TechBlock from 'components/TechBlock.jsx';

export default class HomeView extends React.Component {
  static propTypes = {};

  render () {
    // Using Bootstrap to wrap items
    return (
      <Section className='tech'>
        <div className='container'>
          <div>
            <h1 className={coreStyles['lighter']}>Siempre lo mejor</h1>
            <p>Tu tienes la idea, nosotros la realizamos</p>
          </div>
          <p icon='devices' title='Web' text='Tecnología de punta para cualquier dispositivo.'/>
        </div>
      </Section>
    );
  }
}
