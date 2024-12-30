'use client'

import Image from "next/image"
import { Product } from "types/product";

interface CardProductProps {
    product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="h-full sm:h-80 flex items-center relative rounded-xl overflow-hidden">
                <Image className="w-full h-full object-contain object-center" width={60} height={60} src={product.image} alt="" />
            </div>

            <div className="flex-col justify-center items-center gap-3 flex">
                <div className="flex-col justify-center text-center items-center gap-1 flex">
                    <h5 className="text-slate-900 text-base sm:text-lg font-medium font-['Instrument Sans'] leading-7">{product.title}</h5>
                    <div className="justify-start items-start inline-flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                    <p className="text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">${product.price}</p>
                </div>
            </div>
        </div>
    )
}