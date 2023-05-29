import { Menu } from '../Menu';

export const AdminMenu = () => {
    const items = [
        { key: 'users', label: 'Users' },
        { key: 'products', label: 'Products' },
        { key: 'orders', label: 'Orders' },
    ];
    
    return (
        <Menu items={items} />
    );
}