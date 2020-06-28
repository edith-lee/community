import React, { Component } from "react";
import { Form, Icon, Input, message, Button } from "antd";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./login.less";

const FormItem = Form.Item;
const createForm = Form.create;

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "admin",
      password: "888888",
      loading: false
    };
  }

  componentWillMount() {
    sessionStorage.clear();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.submitLogin(values);
      }
    });
  };
  submitLogin = submitvalue => {
    this.setState({ loading: true });
    let loginData = {
      username: submitvalue.username,
      password: submitvalue.password
    };
    this.props.history.push("/overview");
  };

  render() {
    const { username, password } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-bg">
          {/* <span className="logo"></span> */}
          <div className="topTitle">
            <p className="titleCheng">雪亮工程&nbsp;&nbsp;智慧黄埔</p>
            <p className="titleAi">AI智感社区</p>
          </div>
        <div className="loginForm">
          <Form>
            <FormItem>
              {getFieldDecorator("username", {
                initialValue: username,
                rules: [
                  {
                    required: false,
                    message: "用户名不能为空！"
                  }
                ]
              })(
                  <Input
                      className="loginInput"
                      prefix={
                        <Icon type="user" style={{ color: "#1CB8F2",fontSize:"22px"}} />
                      }
                      placeholder="admin"
                  />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                initialValue: password,
                rules: [
                  {
                    required: false,
                    message: "密码不能为空"
                  }
                ]
              })(
                  <Input
                      prefix={
                        <Icon type="lock" style={{ color: "#1CB8F2",fontSize:"22px",paddingRight:"10px" }} />
                      }
                      className="loginInput"
                      type="password"
                      placeholder="888888"
                  />
              )}
            </FormItem>
            <FormItem>
              <Button
                  loading={this.state.loading}
                  onClick={this.handleSubmit}
                  type="primary"
                  htmlType="submit"
                  className="loginBtn"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(createForm()(Login));
