import { Menu } from '../Menu';
import { useLocation, useNavigate } from 'react-router-dom';

export const AdminMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(e.key);
      };

    const items = [
        { key: '/', label: 'Dashboard' },
        { key: '/admin/management', label: 'Management' },
        { key: '/admin/planning', label: 'Planning' },
        { key: '/admin/tracing', label: 'Tracing' },
    ];
    
    return (
        <Menu items={items} location={location} handleClick={handleClick} />
    );
}