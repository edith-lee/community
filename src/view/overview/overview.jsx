import React from "react";
import MapStyleJson from "../../config/map_style";
import BuildingImg from "../../assets/image/building.png";
import "./overview.less";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import echartsTheme from "../../config/echartTheme";
import ReactEcharts from "echarts-for-react";
import { Icon, Carousel, Rate } from "antd";
import Image from "../../assets/image/timg.jpg";
import Image2 from "../../assets/image/timg2.jpg";
import Image3 from "../../assets/image/timg3.jpg";
import CheweiImg from "../../assets/image/车位.png";
import FangwuImg from "../../assets/image/房屋.png";
import DanweiImg from "../../assets/image/单位.png";
import RenkouImg from "../../assets/image/人口.png";
import FangkeImg from "../../assets/image/访客.png"
import CheliangImg from "../../assets/image/车辆.png";
import ShexiangtouImg from "../../assets/image/摄像头.png";
import RenlianImg from "../../assets/image/人脸.png";
import KakouImg from "../../assets/image/卡口.png";
import WifiImg from "../../assets/image/WIFI.png";
import MenjinImg from "../../assets/image/门禁.png";
import GangtingImg from "../../assets/image/治安岗亭.png";
import ShebaoanImg from "../../assets/image/保安配置.png";
import QibaoanImg from "../../assets/image/保安.png";
import Swiper from 'swiper/js/swiper.js'
import ExitIcon from '../../assets/image/exit.png'
import "swiper/css/swiper.min.css";
import EditableTable from './scollTable'
export default class ManageOverview extends React.Component {
  importantOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      itemGap: 10,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: "#fff",
        fontSize: 10
      },
      orient: "horizontal",
      top: 170,
      data: ["实有人数", "常住人口", "流动人口"]
    },
    color: ['#00d488', '#3bafff'],
    series: [
      {
        name: "人口统计",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        bottom: 30,
        label: {
          normal: {
            show: true,
            position: "center",
            formatter: function (argument) {
              var html;
              html = "37758\r\n总人口数";
              return html;
            },
            textStyle: {
              fontSize: 12,
              color: "#39CCCC"
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: [{ value: 21936, name: "常住人口" }, { value: 15822, name: "流动人口" }]
      }
    ]
  };
  RoomOption = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}:{c}({d}%)"
    },
    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
    series: [{
      radius: ["0%", "60%"],
      name: '房屋占比',
      type: 'pie',
      data: [{
        value: 1506,
        name: '空置',
      }, {
        value: 1441,
        name: '商用'
      }, {
        value: 8945,
        name: '自住'
      }, {
        value: 6235,
        name: '出租'
      },
      {
        value: 700,
        name: '其他'
      }]
    }]
  }
  componentDidMount() {
    echarts.registerTheme("myTheme", echartsTheme);
    this.renderMap();
    new Swiper('.swiper-container', {
      loop: true,  //循环
      autoplay: {   //滑动后继续播放（不写官方默认暂停）
        disableOnInteraction: false,
      },
      slidesPerView: 5,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      observeSlideChildren: true
    })

  }
  renderMap = () => {
    let AMap = window.AMap;
    let buildingLayer = new AMap.Buildings({ zIndex: 130, merge: false, sort: false, zooms: [16, 20] });
    let options =
    {
      hideWithoutStyle: true,//是否隐藏设定区域外的楼块
      areas: [{ //围栏1
        //visible:false,//是否可见
        rejectTexture: true,//是否屏蔽自定义地图的纹理
        color1: 'ffffff55',//楼顶颜色
        color2: 'ffffcc55',//楼面颜色 
        path: [[113.47775638, 23.18939314], [113.47957492, 23.19087244], [113.48065317, 23.19005883], [113.48101258, 23.18952628], [113.482005, 23.18861897], [113.47928524, 23.18722841]]
      }]
    };
    buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle
    let map = new AMap.Map("Map", {
      zoom: 18, //级别
      pitch: 55,
      skyColor: "#1c81ff",
      center: [113.47998, 23.18876], //中心点坐标
      mapStyle: "amap://styles/blue", //设置地图的显示样式
      viewMode: "3D", //使用3D视图
      layers: [
        new AMap.TileLayer({}),
        buildingLayer
      ]
    });
    // 多边形轮廓线的节点坐标数组
    new AMap.Polygon({
      bubble: true,
      fillOpacity: 0.3,
      strokeWeight: 2,
      path: options.areas[0].path,
      map: map
    })
    let markerIcon = new AMap.Marker({
      position: new AMap.LngLat(113.4801815100, 23.1879363100),
      icon: new AMap.Icon({
        image: ExitIcon,
        size: new AMap.Size(38, 38),  //图标大小
        imageSize: new AMap.Size(38, 38)
      }),
      offset: new AMap.Pixel(0, 0),
    });
    map.add(markerIcon)
    let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
    markerIcon.content = '<div style="color:#fff">南门</div>';
    markerIcon.on('mousemove', (e) => {
      infoWindow.setContent(e.target.content);
      infoWindow.open(map, e.lnglat)
    });
    markerIcon.on('mouseout', () => {
      infoWindow.close()
    });
    let markerIcon1 = new AMap.Marker({
      position: new AMap.LngLat(113.4816777700,23.1890796300),
      icon: new AMap.Icon({
        image: ExitIcon,
        size: new AMap.Size(38, 38),  //图标大小
        imageSize: new AMap.Size(38, 38)
      }),
      offset: new AMap.Pixel(0, 0),
    });
    map.add(markerIcon1)
    let infoWindow1 = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
    markerIcon1.content = '<div style="color:#fff">东门</div>';
    markerIcon1.on('mousemove', (e) => {
      infoWindow1.setContent(e.target.content);
      infoWindow1.open(map, e.lnglat)
    });
    markerIcon1.on('mouseout', () => {
      infoWindow1.close()
    });
  };
  //头部搜索
  onSearch = value => {
    //console.log(value);
  };
  careOption = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}:{c}({d}%)"
    },
    legend: {
      itemGap: 10,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#fff",
        fontSize: 14
      },
      top: "center",
      left: '60%',
      bottom: 0,
      orient: 'vertical',
      data: [
        "残疾人",
        "弱势群体",
        "灾区",
        "贫困失学儿童",
        "孤儿",
        "其他"
      ]
    },
    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
    series: [
      {
        type: 'pie',
        name: '关爱人群',
        radius: ['0%', '55%'],
        center: ['30%', '45%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false,
            position: "center",
            formatter: function (argument) {
              var html;
              html = "48%";
              return html;
            },
            textStyle: {
              fontSize: 14,
              color: "#fff"
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 35, name: "残疾人" },
          { value: 56, name: "弱势群体" },
          { value: 25, name: "灾区" },
          { value: 42, name: "贫困失学儿童" },
          { value: 35, name: "孤儿" },
          { value: 45, name: "其他" },
        ]
      }
    ]
  }
  render() {
    return (
      <div className="manageOverview-wrap">
        <div className="map-top">
          <div className="map-top-title">萝岗和苑</div>
          <div className="map-top-enter">
            <div
              className="enter"
              onClick={() => {
                this.props.history.push("/main");
              }}
            >
              进入系统 <Icon type="double-right" />
            </div>
            <div
              className="logout"
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              退出
            </div>
          </div>
        </div>
        <div id="Map" className="Map" />
        <div className="left-content">
          <div className="total-wrap">
            <div className="content-item">
              <div className="title">
                社区概况 <span className="number"></span>
              </div>
              <p className='description'>萝岗和苑位于萝岗中心城区西侧广惠高速南地段，社区总建筑面积:200.49万平方米，规划建设住宅68栋，共18827套，区内设置中小学、幼儿园、综合商业体、公交站场等配套公建。</p>
            </div>
            <div className="num-item">
              {/* <img src={RenkouImg} alt="" /> */}
              <div className="num">
                <p className='itemTitle'>类型</p>
                <p className="number">开放</p>
              </div>
            </div>
            <div className="num-item">
              {/* <img src={RenkouImg} alt="" /> */}
              <div className="num">
                <p className='itemTitle'>建立日期</p>
                <p className="number">2019年6月</p>
              </div>
            </div>
            <div className="num-item">
              {/* <img src={FangwuImg} alt="" /> */}
              <div className="num">
                <div className='itemTitle'>实有楼/房屋数</div>
                <div className="number">68/18827</div>
              </div>
            </div>
            <div className="num-item">
              {/* <img src={RenkouImg} alt="" /> */}
              <div className="num">
                <p className='itemTitle'>实有人口</p>
                <p className="number">37758</p>
              </div>
            </div>
            <div className="num-item">
              {/* <img src={RenkouImg} alt="" /> */}
              <div className="num">
                <p className='itemTitle'>安全级别</p>
                <p className="number"><Rate disabled defaultValue={4} className='rate' /></p>
              </div>
            </div>
            <div className="num-item">
              {/* <img src={RenkouImg} alt="" /> */}
              <div className="num">
                <p className='itemTitle'>安全指数</p>
                <p className="number"><Rate disabled defaultValue={4} className='rate' /></p>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="title">人口统计</div>
            <ReactEcharts
              option={this.importantOption}
              theme="myTheme"
              style={{ height: 210 }}
            />
          </div>
          <div className="content-item">
            <div className="title">房屋占比</div>
            <ReactEcharts
              option={this.RoomOption}
              theme="myTheme"
              style={{ height: 210 }}
            />
          </div>

          {/* <div className="content-item">
            <div className="title">
              今日采集 <span className="number">10900</span>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={ShexiangtouImg} alt="" />
                <div className="num">
                  <p className="number">7723</p>
                  <p>摄像头</p>
                </div>
              </div>
              <div className="num-item">
                <img src={KakouImg} alt="" />
                <div className="num">
                  <p className="number">826</p>
                  <p>车牌卡口</p>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={WifiImg} alt="" />
                <div className="num">
                  <p className="number">1384</p>
                  <p>WIFI</p>
                </div>
              </div>
              <div className="num-item">
                <img src={MenjinImg} alt="" />
                <div className="num">
                  <p className="number">967</p>
                  <p>门禁</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="right-content">
          <div className="content-item">
            <div className="title">关爱人群</div>
            <ReactEcharts
              option={this.careOption}
              theme="myTheme"
              style={{ height: 210 }}
            />
          </div>
          <div className="content-item">
            <div className="title">
              感知设备 <span className="number">1047/1047</span>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={ShexiangtouImg} alt="" />
                <div className="num">
                  <p className="number">386/386</p>
                  <p>摄像头</p>
                </div>
              </div>
              <div className="num-item">
                <img src={KakouImg} alt="" />
                <div className="num">
                  <p className="number">3/3</p>
                  <p>车牌卡口</p>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={WifiImg} alt="" />
                <div className="num">
                  <p className="number">637/637</p>
                  <p>WIFI</p>
                </div>
              </div>
              <div className="num-item">
                <img src={MenjinImg} alt="" />
                <div className="num">
                  <p className="number">21/21</p>
                  <p>门禁</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="title">安保力量</div>
            <div className="item-row">
              <div className="num-item">
                <img src={QibaoanImg} alt="" />
                <div className="num">
                  <p className="number">29</p>
                  <p>保安数</p>
                </div>
              </div>
              <div className="num-item">
                <img src={GangtingImg} alt="" />
                <div className="num">
                  <p className="number">4</p>
                  <p>岗亭数</p>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="num-item">
                <img src={ShebaoanImg} alt="" />
                <div className="num">
                  <p className="number">24</p>
                  <p>在岗保安</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-item" >
            <div className="title">今日巡逻</div>
            <EditableTable />
          </div>
          <div className="content-item" style={{ paddingTop: '15px' }}>
            <div className="title">通行统计</div>
            <div className='total-wrap'>
              <div className="num-item">
                <img src={CheliangImg} alt="" />
                <div className="num">
                  <p>今日车辆出/入</p>
                  <p className="number">234/145</p>
                </div>
              </div>
              <div className="num-item">
                <img src={RenkouImg} alt="" />
                <div className="num">
                  <p>今日人员出/入</p>
                  <p className="number">156/230</p>
                </div>
              </div>
              <div className="num-item">
                <img src={FangkeImg} alt="" />
                <div className="num">
                  <p>外来访客</p>
                  <p className="number">79</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottomWrap'>
          <div className='title'>预警</div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={Image} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image2} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image3} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image2} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image3} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image2} className='swiperImg' /></div>
              <div className="swiper-slide"><img src={Image3} className='swiperImg' /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
