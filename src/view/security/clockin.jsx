import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
export default class Clockin extends Component {
  state = {
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData: [
      {
        key: 1,
        class: "早班",
        clockInName: "易江维",
        shouldClock: "易江维(18665575837),周晨(18665575837),韩汇南(18665575837),",
        date: "2020-02-28",
        clockinTime: "08:00:00",
        clockoutTime: "16:00:00"
      },
      {
        key: 2,
        class: "中班",
        clockInName: "周晨",
        shouldClock: "易江维(18665575837),周晨(18665575837),韩汇南(18665575837),",
        date: "2020-02-28",
        clockinTime: "16:00:00",
        clockoutTime: "00:00:00"
      },
      {
        key: 3,
        class: "晚班",
        clockInName: "韩汇南",
        shouldClock: "易江维(18665575837),周晨(18665575837),韩汇南(18665575837),",
        date: "2020-02-28",
        clockinTime: "00:00:00",
        clockoutTime: "08:00:00"
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
      title: "班次",
      dataIndex: "class",
      key: "class"
    },
    {
      title: "值班人员",
      dataIndex: "clockInName",
      key: "name"
    },
    {
      title: "应值班人员",
      dataIndex: "shouldClock",
      key: "shouldClock"
    },
    {
      title: "日期",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "打卡时间",
      dataIndex: "clockinTime",
      key: "clockinTime"
    },
    {
      title: "签退时间",
      dataIndex: "clockoutTime",
      key: "clockoutTime"
    }
  ];
  searchFormList = [
    {
      type: "SELECT",
      label: "班次",
      field: "class",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "早班" },
        { id: "2", name: "中班" },
        { id: "3", name: "晚班" }
      ]
    },
    {
      type: "DATE",
      label: "日期",
      field: "date",
      initialValue: moment(),
      width: 200
    },

    {
      type: "INPUT",
      label: "姓名",
      field: "name",
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
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
