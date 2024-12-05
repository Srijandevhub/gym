import DashboardGraphs from "../../components/admingraph/DashboardGraphs";
import AdminLayout from "../../shared/AdminLayout"
import styles from './Dashboard.module.css'
import Avatar from '../../assets/images/avatar.png'
import { Link } from "react-router-dom";
const Dashboard = () => {
    const currentDate = new Date();
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const totalsalesamount = 1000;
    const dummyData = [
        { month: 'January', sales: 1300 },
        { month: 'February', sales: 1400 },
        { month: 'March', sales: 1350 },
        { month: 'April', sales: 1450 },
        { month: 'May', sales: 1500 },
        { month: 'June', sales: 1600 },
        { month: 'July', sales: 1700 },
        { month: 'August', sales: 1750 },
        { month: 'September', sales: 1800 },
        { month: 'October', sales: 1850 },
        { month: 'November', sales: 1900 },
        { month: 'December', sales: 1950 },
      ];
    return (
        <AdminLayout activeMenu={"dashboard"}>
            <div className="container-fluid">
                <div className={styles.topBar}>
                    <h1>Dashboard</h1>
                    <div className={styles.topBarText}>{currentDate.getDate().toString().padStart(2, 0)}-{(currentDate.getMonth() + 1).toString().padStart(2, 0)}-{currentDate.getFullYear()} {days[currentDate.getDay()]}</div>
                </div>
                <div className="row">
                    <div className="col-xxl-9 col-xl-8">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetHeader}>
                                        <div className={styles.widgetHeading}>Daily Sales</div>
                                    </div>
                                    <div className={styles.widgetBody}>
                                        <div>
                                            <p className={styles.widgetSubheading}>Today 05</p>
                                            <span className={styles.widgetAmount}>₹ {totalsalesamount.toLocaleString('en-in')}</span>
                                        </div>
                                        <span className={`${styles.widgetAmountPercentage} ${styles.widgetAmountLoss}`}>
                                            <i className="fa-solid fa-chart-line"></i>
                                            -2.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetHeader}>
                                        <div className={styles.widgetHeading}>Monthly Sales</div>
                                    </div>
                                    <div className={styles.widgetBody}>
                                        <div>
                                            <p className={styles.widgetSubheading}>December 2024</p>
                                            <span className={styles.widgetAmount}>₹ {totalsalesamount.toLocaleString('en-in')}</span>
                                        </div>
                                        <span className={`${styles.widgetAmountPercentage} ${styles.widgetAmountgrowth}`}>
                                            <i className="fa-solid fa-chart-line"></i>
                                            +2.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetHeader}>
                                        <div className={styles.widgetHeading}>Yearly Sales</div>
                                    </div>
                                    <div className={styles.widgetBody}>
                                        <div>
                                            <p className={styles.widgetSubheading}>2024</p>
                                            <span className={styles.widgetAmount}>₹ {totalsalesamount.toLocaleString('en-in')}</span>
                                        </div>
                                        <span className={`${styles.widgetAmountPercentage} ${styles.widgetAmountgrowth}`}>
                                            <i className="fa-solid fa-chart-line"></i>
                                            +2.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetHeader}>
                                        <div className={styles.widgetHeading}>Members Added Daily</div>
                                    </div>
                                    <div className={styles.widgetBody}>
                                        <div>
                                            <p className={styles.widgetSubheading}>Today 05</p>
                                            <span className={styles.widgetAmount}>₹ {totalsalesamount.toLocaleString('en-in')}</span>
                                        </div>
                                        <span className={`${styles.widgetAmountPercentage} ${styles.widgetAmountgrowth}`}>
                                            <i className="fa-solid fa-chart-line"></i>
                                            +2.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetHeader}>
                                        <div className={styles.widgetHeading}>Members Added Monthly</div>
                                    </div>
                                    <div className={styles.widgetBody}>
                                        <div>
                                            <p className={styles.widgetSubheading}>December 2024</p>
                                            <span className={styles.widgetAmount}>₹ {totalsalesamount.toLocaleString('en-in')}</span>
                                        </div>
                                        <span className={`${styles.widgetAmountPercentage} ${styles.widgetAmountgrowth}`}>
                                            <i className="fa-solid fa-chart-line"></i>
                                            +2.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6 col-12">
                                <div className={styles.widgetBox}>
                                    <div className={styles.widgetHeader}>
                                        <div className={styles.widgetHeading}>Members Added Yearly</div>
                                    </div>
                                    <div className={styles.widgetBody}>
                                        <div>
                                            <p className={styles.widgetSubheading}>2024</p>
                                            <span className={styles.widgetAmount}>₹ {totalsalesamount.toLocaleString('en-in')}</span>
                                        </div>
                                        <span className={`${styles.widgetAmountPercentage} ${styles.widgetAmountgrowth}`}>
                                            <i className="fa-solid fa-chart-line"></i>
                                            +2.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DashboardGraphs salesData={dummyData}/>
                    </div>
                    <div className="col-xxl-3 col-xl-4">
                        <div className={styles.widgetBox}>
                            <div className={styles.widgetHeader}>
                                <div className={styles.widgetHeading}>Active Employees</div>
                            </div>
                            <div className={`${styles.widgetBody} d-block`}>
                                <p className={styles.widgetSubheading}>Today 05</p>
                                <ul className={styles.users}>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <span className={`${styles.userStatus} ${styles.warning}`}></span>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Employee Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <span className={`${styles.userStatus}`}></span>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Employee Name</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.widgetBox}>
                            <div className={styles.widgetHeader}>
                                <div className={styles.widgetHeading}>Quick Members</div>
                            </div>
                            <div className={styles.widgetSearch}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" className={styles.widgetInput} placeholder="search"/>
                            </div>
                            <div className={`${styles.widgetBody} ${styles.members} d-block`}>
                                <ul className={styles.users}>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                    <li className={styles.userList}>
                                        <Link to="/user/id" className={styles.userLink}>
                                            <i>
                                                <img src={Avatar} alt="employee"/>
                                            </i>
                                            <span className={styles.userName}>Member Name</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard;