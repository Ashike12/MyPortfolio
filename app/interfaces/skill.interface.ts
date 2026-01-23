export interface ISkill {
    id: string;
    name: string;
    icons: (string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>)[];
    value: number;
    isIconImage: boolean;
    gradientClass?: string;
}
