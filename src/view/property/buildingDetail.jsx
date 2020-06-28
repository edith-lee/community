import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "../video/video.less";
export default class BuildingDtail extends Component {
    state = {
        id: "",
        unit: [
            { id: 1, roomNum: 132 },
            { id: 2, roomNum: 132 },
        ]
    };

    componentDidMount = () => {
        if (this.props.match.params.id) {
            this.setState({
                id: this.props.match.params.id
            });
        }
    };
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
                        <Icon type="number" style={{ marginRight: 5 }} />
                        {this.state.id}#楼
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="searchFormWrap" style={{ marginBottom: "10px",padding:'8px 30px' }}>
                   <Button size='small' type='primary' onClick={()=>{this.props.history.push('/main/property/building')}}>返回</Button>
                </div>
                <Row style={{ marginTop: "15px", minHeight: 500 }}>
                    {this.state.unit.map(item => {
                        let str = JSON.stringify({id:item.id,buildingId:this.state.id})
                        return (
                            <Col span={6} key={item}>
                                <div className='buildingItem' onClick={() => { this.props.history.push(`/main/property/building/unit/detail/${str}`) }}>
                                    <div>
                                        {`${item.id}单元`}
                                    </div>
                                    <div className='footer'>
                                        <p> 房屋：{item.roomNum}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        );
    }
}
