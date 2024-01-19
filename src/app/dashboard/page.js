async function getData() {
    try {
        const res = await fetch('/api/users/recent-user', {
             method: 'GET',
             headers:{ 'Content-Type': 'application/json' },
             cache: 'no-store'
            });
        if(!res.ok) {
            throw new Error('Could not load users');
        }
        return res.json();
    } catch(error) {
        console.log("Error: ", error);
    }
}

export default async function DashboardPage() {
    const dataUser = await getData();
    const CardContent = () => {
        return  (
            <div className="card-content">
                { dataUser ? (
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
        </section>
    )
}