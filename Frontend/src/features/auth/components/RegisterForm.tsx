import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import AuthError from "./AuthError";
import { AUTH_TEXT } from "../constants/auth.text";
import { useRegister } from "../hooks/useRegister";
import { REGISTER_VALIDATION } from "../validations/auth.validation";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { handleRegister, loading, error } = useRegister();

  return (
    <Form<RegisterFormValues>
      layout="vertical"
      onFinish={handleRegister}
      className="space-y-2"
    >
      {error && <AuthError error={error} />}

      <Form.Item
        label={
          <span className="text-sm font-medium text-slate-300">
            {AUTH_TEXT.register.nameLabel}
          </span>
        }
        name="name"
        rules={REGISTER_VALIDATION.name}
      >
        <Input
          size="large"
          placeholder={AUTH_TEXT.register.namePlaceholder}
          className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
        />
      </Form.Item>

      <Form.Item
        label={
          <span className="text-sm font-medium text-slate-300">
            {AUTH_TEXT.register.emailLabel}
          </span>
        }
        name="email"
        rules={REGISTER_VALIDATION.email}
      >
        <Input
          size="large"
          placeholder={AUTH_TEXT.register.emailPlaceholder}
          className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
        />
      </Form.Item>

      <Form.Item
        label={
          <span className="text-sm font-medium text-slate-300">
            {AUTH_TEXT.register.passwordLabel}
          </span>
        }
        name="password"
        rules={REGISTER_VALIDATION.password}
      >
        <Input.Password
          size="large"
          placeholder={AUTH_TEXT.register.passwordPlaceholder}
          className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
        />
      </Form.Item>

      <Form.Item className="!mb-2 pt-2">
        <Button
          htmlType="submit"
          loading={loading}
          className="h-12 w-full rounded-xl bg-cyan-500 text-sm font-semibold text-white transition hover:bg-cyan-400"
        >
          {AUTH_TEXT.register.submitButton}
        </Button>
      </Form.Item>

      <div className="pt-2 text-center text-sm text-slate-400">
        {AUTH_TEXT.register.footerText}{" "}
        <Link
          to={ROUTES.AUTH.LOGIN}
          className="font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          {AUTH_TEXT.register.footerAction}
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
