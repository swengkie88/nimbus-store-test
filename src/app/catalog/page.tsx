import CardProduct from "@/components/CardProduct";
import { MobileSidebar } from "@/components/MobileSidebar";
import { Sidebar } from "@/components/Sidebar";
import { Product } from "types/product";

// Fetch data from Fake Store API
async function getProducts(): Promise<{ products: Product[]; total: number }> {
    // Fetch data with a limit
    const res = await fetch(`https://fakestoreapi.com/products?limit=12`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const products: Product[] = await res.json();

    // Fetch total data (optional: could also check headers like X-Total-Count)
    const totalRes = await fetch(`https://fakestoreapi.com/products`, { cache: 'no-store' });
    if (!totalRes.ok) {
        throw new Error('Failed to fetch total count');
    }
    const totalProducts: Product[] = await totalRes.json();

    return { products, total: totalProducts.length };
}

export default async function Catalog() {
    // const products = await getProducts();
    const { products, total } = await getProducts();

    return (
        <div className="h-full w-full px-4 sm:px-10 py-[60px] flex-col justify-center items-center gap-[20px] sm:gap-[60px] inline-flex overflow-hidden">
            <MobileSidebar />
            <div className="container mx-auto">
                <div className="flex flex-col self-stretch h-full sm:h-[220px] justify-start items-center gap-8 py-[20px]">
                    <div className="self-stretch text-center text-slate-900 text-4xl font-semibold font-['Instrument Sans'] leading-10">Katalog Produk</div>
                    <input className="w-full sm:w-[480px] h-12 px-6 py-4 bg-white rounded-[100px] border border-slate-300 justify-start items-center gap-[200px] inline-flex text-slate-500 text-base font-normal font-['Instrument Sans'] leading-normal" type="search" placeholder="Cari Produk" name="" id="" />
                </div>
                <div className="self-stretch justify-center items-start gap-4 sm:gap-10 inline-flex">
                    <Sidebar />
                    <div className="flex flex-col justify-center items-end gap-3 sm:gap-6">
                        <div className="self-stretch justify-between items-center inline-flex">
                            {/* <button className="inline-flex sm:hidden h-9 px-3 bg-slate-900 rounded-[40px] justify-center items-center gap-1.5">
                            <div className="w-5 h-5 relative  overflow-hidden" />
                            <div className="text-center text-slate-50 text-sm font-semibold font-['Instrument Sans'] leading-tight">Filter</div>
                        </button> */}
                            <button type="button" className="sm:hidden py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example" aria-label="Toggle navigation" data-hs-overlay="#hs-offcanvas-example">
                                Filter
                            </button>
                            <div className="hidden sm:block text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">
                                Menampilkan {products.length} dari {total} produk
                            </div>
                            <select className="py-3 px-4 pe-9 block w-auto border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option>Urutkan berdasarkan</option>
                                <option>Terbaru</option>
                            </select>
                            {/* <div className="w-[200px] h-9 px-3 py-2 bg-white rounded-md border border-slate-200 justify-between items-center inline-flex">
                            <div className="text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">Urutkan Berdasarkan</div>
                            <div className="w-4 h-4 relative opacity-50  overflow-hidden" />
                        </div> */}
                        </div>
                        <div className="w-full h-full flex-col justify-center items-start gap-4 sm:gap-10 flex">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 justify-center items-center">
                                {products.map((product) => (
                                    <CardProduct key={product.id} product={product} />
                                ))}
                            </div>
                            <section className="pagination">
                                <div className="self-stretch justify-center items-center gap-2 inline-flex">
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
