import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Icon, Modal, Button, Form, Input, Select, Upload } from "antd";
import Image from "../../assets/image/tuzhi2.jpg"
const { Option } = Select;
class Blueprint extends Component {
  state = {
    isAdd: false,
    detail: {},
    showPreviewModal:false,
    showModal: false,
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData: [
      {
        key: 1,
        name: "AAA图纸",
        type: "内部道路",
        upTime:'2020-03-19',
        upName:'毕培卓',
        url: ""
      },
      {
        key: 2,
        name: "BBB图纸",
        type: "出入口",
        upTime:'2020-03-16',
        upName:'常曦',
        url: ""
      },
      {
        key: 3,
        name: "CCC图纸",
        type: "内部道路",
        upTime:'2020-03-10',
        upName:'毕培卓',
        url: ""
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
      title: "图纸名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "上传时间",
      dataIndex: "upTime",
      key: "upTime"
    },
    {
      title: "上传人",
      dataIndex: "upName",
      key: "upName"
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      width:400,
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
  showPreviewModal = () =>{
    this.setState({
      showPreviewModal:true
    })
  }
  handlePreviewModalCancel = () =>{
    this.setState({
      showPreviewModal:false
    })
  }
  searchFormList = [
    {
      type: "INPUT",
      label: "图纸名称",
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
        { id: "1", name: "内部道路" },
        { id: "2", name: "出入口" }
      ]
    }
  ];
  delete = key => {
    Modal.confirm({
      title: "图纸删除",
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
    //console.log(value);
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
          title={this.state.isAdd ? "图纸新增" : "图纸编辑"}
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
                    message: "请输入图纸名称！"
                  },
                  {
                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                    message: `请不要输入特殊字符!`
                  }
                ]
              })(<Input maxLength={20} />)}
            </Form.Item>
            <Form.Item label="类型">
              {getFieldDecorator("type", {
                rules: [
                  {
                    required: true,
                    message: "请选择图纸类型！"
                  }
                ]
              })(
                <Select placeholder="请选择图纸类型">
                  <Option value="内部道路">内部道路</Option>
                  <Option value="出入口">出入口</Option>
                </Select>
              )}
            </Form.Item>
            {this.state.isAdd ? (
              <Form.Item label="图纸">
                {getFieldDecorator("blueprint", {
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
            ) : null}
          </Form>
        </Modal>
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
      </div>
    );
  }
}
export default Form.create()(Blueprint);
