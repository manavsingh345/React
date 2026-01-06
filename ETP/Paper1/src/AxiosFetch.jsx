import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [useAxios, setUseAxios] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      if (useAxios) {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUsers(res.data);
      } else {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [useAxios]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Users List</h1>

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mb-3"
        onClick={() => setUseAxios(prev => !prev)}
      >
        Switch to {useAxios ? "Fetch" : "Axios"}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.map(user => (
        <p key={user.id} className="bg-amber-100 my-1 p-2 rounded">
          {user.title}
        </p>
      ))}
    </div>
  );
}
