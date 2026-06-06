// features/auth/constants/auth.text.ts

export const AUTH_TEXT = {
  login: {
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    submitButton: "Sign In",
    footerText: "Don't have an account?",
    footerAction: "Create Account",
  },

  register: {
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Create a password",
    submitButton: "Create Account",
    footerText: "Already have an account?",
    footerAction: "Sign In",
  },
  footer: "Secure authentication powered by modern JWT architecture.",
} as const;
