"use client"
import UserTable from "@/components/UserTable";
import { Icon } from "@iconify/react";

async function getAllUsers() {
    const res = await fetch(`/api/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
    });
    if(!res.ok) {
        throw new Error('Could not load most recent user');
    }
    return res.json();
}
async function getAverageAge() {
    const res = await fetch('/api/users/media-age', {
        method: "GET",
        headers: { 'Content-type' : 'application/json'},
        cache: 'no-store'
    });
    return res.json();
}
export default function DashboardUsersPage() {
    const allUsers = getAllUsers();
    const averageAge = getAverageAge();
    return (
        <section className={`dashboard`}>
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
                                {averageAge ? `${Math.floor(averageAge.age)} Años` : 'No hay información disponible'}
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
        </section>
    )
}