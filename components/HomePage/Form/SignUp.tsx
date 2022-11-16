import useHomePage from "../../../hooks/useHomePage";
import { SignUpFormProps } from "../../../types/props";
import { SignUpFormInputs } from "../../../types/forms";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/HomePage/SignUpForm.module.css";
import Errors from "./Errors/Errors";
import Logo from "../../Logo/Logo";
const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const { createUserState } = useHomePage();
  const { register, handleSubmit } = useForm<SignUpFormInputs>();
  const submitHandler: SubmitHandler<SignUpFormInputs> = (data) => {
    props.createUserHandler(data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
      <Logo />
      <legend>
        <h2>Sign Up</h2>
      </legend>
      <section className={styles["form-inputs"]}>
        <div>
          <label htmlFor="name">Your name:</label>
          <input id="name" type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="email">Your email:</label>
          <input id="email" type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Your password:</label>
          <input id="password" type="text" {...register("password")} />
        </div>
      </section>
      <button type="submit">Create Account</button>
      {createUserState.visible && (
        <Errors errorMessage={createUserState.errorMessage} />
      )}
    </form>
  );
};
export default SignUpForm;
