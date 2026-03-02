import { NavLink } from "react-router-dom"
export function Navbar() {
    return (
        <>
            <header>
                <div>
                    <img src="" alt="" />
                    <h3>Finset</h3>
                </div>
                <div>
                    <NavLink className="link" to="/">Dashboard</NavLink>
                    <NavLink className="link" to="/Transaction">Transaction</NavLink>
                    <NavLink className="link" to="/Wallet">Wallet</NavLink>
                    <NavLink className="link" to="/Goals">Goals</NavLink>
                    <NavLink className="link" to="/Budget">Budget</NavLink>
                    <NavLink className="link" to="/Analytics">Analytics</NavLink>
                </div>
            </header>
        </>
    );
}