import { useState } from "react";
import { appAuthentication } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpFormInputs } from "../types/forms";
import { CreateUserStatePromise } from "../types/promises";
const useHomePage = () => {
  const [createUserState, setCreateUserState] =
    useState<CreateUserStatePromise>({ visible: false, errorMessage: "" });
  const createUserHandler = (data: SignUpFormInputs) => {
    createUserWithEmailAndPassword(appAuthentication, data.email, data.password)
      .then()
      .catch((error) => {
        const errorMessage: string = error.message;
        setCreateUserState({ visible: true, errorMessage: errorMessage });
      });
  };

  return {
    createUserHandler,
    createUserState,
  };
};
export default useHomePage;
