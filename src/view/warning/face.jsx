import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import Image from "../../assets/image/face1.jpg";
import Image2 from "../../assets/image/face2.jpg";
import Image3 from "../../assets/image/face3.jpg";
import Image11 from "../../assets/image/face11.jpg";
import Image22 from "../../assets/image/face22.jpg";
import Image33 from "../../assets/image/face33.jpg";
import { Button, Modal,Form,Input } from "antd";
 class Face extends Component {
  state = {
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1
    },
    detail: {},
    showPhotoModal:false,
    showModal: false,
    tableData: [
      {
        key: 1,
        warningTime: "2020-02-28 11:11:11",
        enter:'出',
        name: "赵梦莎",
        tel: "12345678987",
        handleName: '何佩遥',
        handleTime: '2020-03-19 14:05:44',
        handleResult: '已核实正常',
        status: 1,
        img:Image,
        detailImg:Image11,
      },
      {
        key: 2,
        warningTime: "2020-02-28 10:10:10",
        name: "宋子豪",
        enter:'出',
        tel: "12345678987",
        handleName: '李宜阳',
        handleTime: '2020-03-19 14:05:44',
        handleResult: '已核实虚警',
        status: 1,
        img:Image2,
        detailImg:Image22,
      },
      {
        key: 3,
        warningTime: "2020-02-28 09:09:09",
        doorNum: "3#楼3单元3楼",
        name: "曾骁杲",
        enter:'入',
        tel: "12345678987",
        status: 0,
        img:Image3,
        detailImg:Image33,
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
      dataIndex: "warningTime",
      key: "warningTime"
    },
    {
      title: "出/入",
      dataIndex: "enter",
      key: "enter"
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "联系电话",
      dataIndex: "tel",
      key: "tel"
    },
    {
      title: "现场采集图",
      dataIndex: "image",
      key: "image",
      render: (text, record) => {
        return <div onClick={()=>{this.showPhotoModal(record)}}> <img src={record.img} style={{ width: '70px', height: '80px', margin: '0px auto' }} /></div>
    }
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
  showPhotoModal = data =>{
    this.setState({
      detail: data,
      showPhotoModal: true,
    })
  }
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
  handlePhotoModalCancel = () =>{
    this.setState({
      detail:{},
      showPhotoModal:false
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
          title="人脸预警处理"
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
          className='viewRoomModal'
          destroyOnClose={true}
          title="人脸详情"
          visible={this.state.showPhotoModal}
          onCancel={this.handlePhotoModalCancel}
          footer={null}>
          <img src={this.state.detail.detailImg} style={{width:'850px'}}></img>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Face);