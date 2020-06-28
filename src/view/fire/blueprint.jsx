import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Icon, Modal, Button, Form, Input, Select, Upload, Row, Col } from "antd";
import Image from "../../assets/image/tuzhi1.png"
const { Option } = Select;
class Blueprint extends Component {
  state = {
    isAdd: false,
    detail: {},
    showPreviewModal: false,
    showModal: false,
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData: [
      {
        key: 1,
        buildNum: "1#楼",
        unitNum: "1单元",
        url: ""
      },
      {
        key: 2,
        buildNum: "1#楼",
        unitNum: "2单元",
        url: ""
      },
      {
        key: 3,
        buildNum: "2#楼",
        unitNum: "1单元",
        url: ""
      },
      {
        key: 4,
        buildNum: "2#楼",
        unitNum: "2单元",
        url: ""
      },
      {
        key: 5,
        buildNum: "2#楼",
        unitNum: "3单元",
        url: ""
      },
      {
        key: 6,
        buildNum: "2#楼",
        unitNum: "4单元",
        url: ""
      },
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
      title: "楼",
      dataIndex: "buildNum",
      key: "buildNum"
    },
    {
      title: "单元",
      dataIndex: "unitNum",
      key: "unitNum"
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      width: 400,
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
              type="primary"
              style={{ marginRight: 10 }}
              onClick={() => {
                this.showPreviewModal()
              }}
            >
              预览
            </Button>
            <Button type="primary" size="small" style={{ marginRight: 10 }}>
              <Icon type="download" />
          下载图纸
        </Button>
            <Button
              size="small"
              type="danger"
              onClick={() => {
                this.delete(record.key);
              }}
            >
              删除
            </Button>
          </div>
        );
      }
    }
  ];
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
          value.roomNum1 = value.roomNum ? [value.roomNum.substring(0, 3), value.roomNum.substring(3, 6), value.roomNum.substring(6, 9)] : []
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
          values.roomNum = values.roomNum1 ? values.roomNum1.join("") : '',
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
                roomNum: values.roomNum1 ? values.roomNum1.join("") : '',
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
  showPreviewModal = () => {
    this.setState({
      showPreviewModal: true
    })
  }
  handlePreviewModalCancel = () => {
    this.setState({
      showPreviewModal: false
    })
  }
  searchFormList = [
    {
      type: "SELECT",
      label: "楼",
      field: "buildNum",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "1#楼" },
        { id: "2", name: "2#楼" },
        { id: "3", name: "3#楼" },
        { id: "4", name: "4#楼" },
        { id: "5", name: "5#楼" },
        { id: "6", name: "6#楼" },
        { id: "7", name: "7#楼" },
        { id: "8", name: "8#楼" },
        { id: "9", name: "9#楼" },
        { id: "10", name: "10#楼" },
        { id: "11", name: "11#楼" },
        { id: "12", name: "12#楼" },
        { id: "13", name: "13#楼" },
        { id: "14", name: "14#楼" },
        { id: "15", name: "15#楼" },
      ]
    },
    {
      type: "SELECT",
      label: "单元",
      field: "unitNum",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "1单元" },
        { id: "2", name: "2单元" },
        { id: "3", name: "3单元" },
        { id: "4", name: "4单元" }
      ]
    }
  ];
  delete = key => {
    Modal.confirm({
      title: "图纸删除",
      content: "是否确认要删除此记录，删除后不可恢复？",
      okText: '确定',
      cancelText: '取消',
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
          title="预览"
          visible={this.state.showPreviewModal}
          onCancel={this.handlePreviewModalCancel}
          footer={null}
        >
          <img
            src={Image}
            style={{ width: "760px", height: "400px" }}
          ></img>
        </Modal>
        <Modal
          className="viewWarningModal"
          destroyOnClose={true}
          title={this.state.isAdd ? "消防图纸新增" : "消防图纸编辑"}
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
                <Form.Item label="楼">
                  {getFieldDecorator("buildNum", {
                    rules: [
                      {
                        required: true,
                        message: "请选择楼！"
                      }
                    ]
                  })(
                    <Select placeholder="请选择楼">
                      <Option value="1#楼">1#楼</Option>
                      <Option value="2#楼">2#楼</Option>
                      <Option value="3#楼">3#楼</Option>
                      <Option value="4#楼">4#楼</Option>
                      <Option value="5#楼">5#楼</Option>
                      <Option value="6#楼">6#楼</Option>
                      <Option value="7#楼">7#楼</Option>
                      <Option value="8#楼">8#楼</Option>
                      <Option value="9#楼">9#楼</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="单元">
                  {getFieldDecorator("unitNum", {
                    rules: [
                      {
                        required: true,
                        message: "请选择单元！"
                      }
                    ]
                  })(
                    <Select placeholder="请选择单元">
                      <Option value="1单元">1单元</Option>
                      <Option value="2单元">2单元</Option>
                      <Option value="3单元">3单元</Option>
                      <Option value="4单元">4单元</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="图纸">
                  {getFieldDecorator("blueprint", {
                    rules: [
                      {
                        required: true,
                        message: "请选择文件上传！"
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
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Blueprint);
