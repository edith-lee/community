import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Carousel, Modal, Button, Form, Row, Col, Select, Upload, Input, Icon, DatePicker, Cascader } from "antd";
import Image from "../../assets/image/timg.jpg";
import Image2 from "../../assets/image/timg2.jpg";
import Image3 from "../../assets/image/timg3.jpg";
import Image4 from "../../assets/image/张勉.jpg"
import Image5 from "../../assets/image/张渊凯.jpg"
import Image6 from "../../assets/image/郑鹏飞_001.jpg"
const { Option } = Select;
class Visitor extends Component {
  state = {
    showViewModal: false,
    showModal: false,
    detail: {},
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData: [
      {
        key: 1,
        enterTime: "2020-02-28 11:11:11",
        leaveTime: "2020-02-28 15:15:15",
        carNum: "粤A12345",
        type: "社会来访",
        doorNum: "1#楼1单元101",
        tel: "13123456789",
        name: "陶正",
        idNum: "310101199406230822",
        image: Image4
      },
      {
        key: 2,
        enterTime: "2020-02-28 10:10:10",
        leaveTime: "2020-02-28 16:16:16",
        carNum: "粤A23456",
        type: "送餐",
        doorNum: "1#楼1单元202",
        tel: "13123456789",
        name: "周佩",
        idNum: "310101199201010622",
        image: Image5
      },
      {
        key: 3,
        enterTime: "2020-02-28 12:12:12",
        leaveTime: "2020-02-28 17:17:17",
        carNum: "粤A34567",
        type: "推销",
        doorNum: "1#楼1单元303",
        tel: "13123456789",
        name: "张英兰",
        idNum: "310101199907251898",
        image: Image6
      }
    ]
  };
  roomOptions = [
    {
      value: '1#楼',
      label: '1#楼',
      children: [
        {
          value: '1单元',
          label: '1单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '2单元',
          label: '2单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '3单元',
          label: '3单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '4单元',
          label: '4单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
      ],
    },
    {
      value: '2#楼',
      label: '2#楼',
      children: [
        {
          value: '1单元',
          label: '1单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '2单元',
          label: '2单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '3单元',
          label: '3单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '4单元',
          label: '4单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
      ],
    },
    {
      value: '3#楼',
      label: '3#楼',
      children: [
        {
          value: '1单元',
          label: '1单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '2单元',
          label: '2单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '3单元',
          label: '3单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '4单元',
          label: '4单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
      ],
    },
    {
      value: '4#楼',
      label: '4#楼',
      children: [
        {
          value: '1单元',
          label: '1单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '2单元',
          label: '2单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '3单元',
          label: '3单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '4单元',
          label: '4单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
      ],
    },
    {
      value: '5#楼',
      label: '5#楼',
      children: [
        {
          value: '1单元',
          label: '1单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '2单元',
          label: '2单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '3单元',
          label: '3单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
        {
          value: '4单元',
          label: '4单元',
          children: [
            { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
            { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
            { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
            { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
            { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
          ],
        },
      ],
    },
  ];
  columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, racord, index) => <span>{index + 1}</span>
    },
    {
      title: "访问人",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "进入时间",
      dataIndex: "enterTime",
      key: "enterTime"
    },
    {
      title: "离开时间",
      dataIndex: "leaveTime",
      key: "leaveTime"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "车牌号",
      dataIndex: "carNum",
      key: "carNum"
    },

    {
      title: "被访问门牌号",
      dataIndex: "doorNum",
      key: "doorNum"
    },
    {
      title: "联系电话",
      dataIndex: "tel",
      key: "tel"
    },
    {
      title: "身份证号",
      dataIndex: "idNum",
      key: "idNum"
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.showViewModal(record);
            }}
          >
            <img
              src={record.image}
              style={{ width: 70, height: 80, margin: "0px auto" }}
            ></img>
          </div>
        );
      }
    }
  ];
  searchFormList = [
    {
      type: "DATES",
      label: "通过时间",
      field: "times",
      initialValue: [moment().subtract(7, "days"), moment()],
      width: 240
    },
    {
      type: "SELECT",
      label: "类型",
      field: "type",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "社会来访" },
        { id: "2", name: "推销" },
        { id: "3", name: "送餐" },
        { id: "4", name: "送水" }
      ]
    },
    {
      type: "INPUT",
      label: "车牌号",
      field: "carNumber",
      width: 200
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
  showViewModal = record => {
    this.setState({
      showViewModal: true,
      detail: record
    });
  };
  handleViewModelCancel = () => {
    this.setState({
      showViewModal: false,
      detail: {}
    });
  };
  showModal = value => {
    if (value === "add") {
      this.setState({
        isAdd: true,
        detail: {},
        showModal: true
      });
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
          values.enterTime = values.enterTime?values.enterTime.format('YYYY-MM-DD HH:mm:ss'):'';
          values.leaveTime = values.leaveTime?values.leaveTime.format('YYYY-MM-DD HH:mm:ss'):'';
          values.doorNum = values.doorNum1 ? values.doorNum1.join("") : '',
          values.image = Image4;
            tableData.push(values);
          this.props.form.resetFields();
          this.setState({
            tableData,
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
        span: 8
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
          title={`访客记录查看 ${this.state.detail.enterTime}-${this.state.detail.leaveTime}`}
          visible={this.state.showViewModal}
          onCancel={this.handleViewModelCancel}
          footer={null}
        >
          <Carousel autoplay>
            <div>
              <img
                src={Image}
                style={{ width: "760px", height: "400px" }}
              ></img>
            </div>
            <div>
              <img
                src={Image2}
                style={{ width: "760px", height: "400px" }}
              ></img>
            </div>
            <div>
              <img
                src={Image3}
                style={{ width: "760px", height: "400px" }}
              ></img>
            </div>
          </Carousel>
        </Modal>
        <Modal
          className="viewWarningModal"
          destroyOnClose={true}
          title={this.state.isAdd ? "访客记录新增" : "访客记录编辑"}
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
                <Form.Item label="访问人">
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "请输入访问人！"
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
                <Form.Item label="进入时间">
                  {getFieldDecorator("enterTime", {
                    rules: [
                      {
                        required: true,
                        message: "请选择进入时间！"
                      },
                    ]
                  })(<DatePicker showTime style={{ width: '100%' }} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="离开时间">
                  {getFieldDecorator("leaveTime", {
                    rules: [
                      {
                        required: true,
                        message: "请选择离开时间！"
                      },
                    ]
                  })(<DatePicker showTime style={{ width: '100%' }} />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="类型">
                  {getFieldDecorator("type", {
                    rules: [
                      {
                        required: true,
                        message: "请选择类型！"
                      },
                    ]
                  })(
                    <Select placeholder="请选择类型">
                      <Option value="社会来访">社会来访</Option>
                      <Option value="送餐">送餐</Option>
                      <Option value="推销">推销</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="车牌号">
                  {getFieldDecorator("carNum", {
                    rules: [
                      {
                        required: true,
                        message: "请输入车牌号！"
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
                <Form.Item label="被访问门牌号">
                  {getFieldDecorator("doorNum1", {
                    rules: [
                      {
                        required: true,
                        message: "请选择被访问门牌号！"
                      },
                    ]
                  })(<Cascader options={this.roomOptions} placeholder="请选择被访问门牌号" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="联系电话">
                  {getFieldDecorator("tel", {
                    rules: [
                      {
                        required: true,
                        message: "请输入联系电话！"
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
                <Form.Item label="身份证号">
                  {getFieldDecorator("idNum", {
                    rules: [
                      {
                        required: true,
                        message: "请输入身份证号！"
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
                <Form.Item label="照片" >
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
      </div >
    );
  }
}
export default Form.create()(Visitor);