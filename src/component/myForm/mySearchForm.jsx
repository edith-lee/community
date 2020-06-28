import React from "react";
import {
  Input,
  Select,
  Form,
  Button,
  Checkbox,
  DatePicker,
  Modal,
  Icon
} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker, MonthPicker } = DatePicker;
class MyForm extends React.Component {
  state = {
    isopen: false //年选择框显示
  };
  handleFilterSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.filterSubmit(values);
      }
    });
  };
  // 清空表单
  reset = () => {
    this.props.form.resetFields();
  };
  getOptionList(data) {
    if (!data) {
      return [];
    } else {
      let options = [];
      data.map(item => {
        options.push(
          <Option value={item.id} key={item.id}>
            {item.name}
          </Option>
        );
      });
      return options;
    }
  }
  initFormList = () => {
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList;
    const formItemList = [];
    if (formList && formList.length > 0) {
      formList.forEach((item, index) => {
        let label = item.label;
        let field = item.field;
        let initialValue = item.initialValue || "";
        let rules = item.rules || [];
        let placeholder = item.placeholder || "";
        let width = item.width;
        if (item.type == "DATE") {
          const DATE = (
            <FormItem label={label} key={field} {...this.formItemLayout}>
              {getFieldDecorator(`${field}`)(
                <DatePicker
                  size="small"
                  style={{ width: width }}
                  showTime={true}
                  placeholder={placeholder}
                  format="YYYY-MM-DD HH:mm:ss"
                />
              )}
            </FormItem>
          );
          formItemList.push(DATE);
        } else if (item.type == "DATES") {
          const DATES = (
            <FormItem label={label} key={field} {...this.formItemLayout}>
              {getFieldDecorator(`${field}`, {
                initialValue: initialValue,
                rules: rules
              })(
                <RangePicker
                  size="small"
                  locale={zh_CN}
                  style={{ width: width }}
                />
              )}
            </FormItem>
          );
          formItemList.push(DATES);
        } else if (item.type == "MONTH") {
          const DATES = (
            <FormItem label={label} key={field} {...this.formItemLayout}>
              {getFieldDecorator("month", {
                initialValue: moment(),
                rules: rules
              })(
                <MonthPicker
                  size="small"
                  placeholder={placeholder}
                  style={{ width: width }}
                />
              )}
            </FormItem>
          );
          formItemList.push(DATES);
        } else if (item.type == "INPUT") {
          const INPUT = (
            <FormItem label={label} key={field} {...this.formItemLayout}>
              {getFieldDecorator(`${field}`, {
                initialValue: initialValue,
                rules: [
                  {
                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                    message: `请不要输入特殊字符!`
                  }
                ]
              })(
                <Input
                  type="text"
                  size="small"
                  placeholder={placeholder}
                  maxLength={20}
                  style={{ width: width }}
                />
              )}
            </FormItem>
          );
          formItemList.push(INPUT);
        } else if (item.type == "SELECT") {
          const SELECT = (
            <FormItem label={label} key={field} {...this.formItemLayout}>
              {getFieldDecorator(`${field}`, {
                initialValue: initialValue
              })(
                <Select
                  size="small"
                  style={{ width: width }}
                  placeholder={placeholder}
                >
                  {this.getOptionList(item.list)}
                </Select>
              )}
            </FormItem>
          );
          formItemList.push(SELECT);
        } else if (item.type == "CHECKBOX") {
          const CHECKBOX = (
            <FormItem key={field} {...this.formItemLayout}>
              {getFieldDecorator(`${field}`, {
                initialValue: initialValue, //true | false
                valuePropName: "checked"
              })(<Checkbox size="small">{label}</Checkbox>)}
            </FormItem>
          );
          formItemList.push(CHECKBOX);
        } else if (item.type == "YEARS") {
          const YEARS = (
            <FormItem label={label} key="years" {...this.formItemLayout}>
              {getFieldDecorator(`years`, {
                initialValue: initialValue
              })(
                <DatePicker
                  open={this.state.isopen}
                  placeholder="请选择年份"
                  style={{ width: width }}
                  size="small"
                  mode="year"
                  format="YYYY"
                  onFocus={() => {
                    this.setState({ isopen: true });
                  }}
                  onBlur={() => {
                    this.setState({ isopen: false });
                  }}
                  onPanelChange={v => {
                    //console.log(v);
                    this.setState({
                      isopen: false
                    });
                    this.props.form.setFieldsValue({ years: v });
                  }}
                />
              )}
            </FormItem>
          );
          formItemList.push(YEARS);
        }
      });
    }
    return formItemList;
  };
  render() {
    return (
      <div>
        <Form layout="inline">
          {this.initFormList()}
          <FormItem >
            <Button
              type="primary"
              style={{ margin: "0 10px" }}
              onClick={this.handleFilterSubmit}
              size="small"
            >
              查询
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Form.create({})(MyForm);
