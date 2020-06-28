import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Row, Col } from "antd";
import { withRouter } from 'react-router-dom'
import "../video/video.less"
class Video extends Component {
  state = {
    pagination: {
        total: 100,
        pageSize: 10,
        current: 1
      },
    timeList: [
      moment().format("YYYY-MM-DD"),
      moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD"),
      moment()
        .subtract(2, "days")
        .format("YYYY-MM-DD"),
      moment()
        .subtract(3, "days")
        .format("YYYY-MM-DD"),
      moment()
        .subtract(4, "days")
        .format("YYYY-MM-DD"),
      moment()
        .subtract(5, "days")
        .format("YYYY-MM-DD")
    ]
  };
  searchFormList = [
    {
      type: "DATES",
      label: "查询时间",
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
  handlePaginationChange = pagination => {
    this.setState({
      pagination
    });
  };
  render() {
    return (
        <div className="videoWrap">
        <div className="searchFormWrap" style={{ marginBottom: "10px" }}>
          <MySearchForm
            formList={this.searchFormList}
            filterSubmit={this.handleSearchSubmit}
          />
        </div>
        <Row style={{minHeight:520}}>
          {this.state.timeList.map(item => {
            return (
              <Col span={6} key={item}>
                <div className='timeItem' onClick={()=>{this.props.history.push(`/main/car/video/detail/${item}`)}}>{item}</div>
              </Col>
            );
          })}
        </Row>
        <MyPagination
          pagination={this.state.pagination}
          onChange={this.handlePaginationChange}
          showSizeChange={false}
        />
      </div>
    );
  }
}
export default withRouter(Video)