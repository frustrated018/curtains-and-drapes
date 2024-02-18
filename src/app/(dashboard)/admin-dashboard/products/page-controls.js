"use client";

import { Button } from "@/components/ui/button";
import { refreshTable } from "@/server-actions/products/actions";
import { useRouter } from "next/navigation";

const PageControls = () => {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          refreshTable();
        }}
      >
        Refresh Table
      </Button>
      <Button
        onClick={() => {
          router.push("/admin-dashboard/products/add");
        }}
      >
        Add Product
      </Button>
    </div>
  );
};

export default PageControls;
