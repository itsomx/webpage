import { StickyContainer } from 'react-sticky';
import BaseComponent from 'components/BaseComponent';

import 'styles/core.scss';
import MainView from 'views/MainView';
import Footer from 'components/Footer';

export default class CoreLayout extends BaseComponent {
  constructor () {
    super({
      listenResize: true
    });
  }
  static propTypes = {
    children: React.PropTypes.node
  };

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          <StickyContainer>
            <MainView />
            <div style={{margin: '15px 0'}}>
              {this.props.children}
            </div>
            <Footer />
          </StickyContainer>
        </div>
      </div>
    );
  }
}
