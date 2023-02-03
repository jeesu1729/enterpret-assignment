import { UilApps,UilAtom,UilSetting } from '@iconscout/react-unicons'

function Header() {
  return (
    <div class="sticky top-0 h-15 bg-[#181818] flex items-center justify-between">
      <div class="ml-10">
        <div class="flex flex-row items-center">
          <img class="w-40 h-10 m-3" src={require("../logo.png")} />
          <button class="flex flex-row text-[#909090] m-3 pl-2 pr-2 pt-1 pb-1 focus:bg-[#303030] focus:rounded-xl focus:text-white"><UilApps /> &nbsp;&nbsp;Themetic Analysis</button>
          <button class="flex flex-row text-[#909090] m-3 pl-2 pr-2 pt-1 pb-1 focus:bg-[#303030] focus:rounded-xl focus:text-white"><UilAtom /> &nbsp;&nbsp; Nascent Themes</button>
          <button class="flex flex-row text-[#909090] m-3 pl-2 pr-2 pt-1 pb-1 focus:bg-[#303030] focus:rounded-xl focus:text-white"><UilSetting /> &nbsp;&nbsp;Settings</button>
        </div>
      </div>
      <div class="text-white mr-20">
      <img class="w-10 h-10 m-3 rounded-full" src={require("../avatar.png")} />
      </div>
    </div>
  );
}

export default Header;
