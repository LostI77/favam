"use client"
export default function UserTable({data}) {
    const allUsers = data["users"];
    return(
        <table className="dashboard-users-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Password</th>
                    <th>Dni</th>
                    <th>BirthDate</th>
                    <th>Create At</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                { allUsers.map((user) => (
                    <tr key={`stand-user-${user.id}`}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.password}</td>
                        <td>{user.dni}</td>
                        <td>{user.birthDate}</td>
                        <td>{user.createAt}</td>
                        <td>{user.role}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}