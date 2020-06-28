import React, { Component } from "react";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import moment from "moment";
const { Option } = Select;
class ElevatorModal extends Component {
  state = {
    currentKey: "",
    elevatorDetail: {}
  };
  componentWillReceiveProps = props => {
    if (props.visible) {
      this.setState({
        elevatorDetail: props.elevatorDetail,
        currentKey: props.elevatorDetail.key
      });
    }
  };
  handleSave = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.key = this.state.currentKey;
        values.timeLimit = values.timeLimit.format("YYYY-MM-DD");
        this.props.handleOk(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 16
      }
    };
    return (
      <Modal
        destroyOnClose={true}
        title={this.props.isAdd ? "电梯新增" : "电梯编辑"}
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={
          <div style={{ textAlign: "center" }}>
            <Button type="primary" onClick={this.handleSave}>
              保存
            </Button>
          </div>
        }
      >
        <Form {...formItemLayout}>
          <Form.Item label="名称">
            {getFieldDecorator("elevator", {
              initialValue: this.state.elevatorDetail.elevator,
              rules: [
                {
                  required: true,
                  message: "请输入电梯名称！"
                },
                {
                  pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                  message: `请不要输入特殊字符!`
                }
              ]
            })(<Input maxLength={20} />)}
          </Form.Item>
          <Form.Item label="所属楼">
            {getFieldDecorator("buildingNum", {
              initialValue: this.state.elevatorDetail.buildingNum,
              rules: [
                {
                  required: true,
                  message: "请选择所属楼！"
                }
              ]
            })(
              <Select placeholder="请选择所属楼">
                <Option value="1#楼">1#楼</Option>
                <Option value="2#楼">2#楼</Option>
                <Option value="3#楼">3#楼</Option>
                <Option value="4#楼">4#楼</Option>
                <Option value="5#楼">5#楼</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="品牌">
            {getFieldDecorator("brand", {
              initialValue: this.state.elevatorDetail.brand,
              rules: [
                {
                  required: true,
                  message: "请输入品牌！"
                },
                {
                  pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                  message: `请不要输入特殊字符!`
                }
              ]
            })(<Input maxLength={20} />)}
          </Form.Item>
          <Form.Item label="使用期限">
            {getFieldDecorator("timeLimit", {
              initialValue: this.state.elevatorDetail.timeLimit
                ? moment(this.state.elevatorDetail.timeLimit)
                : undefined,
              rules: [
                {
                  required: true,
                  message: "请选择使用期限！"
                }
              ]
            })(<DatePicker style={{ width: "100%" }} />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(ElevatorModal);
