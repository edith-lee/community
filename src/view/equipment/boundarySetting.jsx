import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Icon,
  message,
  Modal,
  Input,
  Tabs,
  Select,
  Switch
} from "antd";
import AlarmSettings from "./AlarmSettings";
const { TabPane } = Tabs;

class Userdeveice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      data: {},
      edata: {},
      login: {},
      heartdata: {},
      workingtime: [],
      visible: false, //弹窗
      changelng: "",
      changelat: "",
      lng: "",
      lat: "",
      data: {
        eid: "JTJL00254",
        atype: 1
      },
      edata: {},
      login: {},
      heartdata: {},
      workingtime: [],
      ipvalue: "192.168.1.25",
      portvalue: "554",
      camerauser: "admin",
      camerapasswd: "admin",
      AlarmId: ""
    };
  }

  componentDidMount() {
    //取数据
    this.requestdata();
  }

  requestdata = params => {
    //取数据
  };
  onChangeip = e => {
    //ip  input 修改ip
    this.setState({
      ipvalue: e.target.value
    });
  };
  onChangeport = e => {
    //ip  input 修改
    this.setState({
      portvalue: e.target.value
    });
  };
  onChangeuser = e => {
    //user  input 修改
    this.setState({
      camerauser: e.target.value
    });
  };
  onChangepwd = e => {
    //pwd  input 修改
    this.setState({
      camerapasswd: e.target.value
    });
  };

  updata = () => {};

  field = () => {
    //布防区域的个数
    var jsonData;
    if (this.state.data.field === "") {
      jsonData = 0;
    } else {
      jsonData = this.state.data.field;
    }
    var count = 0;
    for (var j in jsonData) {
      count++;
    }
    return count;
  };
  status = () => {
    //报警类型
    if (this.state.heartdata.status === "stop") {
      return "停止运行";
    } else if (this.state.heartdata.status === "run") {
      return "运行中";
    } else {
      return "摄像头未连接";
    }
  };
  atype = () => {
    //报警类型
    switch (this.state.data.atype) {
      case 1:
        return "入侵报警";
      case 110:
        return "匪警";
      case 119:
        return "火警";
      case 12:
        return "整点打卡";
      default:
        return "未知类型 " + this.state.data.atype;
    }
    if (this.state.data.atype === 1) {
      return;
    }
  };
  locationedit = () => {
    this.setState({
      visible: true
    });
  };

  changeCoord(e, coord) {
    //修改经纬度
    this.setState({
      [coord]: e.target.value
    });
  }

  modalOk = () => {
    //修改坐标提交
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  setstateComm = (label, value = true) => {
    this.setState({
      [label]: value
    });
  };
  addreditOk = () => {};
  addreditCancel = () => {
    this.setState({
      addreditSwitch: false,
      addrdetail: ""
    });
  };
  onRef = ref => {
    this.child = ref;
  };

  render() {
    const _this = this;
    return (
      <div style={{ padding: "20px" }} className='boundary1'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="设备信息" key="1">
            <div className="box-padding">
              <p>
                <Icon type="bars" /> 设备信息
              </p>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备：
                </Col>
                <Col span={21} className="t_l">
                  {this.state.data.eid}
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  报警类型：
                </Col>
                <Col span={21} className="t_l">
                  {this.atype()}
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  所在位置：
                </Col>
                <Col span={21} className="t_l">
                  广东省茂名市茂南区茂南开发区,迎宾三路荔红四街25号
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  坐标：
                </Col>
                <Col span={8} className="t_l"></Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  最后报警时间：
                </Col>
                <Col span={21} className="t_l">
                  2020-03-02 13:49:29
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  防区设置：
                </Col>
                <Col span={21} className="t_l">
                  <div style={{ color: "#000" }} className="underline">
                    2个
                  </div>
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设防时间：
                </Col>
                <Col span={21} className="t_l">
                  <div style={{ color: "#000" }} className="underline">
                    1段
                  </div>
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  上次心跳：
                </Col>
                <Col span={21} className="t_l">
                  <span>2020-03-02 13:50:57</span>
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备温度：
                </Col>
                <Col span={21} className="t_l">
                  <span>56℃</span>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="摄像头信息" key="2">
            <div className="box-padding">
              <p>
                <Icon type="video-camera" /> 摄像头信息
              </p>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备状态：
                </Col>
                <Col span={21} className="t_l">
                  运行中
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备软件版本：
                </Col>
                <Col span={21} className="t_l">
                  1.1.9
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备硬件版本：
                </Col>
                <Col span={21} className="t_l">
                  1.1.9
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  当前状态：
                </Col>
                <Col span={21} className="t_l">
                  在线
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  用户名：
                </Col>
                <Col span={21} className="t_l">
                  <input
                    className="padd_left"
                    type="text"
                    value={this.state.camerauser}
                    id="ip"
                    onChange={event => this.onChangeuser(event)}
                  />
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  密码：
                </Col>
                <Col span={21} className="t_l">
                  <input
                    className="padd_left"
                    type="text"
                    value={this.state.camerapasswd}
                    onChange={e => this.onChangepwd(e)}
                    id="port"
                  />
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备IP：
                </Col>
                <Col span={21} className="t_l">
                  <input
                    className="padd_left"
                    type="text"
                    value={this.state.ipvalue}
                    id="ip"
                    onChange={e => this.onChangeip(e)}
                  />
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={3} className="t_r">
                  设备端口：
                </Col>
                <Col span={21} className="t_l">
                  <input
                    className="padd_left"
                    type="text"
                    value={this.state.portvalue}
                    id="port"
                    onChange={e => this.onChangeport(e)}
                  />
                </Col>
              </Row>
              <Row className="equ_row">
                <Col span={21} offset={3} className="t_l">
                  <Button className="queryBtn lg" onClick={this.updata}>
                    {" "}
                    提交{" "}
                  </Button>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="报警设置" key="3">
            <div className="box-padding">
              <p>
                <Icon type="setting" />
                报警设置
              </p>
              <AlarmSettings AlarmId={this.state.AlarmId} />
            </div>
          </TabPane>
        </Tabs>
        <Modal
          title="修改"
          visible={this.state.visible}
          onOk={this.modalOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Row>
            <label>经度：</label>
            <Input
              defaultValue={this.state.changelng}
              onChange={e => this.changeCoord(e, "changelng")}
            />
            <label>纬度：</label>
            <Input
              defaultValue={this.state.changelat}
              onChange={e => this.changeCoord(e, "changelat")}
            />
          </Row>
        </Modal>
        <Modal
          title="编辑当前位置"
          visible={this.state.addreditSwitch}
          onOk={this.addreditOk}
          onCancel={this.addreditCancel}
          okText="确认"
          cancelText="取消"
        >
          <Row>
            <label>区域：</label>
            <label>详细地址：</label>
            <Input onChange={e => this.changeCoord(e, "addrdetail")} />
          </Row>
        </Modal>
      </div>
    );
  }
}

export default Userdeveice;
