import SidebarContent from "./SidebarContent";

type SidebarProps = {
    categories: string[];
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
};

export const Sidebar = ({ categories, selectedCategories, onCategoryChange }: SidebarProps) => {
    return (
        <div className="hidden sm:inline-flex  w-64 px-4 bg-white rounded-lg flex-col justify-start items-start gap-4">
            <SidebarContent
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={onCategoryChange}
            />
        </div>
    )
}