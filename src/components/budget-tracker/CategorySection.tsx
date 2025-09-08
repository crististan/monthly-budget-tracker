import type { JSX } from "react";
import Button from "../ui/Button";
import TransactionItem from "./TransactionItem";

type propTypes = {
    title: string
    button?: { 
        label: string,
        icon: JSX.Element,
        onClick: () => void 
    }
}

const incomeSources = [
    { id: 1, title: "Salary", amount: 5000, date: "2025-09-08" },
    { id: 2, title: "Salary", amount: 2000, date: "2025-09-08" }
];

export default function CategorySection({ title, button }: propTypes) {
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
                {incomeSources.map((source) => (
                    <TransactionItem 
                        key={source.id} 
                        title={source.title} 
                        amount={source.amount} 
                        date={source.date} 
                    />
                ))}
            </div>
        </div>
    );
}