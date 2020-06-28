import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Tabs, Row, Col, Carousel, Modal } from "antd";
import "../video/video.less";
import Image from "../../assets/image/face1.jpg";
import Image2 from "../../assets/image/face2.jpg";
import Image3 from "../../assets/image/face3.jpg";
import Image11 from "../../assets/image/face11.jpg";
import Image22 from "../../assets/image/face22.jpg";
import Image33 from "../../assets/image/face33.jpg";
const { TabPane } = Tabs;
export default class Face extends Component {
  state = {
    showModel: false,
    warningDetail: {},
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
    warningList: [
      {
        key: 1,
        equipment: "一号设备",
        location: "围墙一号",
        warningTime: "2020-02-28 10:22:11",
        name: "齐聪纪",
        type: "业主",
        src: Image,
        detailImg:Image11,
      },
      {
        key: 2,
        equipment: "二号设备",
        location: "围墙二号",
        warningTime: "2020-02-28 10:22:11",
        name: "方淑倩",
        type: "访客",
        src: Image2,
        detailImg:Image22,
      },
      {
        key: 3,
        equipment: "三号设备",
        location: "围墙三号",
        warningTime: "2020-02-28 10:22:11",
        name: "孙寅",
        type: "快递",
        src: Image3,
        detailImg:Image33,
      }
    ]
  };
  searchFormList1 = [
    {
      type: "DATES",
      label: "统计时间",
      field: "times",
      initialValue: [moment().subtract(7, "days"), moment()],
      width: 240
    },
    {
      type: "SELECT",
      label: "设备",
      field: "equipment",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "一号设备" },
        { id: "2", name: "二号设备" },
        { id: "3", name: "三号设备" }
      ]
    }
  ];
  searchFormList2 = [
    {
      type: "DATES",
      label: "统计时间",
      field: "times",
      initialValue: [moment().subtract(7, "days"), moment()],
      width: 240
    },
    {
      type: "SELECT",
      label: "设备",
      field: "equipment",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "一号设备" },
        { id: "2", name: "二号设备" },
        { id: "3", name: "三号设备" }
      ]
    }
  ];
  handleSearchSubmit1 = values => {
    //console.log(values);
  };
  handleSearchSubmit2 = values => {
    //console.log(values);
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
  showModel = warning => {
    this.setState({
      warningDetail: warning,
      showModel: true
    });
  };
  handleModelCancel = () => {
    this.setState({
      warningDetail: {},
      showModel: false
    });
  };
  render() {
    return (
      <div className="videoWrap">
        <Tabs defaultActiveKey="1">
          <TabPane tab="社区门口" key="1">
            <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
              <MySearchForm
                formList={this.searchFormList1}
                filterSubmit={this.handleSearchSubmit1}
              />
            </div>
            <Row style={{ marginTop: "15px", minHeight: "500px" }}>
              {this.state.warningList.map(item => {
                return (
                  <Col key={item.key} span={8}>
                    <div
                      className="warningItem2"
                      onClick={() => {
                        this.showModel(item);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="video">
                        <img
                          src={item.src}
                          controls="controls"
                          autoPlay="autoplay"
                          loop="loop"
                          width="100%"
                          height="100%"
                        ></img>
                      </div>
                      <div className="title">
                        <div className='location' onClick={() => {
                          this.showModel(item);
                        }}>
                          <div style={{ width: 100 }}>{item.equipment}</div>
                          <div>{item.location}</div>
                        </div>
                        <div className='location2' onClick={() => {
                          this.showModel(item);
                        }}>
                          <div style={{ width: 160 }}>{item.warningTime}</div>
                        </div>
                        <div className='location2' onClick={() => {
                          this.showModel(item);
                        }}>
                          <div>{item.name}</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <MyPagination
              pagination={this.state.pagination1}
              onChange={this.handlePaginationChange1}
              showSizeChange={false}
            />
          </TabPane>
          <TabPane tab="单元门禁" key="2">
            <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
              <MySearchForm
                formList={this.searchFormList2}
                filterSubmit={this.handleSearchSubmit2}
              />
            </div>
            <Row style={{ marginTop: "15px", minHeight: "500px" }}>
              {this.state.warningList.map(item => {
                return (
                  <Col key={item.key} span={8}>
                    <div
                      className="warningItem2"
                      onClick={() => {
                        this.showModel(item);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="video">
                        <img
                          src={item.src}
                          controls="controls"
                          autoPlay="autoplay"
                          loop="loop"
                          width="100%"
                          height="100%"
                        ></img>
                      </div>
                      <div className="title">
                        <div className='location' onClick={() => {
                          this.showModel(item);
                        }}>
                          <div style={{ width: 100 }}>{item.equipment}</div>
                          <div>{item.location}</div>
                        </div>
                        <div className='location2' onClick={() => {
                          this.showModel(item);
                        }}>
                          <div style={{ width: 160 }}>{item.warningTime}</div>
                        </div>
                        <div className='location2' onClick={() => {
                          this.showModel(item);
                        }}>
                          <div>{item.name}</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <MyPagination
              pagination={this.state.pagination2}
              onChange={this.handlePaginationChange2}
              showSizeChange={false}
            />
          </TabPane>
        </Tabs>
        <Modal
          className="viewfaceModal"
          title="通行数据展示"
          visible={this.state.showModel}
          onCancel={this.handleModelCancel}
          footer={null}
        >
          <div className="warningContentWarp">
            <div className="photoWrap">
                <div>
                  <img
                    src={this.state.warningDetail.detailImg}
                    style={{ width: "600px", height: "400px" }}
                  ></img>
                </div>
            </div>
            <div className="warningForm">
              <div className="formItem">
                <div className="title">设备名称：</div>
                <div>{this.state.warningDetail.equipment}</div>
              </div>
              <div className="formItem">
                <div className="title">设备位置：</div>
                <div>{this.state.warningDetail.location}</div>
              </div>
              <div className="formItem">
                <div className="title">预警时间：</div>
                <div>{this.state.warningDetail.warningTime}</div>
              </div>
              <div className="formItem">
                <div className="title">通行人：</div>
                <div>{this.state.warningDetail.name}</div>
              </div>
              <div className="formItem">
                <div className="title">标签：</div>
                <div>{this.state.warningDetail.type}</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
