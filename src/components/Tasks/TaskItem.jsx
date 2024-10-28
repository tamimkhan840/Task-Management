
/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";
import { useState } from "react";
import ModalPopup from "../Mudal/MudalPopup";

import DeleteModal from "./Delete/DeleteModal";

function TaskItem(props) {
  let {title, Description, assignTo, priority, id} = props.data;

  let [openModal, setOpenModal] = useState(false);

  const [openPopupModal, setOpenPopupModal] = useState (false);




  let editHandlers = (task) => {
    props.pullEdit(task);

  }

  return (

    <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {props.index +1}
            </Table.Cell>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{Description}</Table.Cell>
            <Table.Cell>{assignTo}</Table.Cell>
            <Table.Cell>{priority}</Table.Cell>

            <Table.Cell>
            <button onClick={() =>setOpenModal(true)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
            </button>
            <button onClick={() => setOpenPopupModal(true)}  className="font-medium hover:underline  ml-3 text-red-600 dark:text-red-500">
            Delete
            </button>
            </Table.Cell>
        </Table.Row>
        <ModalPopup taskToEdit={props.data} onEdit={editHandlers} onOpenModal={openModal} closeOpenMudal={()=> setOpenModal(!openModal)} />


        <DeleteModal onOpenPoModal={openPopupModal} onClosePoModal={() => setOpenPopupModal(!openPopupModal)} deleteButton={() =>props.pullDelete(id)} noDeleteButton={() => setOpenPopupModal(false)}/>
   </>

  )

// onClick={() =>props.pullDelete(id)}

}

export default TaskItem
