import { ErrorsProps } from "../../../../types/props";
const Errors: React.FC<ErrorsProps> = (props) => {
  return (
    <div>
      <h3>Ohh, error</h3>
      <p>{props.errorMessage}</p>
    </div>
  );
};
export default Errors;
