import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3  px-5 flex justify-between items-center shadow-xl">
      <img src="/logo.svg" width={75} height={75} />
      {isSignedIn ? (
        <div className="flex gap-4 items-center">
            <Link to={'/dashboard'}>
          
          <Button className="bg-red-500 p-5 rounded-xl">DashBoard</Button>
          </Link>
          <UserButton  />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-red-500 py-6 rounded-xl">Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
