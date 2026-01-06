export default function UserProfile({ name, email, role, manageUsers }) {
  return (
    <div className="w-1/4 bg-red-100 flex justify-center m-2 border rounded-2xl">
      <div className="p-4">
        <h1 className="text-3xl mb-2">User Profile Card</h1>

        <div className="flex flex-col text-lg">
          <span>Name: {name}</span>
          <span>Email: {email}</span>
          <span>Role: {role}</span>
        </div>

        
        {role === "Admin" ? (
            <div>
                <p className="text-md text-green-600">Access Granted for admin</p>
                <button onClick={manageUsers} className="bg-green-400 text-md">Manage Users</button>
            </div>
        ):(
            <div>Simple Profile</div>
        )}
      </div>
    </div>
  );
}
