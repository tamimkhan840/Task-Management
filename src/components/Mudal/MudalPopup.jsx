

import { Button, Modal ,Label, Textarea ,TextInput,Select  } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PropTypes from 'prop-types';

const popupFormValidation = yup.object({
  title: yup.string().required(). min(5),
  Description: yup.string().required(). min(5),
  priority: yup.string().required(),
  assignTo: yup.string().required(),
}).required();


function ModalPopup({ onOpenModal, closeOpenMudal, sentModal, taskToEdit, onEdit}) {


  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(popupFormValidation)
});





const onSubmit = (data) => {
  if (taskToEdit) {
    onEdit(data);
  }else{
    sentModal(data);
  }

    reset();
    closeOpenMudal();
}


let formData = taskToEdit || {
   id: crypto.randomUUID(),
   title: null,
   Description: null,
   assign: null,
   priority: null

}



  return (
    <>

      <Modal show={onOpenModal} onClose={closeOpenMudal} >
        <Modal.Header className="text-9xl">{taskToEdit ? 'Edit New Task' : 'Add New Task'}</Modal.Header>
        <Modal.Body >

          <form className="space-y-6 flex flex-wrap"  onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full">
                <div className="mb-2 block dark:text-[#d9d9d9]">
                  <Label htmlFor="title" color="gray" value="Title" />
                </div>
                <input defaultValue={formData.id} {...register('id')} type="hidden" />
              <TextInput defaultValue={formData.title} {...register('title')} id="title" placeholder="Input Gray" required color="gray" />

              {errors.title && <span className="text-red-700">{errors.title.message}</span>}
            </div>
            <div className="w-full my-3">
              <div className="mb-2 block">
                <Label htmlFor="Description" value="Description" />
              </div>
              <Textarea defaultValue={formData.Description} {...register('Description')} id="assign"  required rows={3} />

              {errors.Description && <span className="text-red-700 text-sm">{errors.Description.message}</span>}
            </div>

            <div className="w-2/3 pr-2">
                <div className="mb-2 block">
                  <Label htmlFor="assign" value="Assigned To" />
                </div>
                <Select defaultValue={formData.assignTo} id="assign" {...register('assignTo')}>

                {errors.assignTo && <span className="text-red-700">{errors.assignTo.message}</span>}
                  <option></option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
            <div className="w-1/3">
                <div className="mb-2 block">
                  <Label htmlFor="assign" value="Priority" />
                </div>
                <Select id="assign" defaultValue={formData.priority}  {...register('priority')}>

                {errors.priority && <span className="text-red-700">{errors.priority.message}</span>}
                  <option></option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>

              <Button type='submit' >{taskToEdit ? 'Update New Task' : 'Add New Task'}</Button>

          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPopup


ModalPopup.propTypes ={
  onOpenModal: PropTypes.func,
  closeOpenMudal: PropTypes.func,
  sentModal: PropTypes.func,
  taskToEdit: PropTypes.func,
  onEdit: PropTypes.func,
}
