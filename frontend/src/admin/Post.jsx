import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postData } from '../service/requests';
import { BaseUrl } from '../service/api';


const Post = () => {
    
  return (

    <Formik
    initialValues={{ title: '', image: '', price: 0 }}
    validationSchema={Yup.object({
      title: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      image: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      price: Yup.string()
      .min(0)
      .required('Required'),
    })}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm()
        location.reload()
        postData(BaseUrl,values)
      }, 400);
    }}
  >
    <Form>
        <h2>POST</h2>
      <label htmlFor="title">Title</label>
      <Field name="title" type="text" />
      <h2>
      <ErrorMessage name="title" />

      </h2>

      <label htmlFor="image">Image Link</label>
      <Field name="image" type="text" />
      <h2>
      <ErrorMessage name="image" />

      </h2>

      <label htmlFor="price">Price</label>
      <Field name="price" type="number" />
     <h2>
     <ErrorMessage name="price" />
     </h2>

      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}

export default Post