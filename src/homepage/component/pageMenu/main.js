import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class pageHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="logo" />
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1">Option 9</Menu.Item>
                    <Menu.Item key="2">Option 10</Menu.Item>
                    <Menu.Item key="3">Option 11</Menu.Item>
                    <Menu.Item key="4">Option 12</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default pageHeader;