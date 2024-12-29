'use client'

import Image from "next/image"
import { Product } from "types/product";

interface CardProductProps {
    product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
    return (
        <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex">
            <div className="h-80 flex items-center relative rounded-xl overflow-hidden">
                <Image className="w-full h-full object-contain object-center" width={100} height={100} src={product.image} alt="" />
            </div>

            <div className="flex-col justify-center items-center gap-3 flex">
                <div className="flex-col justify-center text-center items-center gap-1 flex">
                    <div className="text-slate-900 text-lg font-medium font-['Instrument Sans'] leading-7">{product.title}</div>
                    <div className="justify-start items-start inline-flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">${product.price}</div>
                </div>
            </div>
        </div>
    )
}