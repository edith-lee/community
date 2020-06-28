import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import { Modal, Button, Form, Upload, Icon } from "antd";
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
                number: 'JTJL00001',
                type: '椒图精灵',
                lastConnectTime: '2020-03-10 14:01:55',
                lastHeartTime: '2020-03-10 14:01:44',
                location: '北门',
                status: 1,
            },
            {
                key: 2,
                number: 'JTJL00001',
                type: '椒图精灵',
                lastConnectTime: '2020-03-10 14:01:55',
                lastHeartTime: '2020-03-10 14:01:44',
                location: '东门',
                status: 0,
            },
            {
                key: 3,
                number: 'JTJL00001',
                type: '椒图精灵',
                lastConnectTime: '2020-03-10 14:01:55',
                lastHeartTime: '2020-03-10 14:01:44',
                location: '西门',
                status: 1,
            },
            {
                key: 4,
                number: 'JTJL00001',
                type: '椒图精灵',
                lastConnectTime: '2020-03-10 14:01:55',
                lastHeartTime: '2020-03-10 14:01:44',
                location: '南门',
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
            title: "设备编码",
            dataIndex: "number",
            key: "number"
        },
        {
            title: "设备类型",
            dataIndex: "type",
            key: "type"
        },
        {
            title: "最后一次通讯时间",
            dataIndex: "lastConnectTime",
            key: "lastConnectTime"
        },
        {
            title: "最后一次心跳",
            dataIndex: "lastHeartTime",
            key: "lastHeartTime"
        },
        {
            title: "安装位置",
            dataIndex: "location",
            key: "location"
        },
        {
            title: "状态",
            dataIndex: "status",
            key: "status",
            render: (text, record) => record.status == 1 ? <span style={{ color: 'green' }}>在线</span> : <span style={{ color: 'red' }}>离线</span>
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            render: (text, record) => {
                return (
                    <div>
                        {/* <Button
              size="small"
              type="primary"
              style={{ marginRight: 10 }}
              onClick={() => {
                this.showModal(record);
              }}
            >
              编辑
            </Button> */}
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
                        {/* <Button
              size="small"
              onClick={() => {
                
              }}
            >
              查看照片
            </Button> */}
                    </div>
                );
            }
        }
    ];
    searchFormList = [
        {
            type: "INPUT",
            label: "设备编码",
            field: "number",
            width: 200
        },
        {
            type: "SELECT",
            label: "设备类型",
            field: "type",
            initialValue: "all",
            width: 200,
            list: [
                { id: "all", name: "全部" },
                { id: "椒图精灵", name: "椒图精灵" },
                { id: "车牌", name: "车牌" },
                { id: "广告机", name: "广告机" },
                { id: "道闸门禁", name: "道闸门禁" },
                { id: "单元门禁", name: "单元门禁" },
            ]
        },
    ];
    delete = key => {
        Modal.confirm({
            title: "设备删除",
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
    handlePaginationChange = pagination => {
        this.setState({
            pagination
        });
    };
    showModal = value => {
        if (value === "add") {
            this.setState({
                isAdd: true,
                detail: {},
                showModal: true
            });
        } else {
            this.setState(
                {
                    isAdd: false,
                    detail: value,
                    showModal: true
                },
                () => {
                    this.props.form.setFieldsValue(value);
                }
            );
        }
    };
    handleModalCancel = () => {
        this.props.form.resetFields();
        this.setState({
            isAdd: false,
            detail: {},
            showModal: false
        });
    };
    handleSave = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.isAdd) {
                    let tableData = this.state.tableData;
                    //tableData.push(values);
                    this.props.form.resetFields();
                    this.setState({
                        tableData,
                        isAdd: false,
                        detail: {},
                        showModal: false
                    });
                } else {
                    let tableData = this.state.tableData;
                    let newData = [];
                    tableData.map(item => {
                        if (this.state.detail.key === item.key) {
                            newData.push({
                                key: item.key,
                                ...values
                            });
                        } else {
                            newData.push(item);
                        }
                    });
                    this.props.form.resetFields();
                    this.setState({
                        tableData: newData,
                        isAdd: false,
                        detail: {},
                        showModal: false
                    });
                }
            }
        });
    };
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
                    <div className="topBtns">
                        <Button
                            size="small"
                            type="primary"
                            onClick={() => {
                                this.showModal("add");
                            }}
                        >
                            导入
            </Button>
                    </div>
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
                    title={this.state.isAdd ? "设备导入" : "设备编辑"}
                    visible={this.state.showModal}
                    onCancel={this.handleModalCancel}
                    footer={
                        <div style={{ textAlign: "center" }}>
                            <Button type="primary" onClick={this.handleSave}>
                                保存
              </Button>
                        </div>
                    }
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="文件" extra="仅支持扩展名：.xls .xlsx">
                            {getFieldDecorator("blueprint", {
                                rules: [
                                    {
                                        required: true,
                                        message: "请选择文件上传！"
                                    }
                                ]
                            })(
                                <Upload name="file" action="/upload.do" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'>
                                    <Button>
                                        <Icon type="upload" /> 点击选择文件
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        );
    }
}
export default Form.create()(People);
