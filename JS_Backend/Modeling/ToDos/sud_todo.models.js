import mongoose from "mongoose"

const subtodoSchema = new mongoose.Schema(
    {
        contant:{
            type:String,
            required: true
        },

        complete:{
            type:boolean,
            default:false
        },

        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref="User"
        }
    },
    
    {timestamps:true}
)

export const Subtodo = mongoose.model("SubTodo",sutodoSchema)