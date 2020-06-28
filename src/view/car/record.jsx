import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Carousel, Modal, Tabs } from "antd";
import Image from "../../assets/image/timg.jpg";
import Image2 from "../../assets/image/timg2.jpg";
import Image3 from "../../assets/image/timg3.jpg";
import Video from './video'
const { TabPane } = Tabs;
export default class Record extends Component {
  state = {
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
        throughTime: "2020-02-28 11:11:11",
        enter: "出",
        carNum: "粤A12345",
        type: "业主",
        doorNum: "1#楼1单元101",
        tel: "13123456789",
        name: "张顺廉",
        image: Image
      },
      {
        key: 2,
        throughTime: "2020-02-28 10:10:10",
        enter: "入",
        carNum: "粤A23456",
        type: "访客",
        doorNum: "1#楼1单元202",
        tel: "13123456789",
        name: "周琦",
        image: Image2
      },
      {
        key: 3,
        throughTime: "2020-02-28 09:09:09",
        enter: "出",
        carNum: "粤A34567",
        type: "快递",
        doorNum: "1#楼1单元303",
        tel: "13123456789",
        name: "谢夏光",
        image: Image3
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
      dataIndex: "doorNum",
      key: "doorNum"
    },
    {
      title: "联系电话",
      dataIndex: "tel",
      key: "tel"
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
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
              this.showModal(record);
            }}
          >
            <img
              src={record.image}
              style={{ width: 120, height: 60, margin: "0px auto" }}
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
      label: "出/入",
      field: "enter",
      initialValue: "all",
      width: 120,
      list: [
        { id: "all", name: "全部" },
        { id: "出", name: "出" },
        { id: "入", name: "入" }
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
  showModal = record => {
    this.setState({
      showModal: true,
      detail: record
    });
  };
  handleModelCancel = () => {
    this.setState({
      showModal: false,
      detail: {}
    });
  };
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="往来记录" key="1">
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
          className="viewWarningModal"
          title={`${this.state.detail.carNum} ${this.state.detail.throughTime}`}
          visible={this.state.showModal}
          onCancel={this.handleModelCancel}
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
          </TabPane>
          <TabPane tab="视频回放" key="2">
            <Video />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
