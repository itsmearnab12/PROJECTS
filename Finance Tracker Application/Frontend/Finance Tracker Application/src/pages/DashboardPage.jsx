import { Cards } from "../components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

export function DashboardPage() {
    const [user, setUser] = useState(null);

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
                        amount={15700}
                        percentage={12.1}
                        isPositive={true}
                    />
                    <Cards
                        title="Income"
                        amount={8500}
                        percentage={6.3}
                        isPositive={true}
                    />
                    <Cards
                        title="Expense"
                        amount={6222}
                        percentage={2.4}
                        isPositive={false}
                    />
                    <Cards
                        title="Total savings"
                        amount={32913}
                        percentage={12.1}
                        isPositive={true}
                    />
                </div>
            </div>
        </div>
    );
}