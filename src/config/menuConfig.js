import Video from "../view/video/video";
import Warning from "../view/warning/warning";
import Wpower from "../view/warning/power";
import Crecord from "../view/car/record";
import Cvideo from "../view/car/video";
import Face from "../view/face/face";
import Fpassage from "../view/fire/passage";
import Fequipment from "../view/fire/equipment";
import Visitor from "../view/visitor/visitor";
import Pequipment from "../view/property/equipment";
import Pblueprint from "../view/property/blueprint";
import People from "../view/people/people";
import Speople from "../view/security/people";
import Ssentry from "../view/security/sentry";
import Spatrol from "../view/security/patrol";
import Sclockin from "../view/security/clockin";
import Equipment from "../view/equipment/equipment";
import Building from "../view/property/building"
import Parking from "../view/property/parking"
import EquipmentNew from "../view/equipment/equipmentNew"
import Fblueprint from "../view/fire/blueprint"
import Wface from "../view/warning/face"
import Wcar from "../view/warning/car"
import Pcar from "../view/property/car"
const MenuList = [
 
  {
    title: "视频轮播",
    key: "/main/video",
    component: Video,
    icon: "play-square"
  },

  {
    title: "预警消息",
    icon: "sound",
    children: [
      {
        title: "围界预警",
        key: "/main/warning/view",
        component: Warning
      },
      {
        title: "电力预警",
        key: "/main/warning/power",
        component: Wpower
      },
      {
        title: "人脸预警",
        key: "/main/warning/face",
        component: Wface
      },
      {
        title: "车牌预警",
        key: "/main/warning/car",
        component: Wcar
      }
    ]
  },
  {
    title: "通行记录",
    icon: "car",
    children: [
      {
        title: "车辆记录",
        key: "/main/car/record",
        component: Crecord
      },
      {
        title: "人脸记录",
        key: "/main/face",
        component: Face,
        //icon: "smile"
      },
      {
        title: "访客记录",
        key: "/main/visitor",
        component: Visitor,
        //icon: "idcard"
      },
    ]
  },
  {
    title: "物业管理",
    icon: "audit",
    children: [
      {
        title: "楼宇管理",
        key: "/main/property/building",
        component: Building
      },
      {
        title: "车位管理",
        key: "/main/property/parking",
        component: Parking
      },
      {
        title: "设施管理",
        key: "/main/property/equipment",
        component: Pequipment
      },
      {
        title: "图纸管理",
        key: "/main/property/blueprint",
        component: Pblueprint
      },
      {
        title: "住户管理",
        key: "/main/property/people",
        component: People,
        //icon: "team"
      },
      {
        title: "车辆管理",
        key: "/main/property/car",
        component: Pcar,
        //icon: "team"
      },
      {
        title: "设备管理",
        key: "/main/equipment",
        component: EquipmentNew,
        //icon: "video-camera"
      }
    ]
  },
  {
    title: "消防管理",
    icon: "fire",
    children: [
      {
        title: "消防通道",
        key: "/main/fire/passage",
        component: Fpassage
      },
      {
        title: "消防器材",
        key: "/main/fire/equipment",
        component: Fequipment
      },
      {
        title: "消防图纸",
        key: "/main/fire/blueprint",
        component: Fblueprint
      }
    ]
  },
  

  
  {
    title: "安保管理",
    icon: "safety-certificate",
    children: [
      {
        title: "人员管理",
        key: "/main/security/people",
        component: Speople
      },
      {
        title: "岗亭位置",
        key: "/main/security/sentry",
        component: Ssentry
      },
      {
        title: "巡逻计划",
        key: "/main/security/patrol",
        component: Spatrol
      },
      {
        title: "值班打卡",
        key: "/main/security/clockin",
        component: Sclockin
      }
    ]
  }
];
export default MenuList;
