
export interface ICustomIconProps extends React.HTMLAttributes<SVGElement> {
    size?: number | string;
    color?: string;
}

export default function IconScrollTop({
    color = '#ffffff',
    size = '0.875rem',
    ...props
}: ICustomIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M4 8l5 -5l5 5l-1 1l-4 -4l-4 4ZM4 12l5 -5l5 5l-1 1l-4 -4l-4 4Z" />
        </svg>
    );
}
