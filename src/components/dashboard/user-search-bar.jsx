import React from "react";

const UserSearchBar = () => {
  return (
    <form className="w-[300px] mt-2">
      <input
        type="text"
        name="search"
        placeholder="Search name..."
        autoComplete="off"
        className="w-full rounded-lg border px-4 py-2 text-sm bg-transparent placeholder:text-muted-foreground"
      />
    </form>
  );
};

export default UserSearchBar;
