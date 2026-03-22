export function Cards({title, amount, percentage, isPositive}){
    return(
        <>
        <div className="border p-10 w-2xs rounded-2xl">
            <h4>{title}</h4>
            <h2>${amount}</h2>
            <p>
                <span>{percentage}</span>
                <span>{isPositive ? "▲" : "▼"}</span>
            </p>
        </div>
        </>
    );
}