import UserTable from "@/components/UserTable";
import { DashboardUserError } from "@/components/DashboardError";
import API_BASE_URL from "@/libs/apibaseurl";
async function getAllUsers() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store'
        });
        if(!res) {
            throw new Error('Could not load all users');
        }
        return res.json();
    } catch(error) {
        console.error("There was an error retrieving the users", error, error.message, error.code);
        throw error;
    }
}
async function getAverageAge() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/users/media-age`, {
            method: "GET",
            headers: { 'Content-type' : 'application/json'},
            cache: 'no-store'
        });
        if(!res.ok) {
            throw new Error('Could not load media age user');
        }
        return res.json();
    } catch(error) {
        console.error("There is an error in loading the average age of users.", error, error.message, error.code);
        throw error;
    }
}
export default async function DashboardUsersPage() {
    const allUsers = await getAllUsers();
    const averageAge = await getAverageAge();
    return (
        <section className={`dashboard`}>
            <div className="dashboard-users">
                <h1 className="dashboard-users-title">Dashboard Users</h1>
                { allUsers && averageAge ? (
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
                    <DashboardUserError />
                ) }
            </div>
        </section>
    )
}