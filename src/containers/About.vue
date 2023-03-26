<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// function isRequired(value) {
//   if (value && value.trim()) {
//     return true;
//   }
//   return 'This is required';
// }


const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
function submit() {
  return alert('sdfsd');
}
</script>


<template>
  <div  style="margin: 30px 0">
    <h1>This is an about page</h1>
    <hr style="margin-bottom: 30px">
    <Form @submit="submit" :validation-schema="schema" class="row flex flex-wrap">
      <div>
        <va-input
            class="md12 mb-12"
            label="Email"
            name="email"
            placeholder="email"
        />
        <ErrorMessage name="email" />
      </div>
      <div>
        <va-input
            class="flex flex-col md12"
            label="password"
            name="password"
            placeholder="password"
        />
      </div>
      <br>
      <va-button>Submit</va-button>
    </Form>
  </div>

<!--  <Form @submit="submit" :validation-schema="schema">-->
<!--    <Field name="email"/>-->
<!--    <ErrorMessage name="email"/>-->
<!--    <Field name="password" type="password"/>-->
<!--    <ErrorMessage name="password"/>-->
<!--    <button>Submit</button>-->
<!--  </Form>-->
</template>