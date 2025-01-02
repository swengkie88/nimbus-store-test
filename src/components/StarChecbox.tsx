"use client";

import React, { useState } from 'react';
import { Star } from "@phosphor-icons/react";

interface StarCheckboxProps {
    id: string;
    rating: number;
    size?: number;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}

const StarCheckbox: React.FC<StarCheckboxProps> = ({
    id,
    rating,
    size = 24,
    defaultChecked = false,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleStarClick = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange?.(newChecked); // Panggil callback jika disediakan
    };

    return (
        <div
            onClick={handleStarClick}
            className="flex items-center gap-x-2 cursor-pointer"
        >
            <input
                type="checkbox"
                id={id}
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)} // Sinkronkan state dengan input
            />
            <label
                htmlFor={id}
                className="text-sm text-gray-500 ms-3 dark:text-neutral-400 flex gap-x-2 items-center"
            >
                {Array.from({ length: rating }).map((_, index) => (
                    <Star key={index} size={size} weight="fill" className="yellow-star" />
                ))}
            </label>
        </div>
    );
};

export default StarCheckbox;
