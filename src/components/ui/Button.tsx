import type { ReactNode } from "react";

type propTypes = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button({ children, type = "button", onClick }: propTypes) {
    return (
        <button type={type} onClick={onClick} className="w-full px-10 py-2 bg-[var(--clr-neutral-1000)] text-[var(--clr-neutral-0)] rounded-md transition-all hover:bg-[var(--clr-blue-500)] hover:cursor-pointer">
            { children }
        </button>
    );
}