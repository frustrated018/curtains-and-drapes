import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

const UsersPage = () => {
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

      {/* //TODO: Need to build a table using tanstack table and shadcn ui but don't know how to do it without typescript. ahhhhhhh */}
    </section>
  );
};

export default UsersPage;
