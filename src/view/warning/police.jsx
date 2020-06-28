import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import moment from "moment";
import { Button, Modal, Form, Input } from "antd";
import Image1 from '../../assets/image/keyVehicle1.jpg'
import Image2 from '../../assets/image/keyVehicle2.jpg'
import Image3 from '../../assets/image/keyVehicle3.jpg'
import Image4 from '../../assets/image/keyVehicle4.jpg'
class Police extends Component {
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
                throughTime: '2020-03-19 12:35:32',
                enter: '出',
                img: Image1,
                carNum: '粤AGX588',
                handleName: '王山崎',
                handleTime: '2020-03-19 14:05:44',
                handleResult: '已核实正常',
                status: 1,
            },
            {
                key: 2,
                carNum: '粤A660HB',
                throughTime: '2020-03-19 12:17:17',
                enter: '入',
                img: Image2,
                handleName: '刘润生',
                handleTime: '2020-03-19 14:05:44',
                handleResult: '已核实虚警',
                status: 1,
            },
            {
                key: 3,
                carNum: '粤ACX637',
                throughTime: '2020-03-19 10:10:43',
                enter: '出',
                img: Image3,
                lastTime: "2020-03-19 14:52:57",
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
            title: "现场采集图",
            dataIndex: "img",
            key: "img",
            render: (text, record) => {
                return <div> <img src={record.img} style={{ width: '100px', height: '50px', margin: '0px auto' }} /></div>
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
            type: "DATE",
            label: "时间",
            field: "times",
            width: 240
        },
        {
            type: "INPUT",
            label: "车牌号",
            field: "carNum",
            width: 200,
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
    handleSave = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let tableData = this.state.tableData
                tableData[2].status = 1;
                tableData[2].handleName = '管理员';
                tableData[2].handleTime = moment().format('YYYY-MM-DD HH:mm:ss');
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
                    title="警务布控预警处理"
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
export default Form.create()(Police);