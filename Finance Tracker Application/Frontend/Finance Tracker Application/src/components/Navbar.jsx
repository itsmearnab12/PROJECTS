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
                <div>
                    <img src="" alt="" />
                    <h3>Finset</h3>
                </div>
                <div className="flex flex-col w-50 bg-violet-200 p-10 h-screen">
                    <NavLink className="link p-3 flex items-center gap-2" to="/"><LuLayoutDashboard />Dashboard</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2" to="/Transaction"><TbTransactionRupee />Transaction</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2" to="/Wallet"><CiWallet />Wallet</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2" to="/Goals"><GoGoal />Goals</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2" to="/Budget"><FaIndianRupeeSign />Budget</NavLink>
                    <NavLink className="link p-3 flex items-center gap-2" to="/Analytics"><SiGoogleanalytics />Analytics</NavLink>
                </div>
            </header>
        </>
    );
}