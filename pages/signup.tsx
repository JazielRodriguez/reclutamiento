import SignUpForm from "../components/HomePage/Form/SignUp";
import useHomePage from "../hooks/useHomePage";
const SignUpPage = () => {
  const { createUserHandler } = useHomePage();
  return <SignUpForm createUserHandler={createUserHandler} />;
};

export default SignUpPage;
