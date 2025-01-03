'use client';

import Link from 'next/link';

export const Footer = () => {

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Katalog', href: '/catalog' },
        { label: 'Tentang', href: '/about' },
    ];

    return (
        <footer className="w-full h-auto p-10 bg-slate-900 border-t border-slate-700 flex-col justify-start items-start gap-10 inline-flex overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4">
                    <div className="justify-start items-start gap-4 flex">
                        {menuItems.map((item) => (
                            <div
                                key={item.href}
                                className="text-white text-base font-medium font-['Instrument Sans'] leading-normal">
                                <Link
                                    className="text-white text-base font-medium font-['Instrument Sans'] leading-normal"
                                    href={item.href}>
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                        {/* <div >Beranda</div>
                        <div className="text-white text-base font-medium font-['Instrument Sans'] leading-normal">Katalog</div>
                        <div className="text-white text-base font-medium font-['Instrument Sans'] leading-normal">Kontak</div> */}
                    </div>
                    <div className="text-center sm:text-left text-white text-base font-normal font-['Instrument Sans'] leading-normal">@2024 Nimbus. All Right Reserved</div>
                </div>
            </div>
        </footer>
        // <header className="flex flex-wrap fixed z-[999] sm:justify-start sm:flex-nowrap w-full bg-white border-b border-slate-200 text-sm py-3 dark:bg-neutral-800">
        //     <div className="container mx-auto md:px-6 lg:px-4">
        //         <nav className="w-full mx-auto flex flex-wrap basis-full items-center justify-between relative">
        //             <a className="lg:order-2 flex basis-full lg:basis-6/12 text-center justify-center text-slate-900 text-xl font-bold font-['Instrument Sans'] leading-7" href="#">Nimbus</a>
        //             <div className="hidden lg:flex lg:basis-3/12 sm:order-3 justify-end">
        //                 <div className="justify-start items-center gap-2 flex">
        //                     <p className="text-right text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">Angki</p>
        //                     <Image
        //                         className="dark:invert"
        //                         src="/user.svg"
        //                         alt="icon_user"
        //                         width={24}
        //                         height={24}
        //                         priority
        //                     />
        //                 </div>
        //                 <div className="w-5 h-5 relative  overflow-hidden" />
        //                 <Image
        //                     className="dark:invert"
        //                     src="/icon_keranjang.svg"
        //                     alt="Dummy keranjang"
        //                     width={24}
        //                     height={24}
        //                     priority
        //                 />
        //             </div>
        //             <div className="absolute right-4 top-0 lg:hidden">
        //                 <Image
        //                     className="dark:invert"
        //                     src="/icon_keranjang.svg"
        //                     alt="Dummy keranjang"
        //                     width={24}
        //                     height={24}
        //                     priority
        //                 />
        //             </div>
        //             <div className="absolute left-4 top-0 items-center gap-x-2">
        //                 <button type="button" className="lg:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
        //                     <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
        //                     <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        //                     <span className="sr-only">Toggle</span>
        //                 </button>
        //             </div>
        //             <div id="hs-navbar-alignment" className="pt-4 pb-20 sm:py-[0] flex basis-full justify-center lg:basis-3/12 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:grow-0 lg:block order-3 lg:order-1" aria-labelledby="hs-navbar-alignment-collapse">
        //                 <div className="w-full flex flex-col lg:flex-row px-4">
        //                     {menuItems.map((item) => (
        //                         <div
        //                             key={item.href}
        //                             className={`p-1 py-2 sm:py-0 border-b ${pathname === item.href ? 'border-slate-900' : 'border-transparent'
        //                                 } justify-start sm:justify-center items-center gap-2.5 flex`}
        //                         >
        //                             <Link
        //                                 className="text-center text-slate-900 text-base font-semibold font-['Instrument Sans'] leading-normal"
        //                                 href={item.href}
        //                             >
        //                                 {item.label}
        //                             </Link>
        //                         </div>
        //                     ))}
        //                     <div className="justify-start items-center gap-2 flex absolute left-4 bottom-0 lg:hidden">
        //                         <Image
        //                             className="dark:invert"
        //                             src="/user.svg"
        //                             alt="icon_user"
        //                             width={24}
        //                             height={24}
        //                             priority
        //                         />
        //                         <p className="text-right text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">Angki</p>
        //                     </div>
        //                 </div>
        //                 {/* <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
        //                     <a className="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">Landing</a>
        //                     <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Account</a>
        //                     <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Work</a>
        //                     <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Blog</a>
        //                 </div> */}
        //             </div>
        //         </nav>
        //     </div>
        // </header >
    )
}