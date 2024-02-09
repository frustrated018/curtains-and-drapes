import { Button } from "@/components/ui/button";
import UserSearchBar from "./user-search-bar";

const UsersTable = () => (
  <>
    <section className="mt-5 flex justify-between border-b items-center">
      <div className="space-y-1 mb-2">
        <h2 className="text-3xl font-semibold">Users(10)</h2>
        <p className="text-muted-foreground">All the users in database.</p>
      </div>
      <Button>Add User</Button>
    </section>
      <UserSearchBar />
  </>
);

export default UsersTable;
