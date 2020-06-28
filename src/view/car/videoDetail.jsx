import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Modal } from "antd";
import { Link } from "react-router-dom";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyPagination from "../../component/myPagination/myPagination";
import FangdaImg from "../../assets/image/fangda.png";
import Mp41 from "../../assets/mp4/monitor1.mp4";
import Mp42 from "../../assets/mp4/monitor2.mp4";
import Mp43 from "../../assets/mp4/monitor3.mp4";
import Mp44 from "../../assets/mp4/monitor4.mp4";
import Mp45 from "../../assets/mp4/monitor5.mp4";
import Mp46 from "../../assets/mp4/monitor6.mp4";
import Mp47 from "../../assets/mp4/monitor7.mp4";
import "../video/video.less";
export default class VideoDtail extends Component {
  state = {
    time: "",
    showVideoModel: false,
    viewVideo: {
      equipment: "",
      location: "",
      src: ""
    },
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    videoList: [
      {
        key: 1,
        equipment: "设备1",
        location: "位置1",
        src: Mp41
      },
      {
        key: 2,
        equipment: "设备2",
        location: "位置2",
        src: Mp42
      },
      {
        key: 3,
        equipment: "设备3",
        location: "位置3",
        src: Mp43
      },
      {
        key: 4,
        equipment: "设备4",
        location: "位置4",
        src: Mp45
      },
      {
        key: 5,
        equipment: "设备5",
        location: "位置5",
        src: Mp46
      }
    ]
  };
  searchFormList = [
    {
      type: "SELECT",
      label: "设备",
      field: "equipment",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "设备1" },
        { id: "2", name: "设备2" },
        { id: "3", name: "设备3" }
      ]
    },
    {
      type: "SELECT",
      label: "位置",
      field: "location",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "位置1" },
        { id: "2", name: "位置2" },
        { id: "3", name: "位置3" }
      ]
    }
  ];
  handleSearchSubmit = values => {
    //console.log(values);
  };
  componentDidMount = () => {
    if (this.props.match.params.time) {
      this.setState({
        time: this.props.match.params.time
      });
    }
  };
  showVideoModel = video => {
    //console.log(video);
    this.setState({
      viewVideo: video,
      showVideoModel: true
    });
  };
  handleVideoModelCancel = () => {
    this.setState({
      showVideoModel: false,
      viewVideo: { equipment: "", location: "", src: "" }
    });
  };
  render() {
    return (
      <div className="videoWrap">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>
            <Link to="/main/car/record">
              <Icon type="folder-open" style={{ marginRight: 5 }} /> 车辆往来记录
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="calendar" style={{ marginRight: 5 }} />
            {this.state.time}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
          <MySearchForm
            formList={this.searchFormList}
            filterSubmit={this.handleSearchSubmit}
          />
        </div>
        <Row style={{ marginTop: "15px", minHeight: 500 }}>
          {this.state.videoList.map(item => {
            return (
              <Col key={item.key} span={8}>
                <div className="videoItem">
                  <div className="video">
                    <video
                      src={item.src}
                      controls="controls"
                      autoPlay="autoplay"
                      loop="loop"
                      width="100%"
                      height="100%"
                    ></video>
                  </div>
                  <div className="title">
                    <div>{`${item.equipment}(${item.location})`}</div>
                    <div
                      onClick={() => {
                        this.showVideoModel(item);
                      }}
                    >
                      <img src={FangdaImg} className="fangdaBtn"></img>
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
          className="viewVideoModal"
          title={`${this.state.viewVideo.equipment}(${this.state.viewVideo.location})`}
          visible={this.state.showVideoModel}
          onCancel={this.handleVideoModelCancel}
          footer={null}
        >
          <video
            src={
              this.state.viewVideo.src === "" ? null : this.state.viewVideo.src
            }
            controls="controls"
            autoPlay="autoplay"
            width="100%"
            height="100%"
          ></video>
        </Modal>
      </div>
    );
  }
}
