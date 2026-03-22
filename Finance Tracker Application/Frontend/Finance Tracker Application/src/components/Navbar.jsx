import { NavLink } from "react-router-dom"
import { LuLayoutDashboard } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
export function Navbar() {
    return (
        <>
            <header>
                <div className="bg-violet-100">
                    <img src="" alt="" />
                    <h3>Finset</h3>
                </div>
                <div className="flex flex-col w-50 bg-violet-100 p-10 h-screen">
                    <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl" to="/"><LuLayoutDashboard />Dashboard</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl" to="/Transaction"><TbTransactionRupee />Transaction</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl" to="/Wallet"><CiWallet />Wallet</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl" to="/Goals"><GoGoal />Goals</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl" to="/Budget"><FaIndianRupeeSign />Budget</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2 hover:bg-violet-300 rounded-2xl" to="/Analytics"><SiGoogleanalytics />Analytics</NavLink>
                </div>
            </header>
        </>
    );
}