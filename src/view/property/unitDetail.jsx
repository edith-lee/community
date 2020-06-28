import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Button, Modal, Table } from "antd";
import { Link } from "react-router-dom";
import Image1 from "../../assets/image/张勉.jpg"
import Image2 from "../../assets/image/张渊凯.jpg"
import Image3 from "../../assets/image/胡婷丽.jpg"
import Image4 from "../../assets/image/谢曼玉.jpg"
import "../../component/myTable/myTable.less"
import "../video/video.less";
export default class BuildingDtail extends Component {
    state = {
        showModal: false,
        id: "",
        buildingId: '',
        detailId: '',
        peopleDetail: {
            name: '何毅',
            sex: '男',
            age: '40',
            relationship: '户主',
            tel: '13826067935',
            address: '广东省广州市黄埔区',
            photo: Image1
        },
        detail: [{
            name: '何毅',
            sex: '男',
            age: '40',
            relationship: '户主',
            tel: '13826067935',
            address: '广东省广州市黄埔区',
            photo: Image1
        },
        {
            name: '王静',
            sex: '女',
            age: '37',
            relationship: '妻',
            tel: '13826067935',
            address: '广东省广州市黄埔区',
            photo: Image4
        },
        {
            name: '何亮',
            sex: '男',
            age: '10',
            relationship: '子',
            tel: '13826067935',
            address: '广东省广州市黄埔区',
            photo: Image2

        },
        {
            name: '何琳',
            sex: '女',
            age: '7',
            relationship: '女',
            tel: '13826067935',
            address: '广东省广州市黄埔区',
            photo: Image3
        }],
        rooms: [
            { id: 101, people: [] },
            { id: 102, people: [] },
            { id: 103, people: [] },
            { id: 104, people: [] },
            { id: 201, people: [] },
            { id: 202, people: [] },
            { id: 203, people: [] },
            { id: 204, people: [] },
            { id: 301, people: [] },
            { id: 302, people: [] },
            { id: 303, people: [] },
            { id: 304, people: [] },
            { id: 401, people: [] },
            { id: 402, people: [] },
            { id: 403, people: [] },
            { id: 404, people: [] },
            { id: 501, people: [] },
            { id: 502, people: [] },
            { id: 503, people: [] },
            { id: 504, people: [] },
            { id: 601, people: [] },
            { id: 602, people: [] },
            { id: 603, people: [] },
            { id: 604, people: [] },
            { id: 701, people: [] },
            { id: 702, people: [] },
            { id: 703, people: [] },
            { id: 704, people: [] },
            { id: 801, people: [] },
            { id: 802, people: [] },
            { id: 803, people: [] },
            { id: 804, people: [] },
            { id: 901, people: [] },
            { id: 902, people: [] },
            { id: 903, people: [] },
            { id: 904, people: [] },
            { id: 1001, people: [] },
            { id: 1002, people: [] },
            { id: 1003, people: [] },
            { id: 1004, people: [] },
            { id: 1101, people: [] },
            { id: 1102, people: [] },
            { id: 1103, people: [] },
            { id: 1104, people: [] },
            { id: 1201, people: [] },
            { id: 1202, people: [] },
            { id: 1203, people: [] },
            { id: 1204, people: [] },
            { id: 1301, people: [] },
            { id: 1302, people: [] },
            { id: 1303, people: [] },
            { id: 1304, people: [] },
            { id: 1401, people: [] },
            { id: 1402, people: [] },
            { id: 1403, people: [] },
            { id: 1404, people: [] },
            { id: 1501, people: [] },
            { id: 1502, people: [] },
            { id: 1503, people: [] },
            { id: 1504, people: [] },
            { id: 1601, people: [] },
            { id: 1602, people: [] },
            { id: 1603, people: [] },
            { id: 1604, people: [] },
            { id: 1701, people: [] },
            { id: 1702, people: [] },
            { id: 1703, people: [] },
            { id: 1704, people: [] },
            { id: 1801, people: [] },
            { id: 1802, people: [] },
            { id: 1803, people: [] },
            { id: 1804, people: [] },
            { id: 1901, people: [] },
            { id: 1902, people: [] },
            { id: 1903, people: [] },
            { id: 1904, people: [] },
            { id: 2001, people: [] },
            { id: 2002, people: [] },
            { id: 2003, people: [] },
            { id: 2004, people: [] },
            { id: 2101, people: [] },
            { id: 2102, people: [] },
            { id: 2103, people: [] },
            { id: 2104, people: [] },
            { id: 2201, people: [] },
            { id: 2202, people: [] },
            { id: 2203, people: [] },
            { id: 2204, people: [] },
            { id: 2301, people: [] },
            { id: 2302, people: [] },
            { id: 2303, people: [] },
            { id: 2304, people: [] },
            { id: 2401, people: [] },
            { id: 2402, people: [] },
            { id: 2403, people: [] },
            { id: 2404, people: [] },
            { id: 2501, people: [] },
            { id: 2502, people: [] },
            { id: 2503, people: [] },
            { id: 2504, people: [] },
            { id: 2601, people: [] },
            { id: 2602, people: [] },
            { id: 2603, people: [] },
            { id: 2604, people: [] },
            { id: 2701, people: [] },
            { id: 2702, people: [] },
            { id: 2703, people: [] },
            { id: 2704, people: [] },
            { id: 2801, people: [] },
            { id: 2802, people: [] },
            { id: 2803, people: [] },
            { id: 2804, people: [] },
            { id: 2901, people: [] },
            { id: 2902, people: [] },
            { id: 2903, people: [] },
            { id: 2904, people: [] },
            { id: 3001, people: [] },
            { id: 3002, people: [] },
            { id: 3003, people: [] },
            { id: 3004, people: [] },
            { id: 3101, people: [] },
            { id: 3102, people: [] },
            { id: 3103, people: [] },
            { id: 3104, people: [] },
            { id: 3201, people: [] },
            { id: 3202, people: [] },
            { id: 3203, people: [] },
            { id: 3204, people: [] },
            { id: 3301, people: [] },
            { id: 3302, people: [] },
            { id: 3303, people: [] },
            { id: 3304, people: [] },
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
            title: "姓名",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "性别",
            dataIndex: "sex",
            key: "sex"
        },
        {
            title: "年龄",
            dataIndex: "age",
            key: "age"
        },
        {
            title: "与户主关系",
            dataIndex: "relationship",
            key: "relationship"
        },
        {
            title: "联系电话",
            dataIndex: "tel",
            key: "tel"
        },

        {
            title: "户籍所在地",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "照片",
            dataIndex: "photo",
            key: "photo",
            render: (text, record) => {
                return (
                    <img
                        src={record.photo}
                        style={{
                            width: 45,
                            height: 60,
                            margin: "0px auto",
                        }}
                    />
                );
            }
        }
    ];
    componentDidMount = () => {
        if (this.props.match.params.data) {
            let data = JSON.parse(this.props.match.params.data)
            this.setState({
                id: data.id,
                buildingId: data.buildingId,
            });
        }
    };
    showModal = (id) => {
        let detail = this.state.detail
        let peopleDetail = {}
        detail.map(item => {
            if (item.relationship == '户主') {
                peopleDetail = item
            }
        })
        this.setState({
            showModal: true,
            detailId: id,
            peopleDetail
        })
    }
    handleModelCancel = () => {
        this.setState({
            showModal: false,
            detailId: "",
        })
    }
    render() {
        return (
            <div className="videoWrap">
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item>
                        <Icon type="audit" style={{ marginRight: 5 }} />
                        物业
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/main/property/building">
                            <Icon type="bank" style={{ marginRight: 5 }} /> 楼宇管理
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/main/property/building/detail/${this.state.buildingId}`}>
                            <Icon type="number" style={{ marginRight: 5 }} />  {this.state.buildingId}#楼
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="apartment" style={{ marginRight: 5 }} />
                        {this.state.id}单元
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="searchFormWrap" style={{ marginBottom: "10px", padding: '8px 30px' }}>
                    <Button size='small' type='primary' onClick={() => { this.props.history.push(`/main/property/building/detail/${this.state.buildingId}`) }}>返回</Button>
                </div>
                <Row style={{ marginTop: "15px", minHeight: 500 }}>
                    {this.state.rooms.map(item => {
                        return (
                            <Col span={2} key={item}>
                                <div className='roomItem' onClick={() => { this.showModal(item.id) }}>
                                    <div>
                                        {item.id}
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Modal
                    className="viewRoomModal"
                    title={`${this.state.buildingId}#楼 ${this.state.id}单元 ${this.state.detailId}`}
                    visible={this.state.showModal}
                    onCancel={this.handleModelCancel}
                    footer={null}
                >
                    <div className='peopleDetail'>
                        <div>
                            <div className='peopleRow'>
                                <div className='left'>{this.state.peopleDetail.name}</div>
                                <div className='right'>{this.state.peopleDetail.relationship}</div>
                            </div>
                            <div className='peopleRow'>
                                <div className='left'>联系电话</div>
                                <div className='right'>{this.state.peopleDetail.tel}</div>
                            </div>
                        </div>
                        <div>
                            <img src={this.state.peopleDetail.photo} style={{ width: '100px', height: '120px' }}></img>
                        </div>
                    </div>
                    <div className="myTable">
                        <Table
                            onRowClick={(record) => { this.setState({ peopleDetail: record }) }}
                            bordered
                            pagination={false}
                            columns={this.columns}
                            dataSource={this.state.detail}
                            rowClassName={(record, index) => {
                                if (index % 2 !== 0) {
                                    return "rowclass";
                                }
                            }}
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}
