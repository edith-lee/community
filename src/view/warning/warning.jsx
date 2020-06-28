import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Row, Col, Modal, Carousel, Switch } from "antd";
import "../video/video.less";
import Image from "../../assets/image/timg.jpg";
import Image2 from "../../assets/image/timg2.jpg";
import Image3 from "../../assets/image/timg3.jpg";
export default class Warning extends Component {
  state = {
    showModel: false,
    warningDetail: {},
    pagination: {
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
        showBorder: true,
        showObject: true,
        showVideo: true,
        src: Image
      },
      {
        key: 2,
        equipment: "二号设备",
        location: "围墙二号",
        warningTime: "2020-02-28 10:22:11",
        showBorder: true,
        showObject: true,
        showVideo: true,
        src: Image2
      },
      {
        key: 3,
        equipment: "三号设备",
        location: "围墙三号",
        warningTime: "2020-02-28 10:22:11",
        showBorder: true,
        showObject: true,
        showVideo: true,
        src: Image3
      }
    ]
  };
  handlePaginationChange = pagination => {
    this.setState({
      pagination
    });
  };
  searchFormList = [
    {
      type: "DATES",
      label: "报警时间",
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
  handleSearchSubmit = values => {
    //console.log(values);
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
  confirm =() =>{}
  render() {
    return (
      <div className="videoWrap">
        <div className="searchFormWrap">
          <MySearchForm
            formList={this.searchFormList}
            filterSubmit={this.handleSearchSubmit}
          />
        </div>
        <Row style={{ marginTop: "15px", minHeight: "520px" }}>
          {this.state.warningList.map(item => {
            return (
              <Col key={item.key} span={8}>
                <div
                  className="warningItem"
                  
                  style={{ cursor: "pointer" }}
                >
                  <div className="video" onClick={() => {
                    this.showModel(item);
                  }}>
                    <img
                      src={item.src}
                      controls="controls"
                      autoPlay="autoplay"
                      loop="loop"
                      width="100%"
                      height="99%"
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
                      <div>报警对象：无</div>
                    </div>
                    <div className='buttons'>
                      <div className='action' style={{color:'green'}} onClick={this.confirm}>确认</div>
                      <div className='action' style={{color:'red'}}  onClick={this.confirm}>虚警</div>
                      <div className='action-end' style={{color:'#0072dc'}}  onClick={this.confirm}>忽略</div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <MyPagination
          pagination={this.state.pagination}
          onChange={this.handlePaginationChange}
          showSizeChange={false}
        />
        <Modal
          className="viewWarningModal"
          title="预警展示"
          visible={this.state.showModel}
          onCancel={this.handleModelCancel}
          footer={null}
        >
          <div className="warningContentWarp">
            <div className="photoWrap">
              <Carousel autoplay>
                <div>
                  <img
                    src={Image}
                    style={{ width: "440px", height: "400px" }}
                  ></img>
                </div>
                <div>
                  <img
                    src={Image2}
                    style={{ width: "440px", height: "400px" }}
                  ></img>
                </div>
                <div>
                  <img
                    src={Image3}
                    style={{ width: "440px", height: "400px" }}
                  ></img>
                </div>
              </Carousel>
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
                <div className="title">围界展示：</div>
                <div>
                  <Switch checked={this.state.warningDetail.showBorder} />
                </div>
              </div>
              <div className="formItem">
                <div className="title">报警对象展示：</div>
                <div>
                  <Switch checked={this.state.warningDetail.showObject} />
                </div>
              </div>
              <div className="formItem">
                <div className="title">视频：</div>
                <div>
                  <Switch checked={this.state.warningDetail.showVideo} />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
