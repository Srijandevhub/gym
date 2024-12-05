import { Link } from 'react-router-dom'
import styles from './AdminSidebar.module.css'

const AdminSidebar = ({ active, menuActive }) => {
    return (
        <aside className={`${styles.sidebarWrapper} ${active ? `${styles.show}` : ''}`} id="admin-sidebar">
            <div className={styles.sidebarHeader}>

            </div>
            <div className={styles.sidebarBody}>
                <ul className={styles.sidebarMenu}>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/dashboard" className={`${styles.sidebarLink} ${menuActive === 'dashboard' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-gauge"></i>
                            <span className={styles.linkText}>Dashboard</span>
                        </Link>
                    </li>
                </ul>
                <div className={styles.sidebarHeading}>Management</div>
                <ul className={styles.sidebarMenu}>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/users" className={`${styles.sidebarLink} ${menuActive === 'users' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user"></i>
                            <span className={styles.linkText}>Users</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/employees" className={`${styles.sidebarLink} ${menuActive === 'employees' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user-tie"></i>
                            <span className={styles.linkText}>Employees</span>
                        </Link>
                    </li>
                </ul>
                <div className={styles.sidebarHeading}>Accounts</div>
                <ul className={styles.sidebarMenu}>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/accounts" className={`${styles.sidebarLink} ${menuActive === 'accounts' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-file-invoice-dollar"></i>
                            <span className={styles.linkText}>Accounts</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.sidebarFooter}>
                
            </div>
        </aside>
    )
}
export default AdminSidebar