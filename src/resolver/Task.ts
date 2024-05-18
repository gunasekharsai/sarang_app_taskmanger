
import { User } from "../entities/user";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class Taskresolver {
   
    // get all tasks
    @Query(()=> [User])
    tasks() : Promise<User[]> {
        return User.find({})
    }
    // create task
    @Mutation(() =>User)
    createtask(
        @Arg("title", () => String)
        title:string
    ): Promise<User>{
       return User.create({title, completed:false}).save()
    }

    //delete task
    @Mutation(() => Boolean)
    deletetask(
        @Arg("id", () =>Number)
        id:number
    ):boolean{
        try{
            User.delete({ id});
            return true;
        }
        catch{
            return false;
        }
    }
    
    //update task
    @Mutation(() => Boolean, { nullable: true })
  EditTask(
    @Arg("id", () => Int)
    id: number,

    @Arg("title", () => String)
    title:string
    
  ): boolean | null {
    const task = User.findOneBy({id});
    if (!task) {
      return null;
    }

    try {
      User.update({ id }, { title});
      return true;
    } catch {
      return false;
    }
  }
}