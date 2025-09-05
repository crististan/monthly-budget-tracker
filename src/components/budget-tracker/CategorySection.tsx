import type { JSX } from "react";
import Button from "../ui/Button";

type propTypes = {
    title: string
    button?: { 
        label: string,
        icon: JSX.Element,
        onClick: () => void 
    }
}

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
        </div>
    );
}