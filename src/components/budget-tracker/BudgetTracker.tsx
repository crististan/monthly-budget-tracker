import Button from "../ui/Button";
import CategorySection from "./CategorySection";

function BudgetTracker() {
    return (
        <div className="w-full max-w-[400px] mx-auto py-4 px-3 border-[1px] border-[var(--clr-neutral-200)] rounded-md">
            <CategorySection 
                title="Income sources" 
                button={{ 
                    label: "Add Expense", 
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    ),
                    onClick: () => console.log("Button clicked!") 
                }} 
            />
            <Button 
                customStyles="w-full"
                onClick={() => console.log("Button clicked!")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Expense
            </Button>
        </div>
    )
}

export default BudgetTracker;