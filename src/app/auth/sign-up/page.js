"use client"
import Nav from "@/components/Nav";
import { useRouter } from "next/navigation"
import { useState } from "react";
import Link from "next/link";
export default function SignUpPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, fullName, email, dni, birthDate}),
            headers: {'Content-Type': 'application/json'}
        });
        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        } else {
            router.push('/auth/login');
        }
    }

    const signUpinputs = [
        { key: 'sign-up-input-1', type: 'text', labelName: 'Username:', name: 'new-user-username', placeholder: 'Ingresar nombre de usuario', data: (e) => setUsername(e.target.value), },
        { key: 'sign-up-input-2', type: 'text', labelName: 'Full Name:', name: 'new-user-fullname', placeholder: 'Ingresar nombre completo', data: (e) => setFullName(e.target.value), },
        { key: 'sign-up-input-3', type: 'email', labelName: 'Email:', name: 'new-user-email', placeholder: 'Ingresar correo electronico', data: (e) => setEmail(e.target.value), },
        { key: 'sign-up-input-5', type: 'password', labelName: 'Password', name: 'new-user-password', placeholder: 'Ingresar contraseña', data: (e) => setPassword(e.target.value), },
        { key: 'sign-up-input-6', type: 'number', labelName: 'Dni:', name: 'new-user-dni', min: 0, pattern: /^(?!-)[0-9]{1,9}/, placeholder: 'Ingresar numero DNI', data: (e) => setDni(e.target.value), },
        { key: 'sign-up-input-7', type: 'date', labelName: 'Fecha de nacimiento:', name: 'new-user-brithdate', placeholder: '18/06/2000', data: (e) => setBirthDate(e.target.value), },
    ];

    return(
        <>
            <Nav />
            <section className="form-container">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="form-title-wrapper">
                        <h3 className="form-title"> Sign up </h3>
                    </div>
                    <section className="form-requirements">
                        { signUpinputs.map((input) => (
                            <div key={input.key} className="req-container">
                                <label htmlFor={input.name}>
                                    {input.labelName}
                                </label>
                                <input
                                className="login-input"
                                type={input.type}
                                id={input.name}
                                name={input.name}
                                placeholder={input.placeholder}
                                pattern={input.pattern}
                                min={input.min}
                                onChange={input.data}
                                required
                                />
                            </div>
                        )) }
                        <p>
                            ¿Ya tienes una cuenta?
                            <Link
                            className="text-red"
                            href="/login"
                            target="_self"
                            rel="opener"> Inicia sección ahora.
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
        </>
    )
}