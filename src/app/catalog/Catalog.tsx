"use client";

import CardProduct from "@/components/CardProduct";
import { MobileSidebar } from "@/components/MobileSidebar";
import { Sidebar } from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Product } from "types/product";

type CatalogProps = {
    initialProducts: Product[];
    totalProducts: number;
    categories: string[];
};

export default function Catalog({
    initialProducts,
    totalProducts,
    categories,
}: CatalogProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category) // Hapus kategori jika sudah ada
                : [...prev, category] // Tambahkan kategori jika belum ada
        );
    };

    useEffect(() => {
        if (selectedCategories.length === 0) {
            // Jika tidak ada kategori yang dipilih, tampilkan semua produk
            setFilteredProducts(initialProducts);
        } else {
            // Filter produk berdasarkan kategori yang dipilih
            setFilteredProducts(
                initialProducts.filter((product) =>
                    selectedCategories.includes(product.category)
                )
            );
        }
    }, [selectedCategories, initialProducts]);

    return (
        <div className="h-full w-full px-4 sm:px-10 py-[30px] sm:py-[60px] flex-col justify-center items-center gap-[20px] sm:gap-[60px] inline-flex overflow-hidden">
            <MobileSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
            />
            <div className="container mx-auto">
                <div className="flex flex-col self-stretch h-full sm:h-[220px] justify-start items-center gap-8 py-[20px]">
                    <h2 className="self-stretch text-center text-slate-900 text-3xl md:text-4xl font-semibold font-['Instrument Sans'] leading-10">Katalog Produk</h2>
                    <input className="w-full sm:w-[480px] h-10 sm:h-12 px-6 py-4 bg-white rounded-[100px] border border-slate-300 justify-start items-center gap-[200px] inline-flex text-slate-500 text-base font-normal font-['Instrument Sans'] leading-normal" type="search" placeholder="Cari Produk" name="" id="" />
                </div>
                <div className="w-full h-full sm:flex justify-center items-start gap-8 sm:gap-10">
                    <Sidebar
                        categories={categories}
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                    />
                    <div className="flex flex-col justify-center items-end gap-4 sm:gap-6">
                        <div className="w-full flex justify-between">
                            <button type="button" className="sm:hidden py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example" aria-label="Toggle navigation" data-hs-overlay="#hs-offcanvas-example">
                                Filter
                            </button>
                            <div className="hidden sm:block text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">
                                Menampilkan {filteredProducts.length} dari {totalProducts} produk
                            </div>
                            <select className="py-2 px-3 pe-6 block w-auto border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option>Urutkan berdasarkan</option>
                                <option>Terbaru</option>
                            </select>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-start py-2 gap-4 sm:gap-10">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 justify-center items-center">
                                {filteredProducts.map((product) => (
                                    <CardProduct key={product.id} product={product} />
                                ))}
                            </div>
                            <section className="w-full pagination">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="pl-2.5 pr-4 rounded-md justify-center items-center gap-1 flex">
                                        <div className="w-4 h-4 relative" />
                                        <div className="text-slate-900 text-sm font-medium font-['Instrument Sans'] leading-tight">Previous</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-md justify-center items-center flex">
                                        <div className="text-slate-900 text-sm font-medium font-['Instrument Sans'] leading-tight">1</div>
                                    </div>
                                    <div className="w-10 h-10 bg-white rounded-md border border-slate-100 justify-center items-center flex">
                                        <div className="text-slate-900 text-sm font-medium font-['Instrument Sans'] leading-tight">2</div>
                                    </div>
                                    <div className="w-9 h-9 rounded-md justify-center items-center flex">
                                        <div className="w-6 h-6 relative" />
                                    </div>
                                    <div className="pl-4 pr-2.5 rounded-md justify-center items-center gap-1 flex">
                                        <div className="text-slate-900 text-sm font-medium font-['Instrument Sans'] leading-tight">Next</div>
                                        <div className="w-4 h-4 relative" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}