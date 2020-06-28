import React from "react";
import { Card, Row, Col, Icon, Spin, message } from "antd";
import "./public.less";
import { withRouter } from "react-router-dom";
import Video1 from "../../assets/mp4/monitor1.mp4";
import Video2 from "../../assets/mp4/monitor2.mp4";
import Video3 from "../../assets/mp4/monitor3.mp4";
import Video4 from "../../assets/mp4/monitor4.mp4";
class Equipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: [
        {
          name: "大地-后门",
          code: 1000358,
          eid: "JTJL00254",
          picpath: Video1
        },
        {
          name: "大地-器材室",
          code: 1000252,
          eid: "JTJL00252",
          picpath: Video2
        },
        {
          name: "大地-围界东北转角",
          code: 1000238,
          eid: "JTJL00238",
          picpath: Video3
        },
        {
          name: "大地-泳池边",
          code: 1000231,
          eid: "JTJL00231",
          picpath: Video4
        }
      ]
    };
  }

  render() {
    return (
      <div className="boundary1">
        <div className="equipment">
          <div className="equipmentCard">
            <Row className="paddRow" gutter={32}>
              {this.state.camera.map((el, i) => {
                return (
                  <Col
                    key={i}
                    xxl={{ span: 4 }}
                    xl={{ span: 6 }}
                    lg={{ span: 6 }}
                    md={{ span: 6 }}
                    sm={{ span: 6 }}
                    xs={{ span: 6 }}
                    className="cardPdd "
                  >
                    <div
                      style={{
                        display: this.state.liveIcon ? "block" : "none"
                      }}
                    >
                      <Icon
                        type="play-circle"
                        style={{
                          color: "#fff",
                          fontSize: "35px",
                          position: " absolute",
                          left: "60%",
                          top: "30%",
                          zIndex: 10
                        }}
                      />
                    </div>
                    <Card
                      className="boxShow"
                      cover={
                        <video
                          alt="example"
                          src={this.state.camera[i].picpath}
                          width="100%"
                          height="215px"
                          controls="controls"
                        />
                      }
                      actions={
                        this.state.utype === "1" || this.state.activecompcode
                          ? [
                              <div className="actionsBbottom">
                                <p>{this.field(i)}条</p>
                                <p>布防区域 </p>
                              </div>,
                              <div className="actionsBbottom colCen ">
                                {this.statework(i)}
                              </div>,
                              <div className="colCen actionsBbottom ">
                                <Icon type="setting" className="settingIcon" />
                                <span className="sheding">设定</span>
                              </div>
                            ]
                          : [
                              <div
                                className="actionsBbottom"
                                onClick={() => {
                                  this.props.history.push(
                                    "/main/equipment/setarea"
                                  );
                                }}
                              >
                                <p> {2}条</p>
                                <p>布防区域 </p>
                              </div>,
                              <div
                                onClick={() => {
                                  this.props.history.push(
                                    "/main/equipment/detail"
                                  );
                                }}
                                className="actionsBbottom colCen"
                              >
                                <span className="defenceEqui">
                                  <Icon
                                    type="clock-circle"
                                    className="settingIcon"
                                  />
                                  布防中
                                </span>
                              </div>,
                              <div
                                className="colCen actionsBbottom "
                                onClick={() => {
                                  this.props.history.push(
                                    "/main/equipment/setting"
                                  );
                                }}
                              >
                                <Icon type="setting" className="settingIcon" />
                                <span className="sheding">设定</span>
                              </div>
                            ]
                      }
                    >
                      <Row className="paddRow">
                        <Col xxl={{ span: 24 }} lg={{ span: 24 }}>
                          <div className="equipmentNumber">
                            <div>
                              <div className="onLine onLineBack">在线</div>
                            </div>
                            <div className="equipmentRight ">
                              <p className="coverflow" title={el.name}>
                                {el.name}
                              </p>
                              <p className="coverflow" title={el.eid}>
                                {el.eid}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <div className="bell">
                        <div style={{ color: "#f00" }}>
                          <Icon type="bell" className="bellIcon" />
                          <span
                            className="equipNumnber"
                            title={this.state.camera[i].alarm}
                          >
                            2092
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Equipment);
