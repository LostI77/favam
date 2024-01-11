"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function DashboardMenu() {
    const path = usePathname();
    return(
        <div className="dashboard-menu">
            <h2 className="dashboard-title">
                Dashboard Menu
            </h2>
            <nav className="dashboard-nav">
                <Link
                 className={`dashboard-menu-item ${path === '/dashboard' ? 'white' : 'no-white'}`}
                 href='/dashboard'
                 target="_self"
                 rel="opener">
                    Inicio
                </Link>
                <Link
                 className={`dashboard-menu-item ${path === '/dashboard/users' ? 'white' : 'no-white'}`}
                 href='/dashboard/users'
                 target="_self"
                 rel="opener">
                    Users
                </Link>
                { /* <Link href='/dashboard/' target="_self" rel="opener">
                    </Link> */ }
                <Link
                 className={`dashboard-menu-item rounded`}
                 href='/'
                 target="_self"
                 rel="opener">
                    Logout
                </Link>
            </nav>
        </div>
    )
}