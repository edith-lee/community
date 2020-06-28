import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Button, Modal, Form, Input, Row, Col, Select, Upload, Icon, DatePicker } from 'antd'
const { Option } = Select;
class Equipment extends Component {
  state = {
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    pagination3: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    showRecordModal: false,
    isAdd: false,
    detail: {},
    showModal: false,
    exportModal: false,
    record: [
      { key: 1, time: "2020-02-28", remark: "线路故障维修" },
      { key: 2, time: "2020-02-27", remark: "线路故障维修" },
      { key: 3, time: "2020-02-26", remark: "线路故障维修" },
      { key: 4, time: "2020-02-25", remark: "线路故障维修" }
    ],
    tableData: [
      {
        key: 1,
        lastTime: "2020-02-28 11:11:11",
        location: '1#楼1单元1楼',
        type: "灭火器",
        name: "袁顺凤",
        status: "正常"
      },
      {
        key: 2,
        lastTime: "2020-02-28 10:10:10",
        location: '2#楼2单元2楼',
        type: "水带",
        name: "任巧",
        status: "待更换"
      },
      {
        key: 3,
        lastTime: "2020-02-28 09:09:09",
        location: '3#楼3单元3楼',
        type: "水枪",
        name: "吴思",
        status: "待维修"
      }
    ]
  };
  columnsRecord = [
    {
      title: "维修时间",
      dataIndex: "time",
      key: "time"
    },
    {
      title: "维修记录",
      dataIndex: "remark",
      key: "remark"
    }
  ];
  columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "位置",
      dataIndex: "location",
      key: "location"
    },
    {
      title: "最后一次维护时间",
      dataIndex: "lastTime",
      key: "lastTime"
    },
    {
      title: "维护人",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status"
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
            <Button
              size="small"
              onClick={() => {
                this.showRecordModal(record);
              }}
            >
              维修记录
            </Button>
          </div>
        );
      }
    }
  ];
  showRecordModal = record => {
    this.props.form.resetFields();
    this.setState({
      showRecordModal: true
    });
  };
  handleRecordModalCancel = () => {
    this.props.form.resetFields();
    this.setState({
      showRecordModal: false
    });
  };
  searchFormList = [
    {
      type: "DATES",
      label: "维护时间",
      field: "times",
      initialValue: [moment().subtract(7, "days"), moment()],
      width: 240
    },
    {
      type: "SELECT",
      label: "位置",
      field: "location",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "1#楼1单元1楼" },
        { id: "2", name: "2#楼2单元2楼" },
        { id: "3", name: "3#楼3单元3楼" }
      ]
    },
    {
      type: "SELECT",
      label: "类型",
      field: "type",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "灭火器" },
        { id: "2", name: "水带" },
        { id: "3", name: "水枪" }
      ]
    }
  ];
  handleSearchSubmit = values => {
    //console.log(values);
  };
  handlePaginationChange = pagination => {
    this.setState({
      pagination
    });
  };
  delete = key => {
    Modal.confirm({
      title: "消防器材删除",
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
  handleMany = keys => {
    //console.log(keys);
  };
  exportModal = () => {
    this.setState({ exportModal: true })
  };
  handleExportCancel = () => {
    this.setState({ exportModal: false })
  };
  handleExportSave = () => {
    this.setState({ exportModal: false })
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let record = this.state.record;
        values.time = values.time.format('YYYY-MM-DD')
        record.unshift(values);
        this.props.form.resetFields();
        this.setState({
          record
        });
      }
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
                        &nbsp;&nbsp;
                        <Button
              size="small"
              type="primary"
              onClick={this.exportModal}
            >
              导入
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
          title={this.state.isAdd ? "消防器材新增" : "消防器材编辑"}
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
                <Form.Item label="设备类型">
                  {getFieldDecorator("type", {
                    rules: [
                      {
                        required: true,
                        message: "请选择设备类型！"
                      }
                    ]
                  })(
                    <Select placeholder="请选择设备类型">
                      <Option value="灭火器">灭火器</Option>
                      <Option value="水枪">水枪</Option>
                      <Option value="水带">水带</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="位置">
                  {getFieldDecorator("location", {
                    rules: [
                      {
                        required: true,
                        message: "请输入设备位置！"
                      },
                      {
                        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                        message: `请不要输入特殊字符!`
                      }
                    ]
                  })(
                    <Input maxLength={20} />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        <Modal
          destroyOnClose={true}
          title="消防器材导入"
          visible={this.state.exportModal}
          onCancel={this.handleExportCancel}
          footer={
            <div style={{ textAlign: "center" }}>
              <Button type="primary" onClick={this.handleExportSave}>
                保存
                            </Button>
            </div>
          }
        >
          <Form {...formItemLayout}>
            <Form.Item label="文件" extra="仅支持扩展名：.xls .xlsx">
              {getFieldDecorator("blueprint", {
                rules: [
                  {
                    required: true,
                    message: "请选择文件上传！"
                  }
                ]
              })(
                <Upload name="file" action="/upload.do" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'>
                  <Button>
                    <Icon type="upload" /> 点击选择文件
                                    </Button>
                </Upload>
              )}
            </Form.Item>

          </Form>
        </Modal>
        <Modal
          className="viewVideoModal"
          destroyOnClose={true}
          title="消防器材维修记录"
          visible={this.state.showRecordModal}
          onCancel={this.handleRecordModalCancel}
          footer={null}
        >
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="维修时间">
              {getFieldDecorator("time", {
                rules: [
                  {
                    required: true,
                    message: "请选择维修时间！"
                  }
                ]
              })(<DatePicker style={{ width: "100%" }} />)}
            </Form.Item>
            <Form.Item label="维修人">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入维修人！"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="维修记录">
              {getFieldDecorator("remark", {
                rules: [
                  {
                    required: true,
                    message: "请输入维修记录！"
                  },
                  {
                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                    message: `请不要输入特殊字符!`
                  }
                ]
              })(<Input.TextArea maxLength={200} />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 4, offset: 18 }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
          <MyTable columns={this.columnsRecord} data={this.state.record} />
          <div style={{ marginTop: 10 }}>
            <MyPagination
              pagination={this.state.pagination3}
              onChange={this.handlePaginationChange3}
              showSizeChange={true}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Equipment);