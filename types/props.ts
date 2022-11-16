import { SignUpFormInputs } from "./forms";
export interface NavProps {
  mobileNavbar: boolean;
}
export interface SignUpFormProps {
  createUserHandler: (data: SignUpFormInputs) => void;
}
export interface ErrorsProps {
  errorMessage: string;
}

export interface LogoProps {
  loading?: boolean;
}
