"use client"
import Nav from "@/components/Nav";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function LoginPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false,
            });
            if(!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            } else {
                router.push('/account')
            }
        } catch(error) {
            console.error('An error occurred while fetching the data: ', error);
        }
    }
    return(
        <>
            <Nav />
            <main className="main-f-container">
                <section className="form-container">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="form-title-wrapper">
                            <h3 className="form-title"> Login Up </h3>
                        </div>
                        <section className="form-requirements">
                            <div className="req-container">
                                <label htmlFor="gmail"> Gmail: </label>
                                <input
                                className="login-input"
                                type="text"
                                id="gmail"
                                name="gmail"
                                placeholder="Ingresar tu Gmail"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                            <div className="req-container">
                                <label htmlFor="password"> Password: </label>
                                <input
                                className="login-input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Ingresar contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                            </div>
                            <p>
                                No tienes una cuenta?
                                <Link
                                className="text-red"
                                href="/signup"
                                target="_self"
                                rel="opener"> Registrate ahora.
                                </Link>
                            </p>
                        </section>
                        <div className="form-btn-container">
                            <button
                            type="submit"
                            className="btn-form">
                                Enviar
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}