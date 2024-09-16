import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users`);
                setUsers(response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log(users);

    return (
        <div className="p-4">
            <p className="text-5xl mb-5 font-bold p-2">User Lists</p>
            {users && users.length > 0 ? (
                users.map((user) => (
                    <div key={user.id} className="p-2 mb-3 border-b">
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                    </div>
                ))
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default Users;
