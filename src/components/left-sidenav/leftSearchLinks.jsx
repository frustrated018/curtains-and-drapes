"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "All Products", href: "/search" },
  { name: "Curtains", href: "/search/curtains" },
  { name: "Drapes", href: "/search/drapes" },
  { name: "Accessories", href: "/#" },
  { name: "Mattress", href: "/#" },
  { name: "Pillow Case", href: "/#" },
  { name: "Bed Sheets", href: "/#" },
];

const LeftSearchLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col p-4 md:p-0">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("hover:underline", {
            "text-blue-600 underline": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSearchLinks;
