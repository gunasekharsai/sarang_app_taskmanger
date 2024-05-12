
import { User } from "../entities/user";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class Taskresolver {
    @Query(()=> String)
    hello(): string{
        return "hellowold"
    }
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
  updateTask(
    @Arg("id", () => Int)
    id: number,

    @Arg("completed", () => Boolean)
    completed: boolean
  ): boolean | null {
    const task = User.findOneBy({id});
    if (!task) {
      return null;
    }

    try {
      User.update({ id }, { completed });
      return true;
    } catch {
      return false;
    }
  }
}