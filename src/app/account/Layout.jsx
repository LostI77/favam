import Nav from "@/components/Nav"
export default function AccountLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
  }