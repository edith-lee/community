import React, { Component } from "react";
import { Modal, Button, Form, Input, Upload, Icon } from "antd";
class BuildingModal extends Component {
  state = {
    currentKey: "",
    buildDetail: {}
  };
  componentWillReceiveProps = props => {
    if (props.visible) {
      this.setState({
        buildDetail: props.buildDetail,
        currentKey: props.buildDetail.key
      });
    }
  };
  handleSave = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.key = this.state.currentKey;
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
        title={this.props.isAdd ? "楼栋新增" : "楼栋编辑"}
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
            {getFieldDecorator("number", {
              initialValue: this.state.buildDetail.number,
              rules: [
                {
                  required: true,
                  message: "请输入楼名称！"
                },
                {
                  pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                  message: `请不要输入特殊字符!`
                }
              ]
            })(<Input maxLength={20} />)}
          </Form.Item>
          <Form.Item label="房数">
            {getFieldDecorator("rooms", {
              initialValue: this.state.buildDetail.rooms,
              rules: [
                {
                  required: true,
                  message: "请输入房数！"
                }
              ]
            })(<Input type="number" min={0} />)}
          </Form.Item>
          <Form.Item label="楼层数">
            {getFieldDecorator("floors", {
              initialValue: this.state.buildDetail.floors,
              rules: [
                {
                  required: true,
                  message: "请输入楼层数！"
                }
              ]
            })(<Input type="number" min={0} />)}
          </Form.Item>
          <Form.Item label="图纸">
            {getFieldDecorator("blueprint", {
              initialValue: this.state.buildDetail.blueprint,
              rules: [
                {
                  required: true,
                  message: "请上传图纸！"
                }
              ]
            })(
              <Upload name="file" action="/upload.do">
                <Button>
                  <Icon type="upload" /> 点击选择文件
                </Button>
              </Upload>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(BuildingModal);
