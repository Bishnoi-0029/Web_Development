import mongoose from "mongoos";

const todoSchema = new mongoose.Schema(
    {
        contant:{
            type:String,
            required:true
        },

        complete:{
            type:boolean,
            default:false
        },

        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        subtodo:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref="SubTodo"
            }
        ]
    },
    {timestamps:true});

export const Todo = mongoose.model("Todo",todoSchema); 