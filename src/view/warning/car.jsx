import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Button, Modal, Form, Input, Tabs } from "antd";
import Police from './police'
import Image1 from '../../assets/image/keyVehicle1.jpg'
import Image2 from '../../assets/image/keyVehicle2.jpg'
import Image3 from '../../assets/image/keyVehicle3.jpg'
import Image4 from '../../assets/image/keyVehicle4.jpg'
const { TabPane } = Tabs;
class Car extends Component {
  state = {
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    showDetailModal: false,
    detail: {},
    tableData2: [],
    showModal: false,
    throughData: [
      {
        key: 1,
        throughTime: '2020-03-19 15:36:07',
        enter: '出',
        img: Image1
      },
      {
        key: 2,
        throughTime: '2020-03-19 15:30:07',
        enter: '入',
        img: Image2
      },
      {
        key: 3,
        throughTime: '2020-03-19 14:13:11',
        enter: '出',
        img: Image3
      },
      {
        key: 4,
        throughTime: '2020-03-19 14:10:23',
        enter: '入',
        img: Image4
      },
      {
        key: 5,
        throughTime: '2020-03-19 12:35:32',
        enter: '出',
        img: Image1
      },
      {
        key: 6,
        throughTime: '2020-03-19 12:17:17',
        enter: '入',
        img: Image2
      },
      {
        key: 7,
        throughTime: '2020-03-19 10:10:43',
        enter: '出',
        img: Image3
      },
      {
        key: 8,
        throughTime: '2020-03-19 09:45:06',
        enter: '入',
        img: Image4
      },
      {
        key: 9,
        throughTime: '2020-03-19 09:02:43',
        enter: '出',
        img: Image1
      }, {
        key: 10,
        throughTime: '2020-03-19 07:21:56',
        enter: '入',
        img: Image2
      }
    ],
    tableData: [
      {
        key: 1,
        carNum: '粤AGX588',
        name: "石俊梅",
        linkIphone: "18747824528",
        throughNum: 10,
        roomNum: "1#楼3单元302",
        lastTime: "2020-03-19 14:56:53",
        handleName: '邱雨',
        type: '住户车辆',
        handleTime: '2020-03-19 14:05:44',
        handleResult: '已核实正常',
        status: 1,
      },
      {
        key: 2,
        carNum: '粤A660HB',
        name: "贾乐",
        linkIphone: "18742785298",
        roomNum: "5#楼1单元202",
        throughNum: 4,
        type: '住户车辆',
        lastTime: "2020-03-19 13:57:33",
        handleName: '严蓉',
        handleTime: '2020-03-19 14:05:44',
        handleResult: '已核实虚警',
        status: 1,
      },
      {
        key: 3,
        carNum: '粤ACX637',
        name: "李开英",
        type: '物业车辆',
        linkIphone: "18729075667",
        roomNum: "3#楼1单元104",
        throughNum: 7,
        lastTime: "2020-03-19 14:52:57",
        status: 0,
      }
    ]
  };
  columns2 = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "通过时间",
      dataIndex: "throughTime",
      key: "throughTime"
    },
    {
      title: "出/入",
      dataIndex: "enter",
      key: "enter"
    },
    {
      title: "车牌号",
      dataIndex: "carNum",
      key: "carNum"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "门牌号",
      dataIndex: "roomNum",
      key: "roomNum"
    },
    {
      title: "联系电话",
      dataIndex: "linkIphone",
      key: "linkIphone"
    },
    {
      title: "车主",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "现场采集图",
      dataIndex: "img",
      key: "img",
      render: (text, record) => {
        return <div> <img src={record.img} style={{ width: '100px', height: '50px', margin: '0px auto' }} /></div>

      }
    },
  ]
  columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "车牌号",
      dataIndex: "carNum",
      key: "carNum"
    },
    {
      title: "车主",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "联系电话",
      dataIndex: "linkIphone",
      key: "linkIphone"
    },
    {
      title: "进出次数",
      dataIndex: "throughNum",
      key: "throughNum"
    },
    {
      title: "最后一次通行时间",
      dataIndex: "lastTime",
      key: "lastTime"
    },
    {
      title: "处理状态",
      dataIndex: "status",
      key: "status",
      render: (text, record) => record.status ? '已处理' : '未处理'
    },
    {
      title: "处理人",
      dataIndex: "handleName",
      key: "handleName",
    },
    {
      title: "处理时间",
      dataIndex: "handleTime",
      key: "handleTime",
    },
    {
      title: "处理结果",
      dataIndex: "handleResult",
      key: "handleResult",
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        if (record.status === 0) {
          return <div>
            <Button type='primary' size='small' onClick={() => { this.showDetailModal(record) }} style={{ marginRight: '10px' }}>查看详情</Button>
            <Button type='primary' size='small' onClick={() => { this.showModal(record) }}>处理</Button>
          </div>
        } else {
          return <div>
            <Button type='primary' size='small' onClick={() => { this.showDetailModal(record) }} style={{ marginRight: '10px' }}>查看详情</Button>
          </div>
        }
      }
    }
  ];
  searchFormList = [
    {
      type: "DATE",
      label: "时间",
      field: "times",
      width: 240
    },
    {
      type: "INPUT",
      label: "车牌号",
      field: "carNum",
      width: 200,
    },
    {
      type: "INPUT",
      label: "进出次数",
      field: "throughNum",
      width: 200,
    },
    {
      type: "SELECT",
      label: "处理状态",
      field: "status",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "未处理" },
        { id: "2", name: "已处理" }
      ]
    }
  ];
  showModal = (data) => {
    this.setState({
      detail: data,
      showModal: true,
    })
  }
  handleModalCancel = () => {
    this.setState({
      detail: {},
      showModal: false,
    })
  }
  handleSearchSubmit = values => {
    //console.log(values);
  };
  handlePaginationChange = pagination => {
    this.setState({
      pagination
    });
  };
  showDetailModal = (record) => {
    let tableData2 = []
    let throughData = this.state.throughData
    for (let i = 0; i < record.throughNum; i++) {
      tableData2.push({
        ...throughData[i],
        carNum: record.carNum,
        type: record.type,
        roomNum: record.roomNum,
        linkIphone: record.linkIphone,
        name: record.name
      })
    }
    this.setState({
      tableData2,
      showDetailModal: true,
    })
  }
  handleSave = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let tableData = this.state.tableData
        tableData[2].status = 1;
        tableData[2].handleName = '管理员';
        tableData[2].handleTime = moment().format('YYYY-MM-DD HH:mm:ss');
        tableData[2].handleResult = values.handleResult;
        this.setState({
          tableData,
          detail: {},
          showModal: false,
        })
      }
    })
  }
  handleDetailModalCancel = () => {
    this.setState({
      showDetailModal: false,
      tableData2: []
    })
  }
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
        <Tabs defaultActiveKey="1">
          <TabPane tab="出入异常预警" key="1">
            <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
              <MySearchForm
                formList={this.searchFormList}
                filterSubmit={this.handleSearchSubmit}
              />
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
              title="出入异常预警处理"
              visible={this.state.showModal}
              onCancel={this.handleModalCancel}
              footer={
                <div style={{ textAlign: "center" }}>
                  <Button type="primary" onClick={this.handleSave}>
                    保存
              </Button>
                </div>
              }>
              <Form {...formItemLayout}>
                <Form.Item label="处理结果">
                  {getFieldDecorator("handleResult", {
                    rules: [
                      {
                        required: true,
                        message: "请输入处理结果！"
                      }
                    ]
                  })(
                    <Input />
                  )}
                </Form.Item>
              </Form>
            </Modal>
            <Modal
              className='viewCarModal'
              destroyOnClose={true}
              title="车辆出入记录"
              visible={this.state.showDetailModal}
              onCancel={this.handleDetailModalCancel}
              footer={null}>
              <MyTable columns={this.columns2} data={this.state.tableData2} />
            </Modal>
          </TabPane>
          <TabPane tab="警务布控预警" key="2">
            <Police />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Form.create()(Car);