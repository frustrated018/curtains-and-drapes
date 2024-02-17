"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { deleteProduct } from "./product-actions";
import { toast } from "sonner";


//! Handling delete action 
const handleDelete = async (id) => {
  try {
    await deleteProduct(id);
    toast.success("Success delete");
  } catch (error) {
    console.log("Error from Handle delete:", error);
    toast.error("Failed to delete", { description: `${error.message}`, duration:5000 });
  }
};

export const productsColumn = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      // console.log(row);
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      );
    },
  },
  {
    header: "Product Image",
    cell: ({ row }) => {
      // console.log(row.original.pictures);
      return (
        <div className="pl-2">
          <Avatar className="h-10 w-10 rounded-sm xl:h-14 xl:w-14">
            <AvatarImage
              src={row.original?.pictures[0]?.img}
              alt="Product Image"
              className="h-10 w-10 rounded-sm xl:h-14 xl:w-14"
            />
            <AvatarFallback className="h-10 w-10 rounded-sm xl:h-14 xl:w-14">
              Product Image
            </AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "productId",
    header: "Product ID",
    cell: ({ row }) => {
      return <div>{row.getValue("productId")}</div>;
    },
  },
  {
    // TODO: Sort alphabetically
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    // TODO: Update this to a button and Make it sort by price
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    // TODO: Add a dropdown to sort by status
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <div>{row.getValue("status")}</div>;
    },
  },
  {
    // TODO: Enable sorting in ascending or descending order
    accessorKey: "inStock",
    header: "In Stock",
    cell: ({ row }) => {
      return <div>{row.getValue("inStock")}</div>;
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      // console.log(row.original._id);
      return (
        <div className="pl-2">
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col gap-1">
                <DropdownMenuItem asChild>
                  <Button variant="secondary">Update Status</Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button variant="secondary">Update Product</Button>
                </DropdownMenuItem>
                {/* trigger for modal */}
                <DropdownMenuItem asChild>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Delete Modal */}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to
                  permanently delete this Product from the servers?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant="destructive"
                    type="submit"
                    onClick={() => handleDelete(row.original._id)}
                  >
                    Confirm
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="secondary">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
