import { useEffect } from "react";
import type { ReactNode } from "react";
import CloseIcon from "../icons/CloseIcon";

type propTypes = {
    open: boolean,
    title: string,
    onClose: () => void,
    children: ReactNode
}

export default function Modal({ open, title, onClose, children }: propTypes) {
    // simple useEffect to capture ESC key to close the modal 
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open) {
                if (onClose) {
                    onClose();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[var(--clr-neutral-1000)]/50 flex justify-center items-center z-50">
            <div className="w-full max-w-[400px] bg-[var(--clr-neutral-0)] rounded-md p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-[var(--clr-neutral-1000)]">{title}</h2>
                    <button onClick={onClose} className="cursor-pointer"><CloseIcon size="icon-size-md" /></button>
                </div>
                { children }
            </div>
        </div>
    )
}