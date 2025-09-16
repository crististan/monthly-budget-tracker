import Button from "../ui/Button";

type propTypes = {
    transactionTitlePlceholder: string,
    addFn: (title: string, amount: number) => void,
    onClose: () => void
}

export default function AddTransactionForm({ transactionTitlePlceholder, addFn, onClose }: propTypes) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const title = formData.get('title') as string;
            const amount = formData.get('amount') as string;

            addFn(title, parseFloat(amount));
            onClose();
        }}>
            <div className="flex justify-center items-center gap-3">
                <input type="text" name="title" placeholder={transactionTitlePlceholder} className="w-[60%] border rounded p-2 mb-2" />
                <input type="number" name="amount" placeholder="Amount" className="w-[40%] border rounded p-2 mb-2" />
            </div>
            <Button type="submit" style="primary" size="medium">Add</Button>
        </form>
    );
}