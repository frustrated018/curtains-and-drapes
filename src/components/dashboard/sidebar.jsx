import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import DashboardNav from "./dashboard-nav";

const Sidebar = () => {
  return (
    <section className="min-h-screen min-w-[300px] border-r p-4 space-y-4">
      <div className="mb-5 text-2xl font-semibold">
        <Link href="/">Curtains & Drape</Link>
      </div>

      {/* Avatar div */}
      {/* //TODO: Make this dynamic && Will link to /profile page later */}
      <div className="flex items-center gap-4 rounded-lg border bg-secondary p-2 hover:cursor-pointer">
        <Avatar>
          <AvatarImage
            src="https://source.unsplash.com/white-gold-fish-V7SKRhXskv8"
            alt="user Image"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grow text-muted-foreground">
          <h2 className="text-[15px] font-semibold">John Doe</h2>
          <h2 className="text-sm">example@email.com</h2>
        </div>
      </div>

      <DashboardNav />
    </section>
  );
};

export default Sidebar;
