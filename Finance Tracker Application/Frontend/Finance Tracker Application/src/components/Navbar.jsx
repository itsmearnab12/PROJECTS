import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import axios from "axios";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";

export function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:4000/api/auth/logout",{},
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
                <div className="bg-violet-100 p-4 Title">
                    <h3 className="text-xl font-bold">Finset</h3>
                </div>
                <div className="flex flex-col w-50 bg-violet-100 p-10 h-screen justify-between">
                    <div className="flex flex-col navlink">
                        <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl navpage" to="/"><LuLayoutDashboard />Dashboard</NavLink>
                        <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl navpage" to="/Transaction"><TbTransactionRupee />Transaction</NavLink>
                        <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl navpage" to="/Wallet"><CiWallet />Wallet</NavLink>
                        <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl navpage" to="/Goals"><GoGoal />Goals</NavLink>
                        <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl navpage" to="/Budget"><FaIndianRupeeSign />Budget</NavLink>
                        <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl navpage" to="/Analytics"><SiGoogleanalytics />Analytics</NavLink>
                    </div>
                    <button onClick={handleLogout} className="mt-5 p-3 bg-red-500 text-white rounded-xl hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </header>
        </>
    );
}