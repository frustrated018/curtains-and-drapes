"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "All Products", href: "/search" },
  { name: "Curtains", href: "/search/curtains" },
  { name: "drapes", href: "/search/drapes" },
];

const LeftSearchLinks = () => {
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
};

export default LeftSearchLinks;
