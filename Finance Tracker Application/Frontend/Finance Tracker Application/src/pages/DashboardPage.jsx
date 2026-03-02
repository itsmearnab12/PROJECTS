import { Cards } from "../components/Cards";
export function DashboardPage() {
    return (
        <>
            <div>
                Welcome Back Arnab to Fintech
                <div className="flex gap-3 justify-between">
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
        </>
    );
}