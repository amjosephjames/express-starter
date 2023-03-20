import {Response,Request} from "express"
import studentModel from "../model/studentModel"

type newStudent = {
    name:string,
    color:string,
    height:number,
    short:boolean,
};

const getStudents = async (req:Request,res:Response):Promise<Response> =>{
    try{

        const studentData = await studentModel.find()
        return res.status(200).json({message:"Students have been found"})
    }catch(error){
        return res.status(400).json({
            message:error
        })
    }
}
const getStudent = async (req:Request,res:Response):Promise<Response> =>{
    try{
        // const studentData = await studentModel.findById(req.params.id)
        const studentData: newStudent | null =  await studentModel.findById(req.params.id)
         return res.status(200).json({
            // message:"Student found",
            message:`${studentData?.name} is found`,
            data:studentData
        })
         
    }catch(error){
        return res.status(400).json({
            message:error
        })
    }
}
const updateStudent = async (req:Request,res:Response):Promise<Response> =>{
      try{
         const {name,color,height,short} = req.body

         const studentData:newStudent | null = await studentModel.findByIdAndUpdate(req.params.id)
          return res.status(201).json({message:`${studentData?.name} has been changed`,
          data:studentData
        })

      }catch(error){
        return res.status(400).json({
            message:error
        })
      }
}
const deleteStudent = async (req:Request,res:Response):Promise<Response> =>{
    try{
    //    const {name,color,height,short} = req.body

       const studentData:newStudent | null = await studentModel.findByIdAndDelete(req.params.id)
        return res.status(201).json({message:`${studentData?.name} has been deleted`,
        data:studentData
      })

    }catch(error){
      return res.status(400).json({
          message:error
      })
    }
}
const createStudent = async (req:Request,res:Response):Promise<Response> =>{
    try{
      const {name,color,height,short} = req.body
    //   if(height >=150){
      const studentData:newStudent | null =  await studentModel.create({
        name,
        color,
        height,
        short
    })
//    }el

      return res.status(201).json({message:`${studentData?.name} has been created`,
      data:studentData
    })
  }
    catch(error){
        return res.status(400).json({
            message:error
        })
      }
    
}
export {
    getStudents,
    getStudent,
    updateStudent,
    createStudent,
    deleteStudent
}