import SidebarContent from "./SidebarContent";

export const Sidebar = () => {
    return (
        <div className="hidden sm:inline-flex  w-64 px-4 bg-white rounded-lg flex-col justify-start items-start gap-6">
            <SidebarContent />
        </div>
    )
}