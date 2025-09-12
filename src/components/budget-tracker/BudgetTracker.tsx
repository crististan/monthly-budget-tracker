import { useState } from "react";
import Button from "../ui/Button";
import CategorySection from "./CategorySection";
import PlusIcon from "../icons/PlusIcon";
import Modal from "../ui/Modal";

export default function BudgetTracker() {
    const [incomeSources, setIncomeSources] = useState([
        { id: 1, title: "Salary", amount: 6500, date: "2025-09-08" }
    ]);

    const [expenses, setExpenses] = useState([
        { id: 1, title: "House construction", amount: 2000, date: "2025-09-08" },
        { id: 2, title: "ETFs", amount: 500, date: "2025-09-08" }
    ]);

    const [showIncomeSourcesModal, setShowIncomeSourcesModal] = useState(false);

    const addIncomeSource = (title: string, amount: number) => {
        setIncomeSources(prevIncomeSources => [
            ...prevIncomeSources,
            { id: prevIncomeSources.length + 1, title, amount, date: new Date().toISOString().split('T')[0] }
        ]);
    };

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
                    <form onSubmit={(e) => {
                        e.preventDefault();

                        const form = e.currentTarget as HTMLFormElement;
                        const formData = new FormData(form);
                        const title = formData.get('title') as string;
                        const amount = formData.get('amount') as string;

                        addIncomeSource(title, parseFloat(amount));
                        setShowIncomeSourcesModal(false);
                    }}>
                        <input type="text" name="title" placeholder="Source Title" className="border rounded p-2 mb-2" />
                        <input type="number" name="amount" placeholder="Amount" className="border rounded p-2 mb-2" />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}   