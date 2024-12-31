import SidebarContent from "./SidebarContent";

type MobileSidebarProps = {
    categories: string[];
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
};

export const MobileSidebar = ({ categories, selectedCategories, onCategoryChange }: MobileSidebarProps) => {


    return (
        <div id="hs-offcanvas-example" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto sm:hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700" role="dialog" aria-label="Sidebar">
            <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <SidebarContent
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={onCategoryChange}
                />
            </nav>
        </div>
    )
}