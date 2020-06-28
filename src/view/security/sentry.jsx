import React, { Component } from "react";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Modal, Button, Form, Input } from "antd";
class Sentry extends Component {
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
        name: "岗亭一",
        location: "东门"
      },
      {
        key: 2,
        name: "岗亭二",
        location: "西门"
      },
      {
        key: 3,
        name: "岗亭三",
        location: "南门"
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
      title: "名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "位置",
      dataIndex: "location",
      key: "location"
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
  delete = key => {
    Modal.confirm({
      title: "岗亭删除",
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
        <div style={{ marginBottom: "10px", textAlign: "right" }}>
          <Button
            type="primary"
            onClick={() => {
              this.showModal("add");
            }}
          >
            新增
          </Button>
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
          title={this.state.isAdd ? "岗亭新增" : "岗亭编辑"}
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
            <Form.Item label="名称">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入岗亭名称！"
                  },
                  {
                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                    message: `请不要输入特殊字符!`
                  }
                ]
              })(<Input maxLength={20} />)}
            </Form.Item>
            <Form.Item label="位置">
              {getFieldDecorator("location", {
                rules: [
                  {
                    required: true,
                    message: "请输入岗亭位置！"
                  },
                  {
                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                    message: `请不要输入特殊字符!`
                  }
                ]
              })(<Input maxLength={20} />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Sentry);
