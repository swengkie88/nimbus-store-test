'use client';

import Link from 'next/link';

export const Sidebar = () => {


    return (
        <div className="w-64 px-4 bg-white rounded-lg flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[200px] flex-col justify-start items-start gap-4 flex">
                <div className="text-center text-slate-900 text-sm font-semibold font-['Instrument Sans'] leading-tight">Kategori</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="text-center text-slate-900 text-sm font-normal font-['Instrument Sans'] leading-tight">Elegant Blazzer</div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="text-center text-slate-900 text-sm font-normal font-['Instrument Sans'] leading-tight">Executive White</div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="text-center text-slate-900 text-sm font-normal font-['Instrument Sans'] leading-tight">Modern Fit business</div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="text-center text-slate-900 text-sm font-normal font-['Instrument Sans'] leading-tight">Classic Leather abelt</div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="text-center text-slate-900 text-sm font-normal font-['Instrument Sans'] leading-tight">Neutral Tone</div>
                </div>
            </div>
            <div className="self-stretch h-px bg-slate-200" />
            <div className="self-stretch h-[200px] flex-col justify-start items-start gap-4 flex">
                <div className="text-center text-slate-900 text-sm font-semibold font-['Instrument Sans'] leading-tight">Rating Produk</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="justify-start items-start flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="justify-start items-start flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="justify-start items-start flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="justify-start items-start flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="h-5 py-0.5 justify-start items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 bg-white rounded border border-slate-500" />
                    </div>
                    <div className="justify-start items-start flex">
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-slate-200" />
            <div className="self-stretch h-[156px] flex-col justify-center items-start gap-4 flex">
                <div className="text-center text-slate-900 text-sm font-semibold font-['Instrument Sans'] leading-tight">Harga</div>
                <div className="self-stretch h-[120px] flex-col justify-center items-start gap-4 flex">
                    <div className="self-stretch h-9 px-3 py-2 bg-white rounded-md border border-slate-200 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">Rp.0</div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-4 h-4 relative opacity-50  overflow-hidden" />
                        <div className="text-center text-slate-500 text-xs font-normal font-['Instrument Sans'] leading-none">Sampai dengan</div>
                    </div>
                    <div className="self-stretch h-9 px-3 py-2 bg-white rounded-md border border-slate-200 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-slate-500 text-sm font-normal font-['Instrument Sans'] leading-tight">Rp.50.000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}