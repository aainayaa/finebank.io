
import { useForm } from "react-hook-form"
import Button from '../Elements/Button'
import CheckBox from '../Elements/CheckBox'
import LabeledInput from '../Elements/LabeledInput'

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  })

  const onFormSubmit = (data) => console.log(data);
  const onErrors = (errors) => console.error(errors);

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address format",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className='text-center text-red-500'>{errors.email.message}</div>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", { required: "Password is required" }),
          }}
        />
        {errors?.password && (
          <div className='text-center text-red-500'>{errors.password.message}</div>
        )}
      </div>
      <div className="mb-6">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button
        variant={
          !isValid
            ? "bg-gray-05 w-full text-white"
            : "bg-primary w-full text-white"
        }
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
    </form>
  )
}

export default FormSignIn