import { MenuSider } from "../MenuSider";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

export const AdminMenuSider = () => {

    const items = [
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'nav 1',
          children: [
            {
              key: '1-1',
              label: 'option 1',
            },
            {
              key: '1-2',
              label: 'option 2',
            },
          ],
        },
        {
          key: '2',
          icon: <LaptopOutlined />,
          label: 'nav 2',
        },
        {
          key: '3',
          icon: <NotificationOutlined />,
          label: 'nav 3',
        },
    ];
    return (
        <MenuSider items={items} />
    )
}
