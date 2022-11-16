import dynamic from "next/dynamic";
const LogInForm = dynamic(() => import("../components/HomePage/Form/LogIn"), {
  ssr: false,
});
const Index = () => {
  return <LogInForm />;
};
export default Index;
