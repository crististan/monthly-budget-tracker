import type { ReactNode } from "react";

type propTypes = {
    children: ReactNode,
    type?: "button" | "submit" | "reset",
    customStyles?: string | null,
    style?: "primary" | "secondary" | "tertiary",
    size?: "small" | "medium" | "large",
    onClick?: () => void
}

export default function Button({ children, type = "button", customStyles = null, style = "primary", size = "large", onClick }: propTypes) {
    let cssClasses = "";

    if (customStyles) {
        cssClasses = customStyles;
    }

    switch (style) {
        case "secondary":
            cssClasses += " bg-transparent text-[var(--clr-neutral-1000)] border-[1px] border-[var(--clr-neutral-1000)] hover:text-[var(--clr-blue-500)] hover:border-[var(--clr-blue-500)]";
            break;
        case "tertiary":
            cssClasses += " bg-transparent text-[var(--clr-blue-500)] border-none hover:text-[var(--clr-neutral-1000)]";
            break;
        default:
            cssClasses += " bg-[var(--clr-neutral-1000)] text-[var(--clr-neutral-0)] border-[1px] border-[var(--clr-neutral-1000)] hover:bg-[var(--clr-blue-500)] hover:border-[var(--clr-blue-500)]";
            break;
    }

    switch (size) {
        case "small":
            cssClasses += " text-xs gap-1";
            break;
        case "medium":
            cssClasses += " text-sm gap-3 px-8 py-3";
            break;
        default:
            cssClasses += " text-base gap-3 px-10 py-4";
            break;
    }

    return (
        <button type={type} onClick={onClick} className={`${cssClasses} flex justify-center items-center rounded-md transition-all hover:cursor-pointer`}>
            { children }
        </button>
    );
}