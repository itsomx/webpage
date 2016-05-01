import { StickyContainer } from 'react-sticky';

import 'styles/core.scss';
import MainView from 'views/MainView';
import Footer from 'components/Footer';

function CoreLayout ({ children }) {
  return (
    <div className='page-container'>
      <div className='view-container'>
        <StickyContainer>
          <MainView />
          {children}
          <Footer />
        </StickyContainer>
      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
};

export default CoreLayout;
