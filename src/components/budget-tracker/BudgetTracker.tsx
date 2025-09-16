import { useState } from "react";
import Button from "../ui/Button";
import CategorySection from "./CategorySection";
import PlusIcon from "../icons/PlusIcon";
import Modal from "../ui/Modal";
import AddTransactionForm from "../forms/AddTransactionForm";

export default function BudgetTracker() {
    const [incomeSources, setIncomeSources] = useState<{ id: number; title: string; amount: number; type: "income"; date: string; }[]>([
        { id: 1, title: "Salary", amount: 6500, type: "income", date: "2025-09-08" }
    ]);

    const [expenses, setExpenses] = useState<{ id: number; title: string; amount: number; type: "expense"; date: string; }[]>([
        { id: 1, title: "House construction", amount: 2000, type: "expense", date: "2025-09-08" },
        { id: 2, title: "ETFs", amount: 500, type: "expense", date: "2025-09-08" }
    ]);

    const [showIncomeSourcesModal, setShowIncomeSourcesModal] = useState(false);
    const [showExpensesModal, setShowExpensesModal] = useState(false);

    const addIncomeSource = (title: string, amount: number) => {
        setIncomeSources(prevIncomeSources => [
            ...prevIncomeSources,
            { id: prevIncomeSources.length + 1, title, amount, type: "income", date: new Date().toISOString().split('T')[0] }
        ]);
    };

    const addExpense = (title: string, amount: number) => {
        setExpenses(prevExpenses => [
            ...prevExpenses,
            { id: prevExpenses.length + 1, title, amount, type: "expense", date: new Date().toISOString().split('T')[0]}
        ]);
    }

    const removeTransaction = (id: number, type: 'income' | 'expense') => {
        if (type === 'income') {
            setIncomeSources(prevIncomeSources => [
                ...prevIncomeSources.filter((income) => income.id !== id)
            ]);
        } else {
            setExpenses(prevExpense => [
                ...prevExpense.filter((expense) => expense.id !== id)
            ])
        }
    }

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
                removeFn={removeTransaction}
            />
            <CategorySection 
                title="Expenses"
                transactions={expenses}
                removeFn={removeTransaction}
            />
            <Button 
                customStyles="w-full"
                onClick={() => setShowExpensesModal(true)}
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
                    <AddTransactionForm
                        transactionTitlePlceholder="Income source"
                        addFn={addIncomeSource}
                        onClose={() => setShowIncomeSourcesModal(false)}
                    />
                </div>
            </Modal>

            <Modal 
                open={showExpensesModal} 
                title="Add Expense" 
                onClose={() => setShowExpensesModal(false)}
            >
                <div>
                    <AddTransactionForm
                        transactionTitlePlceholder="Expense"
                        addFn={addExpense}
                        onClose={() => setShowExpensesModal(false)}
                    />
                </div>
            </Modal>
        </div>
    )
}   