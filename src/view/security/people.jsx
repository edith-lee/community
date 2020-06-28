import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Modal, Button, Form, Input, Select, Row, Col } from "antd";
import Image from "../../assets/image/timg.jpg";
import Image4 from "../../assets/image/张勉.jpg";
import Image5 from "../../assets/image/张渊凯.jpg";
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
        name: "柯子胤",
        sex: "男",
        age: "22",
        address: "广东省广州市黄埔区",
        idNum: "310101199807220643",
        tel: "12345678987",
        nation: "汉",
        localAddress: "广东省广州市黄埔区",
        photo:Image4
      },
      {
        key: 2,
        name: "常曦",
        sex: "男",
        age: "22",
        address: "广东省广州市黄埔区",
        idNum: "310101199807220644",
        tel: "12345678987",
        nation: "汉",
        localAddress: "广东省广州市黄埔区",
        photo:Image5
      },
      {
        key: 3,
        name: "毕培卓",
        sex: "男",
        age: "22",
        address: "广东省广州市黄埔区",
        idNum: "310101199807220647",
        tel: "12345678987",
        nation: "汉",
        localAddress: "广东省广州市黄埔区",
        photo:Image6
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
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "家庭地址",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "身份证号",
      dataIndex: "idNum",
      key: "idNum"
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
                this.showPhotoModal(record);
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
    }
  ];
  delete = key => {
    Modal.confirm({
      title: "安保人员删除",
      content: "是否确认要删除此记录，删除后不可恢复？",
      okText:'确定',
      cancelText:'取消',
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
                <Form.Item label="民族">
                  {getFieldDecorator("nation", {
                    rules: [
                      {
                        required: true,
                        message: "请输入民族！"
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
                <Form.Item label="身份证号">
                  {getFieldDecorator("idNum", {
                    rules: [
                      {
                        required: true,
                        message: "请输入身份证号！"
                      },
                      {
                        pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                        message: `请输入正确的身份证号!`
                      }
                    ]
                  })(<Input maxLength={20} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="年龄">
                  {getFieldDecorator("age", {
                    rules: [
                      {
                        required: true,
                        message: "请输入年龄！"
                      }
                    ]
                  })(<Input maxLength={20} type="number" min={0} />)}
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
                <Form.Item label="地址">
                  {getFieldDecorator("address", {
                    rules: [
                      {
                        required: true,
                        message: "请输入地址！"
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
                <Form.Item label="户籍所在地">
                  {getFieldDecorator("localAddress", {
                    rules: [
                      {
                        required: true,
                        message: "请输入户籍所在地！"
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
