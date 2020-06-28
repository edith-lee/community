import React, { Component } from "react";
import MySearchForm from "../../component/myForm/mySearchForm";
import MyTable from "../../component/myTable/myTable";
import MyPagination from "../../component/myPagination/myPagination";
import {
    Modal,
    Button,
    Form,
    Input,
    Select,
    Row,
    Col,
    Upload,
    DatePicker,
    Cascader,
    Icon
} from "antd";
const { Option } = Select;
class Car extends Component {
    state = {
        isAdd: false,
        detail: {},
        showModal: false,
        exportModal: false,
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        tableData: [
            {
                key: 1,
                carNum: '粤ACX637',
                name: "李华",
                linkIphone: "18729075667",
                type: '住户车辆',
                roomNum: "1#楼3单元302",
                lastTime: "2020-03-19 14:52:57",
                inputTime: '2020-02-11 11:53:18'
            }, {
                key: 2,
                carNum: '粤A660HB',
                name: "李媛",
                linkIphone: "18742785298",
                type: '住户车辆',
                roomNum: "5#楼1单元202",
                lastTime: "2020-03-19 13:57:33",
                inputTime: '2020-03-09 17:12:49'
            }, {
                key: 3,
                carNum: '粤AGX588',
                name: "赵琳琳",
                linkIphone: "18747824528",
                type: '物业车辆',
                roomNum: "3#楼1单元104",
                lastTime: "2020-03-19 14:56:53",
                inputTime: '2020-02-19 09:59:18'
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
            title: "车牌号",
            dataIndex: "carNum",
            key: "carNum"
        },
        {
            title: "车主",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "联系电话",
            dataIndex: "linkIphone",
            key: "linkIphone"
        },
        {
            title: "类型",
            dataIndex: "type",
            key: "type"
        },
        {
            title: "门牌号",
            dataIndex: "roomNum",
            key: "roomNum"
        },
        {
            title: "最后一次通行时间",
            dataIndex: "lastTime",
            key: "lastTime"
        },
        {
            title: "登记时间",
            dataIndex: "inputTime",
            key: "inputTime"
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            render: (text, record) => {
                return (
                    <div>
                        <Button
                            size="small"
                            type="primary"
                            style={{ marginRight: 10 }}
                            onClick={() => {
                                this.showModal(record);
                            }}
                        >
                            编辑
                        </Button>
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
    roomOptions = [
        {
            value: '1#楼',
            label: '1#楼',
            children: [
                {
                    value: '1单元',
                    label: '1单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '2单元',
                    label: '2单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '3单元',
                    label: '3单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '4单元',
                    label: '4单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
            ],
        },
        {
            value: '2#楼',
            label: '2#楼',
            children: [
                {
                    value: '1单元',
                    label: '1单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '2单元',
                    label: '2单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '3单元',
                    label: '3单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '4单元',
                    label: '4单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
            ],
        },
        {
            value: '3#楼',
            label: '3#楼',
            children: [
                {
                    value: '1单元',
                    label: '1单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '2单元',
                    label: '2单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '3单元',
                    label: '3单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '4单元',
                    label: '4单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
            ],
        },
        {
            value: '4#楼',
            label: '4#楼',
            children: [
                {
                    value: '1单元',
                    label: '1单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '2单元',
                    label: '2单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '3单元',
                    label: '3单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '4单元',
                    label: '4单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
            ],
        },
        {
            value: '5#楼',
            label: '5#楼',
            children: [
                {
                    value: '1单元',
                    label: '1单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '2单元',
                    label: '2单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '3单元',
                    label: '3单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
                {
                    value: '4单元',
                    label: '4单元',
                    children: [
                        { value: '101', label: '101', }, { value: '102', label: '102', }, { value: '103', label: '103', }, { value: '104', label: '104', },
                        { value: '201', label: '201', }, { value: '202', label: '202', }, { value: '203', label: '203', }, { value: '204', label: '204', },
                        { value: '301', label: '301', }, { value: '302', label: '302', }, { value: '303', label: '303', }, { value: '304', label: '304', },
                        { value: '401', label: '401', }, { value: '402', label: '402', }, { value: '403', label: '403', }, { value: '404', label: '404', },
                        { value: '501', label: '501', }, { value: '502', label: '502', }, { value: '503', label: '503', }, { value: '504', label: '504', },
                    ],
                },
            ],
        },
    ];
    searchFormList = [
        {
            type: "DATE",
            label: "登记时间",
            field: "inputTime",
            width: 200
        },
        {
            type: "INPUT",
            label: "车牌号",
            field: "carNum",
            width: 200
        },
        {
            type: "INPUT",
            label: "车主",
            field: "name",
            width: 200
        },
        {
            type: "SELECT",
            label: "类型",
            field: "type",
            initialValue: "all",
            width: 200,
            list: [
                { id: "all", name: "全部" },
                { id: "1", name: "住户车辆" },
                { id: "2", name: "物业车辆" }
            ]
        },
    ];
    delete = key => {
        Modal.confirm({
            title: "车辆删除",
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
                    value.roomNum1 = value.roomNum ? [value.roomNum.substring(0, 3), value.roomNum.substring(3, 6), value.roomNum.substring(6, 9)] : []
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
                    values.roomNum =values.roomNum1 ? values.roomNum1.join("") : '',
                    tableData.push(values);
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
                                roomNum:values.roomNum1 ? values.roomNum1.join("") : '',
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
    handleMany = keys => {
        //console.log(keys);
    };
    exportModal = () => {
        this.setState({ exportModal: true })
    };
    handleExportCancel = () => {
        this.setState({ exportModal: false })
    };
    handleExportSave = () => {
        this.setState({ exportModal: false })
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
                            新增
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            size="small"
                            type="primary"
                            onClick={this.exportModal}
                        >
                            导入
                        </Button>
                    </div>
                </div>
                <div style={{ minHeight: "520px" }}>
                    <MyTable
                        columns={this.columns}
                        data={this.state.tableData}
                        ableSelect={false}
                        handleMany={this.handleMany}
                    />
                </div>
                <MyPagination
                    pagination={this.state.pagination}
                    onChange={this.handlePaginationChange}
                    showSizeChange={true}
                />
                <Modal
                    className="viewWarningModal"
                    destroyOnClose={true}
                    title={this.state.isAdd ? "车辆新增" : "车辆编辑"}
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
                        <Row>
                            <Col span={12}>
                                <Form.Item label="车牌号">
                                    {getFieldDecorator("carNum", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车牌号！"
                                            },
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                message: `请不要输入特殊字符!`
                                            }
                                        ]
                                    })(<Input maxLength={20} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="车主">
                                    {getFieldDecorator("name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入车主！"
                                            },
                                            {
                                                pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                message: `请不要输入特殊字符!`
                                            }
                                        ]
                                    })(
                                        <Input maxLength={20} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="联系电话">
                                    {getFieldDecorator("linkIphone", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请输入联系电话！"
                                            },
                                            {
                                                pattern: /^1[3456789]\d{9}$/,
                                                message: `请输入正确的联系电话!`
                                            }
                                        ]
                                    })(<Input maxLength={11} />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="类型">
                                    {getFieldDecorator("type", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择车辆类型！"
                                            }
                                        ]
                                    })(
                                        <Select placeholder="请选择车辆类型">
                                            <Option value="住户车辆">住户车辆</Option>
                                            <Option value="物业车辆">物业车辆</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="门牌号">
                                    {getFieldDecorator("roomNum1", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "请选择门牌号！"
                                            }
                                        ]
                                    })(<Cascader options={this.roomOptions} placeholder="请选择门牌号" />)}
                                </Form.Item>
                            </Col>
                        
                        <Col span={12}>
                            
                        </Col>
                        </Row>
                    </Form>
                </Modal>
            <Modal
                destroyOnClose={true}
                title="车辆导入"
                visible={this.state.exportModal}
                onCancel={this.handleExportCancel}
                footer={
                    <div style={{ textAlign: "center" }}>
                        <Button type="primary" onClick={this.handleExportSave}>
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
            </div >
        );
    }
}
export default Form.create()(Car);
