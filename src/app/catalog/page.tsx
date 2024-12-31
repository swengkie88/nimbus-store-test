import Catalog from "./Catalog";
import { Product } from "types/product";

// Fetch data from Fake Store API
async function fetchProducts(limit: number): Promise<Product[]> {
    try {
        const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
            next: { revalidate: 60 }, // Cache data selama 60 detik
        });

        if (!res.ok) {
            throw new Error("API request failed");
        }

        return await res.json();
    } catch (error) {
        console.error("API request failed, falling back to local data:", error);

        // Fallback ke file lokal jika API gagal
        const res = await fetch('/products.json'); // Mengambil dari file lokal
        const allProducts: Product[] = await res.json();
        return allProducts; // Mengembalikan semua produk
    }
}


async function fetchTotalProductsCount(): Promise<number> {
    try {
        const res = await fetch(`https://fakestoreapi.com/products`, { cache: "no-store" });
        if (!res.ok) throw new Error("API request failed");
        const products: Product[] = await res.json();
        return products.length;
    } catch (error) {
        console.error("API request failed, falling back to local data:", error);
        const res = await fetch('/products.json'); // Load from public directory
        const products: Product[] = await res.json();
        return products.length;
    }
}


export default async function CatalogPage() {
    const products = await fetchProducts(12);
    const totalProducts = await fetchTotalProductsCount();
    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <Catalog
            initialProducts={products}
            totalProducts={totalProducts}
            categories={categories}
        />
    );
}
