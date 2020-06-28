import React from "react";
import { Table } from "antd";
import "./myTable.less";

export default class SimpleTable extends React.Component {
  render() {
    return (
      <div className="myTable">
        <Table
          bordered
          pagination={false}
          columns={this.props.columns}
          dataSource={this.props.data}
          rowClassName={(record, index) => {
            if (index % 2 !== 0) {
              return "rowclass";
            }
          }}
        />
      </div>
    );
  }
}
