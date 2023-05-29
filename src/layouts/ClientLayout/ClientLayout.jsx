import React from 'react';
import { UserMenu } from '../../components';

export const ClientLayout = (props) => {
  return (
    <div>
      <UserMenu />
      ClientLayout
      {props.children}
    </div>
  )
}
