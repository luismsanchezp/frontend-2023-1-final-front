import { Routes, Route } from 'react-router-dom';
import { 
    ClientLayout,
    AuthLayout
} from '../layouts';
import {
    Home,
    Profile,
    Auth
} from '../pages/web';

export const WebRouter = () => {
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );
    };
    return (
        <Routes>
            <Route path="/" element={loadLayout(ClientLayout, Home)} />
            <Route path="/profile" element={loadLayout(ClientLayout, Profile)} />
            <Route path="/signin" element={loadLayout(AuthLayout, Auth)} />
        </Routes>
    );
};