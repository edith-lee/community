import React, { Component } from "react";
import { message, Modal } from "antd";
import Image from "../../assets/image/timg.jpg";
class AlarmFiltering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: Image,
      present: [],
      visible: false,
      visibleDel: false,
      flag: false //是否点击鼠标
    };
  }
  componentDidMount() {
    this.hanleGetOne();
    document.oncontextmenu = function() {
      return false;
    };
    document
      .getElementById("falseFiltering")
      .addEventListener("contextmenu", this.handleContextMenu);
    document
      .getElementById("falseFiltering")
      .addEventListener("mouseup", this.handleMouseup);
    document
      .getElementById("falseFiltering")
      .addEventListener("mousedown", this.handleDown);
    document
      .getElementById("falseFiltering")
      .addEventListener("mousemove", this.handleMove);
  }

  //过滤对象数据
  hanleGetOne = () => {};
  //绘制矩形
  hanleDraw = fieds => {
    let ele = document.getElementById("falseFiltering");
    let area = ele.getContext("2d");
    area.clearRect(0, 0, 704, 576); //清除之前的绘图
    area.fillStyle = "rgba(277,0,0,0.4)";
    area.lineWidth = 3;
    fieds.map(v => {
      area.fillRect(v.finalarea.x, v.finalarea.y, v.finalarea.w, v.finalarea.h);
    });
    area.fill();
  };
  //鼠标
  handleMouseup = e => {
    let ele = document.getElementById("falseFiltering");
    let canvsclent = ele.getBoundingClientRect();
    let endx = e.clientX - canvsclent.left * (ele.width / canvsclent.width);
    let endy = e.clientY - canvsclent.top * (ele.height / canvsclent.height);
    this.setState(
      {
        endx,
        endy,
        flag: false
      },
      () => {
        this.reshow(endx, endy);
      }
    );
  };
  handleDown = e => {
    let ele = document.getElementById("falseFiltering");
    let canvsclent = ele.getBoundingClientRect();
    let startx = e.clientX - canvsclent.left * (ele.width / canvsclent.width);
    let starty = e.clientY - canvsclent.top * (ele.height / canvsclent.height);
    this.setState({
      startx,
      starty,
      flag: true
    });
  };
  handleMove = e => {
    let ele = document.getElementById("falseFiltering");
    let ctx = ele.getContext("2d");
    let canvsclent = ele.getBoundingClientRect();
    let x = e.clientX - canvsclent.left * (ele.width / canvsclent.width);
    let y = e.clientY - canvsclent.top * (ele.height / canvsclent.height);
    if (this.state.flag) {
      ctx.save();
      ctx.strokeStyle = "#0000ff";
      ctx.setLineDash([5]); //虚线
      ctx.clearRect(0, 0, ele.width, ele.height);
      ctx.strokeRect(
        this.state.startx,
        this.state.starty,
        x - this.state.startx,
        y - this.state.starty
      );
      ctx.restore(); //用来恢复Canvas之前保存的状态
    }
  };
  //绘制过滤对象
  reshow = (endx, endy) => {
    let ele = document.getElementById("falseFiltering");
    let ctx = ele.getContext("2d");
    ctx.beginPath();
    ctx.rect(
      this.state.startx,
      this.state.starty,
      endx - this.state.startx,
      endy - this.state.starty
    );
    ctx.strokeStyle = "rgba(46,191,222,0.8)";
    ctx.stroke();
  };
  //右键删除弹窗
  handleContextMenu = event => {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    this.state.fieds.map(v => {
      if (
        offsetX > v.finalarea.x &&
        offsetX < v.finalarea.x + v.finalarea.w &&
        offsetY > v.finalarea.y &&
        offsetY < v.finalarea.y + v.finalarea.h
      ) {
        this.setState({
          visibleDel: true,
          codeObj: v.code
        });
      }
    });
  };
  //删除过滤对象
  handleOkDel = () => {
    if (this.state.codeObj) {
    }
  };
  hanleAddObj = () => {
    let x = this.state.startx;
    let y = this.state.starty;
    let w = this.state.endx - this.state.startx;
    let h = this.state.endy - this.state.starty;
    if (x > 0 && y > 0 && w > 0 && h > 0) {
      let params = { cid: this.props.cid, x: x, y: y, w: w, h: h };
    } else {
      message.info("请先在左侧的图片上鼠标绘制过滤对象！");
    }
  };
  handleCancelDel = () => {
    this.setState({
      visibleDel: false
    });
  };
  componentWillUnmount() {
    document
      .getElementById("falseFiltering")
      .removeEventListener("contextmenu", this.handleContextMenu);
    document
      .getElementById("falseFiltering")
      .removeEventListener("mouseup", this.handleMouseup);
    document
      .getElementById("falseFiltering")
      .removeEventListener("mousedown", this.handleDown);
    document
      .getElementById("falseFiltering")
      .removeEventListener("mousemove", this.handleMove);
  }
  render() {
    return (
      <div className="boundary1">
        <div className="Setarea_cont">
          <div className="zfiltering">
            <canvas
              id="falseFiltering"
              width="704px"
              height="576px"
              style={{
                backgroundImage: "url(" + this.state.imgSrc + ")",
                backgroundSize: "100% 100%"
              }}
            />
            <div className="zFilterBtn">
              <button className="zadd" onClick={this.hanleAddObj}>
                添加过滤对象
              </button>
            </div>
          </div>
          <div>
            <p> 操作方法:</p>
            <p>
              1、添加过滤对象：请先在左侧图上使用鼠标绘制过滤对象，然后点击”添加过滤对象“按钮进行提交。
            </p>
            <p>
              2、删除过滤对象：在左侧图片上选中误报过滤对象，鼠标右键弹窗，点击确定进行删除对象。
            </p>
          </div>
          <Modal
            title="刪除过滤对象"
            visible={this.state.visibleDel}
            onOk={this.handleOkDel}
            onCancel={this.handleCancelDel}
            okText="确定"
            cancelText="取消"
          >
            <p>您确定要删除该过滤对象吗？</p>
          </Modal>
        </div>
      </div>
    );
  }
}
export default AlarmFiltering;
