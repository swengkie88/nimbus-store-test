"use client";

import CardProduct from "@/components/CardProduct";
import MobileSidebar from "@/components/MobileSidebar";
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
    const [searchQuery, setSearchQuery] = useState(""); // Tambahkan state untuk pencarian
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Default kosong
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [minPrice, setMinPrice] = useState<number | null>(null); // Harga minimum
    const [maxPrice, setMaxPrice] = useState<number | null>(null); // Harga maksimum
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // State untuk menyimpan produk terurut
    const [sortedProducts, setSortedProducts] = useState<Product[]>(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value); // Perbarui state pencarian
    };

    const handleSortChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOrder = e.target.value;
        setSortOrder(selectedOrder);
        setIsLoading(true);

        try {
            const res = await fetch(`https://fakestoreapi.com/products?sort=${selectedOrder}`);
            if (!res.ok) throw new Error("Failed to fetch sorted products");
            const sorted = await res.json();
            setSortedProducts(sorted); // Perbarui produk terurut
        } catch (error) {
            console.error("Error fetching sorted products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) => {
            const updatedCategories = prev.includes(category)
                ? prev.filter((cat) => cat !== category) // Hapus kategori jika sudah ada
                : [...prev, category]; // Tambahkan kategori jika belum ada
            return updatedCategories;
        });
    };


    const handleRatingChange = (rating: number, isChecked: boolean) => {
        setSelectedRatings((prev) =>
            isChecked
                ? [...prev, rating] // Tambahkan rating ke daftar
                : prev.filter((r) => r !== rating) // Hapus rating dari daftar
        );
    };

    useEffect(() => {
        let products = [...sortedProducts];

        // Filter berdasarkan kategori
        if (selectedCategories.length > 0) {
            products = products.filter((product) =>
                selectedCategories.includes(product.category)
            );
        }

        // Filter berdasarkan rating (hanya jika ada rating yang dipilih)
        if (selectedRatings.length > 0) {
            products = products.filter((product) =>
                selectedRatings.includes(Math.floor(product.rating.rate)) // Cocokkan rating secara eksak
            );
        }

        if (minPrice !== null) {
            products = products.filter((product) => product.price >= minPrice);
        }

        if (maxPrice !== null) {
            products = products.filter((product) => product.price <= maxPrice);
        }

        // Filter berdasarkan kata kunci pencarian
        if (searchQuery.trim()) {
            products = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Jika tidak ada rating yang dipilih, tampilkan semua produk
        setFilteredProducts(products);
    }, [selectedCategories, selectedRatings, minPrice, maxPrice, searchQuery, sortedProducts]);

    return (
        <div className="h-full w-full px-4 sm:px-10 py-[30px] sm:py-[60px] flex-col justify-center items-center gap-[20px] sm:gap-[60px] inline-flex overflow-hidden">
            <MobileSidebar
                categories={categories}
                selectedRatings={selectedRatings}
                handleRatingChange={handleRatingChange}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
            />
            <div className="container mx-auto">
                <div className="flex flex-col self-stretch h-full sm:h-[220px] justify-start items-center gap-8 pt-[60px] pb-[20px]">
                    <h2 className="self-stretch text-center text-slate-900 text-3xl md:text-4xl font-semibold font-['Instrument Sans'] leading-10">Katalog Produk</h2>
                    <input className="w-full sm:w-[480px] h-10 sm:h-12 px-6 py-4 bg-white rounded-[100px] border border-slate-300 justify-start items-center gap-[200px] inline-flex text-slate-500 text-base font-normal font-['Instrument Sans'] leading-normal" type="search" placeholder="Cari Produk"
                        value={searchQuery}
                        onChange={handleSearchChange} // Tangani perubahan pencarian
                        name="" id="" />
                </div>
                <div className="w-full h-full sm:flex justify-center items-start gap-8 sm:gap-10">
                    <Sidebar
                        categories={categories}
                        selectedRatings={selectedRatings}
                        handleRatingChange={handleRatingChange}
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        setMinPrice={setMinPrice}
                        setMaxPrice={setMaxPrice}
                    />
                    <div className="flex flex-col justify-center items-end gap-4 sm:gap-6">
                        <div className="w-full flex justify-between">
                            <button type="button" className="sm:hidden py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example" aria-label="Toggle navigation" data-hs-overlay="#hs-offcanvas-example">
                                Filter
                            </button>
                            <div className="hidden sm:block text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">
                                Menampilkan {filteredProducts.length} dari {totalProducts} produk
                            </div>
                            <select
                                value={sortOrder}
                                onChange={handleSortChange}
                                className="py-2 px-3 pe-6 block w-auto border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            >
                                <option>Urutkan berdasarkan</option>
                                <option value="asc">Terlama</option>
                                <option value="desc">Terbaru</option>
                            </select>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-start py-2 gap-4 sm:gap-10">
                            {isLoading ? (
                                <div className="grid grid-cols-8 justify-center items-center">
                                    <p className="text-gray-500 text-center">Memuat data...</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 sm:gap-y-8 sm:gap-x-6 justify-center items-center">
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <CardProduct key={product.id} product={product} />
                                        ))
                                    ) : (
                                        <div className="min-w-full col-span-2 flex text-left text-gray-500">
                                            <p>Data produk tidak ditemukan, sesuaikan ulang filter atau kata kunci pencarian.</p>
                                        </div>
                                    )}
                                </div>
                            )}
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
