import { useState } from "react";
import { UilImport,UilCalendarAlt } from '@iconscout/react-unicons'

function Query() {


  return (
    <div class="w-3/4 h-full flex flex-col">
      <div class="flex flex-row w-full h-10">
        <input class="bg-[#181818] w-60 h-full border border-[#909090] rounded m-2 appearance-none py-2 px-3 text-white placeholder:text-[#909090]" placeholder="Search for product feedback" />
        <button class="flex flex-row rounded bg-[#181818] h-full border border-[#909090] py-2 px-3 m-2 text-white focus:bg-[#5C61F0]"><UilImport/> &nbsp;&nbsp;Export Feedback</button>
        <button class="rounded bg-[#5C61F0] h-full border border-[#909090] py-2 px-3 m-2 text-white">View Feedback</button>
        <div class="flex flex-row rounded bg-[#181818] h-full border border-[#909090] py-2 px-3 m-2 text-white"><UilCalendarAlt/> &nbsp;&nbsp;July 28, 2020 - Oct 02, 2022</div>
      </div>
      <div class="mt-5">
        <div class="w-3/4 h-20 bg-[#181818] border border-[#303030] rounded m-2 mt-4 mb-4"></div>
        <div class="w-3/4 h-20 bg-[#181818] border border-[#303030] rounded m-2 mt-4 mb-4"></div>
        <div class="w-3/4 h-20 bg-[#181818] border border-[#303030] rounded m-2 mt-4 mb-4"></div>
        <div class="w-3/4 h-20 bg-[#181818] border border-[#303030] rounded m-2 mt-4 mb-4"></div>
      </div>
    </div>
  );
}
export default Query;
