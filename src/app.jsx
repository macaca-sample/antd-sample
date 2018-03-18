'use strict';

import 'intl';
import React from 'react';
import ReactDom from 'react-dom';

import {
  Layout,
  Select,
} from 'antd';

import './app.less';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Option = Select.Option;

class App extends React.Component {
  render () {
    return (
      <Layout>
        <Header className="header">
        </Header>
        <Content style={{padding: 30}}>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="fourth">fourth</Option>
          </Select>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}

App.defaultProps = {
  context: window.context,
};

ReactDom.render(<App />, document.querySelector('#app'));
