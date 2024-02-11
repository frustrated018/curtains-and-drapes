import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";

export const userColumns = [
  {
    header: "User Image",
    cell: ({ row }) => {
      return (
        <div className="pl-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={row.original?.photoURL} alt="User Image" className="h-10 w-10" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>,
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
