/* eslint-disable react/prop-types */
import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

function TaskSeach({onSearch}) {

    let pullSearch = (e) => {
        let val = e.target.value;
        onSearch(val);

    }

  return (

        <div className="flex justify-between items-center my-5 p-2">
            <h2 className="text-3xl text-red-600 font-bold dark:text-yellow-300">Your Task</h2>
            <div className="max-w-md">

                <TextInput onChange={pullSearch} id="email4" type="email" rightIcon={IoSearch} required />
            </div>

        </div>
)
}

export default TaskSeach
