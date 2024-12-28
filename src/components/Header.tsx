'use client';

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
        <header className="h-[68px] flex-col justify-start items-start inline-flex" >
            <div className="w-[1440px] h-[68px] relative bg-white border-b border-slate-200  overflow-hidden">
                <div className="left-[683px] top-[20px] absolute text-center text-slate-900 text-xl font-bold font-['Instrument Sans'] leading-7">Nimbus</div>
                <div className="left-[1247px] top-[22px] absolute justify-end items-center gap-4 inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="text-right text-slate-900 text-base font-medium font-['Instrument Sans'] leading-normal">Angki</div>
                        <div className="w-5 h-5 relative  overflow-hidden" />
                    </div>
                    <div className="w-5 h-5 relative  overflow-hidden" />
                    <div className="h-3.5 pt-[3px] pb-px bg-red-500 rounded-[14px] justify-center items-center flex overflow-hidden">
                        <div className="text-center text-white text-[10px] font-medium font-['DM Sans'] leading-[10px]">1</div>
                    </div>
                </div>
                <nav className="left-[40px] top-[18px] absolute justify-start items-center gap-4 inline-flex">
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
                </nav>
            </div>
        </header>
    )
}