import type { JSX } from "react";
import Button from "../ui/Button";
import TransactionItem from "./TransactionItem";

type propTypes = {
    title: string
    transactions: Array<{ id: number, title: string, amount: number, type: 'income' | 'expense', date: string }>
    button?: { 
        label: string,
        icon: JSX.Element,
        onClick: () => void
    },
    removeFn: (id: number, type: 'income' | 'expense')  => void
}

export default function CategorySection({ title, transactions, button, removeFn }: propTypes) {
    return (
        <div>
            <div className="w-full flex justify-between items-center mb-1">
                <h2 className="text-base font-medium text-[var(--clr-neutral-1000)]">{title}</h2>
                {button && (
                    <Button onClick={button.onClick} style="tertiary" size="small">
                        {button.icon}
                        {button.label}
                    </Button>
                )}
            </div>
            <div className="w-full mb-4">
                {transactions.map((transaction) => (
                    <TransactionItem 
                        key={transaction.id} 
                        id={transaction.id}
                        title={transaction.title} 
                        amount={transaction.amount} 
                        type={transaction.type} 
                        date={transaction.date}
                        removeFn={removeFn}
                    />
                ))}
            </div>
        </div>
    );
}