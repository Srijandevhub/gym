import { useEffect, useState } from 'react'
import AdminSidebar from '../components/adminsidebar/AdminSidebar'
import styles from './AdminLayout.module.css'
import AdminHeader from '../components/adminheader/AdminHeader';
const AdminLayout = ({ children, activeMenu }) => {
    const [sidebarActive, setSidebarActive] = useState(true);
    const handleSidebarToogle = () => {
        setSidebarActive(!sidebarActive);
    }
    const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 991) {
            setSidebarActive(false);
        } else {
            setSidebarActive(true);
        }
    }
    useEffect(() => {
        handleResize();
        document.addEventListener("resize", handleResize);
        return () => {
            document.removeEventListener("resize", handleResize);
        }
    }, [])
    return (
        <>
        <AdminSidebar active={sidebarActive} menuActive={activeMenu}/>
        <AdminHeader onToogle={handleSidebarToogle} collapse={sidebarActive}/>
        <main className={`${styles.main} ${sidebarActive ? `${styles.collapsed}` : ''}`} id="admin-main">
            {children}
        </main>
        </>
    )
}
export default AdminLayout