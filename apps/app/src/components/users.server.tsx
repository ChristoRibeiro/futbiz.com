import { getUsers } from "@futbiz/supabase/queries";

export async function UsersServer() {
  const { data } = await getUsers();

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>{user.clubId}</div>
      ))}
    </div>
  );
}
