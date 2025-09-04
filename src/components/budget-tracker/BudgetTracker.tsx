import Button from "../ui/Button";

function BudgetTracker() {
    return (
        <div className="w-full max-w-[400px] mx-auto py-4 px-3 border-[1px] border-[var(--clr-neutral-200)] rounded-md">
            <Button onClick={() => console.log("Button clicked!")}>Add Expense</Button>
        </div>
    )
}

export default BudgetTracker;