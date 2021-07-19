import * as Yup from "yup";

export const initialValues={
    name:"",
    email:"",
    password:""
};
export const onSubmit=values=>{
    console.log("value is ",values);
}
export const validationSchema=Yup.object({
    name:Yup.string().required("name is required"),
    email:Yup.string().required("email is required"),
    password:Yup.string().required("password is required")
})