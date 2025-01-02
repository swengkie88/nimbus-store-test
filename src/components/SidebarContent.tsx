import StarCheckbox from "./StarChecbox";

interface SidebarContentProps {
    categories: string[];
    selectedCategories: string[];
    selectedRatings: number[];
    onCategoryChange: (category: string) => void;
    handleRatingChange: (rating: number, isChecked: boolean) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
    categories,
    selectedCategories,
    selectedRatings,
    onCategoryChange,
    handleRatingChange,
}) => {
    const ratings = [5, 4, 3, 2, 1]; // Daftar level rating

    return (
        <section className="flex flex-col gap-y-3">
            <div className="self-stretch h-auto flex-col justify-start items-start gap-4 flex">
                <div className="text-center text-slate-900 text-sm font-semibold font-['Instrument Sans'] leading-tight">Kategori</div>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="self-stretch justify-start items-start gap-2 inline-flex"
                    >
                        <input
                            type="checkbox"
                            id={`cat-${index}`} // ID unik untuk setiap input
                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                            checked={selectedCategories.includes(category)} // Sesuai dengan `selectedCategories`
                            onChange={() => onCategoryChange(category)} // Memanggil fungsi `handleCategoryChange`
                        />
                        <label
                            htmlFor={`cat-${index}`} // Pastikan sesuai dengan ID input
                            className="text-center text-slate-900 text-sm font-normal"
                        >
                            {category}
                        </label>
                    </div>
                ))}


            </div>
            <div className="self-stretch h-px bg-slate-200" />
            <div className="self-stretch h-auto flex-col justify-start items-start gap-4 flex">
                <div className="text-center text-slate-900 text-sm font-semibold font-['Instrument Sans'] leading-tight">Rating Produk</div>
                <div className="self-stretch justify-start items-start gap-2 flex-col">
                    {ratings.map((rating) => (
                        <StarCheckbox
                            key={rating}
                            id={`rating-${rating}`}
                            rating={rating}
                            defaultChecked={selectedRatings.includes(rating)}
                            onChange={(isChecked) => handleRatingChange(rating, isChecked)}
                        />
                    ))}
                </div>
            </div>
            <div className="self-stretch h-px bg-slate-200" />
            <div className="self-stretch h-[156px] flex-col justify-center items-start gap-4 flex">
                <div className="text-center text-slate-900 text-sm font-semibold font-['Instrument Sans'] leading-tight">Harga</div>
                <div className="self-stretch h-[120px] flex-col justify-center items-start gap-4 flex">
                    <div className="max-w-sm space-y-3">
                        <div>
                            {/* <label htmlFor="hs-input-with-leading-and-trailing-icon" className="block text-sm font-medium mb-2 dark:text-white">Price</label> */}
                            <div className="relative">
                                <input type="number" id="hs-input-with-leading-and-trailing-icon" name="hs-input-with-leading-and-trailing-icon" className="py-3 px-4 ps-10 pe-4 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="0.00" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <span className="text-gray-500 dark:text-neutral-500">Rp. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-4 h-4 relative opacity-50  overflow-hidden" />
                        <p className="text-center text-slate-500 text-xs font-normal font-['Instrument Sans'] leading-none">Sampai dengan</p>
                    </div>
                    <div className="max-w-sm space-y-3">
                        <div>
                            {/* <label htmlFor="hs-input-with-leading-and-trailing-icon" className="block text-sm font-medium mb-2 dark:text-white">Price</label> */}
                            <div className="relative">
                                <input type="number" id="hs-input-with-leading-and-trailing-icon" name="hs-input-with-leading-and-trailing-icon" className="py-3 px-4 ps-10 pe-4 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="0.00" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <span className="text-gray-500 dark:text-neutral-500">Rp. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SidebarContent;