import Button from "../ui/Button";
import CategorySection from "./CategorySection";
import PlusIcon from "../icons/PlusIcon";

function BudgetTracker() {
    return (
        <div className="w-full max-w-[400px] mx-auto py-4 px-3 border-[1px] border-[var(--clr-neutral-200)] rounded-md">
            <CategorySection 
                title="Income sources" 
                button={{ 
                    label: "Add Expense", 
                    icon: (<PlusIcon size={"icon-size-sm"} />),
                    onClick: () => console.log("Button clicked!") 
                }} 
            />
            <Button 
                customStyles="w-full"
                onClick={() => console.log("Button clicked!")}
            >
                <PlusIcon size={"icon-size-lg"} />
                Add Expense
            </Button>
        </div>
    )
}

export default BudgetTracker;