import SidebarContent from "./SidebarContent";

interface MobileSidebarProps {
    categories: string[];
    selectedCategories: string[];
    selectedRatings: number[];
    onCategoryChange: (category: string) => void;
    handleRatingChange: (rating: number, isChecked: boolean) => void;
    minPrice: number | null;
    maxPrice: number | null;
    setMinPrice: (price: number | null) => void;
    setMaxPrice: (price: number | null) => void;
}


const MobileSidebar: React.FC<MobileSidebarProps> = ({
    categories,
    selectedCategories,
    selectedRatings,
    onCategoryChange,
    handleRatingChange,
    minPrice, 
    maxPrice, 
    setMinPrice, 
    setMaxPrice
}) => {


    return (
        <div id="hs-offcanvas-example" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[9999] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto sm:hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700" role="dialog" aria-label="Sidebar">
            <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <SidebarContent
                    categories={categories}
                    selectedRatings={selectedRatings}
                    handleRatingChange={handleRatingChange}
                    selectedCategories={selectedCategories}
                    onCategoryChange={onCategoryChange}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
            </nav>
        </div>
    )
}

export default MobileSidebar;