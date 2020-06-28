import React, { Component } from "react";
//import MyPagination from "../../component/myPagination/myPagination";
import { Row, Col } from "antd";
import "../video/video.less"
export default class Building extends Component {
    state = {
        pagination: {
            total: 100,
            pageSize: 10,
            current: 1
        },
        building: [
            {
                id: 1,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 2,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 3,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 4,
                unitNum: 1,
                roomNum: 108
            },
            {
                id: 5,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 6,
                unitNum: 1,
                roomNum: 132
            },
            {
                id: 7,
                unitNum: 1,
                roomNum: 132
            },
            {
                id: 8,
                unitNum: 1,
                roomNum: 132
            },
            {
                id: 9,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 10,
                unitNum: 1,
                roomNum: 132
            },
            {
                id: 11,
                unitNum: 1,
                roomNum: 132
            },
            {
                id: 12,
                unitNum: 1,
                roomNum: 108
            },
            {
                id: 13,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 14,
                unitNum: 2,
                roomNum: 264
            },
            {
                id: 15,
                unitNum: 2,
                roomNum: 264
            }
        ]
    };
    // handlePaginationChange = pagination => {
    //     this.setState({
    //         pagination
    //     });
    // };
    render() {
        return (
            <div className="videoWrap">
                <Row style={{ minHeight: 520 }}>
                    {this.state.building.map(item => {
                        return (
                            <Col span={6} key={item.id}>
                                <div className='buildingItem' onClick={()=>{this.props.history.push(`/main/property/building/detail/${item.id}`)}}>
                                    <div>
                                        {`${item.id}#楼`}
                                    </div>
                                    <div className='footer'>
                                       <p> 单元：{item.unitNum}</p>
                                       <p> 房屋：{item.roomNum}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                {/* <MyPagination
                    pagination={this.state.pagination}
                    onChange={this.handlePaginationChange}
                    showSizeChange={false}
                /> */}
            </div>
        );
    }
}
