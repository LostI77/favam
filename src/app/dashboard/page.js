"use client"
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import UserTable from "@/components/UserTable";
async function getData(path) {
    if (path === '/dashboard') {
        const res = await fetch('http://localhost:3000/api/users/recent-user', {
             method: 'GET',
             headers:{ 'Content-Type': 'application/json' },
             cache: 'no-store'
            });
        if(!res.ok) {
            throw new Error('Could not load users');
        }
        return res.json();
    }
    if (path === '/dashboard/users') {
        const res = await fetch(`http://localhost:3000/api/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store'
        });
        if(!res.ok) {
            throw new Error('Could not load most recent user');
        }
        return res.json();
    }
}
async function getAverageAge(path) {
    if (path !== '/dashboard/users') {
        return null;
    }
    const res = await fetch('http://localhost:3000/api/users/media-age', {
        method: "GET",
        headers: { 'Content-type' : 'application/json'},
        cache: 'no-store'
    });
    return res.json();
}
export default function DashboardPage() {
    const path = usePathname();
    const dataUser = getData(path);
    const dataAge = getAverageAge(path);
    // console.log("Edad:", dataAge);
    // console.log(dataUser);
    let allUsers;
    if (path === '/dashboard/users') {
        allUsers = dataUser["users"];
    }
    const CardContent = () => {
        return  (
            <div className="card-content">
                { dataUser.recentUser ? (
                    <>
                        <h4> Username: {dataUser.recentUser.username} </h4>
                        <p> Fullname: {dataUser.recentUser.fullName} </p>
                        <p> Email: {dataUser.recentUser.email} </p>
                        <p> Dni: {dataUser.recentUser.dni} </p>
                        <p> Role: {dataUser.recentUser.role} </p>
                    </>
                ) : (
                    <>
                        <h4> ¡Error al cargar el contenido! </h4>
                    </>
                )}
            </div>
        )
    }
    return(
        <section className={`dashboard`}>
            {
                path === "/dashboard" && (
                    <>
                        <div className="dashboard-title-container">
                            <h1 className="dashboard-content-title">
                                Simplifica tu trabajo
                            </h1>
                            <h2 className="dashboard-content-subtitle">
                                Crea, organiza y completa tus proyectos de manera sencilla.
                                <br />
                                <br />
                                Nuestro Dashboard te da todas las herramientas necesarias para reducir
                                el estrés y aumentar la productividad en tu vida laboral o personal.
                            </h2>
                        </div>
                        <section className="dashboard-cards-container">
                            <article className="dashboard-card">
                                <h3 className="card--title"> Usuario mas reciente </h3>
                                <CardContent />
                            </article>
                            <article className="dashboard-card">
                            </article>
                            <article className="dashboard-card">
                            </article>
                        </section>
                    </>
                )
            }
            {
                path == "/dashboard/users" && (
                    <div className="dashboard-users">
                        <h1 className="dashboard-users-title">Dashboard Users</h1>
                        { allUsers.length > 0 ? (
                            <div className="dashboard-users-table-container">
                                <div className="dashboard-users-table-wrapper">
                                    <UserTable data={allUsers}/>
                                </div>
                                <section className="dashboard-other-data">
                                    <div className="dashboard-media-container">
                                        <h3>Promedio de Edad</h3>
                                        {dataAge ? `${Math.floor(dataAge.averageAge)} Años` : 'No hay información disponible'}
                                    </div>
                                </section>
                            </div>
                        ) : (
                            <div className="dashboard-users-table-container">
                                <section className="dashboard-error-table-container">
                                    <h2 className="dashboard-error-table__title"> Error al cargar </h2>
                                    <Icon className="dashboard-error-table__icon" icon="bxs:error" />
                                    <p className="dashboard-error-table__text">
                                        No se han podido cargar los datos,
                                        intenta nuevamente o vuelve  más tarde.
                                    </p>
                                </section>
                            </div>
                        ) }
                    </div>
                )
            }
        </section>
    )
}