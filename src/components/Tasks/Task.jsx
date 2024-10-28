

import Container from "../Container";
import { Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskSearch from "./TaskSearch";
import { useState } from "react";
import ModalPopup from "../Mudal/MudalPopup";
function NoDta() {
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>

        </Table.Row>
)
}

const Task = () => {
    let [openModal, setOpenModal] = useState(false);

    let [taskHandler, setTaskHandler] = useState([]);

    let [searchetext, setSearchetext] = useState('')


    let taskHandlers =(item) =>{
        let upDateTask= [

            item,
            ...taskHandler
        ];
        setTaskHandler(upDateTask);

    }
    let editUpDateHandler = (task) => {
        setTaskHandler(taskHandler.map(item =>{
            if (task.id == item.id) {
                return task;
            }else{
                return item;
            }
        }));
    }
        let deleteHandler = (id) => {
            setTaskHandler(taskHandler.filter(item => {
                return item.id != id;
            }))

    }

    let pullSearch = (text) => {
        setSearchetext(text);

    }

    let upDateSearche = taskHandler.filter(item => {
        return item.title.toLowerCase().includes(searchetext.toLowerCase());
    });


  return (




    <div>
        <Container>
            <div className="flex justify-end">
                <button onClick={() =>setOpenModal(true)} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-3">Add Task</button>

                <button onClick={() =>setTaskHandler([])} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Clear Tasks</button>
            </div>
            <div className="border dark:border-[#666] my-5">

                <TaskSearch onSearch={pullSearch} />

                <div>
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                            <Table.HeadCell>00</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>

                            </Table.Head>

                            <Table.Body className="divide-y">


                                {taskHandler.length == 0  ? <NoDta /> : upDateSearche.map((item,index )=> <TaskItem pullDelete={deleteHandler} pullEdit={editUpDateHandler} data={item} index={index} key={item.id}/>)}



                                <ModalPopup sentModal={taskHandlers} onOpenModal={openModal} closeOpenMudal={()=> setOpenModal(!openModal)} />



                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Task
