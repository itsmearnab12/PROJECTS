import { Cards } from "../components/Cards";
export function AnalyticsPage() {
    return (
        <>
            <div className="analytics-cards">
                <Cards
                    title="Total Balance"
                    amount={data.balance}
                    percentage={12.1}
                    isPositive={true}
                    subtitle="Compared to last month"
                />

                <Cards
                    title="Income"
                    amount={data.income}
                    percentage={6.3}
                    isPositive={true}
                    subtitle="Compared to last month"
                />

                <Cards
                    title="Expense"
                    amount={data.expense}
                    percentage={2.4}
                    isPositive={false}
                    subtitle="Compared to last month"
                />
            </div>
        </>
    );
}