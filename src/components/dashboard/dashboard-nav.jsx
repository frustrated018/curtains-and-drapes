"use client";
import Link from "next/link";
import { dashboardAdminLinks } from "@/lib/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

//TODO: figure out how to add icons to these links

const DashboardNav = () => {
  const path = usePathname();
  return (
    <nav className="grid items-start gap-2">
      {dashboardAdminLinks.map((adminLink) => (
        <Link
          key={adminLink.title}
          href={adminLink.href}
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            path === adminLink.href ? "bg-accent" : "transparent",
          )}
        >
          {adminLink.title}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
