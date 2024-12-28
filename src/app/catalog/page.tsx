import { CardProduct } from "@/components/CardProduct";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default async function Catalog() {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()

    return (
        <div className="h-[1792px] px-10 py-[60px] flex-col justify-start items-center gap-[60px] inline-flex overflow-hidden">
            <div className="self-stretch h-[120px] flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch text-center text-slate-900 text-4xl font-semibold font-['Instrument Sans'] leading-10">Katalog Produk</div>
                {/* <div className="w-[480px] h-12 px-6 py-4 bg-white rounded-[100px] border border-slate-300 justify-start items-center gap-[200px] inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 relative  overflow-hidden" />
                        <div className="">Cari Produk</div>
                    </div>
                </div> */}
                <input className="w-[480px] h-12 px-6 py-4 bg-white rounded-[100px] border border-slate-300 justify-start items-center gap-[200px] inline-flex text-slate-500 text-base font-normal font-['Instrument Sans'] leading-normal" type="search" placeholder="Cari Produk" name="" id="" />
            </div>
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <Sidebar />
                <div className="grow shrink basis-0 flex-col justify-center items-end gap-6 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">Menampilkan : 50 hasil pencarian</div>
                        <div className="w-[200px] self-stretch px-3 py-2 bg-white rounded-md border border-slate-200 justify-between items-center flex">
                            <div className="text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">Urutkan Berdasarkan</div>
                            <div className="w-4 h-4 relative opacity-50  overflow-hidden" />
                        </div>
                    </div>
                    <div className="self-stretch h-[1432px] flex-col justify-start items-start gap-10 flex">
                        <div className="grid grid-cols-4 gap-6 self-stretch justify-start items-center inline-flex">
                            {products.map((product:any) => (
                                <CardProduct key={product.id} product={product} />
                            ))}
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
