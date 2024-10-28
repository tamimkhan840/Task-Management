import Container from "../Container"
import task from "../images/task 1.png"


function Banar() {
  return (
    <div>
        <Container className="grid grid-cols-1 sm:grid-cols-2 items-center my-7">
            <div className="">
                <h2 className="text-5xl text-red-600 mb-4 dark:text-yellow-300">Task  Management</h2>
                <p className="dark:text-[#d9d9d9]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&lsquo;t look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
            </div>
            <div className="ml-auto ">
                <img className="w-[90%]" src={task} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Banar
