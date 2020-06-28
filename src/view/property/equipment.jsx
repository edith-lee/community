import React, { Component } from "react";
import { Tabs, Button, Icon, Modal, Form, DatePicker, Input } from "antd";
import MyPagination from "../../component/myPagination/myPagination";
import MyTable from "../../component/myTable/myTable";
import BuildingModal from "./buildingModal";
import ElevatorModal from "./elevatorModal";
import Image from "../../assets/image/tuzhi.jpg"
const { TabPane } = Tabs;
class Equipment extends Component {
  state = {
    showBuildingModal: false,
    showElevatorModal: false,
    showPreviewModal:false,
    showRecordModal: false,
    isAdd: false,
    buildingDetail: {},
    elevatorDetail: {},
    pagination1: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    pagination2: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    pagination3: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData1: [
      {
        key: 1,
        number: "1#楼",
        unitNum:'2单元',
        rooms: "40",
        floors: "10",
        url: ""
      },
      {
        key: 2,
        number: "2#楼",
        unitNum:'4单元',
        rooms: "40",
        floors: "10",
        url: ""
      },
      {
        key: 3,
        number: "3#楼",
        unitNum:'4单元',
        rooms: "40",
        floors: "10",
        url: ""
      }
    ],
    tableData2: [
      {
        key: 1,
        elevator: "1号电梯",
        buildingNum: "1#楼",
        brand: "通力",
        timeLimit: "2030-12-01"
      },
      {
        key: 2,
        elevator: "2号电梯",
        buildingNum: "2#楼",
        brand: "通力",
        timeLimit: "2030-12-01"
      },
      {
        key: 3,
        elevator: "2号电梯",
        buildingNum: "2#楼",
        brand: "通力",
        timeLimit: "2030-12-01"
      }
    ],
    record: [
      { key: 1, time: "2020-02-28", remark: "线路故障维修" },
      { key: 2, time: "2020-02-27", remark: "线路故障维修" },
      { key: 3, time: "2020-02-26", remark: "线路故障维修" },
      { key: 4, time: "2020-02-25", remark: "线路故障维修" }
    ]
  };
  columns1 = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "楼",
      dataIndex: "number",
      key: "number"
    },
    {
      title: "单元数",
      dataIndex: "unitNum",
      key: "unitNum"
    },
    {
      title: "房数",
      dataIndex: "rooms",
      key: "rooms"
    },
    {
      title: "楼层",
      dataIndex: "floors",
      key: "floors"
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
                this.showBuildingModal(record);
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
  columns2 = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "电梯",
      dataIndex: "elevator",
      key: "elevator"
    },
    {
      title: "所属楼",
      dataIndex: "buildingNum",
      key: "buildingNum"
    },
    {
      title: "电梯品牌",
      dataIndex: "brand",
      key: "brand"
    },
    {
      title: "使用期限",
      dataIndex: "timeLimit",
      key: "timeLimit"
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
                this.showElevatorModal(record);
              }}
            >
              编辑
            </Button>
            <Button
              style={{ marginRight: 10 }}
              size="small"
              type="danger"
              onClick={() => {
                this.delete2(record.key);
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
  showPreviewModal = () =>{
    this.setState({
      showPreviewModal:true
    })
  }
  delete2 = key => {
    Modal.confirm({
      title: "电梯删除",
      content: "是否确认要删除此记录，删除后不可恢复？",
      okText:'确定',
      cancelText:'取消',
      onOk: () => {
        let tableData2 = this.state.tableData2;
        let newData = [];
        tableData2.map(item => {
          if (item.key !== key) {
            newData.push(item);
          }
        });
        this.setState({
          tableData2: newData
        });
      }
    });
  };
  delete = key => {
    Modal.confirm({
      title: "楼栋删除",
      content: "是否确认要删除此记录，删除后不可恢复？",
      okText:'确定',
      cancelText:'取消',
      onOk: () => {
        let tableData1 = this.state.tableData1;
        let newData = [];
        tableData1.map(item => {
          if (item.key !== key) {
            newData.push(item);
          }
        });
        this.setState({
          tableData1: newData
        });
      }
    });
  };
  handlePaginationChange1 = pagination1 => {
    this.setState({
      pagination1
    });
  };
  handlePaginationChange2 = pagination2 => {
    this.setState({
      pagination2
    });
  };
  handlePaginationChange3 = pagination3 => {
    this.setState({
      pagination3
    });
  };
  showBuildingModal = value => {
    if (value === "add") {
      this.setState({
        showBuildingModal: true,
        isAdd: true,
        buildDetail: {}
      });
    } else {
      this.setState({
        showBuildingModal: true,
        isAdd: false,
        buildDetail: value
      });
    }
  };
  handleBuildingModalCancel = () => {
    this.setState({
      showBuildingModal: false,
      isAdd: false,
      buildDetail: {}
    });
  };
  handleBuildingModalOk = values => {
    if (this.state.isAdd) {
      let tableData1 = this.state.tableData1;
      tableData1.push({
        key: tableData1.length + 1,
        ...values
      });
      this.setState({
        tableData1,
        showBuildingModal: false,
        isAdd: false,
        buildDetail: {}
      });
    } else {
      let tableData1 = this.state.tableData1;
      let newData = [];
      tableData1.map(item => {
        if (item.key === values.key) {
          newData.push(values);
        } else {
          newData.push(item);
        }
      });
      this.setState({
        tableData1: newData,
        showBuildingModal: false,
        isAdd: false,
        buildDetail: {}
      });
    }
  };
  showElevatorModal = value => {
    if (value === "add") {
      this.setState({
        showElevatorModal: true,
        isAdd: true,
        elevatorDetail: {}
      });
    } else {
      this.setState({
        showElevatorModal: true,
        isAdd: false,
        elevatorDetail: value
      });
    }
  };
  handleElevatorModalCancel = () => {
    this.setState({
      showElevatorModal: false,
      isAdd: false,
      elevatorDetail: {}
    });
  };
  handleElevatorModalOk = values => {
    if (this.state.isAdd) {
      let tableData2 = this.state.tableData2;
      tableData2.push({
        key: tableData2.length + 1,
        ...values
      });
      this.setState({
        tableData2,
        showElevatorModal: false,
        isAdd: false,
        elevatorDetail: {}
      });
    } else {
      let tableData2 = this.state.tableData2;
      let newData = [];
      tableData2.map(item => {
        if (item.key === values.key) {
          newData.push(values);
        } else {
          newData.push(item);
        }
      });
      this.setState({
        tableData2: newData,
        showElevatorModal: false,
        isAdd: false,
        elevatorDetail: {}
      });
    }
  };
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
  handlePreviewModalCancel = () =>{
    this.setState({
      showPreviewModal:false
    })
  }
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
        <Tabs defaultActiveKey="1">
          <TabPane tab="楼" key="1">
            <div style={{ marginBottom: "10px", textAlign: "right" }}>
              <Button
                type="primary"
                onClick={() => {
                  this.showBuildingModal("add");
                }}
              >
                新增
              </Button>
            </div>
            <div style={{ minHeight: "500px" }}>
              <MyTable columns={this.columns1} data={this.state.tableData1} />
            </div>
            <MyPagination
              pagination={this.state.pagination1}
              onChange={this.handlePaginationChange1}
              showSizeChange={true}
            />
          </TabPane>
          <TabPane tab="电梯" key="2">
            <div style={{ marginBottom: "10px", textAlign: "right" }}>
              <Button
                type="primary"
                onClick={() => {
                  this.showElevatorModal("add");
                }}
              >
                新增
              </Button>
            </div>
            <div style={{ minHeight: "500px" }}>
              <MyTable columns={this.columns2} data={this.state.tableData2} />
            </div>
            <MyPagination
              pagination={this.state.pagination2}
              onChange={this.handlePaginationChange2}
              showSizeChange={true}
            />
          </TabPane>
        </Tabs>
        <BuildingModal
          visible={this.state.showBuildingModal}
          isAdd={this.state.isAdd}
          buildDetail={this.state.buildDetail}
          handleCancel={this.handleBuildingModalCancel}
          handleOk={this.handleBuildingModalOk}
        />
        <ElevatorModal
          visible={this.state.showElevatorModal}
          isAdd={this.state.isAdd}
          elevatorDetail={this.state.elevatorDetail}
          handleCancel={this.handleElevatorModalCancel}
          handleOk={this.handleElevatorModalOk}
        />
        <Modal
          className="viewVideoModal"
          destroyOnClose={true}
          title="电梯维修记录"
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
export default Form.create()(Equipment);
