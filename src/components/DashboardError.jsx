"use client"
import { Icon } from "@iconify/react";
export function DashboardUserError () {
    return (
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
    )
}