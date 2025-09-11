import { useState } from "react";
import Button from "../ui/Button";
import CategorySection from "./CategorySection";
import PlusIcon from "../icons/PlusIcon";
import Modal from "../ui/Modal";

function BudgetTracker() {
    const incomeSources = [
        { id: 1, title: "Salary", amount: 6500, date: "2025-09-08" }
    ];

    const expenses = [
        { id: 1, title: "House construction", amount: 2000, date: "2025-09-08" },
        { id: 2, title: "ETFs", amount: 500, date: "2025-09-08" }
    ];

    const [showIncomeSourcesModal, setShowIncomeSourcesModal] = useState(false);

    return (
        <div className="w-full max-w-[400px] mx-auto py-4 px-3 border-[1px] border-[var(--clr-neutral-200)] rounded-md">
            <CategorySection 
                title="Income sources"
                transactions={incomeSources}
                button={{ 
                    label: "Add Expense", 
                    icon: (<PlusIcon size={"icon-size-sm"} />),
                    onClick: () => setShowIncomeSourcesModal(true) 
                }} 
            />
            <CategorySection 
                title="Expenses"
                transactions={expenses}
            />
            <Button 
                customStyles="w-full"
                onClick={() => console.log("Button clicked!")}
            >
                <PlusIcon size={"icon-size-lg"} />
                Add Expense
            </Button>
            <Modal 
                open={showIncomeSourcesModal} 
                title="Add Income Source" 
                onClose={() => setShowIncomeSourcesModal(false)}
            >

                <div>
                    <input type="text" placeholder="Source Title" className="border rounded p-2 mb-2" />
                    <input type="number" placeholder="Amount" className="border rounded p-2 mb-2" />
                    <button onClick={() => console.log("Income source added!")}>Add</button>
                </div>
            </Modal>
        </div>
    )
}

export default BudgetTracker;