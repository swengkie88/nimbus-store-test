'use client'

import { Star, StarHalf } from "@phosphor-icons/react";
import Image from "next/image"
import { Product } from "types/product";

interface CardProductProps {
    product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
    const { rate } = product.rating; // Mengambil nilai rating dari product
    const fullStars = Math.floor(rate); // Bintang penuh
    const hasHalfStar = rate % 1 >= 0.5; // Jika ada setengah bintang
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Sisanya adalah bintang kosong

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="h-full sm:h-90 flex items-center relative rounded-xl overflow-hidden">
                <Image className="w-full h-[110px] sm:h-full object-contain object-center" width={80} height={80} src={product.image} alt="" />
            </div>

            <div className="flex-col justify-center items-center gap-3 flex">
                <div className="flex-col justify-center text-center items-center gap-1 flex">
                    <h5 className="text-slate-900 text-sm sm:text-lg font-medium font-['Instrument Sans'] leading-7">{product.title}</h5>
                </div>
                {/* Visualisasi bintang */}
                <div className="flex justify-start items-center">
                    {Array.from({ length: fullStars }).map((_, index) => (
                        <Star key={`full-${index}`} size={20} weight="fill" className="text-yellow-500" />
                    ))}
                    {hasHalfStar && (
                        <StarHalf key="half" size={20} weight="fill" className="text-yellow-500" />
                    )}
                    {Array.from({ length: emptyStars }).map((_, index) => (
                        <Star key={`empty-${index}`} size={20} weight="regular" className="text-gray-300" />
                    ))}
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                    <p className="text-slate-900 text-sm sm:text-base font-medium font-['Instrument Sans'] leading-normal">${product.price}</p>
                </div>
            </div>
        </div>
    )
}