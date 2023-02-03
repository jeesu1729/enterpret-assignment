import { useState } from "react";
import Portal from "./Portal";
import { UilFlask } from '@iconscout/react-unicons'

function Built(props) {
  

  return (
    <div class="w-1/4 h-full flex justify-end mr-4">
      <div class="h-full flex flex-col">
        <div class="flex flex-row text-white text-base"><UilFlask/> &nbsp;&nbsp;Build Your Query</div>
        <div class="text-[#909090] text-xs mb-1 mt-1">
          Narrow your search further <br /> adding some filters.
        </div>
        <button class="bg-[#5C61F0] text-white" onClick={props.builtClickHandler}>Build query</button>
      </div>
    </div>
  );
}

export default Built;
