import React from "react";
import { useContext } from "react";

import { SocialHouseContext } from "../../Context";


export default function Main() {

const {filtered} = useContext(SocialHouseContext)

return (
    <div className="mainContainer">
     Carousel and cards will come here
     
    </div>
  );
}