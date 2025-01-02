import SidebarContent from "./SidebarContent";

type SidebarProps = {
    categories: string[];
    selectedRatings: number[];
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
    handleRatingChange: (rating: number, isChecked: boolean) => void;
};

export const Sidebar = ({ categories, selectedRatings, handleRatingChange, selectedCategories, onCategoryChange }: SidebarProps) => {
    return (
        <div className="hidden sm:inline-flex  w-64 px-4 bg-white rounded-lg flex-col justify-start items-start gap-4">
            <SidebarContent
                categories={categories}
                selectedRatings={selectedRatings}
                handleRatingChange={handleRatingChange}
                selectedCategories={selectedCategories}
                onCategoryChange={onCategoryChange}
            />
        </div>
    )
}