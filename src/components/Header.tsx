'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Katalog', href: '/catalog' },
        { label: 'Tentang', href: '/about' },
    ];

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b border-slate-200 text-sm py-3 dark:bg-neutral-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between relative">
                <a className="sm:order-2 flex basis-full sm:basis-8/12 text-center justify-center text-slate-900 text-xl font-bold font-['Instrument Sans'] leading-7" href="#">Nimbus</a>
                {/* <a className=" text-center text-slate-900 text-xl font-bold font-['Instrument Sans'] leading-7" href="#">N</a> */}
                {/* <div className="hidden sm:inline-flex basis-2/12 justify-end items-center gap-4 inline-flex"> */}
                <div className="hidden sm:flex basis-2/12 sm:order-3 justify-end">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="text-right text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">Angki</div>
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                    <div className="w-5 h-5 relative  overflow-hidden" />
                    <div className="h-3.5 pt-[3px] pb-px bg-red-500 rounded-[14px] justify-center items-center flex overflow-hidden">
                        <div className="text-center text-white text-[10px] font-medium font-['DM Sans'] leading-[10px]">1</div>
                    </div>
                </div>
                <div className="absolute right-4 top-0 sm:hidden">
                    <Image
                        className="dark:invert"
                        src="/icon_keranjang.svg"
                        alt="Dummy keranjang"
                        width={24}
                        height={24}
                        priority
                    />
                </div>
                <div className="absolute left-4 top-0 items-center gap-x-2">
                    <button type="button" className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
                        <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <span className="sr-only">Toggle</span>
                    </button>
                </div>
                <div id="hs-navbar-alignment" className="flex basis-full justify-center sm:basis-2/12 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-1" aria-labelledby="hs-navbar-alignment-collapse">
                    <div className="flex flex-col sm:flex-row">
                        {menuItems.map((item) => (
                            <div
                                key={item.href}
                                className={`p-1 border-b ${pathname === item.href ? 'border-slate-900' : 'border-transparent'
                                    } justify-center items-center gap-2.5 flex`}
                            >
                                <Link
                                    className="text-center text-slate-900 text-base font-semibold font-['Instrument Sans'] leading-normal"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                        <a className="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">Landing</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Account</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Work</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Blog</a>
                    </div> */}
                </div>
            </nav>
        </header>
        // <header className="w-full h-[68px] flex-col justify-start items-start inline-flex bg-white border-b border-slate-200  overflow-hidden">
        //     <div className="w-full h-[68px] relative">
        //         <div className="flex flex-row items-center w-full h-full px-8">
        //             <nav className="hidden sm:inline-flex basis-2/12 justify-start items-center gap-4">
        //                 {menuItems.map((item) => (
        //                     <div
        //                         key={item.href}
        //                         className={`p-1 border-b ${pathname === item.href ? 'border-slate-900' : 'border-transparent'
        //                             } justify-center items-center gap-2.5 flex`}
        //                     >
        //                         <Link
        //                             className="text-center text-slate-900 text-base font-semibold font-['Instrument Sans'] leading-normal"
        //                             href={item.href}
        //                         >
        //                             {item.label}
        //                         </Link>
        //                     </div>
        //                 ))}
        //             </nav>
        //             <div className="basis-8/12 flex-1 text-center text-slate-900 text-xl font-bold font-['Instrument Sans'] leading-7">Nimbus</div>
        //             <div className="hidden sm:inline-flex basis-2/12 justify-end items-center gap-4 inline-flex">
        //                 <div className="justify-start items-center gap-2 flex">
        //                     <div className="text-right text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">Angki</div>
        //                     <div className="w-5 h-5 relative  overflow-hidden" />
        //                 </div>
        //                 <div className="w-5 h-5 relative  overflow-hidden" />
        //                 <div className="h-3.5 pt-[3px] pb-px bg-red-500 rounded-[14px] justify-center items-center flex overflow-hidden">
        //                     <div className="text-center text-white text-[10px] font-medium font-['DM Sans'] leading-[10px]">1</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>
    )
}