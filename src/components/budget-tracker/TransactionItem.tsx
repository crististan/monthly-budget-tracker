import CloseIcon from "../icons/CloseIcon";

type propTypes = {
    title: string,
    amount: number,
    date: string
}

export default function TransactionItem({ title, amount, date }: propTypes) {
    return (
        <div className="w-full flex justify-between items-start mb-2 p-4 rounded-lg border-[1px] border-[var(--clr-neutral-200)]">
            <div>
                <h3 className="text-sm font-medium text-[var(--clr-gray-500)]">{title}</h3>
                <small className="text-[10px] text-[var(--clr-neutral-600)]">{date}</small>
            </div>
            <div className="flex items-center gap-2">
                <div className="text-base font-medium text-[var(--clr-success-700)]">{amount}</div>
                <button className="cursor-pointer"><CloseIcon size="icon-size-sm" /></button>
            </div>
        </div>
    );
}