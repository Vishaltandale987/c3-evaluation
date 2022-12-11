import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <div style={{ display: "flex", "justifyContent":"space-between"}}>
        <div style={{ display: "flex", "justifyContent":"space-between"}}> 

      <div style={{ marginLeft:"30px"}}>
        <Link href="/">Vishal Tandale</Link>
      </div>
      <div style={{ marginLeft:"30px"}}>
        <Link href="/project">Project</Link>
      </div>
      <div style={{ marginLeft:"30px"}}>
        <Link href="/experience">Experience</Link>
      </div>
        </div>

      <div style={{ display: "flex", "justifyContent":"space-between"}}>
        <Button>change</Button>
        <img style={{"width":"50px" , "border-radius":"30px"}} src="https://avatars.githubusercontent.com/u/107469218?s=400&u=7bf55bc0f46a80589619bc46fc7521b9605dae1e&v=4" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
