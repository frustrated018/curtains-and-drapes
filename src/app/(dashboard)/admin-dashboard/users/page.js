import UsersTable from "@/components/dashboard/users-table/users-table";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

//! Fetching data on the server and drilling down to user table

async function getUserData() {
  const res = await fetch("https://curtains-and-drapes.vercel.app/api/users",{next:{revalidate:100}} );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const UsersPage = async () => {
  const data = await getUserData();

  return (
    <section className="p-3 lg:p-6">
      {/* Breadcrumbs? Kinda sorta －_－ */}
      <div className="text-muted-foreground">
        <ol className="flex items-center">
          <li className="hover:cursor-pointer hover:text-primary">Dashboard</li>
          <MdKeyboardArrowRight size={20} />
          <li className="hover:cursor-pointer hover:text-primary">User</li>
        </ol>
      </div>

      <section className="mt-5 flex items-center justify-between border-b">
        <div className="mb-2 space-y-1">
          <h2 className="text-3xl font-semibold">Users(10)</h2>
          <p className="text-muted-foreground">All the users in database.</p>
        </div>
        <Button>Add User</Button>
      </section>
      {/* //* Table  */}
      <UsersTable data={data} />
    </section>
  );
};

export default UsersPage;
