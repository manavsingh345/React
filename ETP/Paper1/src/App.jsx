import MapList from "./MapList";
import UserProfile from "./UserProfile";

export default function App() {
  const manageUsers = () => {
    alert("Managing users...");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* <UserProfile
        name="Manav"
        email="manav@gmail.com"
        role="Admin"
        manageUsers={manageUsers}
      /> */}

      <MapList/>
    </div>
  );
}
