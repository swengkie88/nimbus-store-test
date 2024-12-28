'use client'

export const CardProduct = ({ product }) => {
    return (
        <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex">
            {/* <img className="h-80 relative rounded-xl" src="https://via.placeholder.com/248x320" /> */}
            {/* <img className="h-80 relative rounded-xl" src={product.image} /> */}
            <div className="h-80 flex items-center relative rounded-xl overflow-hidden">
                <img className="w-full h-full object-contain object-center" src={product.image} alt="" />
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