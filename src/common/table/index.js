import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';

class Table extends React.Component {
  constructor(props) {

  }
  render() {
    return (
      <div>
        <Button>新增</Button>
        <Button>批量删除</Button>
        <Table />
      </div>
    );
  }
}
Table.propTypes = {
  initAction: PropTypes.func, // 绑定的初始init事件
  bindSelector: PropTypes.any, // 绑定的
  tableRowActionOption: PropTypes.Array, // 一个ReactNode list[] 如果是字符串'edit','delete' 则表示的是编辑或删除

};
export default Table;
