import { useState } from "react"
import { CREATE_USER_MUTATION } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";


export const Task =   () => {
    const [Title, setTitle] = useState("");

    const [createtask , {error}] = useMutation(CREATE_USER_MUTATION)

    const  addUser = () =>{
        createtask({
            variables:{
                title:Title
            }
        })
        if(error){
            console.log(error);
        }
    }
    return <div className="flex justify-center flex-col mx-40  ">
        <div className=" flex justify-center text-4xl my-10">
           Todo List
        </div>

        <div className="mx-40 px-40">
             <label htmlFor="title " className="text-2xl"> Title: </label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" id="first_name" className=" my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" required />
        </div>
        <div className="mx-40 flex justify-center">
        <button onClick={addUser} type="submit" className=" mx-30text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </div>

        
    </div>
}