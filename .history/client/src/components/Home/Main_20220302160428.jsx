import React from "react";
import { useContext } from "react";

import { SocialHouseContext } from "../../Context";


export default function Main() {

const {filtered} = useContext(SocialHouseContext)

return (
    <div className="mainContainer">
     hello
     
    </div>
  );
}