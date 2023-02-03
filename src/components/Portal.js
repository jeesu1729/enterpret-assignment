import React, { memo } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useState } from "react";
import { UilTrashAlt, UilMultiply } from "@iconscout/react-unicons";

function Portal(props) {
  const methods = useForm();
  const [count, setcount] = useState(1);
  const [andOr, setandOr] = useState(true);
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, count);
    let str = "Query: ";
    for (let i = 0; i < count; i++) {
      str = str + '"(field.' + data[i + "field"] + ") ";
      if (data[i + "condition"] == "Equals") {
        str = str + "== ";
      } else if (data[i + "condition"] == "Does not equal") {
        str = str + "!= ";
      } else if (data[i + "condition"] == "Like") {
        str = str + "Like ";
      } else if (data[i + "condition"] == "Not like") {
        str = str + "Not like ";
      } else if (data[i + "condition"] == "Is") {
        str = str + "Is ";
      } else if (data[i + "condition"] == "Is empty") {
        str = str + "Is empty ";
      } else if (data[i + "condition"] == "Is not") {
        str = str + "Is not ";
      }
      str = str + '\\"' + data[i + "criteria"] + '"\\" ';
      if (count > 1) {
        str = str + (andOr ? "&& " : "|| ");
      }
    }
    console.log(str);
    document.getElementById("oop").textContent = str;
    document.getElementById("oop").className =
      "bg-[#4338CA] w-[80%] overflow-y-scroll h-8 p-1 rounded snap-x";
    if (document.getElementById("pppp").childElementCount == 1) {
      const node = document.createElement("button");
      node.className = "bg-[#5C61F0] ml-4";
      node.textContent = "more...";
      document.getElementById("pppp").appendChild(node);
    }
  };
  return (
    <div class="w-full h-full flex justify-between flex-col rounded">
      <div class="w-full h-21 bg-[#5C61F0] rounded p-3 pl-5">
        <div class="flex flex-row justify-between">
          <div class="text-lg font-medium">Create tag and query</div>
          <div>
            <button class="bg-[#4338CA] p-1" onClick={props.setbuiltQueryButton}>
              <UilMultiply />
            </button>
          </div>
        </div>
        <div id="pppp" class="flex flex row">
          <div class="text-xs" id="oop">
            The query you build will be saved in your active view
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="m-5 bg-[#303030] rounded border-2 border-[#606060]">
          {count > 1 ? (
            <div class="relative top-3 left-3 mb-2">
              {andOr ? (
                <div class="flex flex-row">
                  <div class="p-1 bg-[#5C61F0] w-10 text-center rounded">
                    And
                  </div>
                  <div
                    class="p-1 bg-[#404040] w-10 text-center rounded"
                    onClick={() => setandOr(!andOr)}
                  >
                    Or
                  </div>
                </div>
              ) : (
                <div class="flex flex-row">
                  {" "}
                  <div
                    class="p-1 bg-[#404040] w-10 text-center rounded"
                    onClick={() => setandOr(!andOr)}
                  >
                    And
                  </div>
                  <div class="p-1 bg-[#5C61F0] w-10 text-center rounded">
                    Or
                  </div>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <NestedInputContainer
                count={count}
                killcnt={() => setcount(count - 1)}
              />
              <div class="flex justify-between flex-row">
                <button
                  class="ml-4 mb-3 bg-[#5C61F0] rounded p-1"
                  onClick={() => setcount(count + 1)}
                >
                  + Add filter
                </button>
                <input
                  type="submit"
                  value={"finish"}
                  class="relative top-[108px] right-2 bg-[#5C61F0] rounded pl-2 pr-2 h-8"
                />
              </div>
            </form>
          </FormProvider>
        </div>
        <div class="">
          {" "}
          <button class="inline-block ml-5 mr-5 bg-[#5C61F0] rounded p-1 mb-3">
            +Add new group filter
          </button>
        </div>
        <div class="flex justify-between flex-row mb-3">
          <button class="inline-block ml-5 mr-5 bg-[#606060] rounded p-1">
            back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portal;

// we can use React.memo to prevent re-render except isDirty state changed
const NestedInput = memo((props) => {
  const register = props.register;
  return (
    <div class="flex flex-row">
      <div class="flex flex-col m-2 w-1/3">
        <label htmlFor="field" class="mb-1">
          Field
        </label>
        <select
          class="bg-[#404040] p-1 hover:bg-[#505050] rounded"
          placeholder="select field"
          {...register(props.st + "field")}
          id="field"
        >
          <option value={"Theme"} class="">
            Theme
          </option>
          <option value={"Sub-Theme"}>Sub-Theme</option>
          <option value={"Reason"}>Reason</option>
          <option value={"Language"}>Language</option>
          <option value={"Source"}>Source</option>
          <option value={"Rating"}>Rating</option>
          <option value={"Time Period"}>Time Period</option>
          <option value={"Customer ID"}>Customer ID</option>
        </select>
      </div>
      <div class="flex flex-col m-2 w-1/3">
        <label htmlFor="condition" class="mb-1">
          Condition
        </label>
        <select
          class="bg-[#404040] p-1 hover:bg-[#505050] rounded"
          placeholder="Select Condition"
          {...register(props.st + "condition")}
          id="condition"
        >
          <option value={"Equals"}>Equals</option>
          <option value={"Does not equal"}>Does not equal</option>
          <option value={"Like"}>Like</option>
          <option value={"Not like"}>Not like</option>
          <option value={"Is empty"}>Is empty</option>
          <option value={"Is"}>Is</option>
          <option value={"Is not"}>Is not</option>
        </select>
      </div>
      <div class="flex flex-col m-2 w-1/3">
        <label htmlFor="Criteria mb-1">Criteria</label>
        <select
          class="bg-[#404040] p-1 hover:bg-[#505050] rounded"
          {...register(props.st + "criteria")}
          id="Criteria"
        >
          <option value={"Offers"}>Offers</option>
          <option value={"Performance"}>Performance</option>
          <option value={"Platform"}>Platform</option>
          <option value={"Product feedback"}>Product Feedback</option>
        </select>
      </div>
      {props.st >= 1 ? (
        <button
          class="flex content-center justify-center bg-[#404040] hover:bg-[#505050] h-8 w-10 relative top-8 mr-4 rounded pt-1"
          onClick={props.killcnt}
        >
          <UilTrashAlt />
        </button>
      ) : (
        <div class="h-8 w-10 relative top-10 mr-4"></div>
      )}
    </div>
  );
});

export const NestedInputContainer = (props) => {
  const methods = useFormContext();
  let arr = [];
  for (let i = 0; i < props.count; i++) {
    arr.push(
      <NestedInput register={methods.register} st={i} killcnt={props.killcnt} />
    );
  }
  return <div> {arr}</div>;
};
