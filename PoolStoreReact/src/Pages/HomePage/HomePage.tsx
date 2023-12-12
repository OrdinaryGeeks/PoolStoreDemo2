import { useAppSelector } from "../../structure/Store/ConfigureStore";

export default function HomePage() {
  const { user } = useAppSelector((state) => state.account);
  return (
    <div>
      <p>Welcome to the Ordinary Geeks Pool Store</p>
      <p> You are the following roles</p>
      {user && user.roles?.includes('Admin') && <p>Admin</p>}
      {user && user.roles?.includes('Member') && <p>Member</p>}
      {user && user.roles?.includes('Customer') && <p>Customer</p>}
      {user && user.roles?.includes('Maintenance') && <p>Maintenance</p>}
    </div>
  );
}
