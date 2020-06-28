import React from "react";
import { message } from "antd";
import { Form, Select, Button, Row, Col, Input, Switch } from "antd";

const { Option } = Select;

class AlarmSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirst: true,
      fielddistance: "",
      ifbell: "",
      code: "",
      scene: "",
      falshlight: "",
      alarmamode: "",
      dwelltime: "",
      ifzone: "",
      minw: "",
      maxw: "",
      minh: "",
      maxh: ""
    };
  }

  componentDidMount(props) {}

  isAlaemamode = value => {
    this.setState({
      alarmamode: value
    });
  };

  isFielddistance = value => {
    this.setState({
      fielddistance: value
    });
  };
  isScene = value => {
    this.setState({
      scene: value === 0 ? "室内" : "室外"
    });
  };
  isFalshlight = (value, x) => {
    this.setState({
      falshlight: value === false ? "0" : "1"
    });
  };
  ifBell = value => {
    this.setState({
      ifbell: value === false ? "0" : "1"
    });
  };
  ifZone = value => {
    this.setState({
      ifzone: value === false ? "0" : "1"
    });
  };
  getMinw = e => {
    this.setState({
      minw: Number(e.target.value)
    });
  };
  getMaxw = e => {
    this.setState({
      maxw: Number(e.target.value)
    });
  };
  getMinh = e => {
    this.setState({
      minh: Number(e.target.value)
    });
  };
  getMaxh = e => {
    this.setState({
      maxh: Number(e.target.value)
    });
  };

  minwValidator = (rule, value, callback) => {
    if ((value && value < 1) || value > 160) {
      callback("数值要在1-160范围内");
    } else if (value && isNaN(value)) {
      callback("请输入数字");
    }
    callback();
  };
  minhValidator = (rule, value, callback) => {
    if ((value && value < 1) || value > 90) {
      callback("数值要在1-90范围内");
    } else if (value && isNaN(value)) {
      callback("请输入数字");
    }
    callback();
  };
  maxwValidator = (rule, value, callback) => {
    if ((value && value < 10) || value > 160) {
      callback("数值要在10-160范围内");
    } else if (value && isNaN(value)) {
      callback("请输入数字");
    }
    callback();
  };
  maxhValidator = (rule, value, callback) => {
    if ((value && value < 10) || value > 90) {
      callback("数值要在10-90范围内");
    } else if (value && isNaN(value)) {
      callback("请输入数字");
    }
    callback();
  };
  getNewData = () => {};
  handleSubmit = e => {};

  render() {
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 2
      },
      wrapperCol: {
        xs: 24,
        sm: 10
      }
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 2
        }
      }
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="zform">
        <Form.Item label="报警类型" {...formItemLayout}>
          <Col span={8}>
            {getFieldDecorator("alarmamode", {})(
              <Select style={{ width: 150 }} onChange={this.isAlaemamode}>
                <Option value={0}>入侵报警</Option>
                <Option value={1}>驻留报警</Option>
              </Select>
            )}
          </Col>
          <Col span={10} className="col-style">
            {this.state.alarmamode === 1 ? (
              <Form.Item
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 6 }}
                label="驻留时间(s)"
              >
                {getFieldDecorator("dwelltime", {
                  initialValue: 5
                })(<Input style={{ width: "100px" }} disabled={true} />)}
              </Form.Item>
            ) : null}
          </Col>
        </Form.Item>

        <Form.Item label="设备场景" {...formItemLayout}>
          {getFieldDecorator("scene", {
            // initialValue: 0
          })(
            <Select style={{ width: 150 }} onChange={this.isScene}>
              <Option value={0}>室内</Option>
              <Option value={1}>室外</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="设备场距" {...formItemLayout}>
          {getFieldDecorator("fielddistance", {})(
            <Select style={{ width: 150 }} onChange={this.isFielddistance}>
              <Option value="10米以内">10米以内</Option>
              <Option value="10-20米">10-20米</Option>
              <Option value="20-40米">20-40米</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="是否闪灯" {...formItemLayout}>
          {getFieldDecorator("falshlight", {
            valuePropName: "checked"
          })(
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              onChange={this.isFalshlight}
            />
          )}
        </Form.Item>
        <Form.Item label="是否响铃" {...formItemLayout}>
          {getFieldDecorator("ifbell", {
            valuePropName: "checked"
          })(
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              onChange={this.ifBell}
            />
          )}
        </Form.Item>
        <Form.Item label="是否启用报警对象" {...formItemLayout}>
          {getFieldDecorator("ifzone", {
            valuePropName: "checked"
          })(
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              onChange={this.ifZone}
            />
          )}
        </Form.Item>
        <Form.Item label="最小宽度(px)" {...formItemLayout}>
          {getFieldDecorator("minw", {
            rules: [
              {
                required: this.state.ifzone === "1" ? true : false,
                message: "内容不能为空"
              },
              {
                validator: this.minwValidator
              }
            ]
          })(<Input style={{ width: "100px" }} onChange={this.getMinw} />)}
        </Form.Item>
        <Form.Item label="最小高度(px)" {...formItemLayout}>
          {getFieldDecorator("minh", {
            rules: [
              {
                required: this.state.ifzone === "1" ? true : false,
                message: "内容不能为空"
              },
              {
                validator: this.minhValidator
              }
            ]
          })(<Input style={{ width: "100px" }} onChange={this.getMinh} />)}
        </Form.Item>
        <Form.Item label="最大宽度(px)" {...formItemLayout}>
          {getFieldDecorator("maxw", {
            rules: [
              {
                required: this.state.ifzone === "1" ? true : false,
                message: "内容不能为空"
              },
              {
                validator: this.maxwValidator
              }
            ]
          })(<Input style={{ width: "100px" }} onChange={this.getMaxw} />)}
        </Form.Item>
        <Form.Item label="最大高度(px)" {...formItemLayout}>
          {getFieldDecorator("maxh", {
            rules: [
              {
                required: this.state.ifzone === "1" ? true : false,
                message: "内容不能为空"
              },
              {
                validator: this.maxhValidator
              }
            ]
          })(<Input style={{ width: "100px" }} onChange={this.getMaxh} />)}
        </Form.Item>
        <Form.Item {...offsetLayout}>
          <Button className="queryBtn lg" onClick={this.handleSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AlarmSettings = Form.create()(AlarmSettings);
