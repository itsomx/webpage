import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

const styles = {
  tab: {
    padding: '0 3em'
  }
},
tabs = {
  home: {
    value: '#home'
  },
  contact: {
    value: '#contact'
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
