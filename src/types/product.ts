export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number; // ID produk
    title: string; // Nama produk
    price: number; // Harga produk
    description: string; // Deskripsi produk
    category: string; // Kategori produk
    image: string; // URL gambar produk
    rating: Rating; // Objek rating produk
}