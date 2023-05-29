import React from 'react';
import { AdminMenu } from '../../components';

export const AdminLayout = (props) => {
  return (
    <div>
      <AdminMenu />
      AdminLayout
      {props.children}
    </div>
  )
}
