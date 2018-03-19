'use strict';

import 'intl';
import React from 'react';
import ReactDom from 'react-dom';

import {
  Layout,
  Select,
  Form,
  Button,
} from 'antd';

import './app.less';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Option = Select.Option;

const FormItem = Form.Item;

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        console.log(err);
      }
    });
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Header className="header">
        </Header>
        <Content style={{ padding: 30 }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('select', {
                rules: [{
                  required: true,
                }],
              })(
                <Select style={{ width: 120 }} dropdownClassName="select-name" className="select-example">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="fourth">fourth</Option>
                </Select>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="btn-submit">
                提交
              </Button>
            </FormItem>
          </Form>
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

const FormApp = Form.create()(App);

ReactDom.render(<FormApp />, document.querySelector('#app'));
