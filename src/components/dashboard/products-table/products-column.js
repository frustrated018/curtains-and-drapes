import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export const productsColumn = [
  {
    id: "select",
    header: ({ row }) => {
      console.log(row);
      return (
        <Checkbox
          //   checked={table.getIsAllPageRowsSelected()}
          //   onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      //   console.log(row);
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
      //   console.log(row.original.pictures[0].img1);
      return (
        <div className="pl-2">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={row.original?.pictures[0]?.img1}
              alt="Product Image"
              className="h-10 w-10"
            />
            <AvatarFallback>product image</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
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
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="pl-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2">
              <Button variant="secondary">Update</Button>
              <Button variant="destructive">Delete</Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
