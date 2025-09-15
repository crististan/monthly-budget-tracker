type propTypes = {
    show: boolean,
    content: string
};

export default function Tooltip({show, content }: propTypes) {
    return (
        <div className={`
            w-fit bg-[var(--clr-neutral-1000)] text-[var(--clr-neutral-0)] text-xs p-1 rounded absolute top-[50%] left-[100%] ml-2 translate-y-[-50%]
            before:content-[''] before:absolute before:w-[8px] before:h-[8px] before:bg-[var(--clr-neutral-1000)] before:top-[50%] before:translate-y-[-50%] before:left-[-4px]
            before:origin-center before:rotate-45
            ${show ? 'block' : 'hidden'}
        `}>
            { content }
        </div>
    );
}