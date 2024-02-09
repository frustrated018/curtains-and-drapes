"use client";
import Link from "next/link";
import { dashboardAdminLinks } from "@/lib/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { iconList } from "@/lib/icons";

const DashboardNav = () => {
  const path = usePathname();
  return (
    <nav className="grid items-start gap-2">
      {dashboardAdminLinks.map((adminLink) => {
        const Icon = iconList[adminLink.icon || ""];

        return (
          <Link
            key={adminLink.title}
            href={adminLink.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              path === adminLink.href ? "bg-accent" : "transparent",
            )}
          >
            <Icon size={20} />
            <span className="ml-2">{adminLink.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardNav;
