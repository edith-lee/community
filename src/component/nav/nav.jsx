import React, { Component } from "react";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { Menu, Icon } from "antd";
import "./nav.less";
import MenuList from "../../config/menuConfig";
import CvideoDetail from "../../view/car/videoDetail";
import BoundarySetarea from '../../view/equipment/boundarySetarea'
import BoundaryDeatil from '../../view/equipment/boundaryDetail'
import BoundarySetting from '../../view/equipment/boundarySetting'
import BuildingDetail from "../../view/property/buildingDetail"
import BuildingUnitDetail from "../../view/property/unitDetail"
const { SubMenu } = Menu;
export default class MyIndex extends Component {
  state = {
    openKeys: [],
    rootSubmenuKeys: [],
    collapsed: false
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount = () => {
    let urls = window.location.hash.split("#");
    let url = urls[1].split("/");
    if (
      url[url.length - 1].indexOf("-") > -1 ||
      !isNaN(parseInt(url[url.length - 1]))
    ) {
      //console.log(1);
      url.splice(url.length - 2, 2);
    }
    urls[1] = url.join("/");
    let openKeys = [];
    let selectedKeys = [];
    if (urls.length > 1 && urls[1] !== "/main") {
      MenuList.map(item => {
        if (item.children) {
          item.children.map(i => {
            if (i.key === urls[1]) {
              openKeys.push(item.title);
              selectedKeys.push(i.key);
            }
          });
        } else {
          if (item === urls[1]) {
            openKeys.push(item.title);
            selectedKeys.push(item.key);
          }
        }
      });
    }
    let rootSubmenuKeys = [];
    MenuList.map(item => {
      rootSubmenuKeys.push(item.title);
    });
    this.setState({
      rootSubmenuKeys,
      openKeys,
      selectedKeys
    });
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  onSelect = e => {
    this.setState({
      selectedKeys: e.selectedKeys
    });
  };
  render() {
    return (
      <div className="routerWrap">
        <div className="navWrap">
          <div className="navLeft">
            <div
              className="navLeftImage"
              onClick={() => {
                this.props.history.push("/overview");
              }}
            ></div>
            <div
              type="primary"
              onClick={this.toggleCollapsed}
              className="collapsed"
            >
              <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
            </div>
          </div>
          <div className="navCenter">萝岗和苑</div>
          <div className="navRight">
            {/* <div
              className="overview"
              onClick={() => {
                this.props.history.push("/overview");
              }}
            >
              查看大屏
            </div> */}
            <div
              className="logout"
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              退出系统
            </div>
          </div>
        </div>
        <div className="content">
          <div className="leftMenu">
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              selectedKeys={this.state.selectedKeys}
              onSelect={this.onSelect}
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              {MenuList.map(item => {
                if (item.children) {
                  return (
                    <SubMenu
                      key={item.title}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          <span>{item.title}</span>
                        </span>
                      }
                    >
                      {item.children.map(i => {
                        return (
                          <Menu.Item key={i.key}>
                            <div
                              onClick={() => {
                                this.props.history.push(i.key);
                              }}
                            >
                              {i.title}
                            </div>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item
                      key={item.key}
                      onClick={() => {
                        this.props.history.push(item.key);
                      }}
                    >
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </div>
          <div className="contentWrap">
            <Router>
              <Switch>
                {MenuList.map(item => {
                  if (item.children) {
                    return item.children.map(i => {
                      return (
                        <Route
                          path={i.key}
                          component={i.component}
                          exact
                          key={i.key}
                        />
                      );
                    });
                  } else {
                    return (
                      <Route
                        path={item.key}
                        component={item.component}
                        exact
                        key={item.key}
                      />
                    );
                  }
                })}
                <Route
                  path="/main/property/building/detail/:id"
                  component={BuildingDetail}
                  exact
                />
                <Route
                  path="/main/property/building/unit/detail/:data"
                  component={BuildingUnitDetail}
                  exact
                />
                <Route
                  path="/main/car/video/detail/:time"
                  component={CvideoDetail}
                  exact
                />
                <Route
                  path="/main/equipment/setarea"
                  component={BoundarySetarea}
                  exact
                />
                <Route
                  path="/main/equipment/detail"
                  component={BoundaryDeatil}
                  exact
                />
                <Route
                  path="/main/equipment/setting"
                  component={BoundarySetting}
                  exact
                />
                <Redirect
                  to={
                    MenuList[0].children
                      ? MenuList[0].children[0].key
                      : MenuList[0].key
                  }
                />
              </Switch>
            </Router>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
