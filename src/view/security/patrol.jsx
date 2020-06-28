import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Icon, Modal, Button, Form, Input, Select, DatePicker } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
const { Option } = Select;
const { RangePicker } = DatePicker;
class Patrol extends Component {
  state = {
    defaultTime: [],
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
        class: "早班",
        name: "易江维(18665575837),周晨(18665575837),韩汇南(18665575837)",
        status: 1,
        time: "2019-12-01至2020-01-01"
      },
      {
        key: 2,
        class: "中班",
        name: "易江维(18665575837),周晨(18665575837),韩汇南(18665575837)",
        status: 1,
        time: "2019-12-01至2020-01-01"
      },
      {
        key: 3,
        class: "晚班",
        name: "易江维(18665575837),周晨(18665575837),韩汇南(18665575837)",
        status: 1,
        time: "2019-12-01至2020-01-01"
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
      title: "班次",
      dataIndex: "class",
      key: "class"
    },
    {
      title: "值班人员",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (text, record) =>
        record.status == 1 ? (
          <span style={{ color: "green" }}>启用</span>
        ) : (
          <span style={{ color: "red" }}>禁用</span>
        )
    },
    {
      title: "执行时间",
      dataIndex: "time",
      key: "time"
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
            {record.status == 1 ? (
              <Button
                size="small"
                type="danger"
                onClick={() => {
                  this.changeStatus(record.key);
                }}
              >
                禁用
              </Button>
            ) : (
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  this.changeStatus(record.key);
                }}
              >
                启用
              </Button>
            )}
          </div>
        );
      }
    }
  ];
  searchFormList = [
    {
      type: "SELECT",
      label: "班次",
      field: "class",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "早班" },
        { id: "2", name: "中班" },
        { id: "2", name: "晚班" }
      ]
    },
    {
      type: "SELECT",
      label: "状态",
      field: "status",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "启用" },
        { id: "0", name: "禁用" }
      ]
    }
  ];
  delete = key => {
    Modal.confirm({
      title: "巡逻计划删除",
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
  changeStatus = key => {
    let tableData = this.state.tableData;
    let status = 0;
    tableData.map(item => {
      if (item.key === key) {
        status = item.status;
      }
    });
    Modal.confirm({
      title: "修改巡逻计划状态",
      content:
        status == 1 ? "是否确认要禁用此记录？" : "是否确认要启用此记录？",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        let tableData = this.state.tableData;
        let newStatus = status == 1 ? 0 : 1;
        tableData.map(item => {
          if (item.key === key) {
            item.status = newStatus;
          }
        });
        this.setState({
          tableData
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
    let formValue = {};
    if (value === "add") {
      this.setState({
        defaultTime: [],
        isAdd: true,
        detail: {},
        showModal: true
      });
    } else {
      let defaultTime = [value.time.split("至")[0], value.time.split("至")[1]];
      this.setState(
        {
          defaultTime,
          isAdd: false,
          detail: value,
          showModal: true
        },
        () => {
          formValue.name = value.name.split(",");
          formValue.class = value.class;
          this.props.form.setFieldsValue(formValue);
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
          values.name = values.name.join(",");
          values.time = `${values.times[0].format(
            "YYYY-MM-DD"
          )}至${values.times[1].format("YYYY-MM-DD")}`;
          values.status = 0;
          values.key = tableData.length + 1;
          tableData.push(values);
          this.props.form.resetFields();
          this.setState({
            defaultTime: [],
            tableData,
            isAdd: false,
            detail: {},
            showModal: false
          });
        } else {
          let tableData = this.state.tableData;
          let newData = [];
          values.name = values.name.join(",");
          values.time = `${values.times[0].format(
            "YYYY-MM-DD"
          )}至${values.times[1].format("YYYY-MM-DD")}`;
          values.status = 0;
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
            defaultTime: [],
            isAdd: false,
            detail: {},
            showModal: false
          });
        }
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
          destroyOnClose={true}
          title={this.state.isAdd ? "巡逻计划新增" : "巡逻计划编辑"}
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
            <Form.Item label="班次">
              {getFieldDecorator("class", {
                rules: [
                  {
                    required: true,
                    message: "请选择班次！"
                  }
                ]
              })(
                <Select placeholder="请选择班次">
                  <Option value="早班">早班</Option>
                  <Option value="中班">中班</Option>
                  <Option value="晚班">晚班</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="值班人员">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请选择值班人员！"
                  }
                ]
              })(
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="请点击选择或输入搜索值班人员"
                >
                  <Option
                    key={`易江维(18665575837)`}
                  >{`易江维(18665575837)`}</Option>
                  <Option
                    key={`周晨(18665575837)`}
                  >{`周晨(18665575837)`}</Option>
                  <Option
                    key={`韩汇南(18665575837)`}
                  >{`韩汇南(18665575837)`}</Option>
                  <Option
                    key={`余仲(18665575837)`}
                  >{`余仲(18665575837)`}</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="预计执行时间">
              {getFieldDecorator("times", {
                initialValue:
                  this.state.defaultTime.length != 0
                    ? [
                        moment(this.state.defaultTime[0]),
                        moment(this.state.defaultTime[1])
                      ]
                    : undefined,
                rules: [
                  {
                    required: true,
                    message: "请选择预计执行时间！"
                  }
                ]
              })(<RangePicker locale={zh_CN} style={{ width: "100%" }} />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Patrol);
