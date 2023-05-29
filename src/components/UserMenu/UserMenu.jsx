import { Menu } from '../Menu';

export const UserMenu = () => {
    const items = [
        { key: 'profile', label: 'Profile' },
    ];
    
    return (
        <Menu items={items} />
    );
}