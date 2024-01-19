"use client"
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Tektur } from 'next/font/google'
const tektur = Tektur({ subsets: ["latin"], weight: ["600"] })
export default function Nav() {
    const path = usePathname();
    const [isMenuPhoneActive, setIsMenuPhoneActive] = useState(false);
    const menuItems = [
        { name: 'Home', link: '/', rounded: false, },
        { name: 'Login', link: '/auth/login', rounded: true, },
        { name: 'Signup', link: '/auth/sign-up', rounded: true, },
        { name: 'Dashboard', link: '/dashboard', rounded: false, }
    ]
    const handlePhoneMenu = (e) => {
        e.preventDefault();
        setIsMenuPhoneActive(!isMenuPhoneActive);
    }
    const MenuDesktop = () => {
        return (
            <ul className="menu-desktop">
                { menuItems.map((item) => (
                    <li
                    className={`menu-desktop__list-item ${item.rounded ? "rounded" : 'norounded'}`}
                    key={ `menu-${item.name}` }
                    >
                        <Link
                        className="menu-desktop__item"
                        href={ item.link }
                        target="_self"
                        rel="opener"
                        >
                            { item.name }
                        </Link>
                    </li>
                )) }
            </ul>
        )
    }
    const MenuPhone = () => {
        return(
            <>
                <button
                 className="menu-phone__button"
                 type="button"
                 onClick={handlePhoneMenu}
                 >
                    <Icon icon="gg:menu" />
                </button>
                <section className={`menu-phone ${isMenuPhoneActive ? 'active' : 'no-active'}`}>
                    <ul className="menu-phone__content">
                        { menuItems.map((item) => (
                            <li
                             key={item.name}
                             className={`menu-phone__list-item ${item.rounded ? "rounded" : "norounded"}`}
                             >
                                <Link href={ item.link } target="_self" rel="opener"> {item.name} </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        )
    }
    return(
        <header className={`header ${path === '/dashboard' ? 'type-dashboard' : ''}`}>
            <nav className="nav">
                <h2 className={`nav--title ${tektur.className}`}> Favam <Icon icon="material-symbols:account-tree-outline" /> </h2>
                <MenuDesktop />
                <MenuPhone />
            </nav>
        </header>
    )
}