import CloseIcon from "../icons/CloseIcon";
import Tooltip from "../ui/Tooltip";

type propTypes = {
    id: number,
    title: string,
    amount: number,
    type: 'income' | 'expense',
    date: string,
    removeFn: (id: number, type: 'income' | 'expense') => void
}

export default function TransactionItem({ id, title, amount, type, date, removeFn }: propTypes) {
    return (
        <div className="w-full flex justify-between items-start mb-2 p-4 rounded-lg border-[1px] border-[var(--clr-neutral-100)]">
            <div>
                <h3 className="text-sm font-medium text-[var(--clr-gray-500)]">{title}</h3>
                <small className="text-[10px] text-[var(--clr-neutral-600)]">{date}</small>
            </div>
            <div className="flex items-center gap-2">
                <div className="text-base font-medium text-[var(--clr-success-700)]">{amount}</div>
                <Tooltip content={`Delete ${type}`}>
                    <button 
                        className="cursor-pointer" 
                        onClick={() => {
                            removeFn(id, type);
                        }
                    }>
                        <CloseIcon size="icon-size-sm" />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}