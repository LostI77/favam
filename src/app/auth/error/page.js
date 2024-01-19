import Link from "next/link"
export default function AuthErrorPage() {
    return(
        <div className="error-page">
            <h1>Oops! You are not authorized to view this page.</h1>
            <p>Please login first</p>
            <Link href="/auth/login" target="_self" rel="opener referrer">
                Login
            </Link>
        </div>
    )
}