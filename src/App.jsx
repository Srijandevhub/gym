import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/user/HomePage"
import Dashboard from "./pages/admin/Dashboard"
import Users from "./pages/admin/Users"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* USERS */}
                <Route path="/" element={<HomePage />}/>
                {/* ADMIN */}
                <Route path="/admin/dashboard" element={<Dashboard />}/>
                <Route path="/admin/users" element={<Users />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App