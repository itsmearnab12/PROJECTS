import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"
import axios from "axios";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { TbLogout } from "react-icons/tb";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


export function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

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
            <div className="mobile-header">
                <h3>FinSet</h3>

                <button className="menu-btn" onClick={toggleMenu}>
                    {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>
            <header>
                <div className={`Navigation-header ${isOpen ? "open" : ""}`}>
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