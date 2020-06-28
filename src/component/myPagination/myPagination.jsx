import React from "react";
import { Pagination, ConfigProvider } from "antd";
//import zhCN from "antd/es/locale/zh_CN";
export default class MyPagination extends React.Component {
  showTotal = total => {
    return `共 ${total} 条`;
  };
  onPageChange = page => {
    let pagination = {
      total: this.props.pagination.total,
      current: page,
      pageSize: this.props.pagination.pageSize
    };
    this.props.onChange(pagination);
  };
  changePageSize = (pageSize, current) => {
    let pagination = {
      total: this.props.pagination.total,
      pageSize: pageSize,
      current: current
    };
    this.props.onChange(pagination);
  };
  render() {
    const props = this.props.showSizeChange
      ? {
          size: "small",
          total: this.props.pagination.total,
          current: this.props.pagination.current,
          onChange: page => this.onPageChange(page),
          onShowSizeChange: (pageSize, current) =>
            this.changePageSize(pageSize, current),
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: total => this.showTotal(total)
        }
      : {
          size: "small",
          total: this.props.pagination.total,
          current: this.props.pagination.current,
          onChange: page => this.onPageChange(page),
          showQuickJumper: true,
          showTotal: total => this.showTotal(total)
        };
    return (
      <div style={{textAlign:'center'}}>
        {/* <ConfigProvider locale={zhCN}> */}
          <Pagination {...props} />
        {/* </ConfigProvider> */}
      </div>
    );
  }
}
