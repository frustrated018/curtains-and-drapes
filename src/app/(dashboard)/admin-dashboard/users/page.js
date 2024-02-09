import UsersTable from "@/components/dashboard/users-table";
import { MdKeyboardArrowRight } from "react-icons/md";

const UsersPage = () => {
  return (
    <section className="p-3 lg:p-6">
      {/* Breadcrumb Kinda sorta －_－ */}
      <div className="text-muted-foreground">
        <ol className="flex items-center">
          <li className="hover:cursor-pointer hover:text-primary">Dashboard</li>
          <MdKeyboardArrowRight size={20} />
          <li className="hover:cursor-pointer hover:text-primary">User</li>
        </ol>
      </div>

      <UsersTable />
    </section>
  );
};

export default UsersPage;
