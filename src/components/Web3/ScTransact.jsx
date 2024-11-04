import { useState } from "react";
import {Button} from "../ui/button";

export const ScTransact = () => {
  const [Address, setAddress] = useState({
    address: ""
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setAddress({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("test");
  };
  return (
   <Button className="flex items-center gap-2 rounded-full bg-black hover:bg-slate-300 hover:text-black">Send Tx</Button>
  );
};
export default ScTransact;
