import { Cards } from "../components/Cards";

export function DashboardPage() {
    return (
        <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold mb-8">
                Welcome Back Arnab to Fintech
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