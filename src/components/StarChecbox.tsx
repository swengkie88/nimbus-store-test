"use client";

import React from 'react';
import { Star } from "@phosphor-icons/react";

interface StarCheckboxProps {
    id: string; // Unique ID untuk input checkbox
    defaultChecked?: boolean; // Menentukan apakah checkbox dicentang secara default
    rating: number; // Jumlah level rating
    size?: number; // Ukuran bintang
    label?: string; // Teks tambahan (opsional)
}

const StarCheckbox: React.FC<StarCheckboxProps> = ({
    id,
    defaultChecked = false,
    rating,
    size = 20,
    label,
}) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id={id}
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                defaultChecked={defaultChecked}
            />
            <label
                htmlFor={id}
                className="text-sm text-gray-500 ms-3 dark:text-neutral-400 flex gap-x-2 items-center"
            >
                {Array.from({ length: rating }).map((_, index) => (
                    <Star key={index} size={size} weight="fill" className="yellow-star" />
                ))}
                {label && <span className="ml-2">{label}</span>}
            </label>
        </div>
    );
};

export default StarCheckbox;
