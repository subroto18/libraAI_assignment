import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import AuthError from "./AuthError";
import { AUTH_TEXT } from "../constants/auth.text";
import { useLogin } from "../hooks/useLogin";
import { LOGIN_VALIDATION } from "@/features/auth/validations/auth.validation";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { handleLogin, loading, error } = useLogin();

  return (
    <Form<LoginFormValues>
      layout="vertical"
      onFinish={handleLogin}
      className="space-y-2"
    >
      {/* Error */}
      {error && <AuthError error={error} />}

      {/* Email */}
      <Form.Item
        label={
          <span className="text-sm font-medium text-slate-300">
            {AUTH_TEXT.login.emailLabel}
          </span>
        }
        name="email"
        rules={LOGIN_VALIDATION.email}
      >
        <Input
          size="large"
          placeholder={AUTH_TEXT.login.emailPlaceholder}
          className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
        />
      </Form.Item>

      {/* Password */}
      <Form.Item
        label={
          <span className="text-sm font-medium text-slate-300">
            {AUTH_TEXT.login.passwordLabel}
          </span>
        }
        name="password"
        rules={LOGIN_VALIDATION.password}
      >
        <Input.Password
          size="large"
          placeholder={AUTH_TEXT.login.passwordPlaceholder}
          className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
        />
      </Form.Item>

      {/* Submit */}
      <Form.Item className="!mb-2 pt-2">
        <Button
          htmlType="submit"
          loading={loading}
          className="h-12 w-full rounded-xl bg-cyan-500 text-sm font-semibold text-white transition hover:bg-cyan-400"
        >
          {AUTH_TEXT.login.submitButton}
        </Button>
      </Form.Item>

      {/* Footer */}
      <div className="pt-2 text-center text-sm text-slate-400">
        {AUTH_TEXT.login.footerText}{" "}
        <Link
          to={ROUTES.AUTH.REGISTER}
          className="font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          {AUTH_TEXT.login.footerAction}
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
