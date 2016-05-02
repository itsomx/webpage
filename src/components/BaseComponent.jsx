import Events from 'material-ui/utils/events';
import StyleResizable from 'utils/styleResizable';

export default class BaseComponent extends React.Component {
  listenResize = false;
  constructor (props) {
    super();

    props = props || {};

    this.listenResize = props.listenResize !== undefined ? props.listenResize : this.listenResize;

    this.state = {
      deviceSize: StyleResizable.sizes.SMALL
    };
  }

  static propTypes = {
    listenResize: React.PropTypes.boolean
  };

  componentDidMount = () => {
    console.info(this.listenResize, this);
    if (this.listenResize) {
      this.updateDeviceSize();
      if (!this.manuallyBindResize) {
        this.bindResize();
      }
    }
  }

  componentWillUnmount = () => {
    if (this.listenResize) {
      this.unbindResize();
    }
  }

  updateDeviceSize = () => {
    console.info('updateDeviceSize', this);
    this.setState({
      deviceSize: StyleResizable.getDeviceSize()
    });
  }

  bindResize = () => {
    Events.on(window, 'resize', this.updateDeviceSize);
  }

  unbindResize = () => {
    Events.off(window, 'resize', this.updateDeviceSize);
  }
}
