import { Link } from 'react-router-dom'
import AdminLayout from '../../shared/AdminLayout'
import styles from './Users.module.css'
const Users = () => {
    return (
        <AdminLayout activeMenu={"users"}>
            <div className="container-fluid">
                <div className={styles.topBar}>
                    <h1>Dashboard</h1>
                    <ul className={styles.btnList}>
                        <li>
                            <Link to="/admin/add-user" className={styles.btnPrimary}>
                                <i class="fa-solid fa-user-plus"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>
                                    <div className='d-flex align-items-center'>
                                        <input type='checkbox'/>
                                        <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
                                    </div>
                                </th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>UID</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Users