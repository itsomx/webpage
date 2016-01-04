import { Tabs, Tab } from 'material-ui/lib/tabs';
import { Dom } from 'material-ui/lib/utils';

const styles = {
  tab: {
    padding: '0 3em'
  }
},
tabs = {
  home: {
    value: 'home'
  },
  contact: {
    value: 'footer'
  }
};

export default class MainTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: tabs.home.value,
    };
  }

  handleChange = (value) => {
    let {
      top,
      left
    } = Dom.offset(document.getElementById(value));
    scrollTo(left, top);
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab
          style={styles.tab}
          label='Home'
          value={tabs.home.value}
        />
        <Tab
          style={styles.tab}
          label='Contact'
          value={tabs.contact.value}
        />
      </Tabs>
    );
  }
}
