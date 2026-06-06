import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export const AUTH_COMPONENT_MAPPER = {
  form: {
    login: LoginForm,
    register: RegisterForm,
  },
} as const;
