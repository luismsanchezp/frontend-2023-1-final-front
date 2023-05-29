import React from 'react';
import { Menu as AntMenu, Badge, Avatar } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  GithubFilled
} from '@ant-design/icons';
import { AvatarDropdown } from '../AvatarDropdown';
import './menu.scss';

export const Menu = ({ items }) => {
    return (
        <header className="full-width-menu">
          <div className="logo">
            <GithubFilled style={{ fontSize: '20px', color: '#fff' }} />
          </div>
          <AntMenu 
            theme="dark" 
            mode="horizontal"
            className='menu'
            items={items}
          />
          <div className="right-menu">
            <Badge dot>
              <BellOutlined style={{ fontSize: '20px', color: '#fff' }} />
            </Badge>
            <AvatarDropdown />
          </div>
        </header>
    );
  };