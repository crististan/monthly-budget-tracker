import Button from "../ui/Button";

type propTypes = {
    settings: {currency: string},
    addFn: (currency: string) => void,
    onClose: () => void
}

export default function SettingsForm({ settings, addFn, onClose }: propTypes) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const currency = formData.get('currency') as string;

            addFn(currency);
            onClose();
        }}>
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="w-full flex flex-col items-start gap-2 mb-2">
                    <label htmlFor="currency" className="text-sm font-medium text-[var(--clr-neutral-1000)]">Currency:</label>
                    <input 
                        type="text" 
                        name="currency" 
                        placeholder="Ex: RON" 
                        className="w-full border rounded p-2"
                        defaultValue={settings.currency}
                        onChange={(e) => settings.currency = e.target.value} 
                    />
                </div>
            </div>
            <Button type="submit" style="primary" size="medium" customStyles="w-full">Save</Button>
        </form>
    );
}