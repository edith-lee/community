import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Modal, Button, Form, Input, Select, Row, Col } from "antd";
import Image from "../../assets/image/timg.jpg";
import Image4 from "../../assets/image/张勉.jpg";
import Image5 from "../../assets/image/胡婷丽.jpg";
import Image6 from "../../assets/image/郑鹏飞_001.jpg";
const { Option } = Select;
class People extends Component {
  state = {
    isAdd: false,
    detail: {},
    showModal: false,
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData: [
      {
        key: 1,
        name: "袁顺凤",
        sex: "男",
        type: "业主",
        buildingNum: "1#楼",
        doorNum: "1单元101",
        relationship: "业主",
        tel: "12345678987",
        photo: Image4
      },
      {
        key: 2,
        name: "周悦",
        sex: "女",
        type: "住户",
        buildingNum: "1#楼",
        doorNum: "1单元101",
        relationship: "夫妻",
        tel: "12345678987",
        photo: Image5
      },
      {
        key: 3,
        name: "陈俊",
        sex: "男",
        type: "租客",
        buildingNum: "2#楼",
        doorNum: "2单元202",
        relationship: "租客",
        tel: "12345678987",
        photo: Image6
      }
    ]
  };
  columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "楼",
      dataIndex: "buildingNum",
      key: "buildingNum"
    },
    {
      title: "门牌号",
      dataIndex: "doorNum",
      key: "doorNum"
    },
    {
      title: "与业主关系",
      dataIndex: "relationship",
      key: "relationship"
    },
    {
      title: "联系电话",
      dataIndex: "tel",
      key: "tel"
    },
    {
      title: "照片",
      dataIndex: "photo",
      key: "photo",
      render: (text, record) => {
        return (
          <img
            src={record.photo}
            onClick={() => {
              this.showPhotoModal(record);
            }}
            style={{
              width: 70,
              height: 80,
              margin: "0px auto",
              cursor: "pointer"
            }}
          />
        );
      }
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              size="small"
              type="primary"
              style={{ marginRight: 10 }}
              onClick={() => {
                this.showModal(record);
              }}
            >
              编辑
            </Button>
            <Button
              size="small"
              type="danger"
              style={{ marginRight: 10 }}
              onClick={() => {
                this.delete(record.key);
              }}
            >
              删除
            </Button>
            {/* <Button
              size="small"
              onClick={() => {
                
              }}
            >
              查看照片
            </Button> */}
          </div>
        );
      }
    }
  ];
  searchFormList = [
    {
      type: "INPUT",
      label: "姓名",
      field: "name",
      width: 200
    },
    {
      type: "SELECT",
      label: "类型",
      field: "type",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "业主", name: "业主" },
        { id: "住户", name: "住户" },
        { id: "租客", name: "租客" }
      ]
    },
    {
      type: "SELECT",
      label: "楼",
      field: "buildingNum",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "1#楼" },
        { id: "2", name: "2#楼" },
        { id: "3", name: "3#楼" },
        { id: "4", name: "4#楼" },
        { id: "5", name: "5#楼" },
        { id: "6", name: "6#楼" }
      ]
    },
    {
      type: "INPUT",
      label: "门牌号",
      field: "doorNum",
      width: 200
    }
  ];
  delete = key => {
    Modal.confirm({
      title: "人员删除",
      content: "是否确认要删除此记录，删除后不可恢复？",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        let tableData = this.state.tableData;
        let newData = [];
        tableData.map(item => {
          if (item.key !== key) {
            newData.push(item);
          }
        });
        this.setState({
          tableData: newData
        });
      }
    });
  };
  handleSearchSubmit = values => {
    //console.log(values);
  };
  handlePaginationChange = pagination => {
    this.setState({
      pagination
    });
  };
  showModal = value => {
    if (value === "add") {
      this.setState({
        isAdd: true,
        detail: {},
        showModal: true
      });
    } else {
      this.setState(
        {
          isAdd: false,
          detail: value,
          showModal: true
        },
        () => {
          this.props.form.setFieldsValue(value);
        }
      );
    }
  };
  handleModalCancel = () => {
    this.props.form.resetFields();
    this.setState({
      isAdd: false,
      detail: {},
      showModal: false
    });
  };
  handleSave = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.isAdd) {
          let tableData = this.state.tableData;
          tableData.push(values);
          this.props.form.resetFields();
          this.setState({
            tableData,
            isAdd: false,
            detail: {},
            showModal: false
          });
        } else {
          let tableData = this.state.tableData;
          let newData = [];
          tableData.map(item => {
            if (this.state.detail.key === item.key) {
              newData.push({
                key: item.key,
                ...values
              });
            } else {
              newData.push(item);
            }
          });
          this.props.form.resetFields();
          this.setState({
            tableData: newData,
            isAdd: false,
            detail: {},
            showModal: false
          });
        }
      }
    });
  };
  showPhotoModal = record => {
    this.setState({
      detail: record,
      showPhotoModal: true
    });
  };
  handlePhotoModelCancel = () => {
    this.setState({
      detail: {},
      showPhotoModal: false
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    };
    return (
      <div>
        <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
          <MySearchForm
            formList={this.searchFormList}
            filterSubmit={this.handleSearchSubmit}
          />
          <div className="topBtns">
            <Button
              size="small"
              type="primary"
              onClick={() => {
                this.showModal("add");
              }}
            >
              新增
            </Button>
          </div>
        </div>
        <div style={{ minHeight: "520px" }}>
          <MyTable columns={this.columns} data={this.state.tableData} />
        </div>
        <MyPagination
          pagination={this.state.pagination}
          onChange={this.handlePaginationChange}
          showSizeChange={true}
        />
        <Modal
          className="viewWarningModal"
          destroyOnClose={true}
          title={this.state.isAdd ? "人员新增" : "人员编辑"}
          visible={this.state.showModal}
          onCancel={this.handleModalCancel}
          footer={
            <div style={{ textAlign: "center" }}>
              <Button type="primary" onClick={this.handleSave}>
                保存
              </Button>
            </div>
          }
        >
          <Form {...formItemLayout}>
            <Row>
              <Col span={12}>
                <Form.Item label="姓名">
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "请输入人员姓名！"
                      },
                      {
                        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                        message: `请不要输入特殊字符!`
                      }
                    ]
                  })(<Input maxLength={20} />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="楼号">
                  {getFieldDecorator("buildingNum", {
                    rules: [
                      {
                        required: true,
                        message: "请选择楼号！"
                      }
                    ]
                  })(
                    <Select placeholder="请选择楼号">
                      <Option value="1#楼">1#楼</Option>
                      <Option value="2#楼">2#楼</Option>
                      <Option value="3#楼">3#楼</Option>
                      <Option value="4#楼">4#楼</Option>
                      <Option value="5#楼">5#楼</Option>
                      <Option value="6#楼">6#楼</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="性别">
                  {getFieldDecorator("sex", {
                    rules: [
                      {
                        required: true,
                        message: "请选择性别！"
                      }
                    ]
                  })(
                    <Select placeholder="请选择性别">
                      <Option value="男">男</Option>
                      <Option value="女">女</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="房号">
                  {getFieldDecorator("doorNum", {
                    rules: [
                      {
                        required: true,
                        message: "请输入房号！"
                      },
                      {
                        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                        message: `请不要输入特殊字符!`
                      }
                    ]
                  })(<Input maxLength={20} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="类型">
                  {getFieldDecorator("type", {
                    rules: [
                      {
                        required: true,
                        message: "请选择类型！"
                      }
                    ]
                  })(
                    <Select placeholder="请选择类型">
                      <Option value="业主">业主</Option>
                      <Option value="住户">住户</Option>
                      <Option value="租户">租户</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="电话">
                  {getFieldDecorator("tel", {
                    rules: [
                      {
                        required: true,
                        message: "请输入电话！"
                      },
                      {
                        pattern: /^1[3456789]\d{9}$/,
                        message: `请输入正确的电话!`
                      }
                    ]
                  })(<Input maxLength={20} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="与业主关系">
                  {getFieldDecorator("relationship", {
                    rules: [
                      {
                        required: true,
                        message: "请输入与业主的关系！"
                      },
                      {
                        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                        message: `请不要输入特殊字符!`
                      }
                    ]
                  })(<Input maxLength={20} />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        <Modal
          //className="viewWarningModal"
          title={`${this.state.detail.name}`}
          visible={this.state.showPhotoModal}
          onCancel={this.handlePhotoModelCancel}
          footer={null}
        >
          <img
            src={this.state.detail.photo}
            style={{ width: "380px", height: "480px" ,margin:'0px auto'}}
          ></img>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(People);
