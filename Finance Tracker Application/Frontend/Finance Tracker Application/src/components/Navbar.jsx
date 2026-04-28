import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import axios from "axios";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { TbLogout } from "react-icons/tb";


export function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:4000/api/auth/logout", {},
                { withCredentials: true }
            );

            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <header>
                <div className="Navigation-header">
                    <h3>FinSet</h3>
                    <div className="Navigation-bar">
                        <div className="navigation-button">
                            <NavLink className="link navlink" to="/"><LuLayoutDashboard />Dashboard</NavLink>
                            <NavLink className="link navlink" to="/Transaction"><TbTransactionRupee />Transaction</NavLink>
                            <NavLink className="link navlink" to="/Wallet"><CiWallet />Wallet</NavLink>
                            {/* <NavLink className="link navlink" to="/Goals"><GoGoal />Goals</NavLink> */}
                            <NavLink className="link navlink" to="/Budget"><FaIndianRupeeSign />Budget</NavLink>
                            <NavLink className="link navlink" to="/Analytics"><SiGoogleanalytics />Analytics</NavLink>
                        </div>
                        <button onClick={handleLogout} className="Navbar-btn"><TbLogout />Logout</button>
                    </div>
                </div>
            </header>
        </>
    );
}