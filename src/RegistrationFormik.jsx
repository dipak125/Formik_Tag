import React from "react";
import { initialValues,onSubmit,validationSchema } from "./RegistrationFormik";
import { Formik,Form,Field,ErrorMessage } from "formik";

const RegistrationFormik=()=>{
    return(
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div>
                        <label class="label-form">Name</label>
                        <Field
                            class="form-control"
                            type="text"
                            name="name"

                        />
                        <ErrorMessage name="name">
                            {
                                (error)=>{
                                    return <div style={{color:"red"}}>{error}</div>
                                }
                            }
                        </ErrorMessage>
                    </div>
                    <div>
                        <label class="label-control">Email</label>
                        <Field
                            class="form-control"
                            name="email"
                            type="email"
                        />
                        <ErrorMessage name="email">
                            {
                                (error)=>{
                                    return <div style={{color:"red"}}>{error}</div>
                                }
                            }
                        </ErrorMessage>
                    </div>
                    <div >
                        <label class="label-form">Password</label>
                        <Field
                            class="form-control"
                            type="password"
                            name="password"
                        />
                        <ErrorMessage name="password">
                            {
                                (error)=>{
                                    return <div style={{color:"red"}}>{error}</div>
                                }
                            }
                        </ErrorMessage>
                    </div>
                    <button type="submit">submit</button>
                </Form>

            </Formik>
        </div>
    )
}
export default RegistrationFormik;