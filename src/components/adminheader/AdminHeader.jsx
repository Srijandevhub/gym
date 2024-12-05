import styles from './AdminHeader.module.css'
const AdminHeader = ({ onToogle, collapse }) => {
    return (
        <header className={`${styles.headerWrapper} ${collapse ? `${styles.collapsed}` : ''}`}>
            <nav className={styles.navbarWrapper}>
                <button className={styles.sidebarToogler} aria-label='sidebar toogler' onClick={() => onToogle()}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                <div className={styles.headerContent}>
                    <div className={styles.headerSearch}>
                        <i className="fa-regular fa-user"></i>
                        <input type="text" placeholder='Search...' className={styles.headersearchInput}/>
                    </div>
                    <button className={`${styles.headerBtn} ${styles.active}`} aria-label='notifications'>
                        <i className="fa-solid fa-bell"></i>
                        <span className={styles.alertDot}></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default AdminHeader