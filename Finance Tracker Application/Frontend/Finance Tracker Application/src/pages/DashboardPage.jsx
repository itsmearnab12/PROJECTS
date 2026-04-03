import { Cards } from "../components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

export function DashboardPage() {
    const [user, setUser] = useState(null);
    const [summary, setSummary] = useState({
        income: 0,
        expense: 0,
        balance: 0,
    })

    useEffect(() => {
        axios.get("http://localhost:4000/api/auth/me", {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setUser(res.data.user);
                }
            })
            .catch((err) => console.log(err));

        axios.get("http://localhost:4000/api/transaction/summary", {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.success) {
                    setSummary(res.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold mb-8">
                Welcome {user ? user.name : "User"} to Fintech
            </h1>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-6">
                    <Cards
                        title="Total balance"
                        amount={summary.income}
                        percentage={0}
                        isPositive={true}
                    />
                    <Cards
                        title="Income"
                        amount={summary.income}
                        percentage={0}
                        isPositive={true}
                    />
                    <Cards
                        title="Expense"
                        amount={summary.expense}
                        percentage={0}
                        isPositive={false}
                    />
                    <Cards
                        title="Total savings"
                        amount={summary.balance}
                        percentage={0}
                        isPositive={true}
                    />
                </div>
            </div>
        </div>
    );
}