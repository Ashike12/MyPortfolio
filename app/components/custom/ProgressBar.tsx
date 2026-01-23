import { Tooltip } from "@mui/material";
import cn from "../../utils/cn";

type ProgressBarProps = {
    value: number; // 0–100
    gradientClass?: string;
};

export default function ProgressBar({ value, gradientClass = 'from-blue-500 via-purple-500 to-pink-500' }: ProgressBarProps) {
    return (
        <Tooltip
            title={`${value}/100`}
            placement="bottom"
            arrow
        >
            <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out", gradientClass)}
                    style={{ width: `${value}%` }}
                />
            </div>
        </Tooltip>
    );
}