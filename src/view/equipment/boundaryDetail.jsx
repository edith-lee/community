import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import { Modal, Button } from "antd";
class People extends Component {
  state = {
    isAdd: false,
    detail: {},
    showModal: false,
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    tableData: [
      {
        key: 1,
        times: "00:00:00----24:00:00",
        type: "每天",
        status: "开启"
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
      title: "时间",
      dataIndex: "times",
      key: "times"
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            {record.status == "开启" ? (
              <Button
                size="small"
                type="danger"
                style={{ marginRight: 10 }}
                onClick={() => {
                  this.changeStatus(record.key);
                }}
              >
                关闭
              </Button>
            ) : (
              <Button
                size="small"
                type="primary"
                style={{ marginRight: 10 }}
                onClick={() => {
                  this.changeStatus(record.key);
                }}
              >
                开启
              </Button>
            )}
            <Button
              size="small"
              type="danger"
              style={{ marginRight: 10 }}
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
  searchFormList = [
    {
      type: "DATES",
      label: "时间",
      field: "times",
      width: 200
    },
    {
      type: "CHECKBOX",
      label: "工作日",
      field: "day"
    },
    {
      type: "CHECKBOX",
      label: "周末",
      field: "day2"
    },
    {
      type: "CHECKBOX",
      label: "每天",
      field: "everyday"
    }
  ];
  changeStatus = key => {
    let tableData = this.state.tableData;
    let newData = [];
    tableData.map(item => {
      if (item.key === key) {
        let newStatus = item.status == "开启" ? "关闭" : "开启";
        newData.push({
          ...item,
          status: newStatus
        });
      } else {
        newData.push(item);
      }
    });
    this.setState({
      tableData: newData
    });
  };
  delete = key => {
    Modal.confirm({
      title: "删除",
      content: "是否确认要删除此记录，删除后不可恢复？",
      okText: "确定",
      cancelText: "取消",
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
  render() {
    return (
      <div style={{ padding: 20 }} className='boundary1'>
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
                // this.showModal("add");
              }}
            >
              新增
            </Button>
          </div>
        </div>
        <div style={{ minHeight: "520px" }}>
          <MyTable columns={this.columns} data={this.state.tableData} />
        </div>
      </div>
    );
  }
}
export default People;
