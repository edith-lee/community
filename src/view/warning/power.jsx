import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Button, Modal,Form,Input } from "antd";
 class Power extends Component {
  state = {
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    detail: {},
    showModal: false,
    tableData: [
      {
        key: 1,
        warningTime: "2020-02-28 11:11:11",
        doorNum: "1#楼1单元1楼",
        type: "关爱人士",
        name: "沈传喜",
        tel: "12345678987",
        handleName: '张晋荣',
        handleTime: '2020-03-19 14:05:44',
        handleResult: '已核实正常',
        status: 1,
      },
      {
        key: 2,
        warningTime: "2020-02-28 10:10:10",
        doorNum: "2#楼2单元2楼",
        type: "疑似传销",
        name: "刘光涵",
        tel: "12345678987",
        handleName: '赵瑞轩',
        handleTime: '2020-03-19 14:05:44',
        handleResult: '已核实虚警',
        status: 1,
      },
      {
        key: 3,
        warningTime: "2020-02-28 09:09:09",
        doorNum: "3#楼3单元3楼",
        type: "关爱人士",
        name: "侯兴才",
        tel: "12345678987",
        status: 0,
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
      title: "报警时间",
      dataIndex: "warningTime",
      key: "warningTime"
    },
    {
      title: "报警类型",
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
      title: "联系人",
      dataIndex: "name",
      key: "name"
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
      render: (text, record) => record.status === 0 ? <Button type='primary' size='small' onClick={() => { this.showModal(record) }}>处理</Button> : null
    }
  ];
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
      label: "报警类型",
      field: "type",
      initialValue: "all",
      width: 200,
      list: [
        { id: "all", name: "全部" },
        { id: "1", name: "关爱人士" },
        { id: "2", name: "疑似传销" }
      ]
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
  handleSave = () =>{
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let tableData = this.state.tableData
        tableData[2].status =1;
        tableData[2].handleName ='管理员';
        tableData[2].handleTime =moment().format('YYYY-MM-DD HH:mm:ss');
        tableData[2].handleResult = values.handleResult;
        this.setState({
          tableData,
          detail: {},
          showModal: false,
        })
      }
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
          title="电力预警处理"
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
      </div>
    );
  }
}
export default Form.create()(Power);