import React, { Component } from "react";
import { Modal, Button, Form, Input, Upload, Icon, Row, Col, Select, Divider, Cascader, DatePicker } from "antd";
import moment from 'moment'
const { Option } = Select;
class ParkingModal extends Component {
    state = {
        currentKey: "",
        detail: {}
    };
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
    componentWillReceiveProps = props => {
        if (props.visible) {
            let detail = props.detail;
            detail.rentTime1 = detail.rentTime ? moment(detail.rentTime) : undefined;
            detail.dueTime1 = detail.dueTime ? moment(detail.dueTime) : undefined;
            detail.roomId = detail.roomNum ? [detail.roomNum.substring(0, 3), detail.roomNum.substring(3, 6), detail.roomNum.substring(6, 9)] : []
            this.setState({
                detail: detail,
                currentKey: props.detail.key
            });
        }
    };
    handleSave = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.key = this.state.currentKey;
                values.rentTime = values.rentTime1 ? values.rentTime1.format('YYYY-MM-DD') : ""
                values.dueTime = values.dueTime1 ? values.dueTime1.format('YYYY-MM-DD') : ''
                values.roomNum = values.roomId ? values.roomId.join("") : ''
                if (values.status == 0) {
                    values.rentTime = "";
                    values.dueTime = "";
                    values.name = "";
                    values.tel = "";
                    values.carNum = "";
                    values.roomNum = "";
                }
                this.props.handleOk(values);
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
                span: 18
            }
        };
        return (
            <Modal
                className='viewRoomModal'
                destroyOnClose={true}
                title='车位编辑'
                visible={this.props.visible}
                onCancel={this.props.handleCancel}
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
                            <Form.Item label="编号">
                                {getFieldDecorator("id", {
                                    initialValue: this.state.detail.id,
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入车位编号！"
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
                            <Form.Item label="位置">
                                {getFieldDecorator("location", {
                                    initialValue: this.state.detail.location,
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入车位位置！"
                                        },
                                        {
                                            pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                            message: `请不要输入特殊字符!`
                                        }
                                    ]
                                })(<Input maxLength={20} />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="状态">
                                {getFieldDecorator("status", {
                                    initialValue: this.state.detail.status,
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择车位状态！"
                                        }
                                    ],
                                })(<Select placeholder="请选择车位状态"  >
                                    <Option value={0}>未租售</Option>
                                    <Option value={1}>租用</Option>
                                    <Option value={2}>售出</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>
                    </Row>
                    {this.props.form.getFieldValue('status') !== 0
                        ?
                        <div>
                            <Divider />
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="租/购人">
                                        {getFieldDecorator("name", {
                                            initialValue: this.state.detail.name,
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "请输入租/购人！"
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
                                    <Form.Item label="联系电话">
                                        {getFieldDecorator("tel", {
                                            initialValue: this.state.detail.tel,
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "请输入联系电话！"
                                                },
                                                {
                                                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                                                    message: `请不要输入特殊字符!`
                                                }
                                            ]
                                        })(<Input maxLength={20} />)}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="房号">
                                        {getFieldDecorator("roomId", {
                                            initialValue: this.state.detail.roomId,
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "请选择房号！"
                                                }
                                            ]
                                        })(<Cascader options={this.roomOptions} placeholder="请选择房号" />)}
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="车牌号">
                                        {getFieldDecorator("carNum", {
                                            initialValue: this.state.detail.carNum,
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
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="租/购日期">
                                        {getFieldDecorator("rentTime1", {
                                            initialValue: this.state.detail.rentTime1,
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "请选择租/购日期！"
                                                }
                                            ]
                                        })(<DatePicker style={{ width: "100%" }} />)}
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="到期时间">
                                        {getFieldDecorator("dueTime1", {
                                            initialValue: this.state.detail.dueTime1,
                                        })(<DatePicker style={{ width: "100%" }} />)}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div> : null
                    }
                </Form>
            </Modal >
        );
    }
}
export default Form.create()(ParkingModal);
