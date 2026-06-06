export const LOGIN_VALIDATION = {
  email: [
    {
      required: true,
      message: "Email is required",
    },
    {
      type: "email" as const,
      message: "Invalid email address",
    },
  ],

  password: [
    {
      required: true,
      message: "Password is required",
    },
    {
      min: 6,
      message: "Password must be at least 6 characters",
    },
  ],
};

export const REGISTER_VALIDATION = {
  name: [
    {
      required: true,
      message: "Name is required",
    },
    {
      min: 2,
      message: "Name must be at least 2 characters",
    },
  ],

  email: [
    {
      required: true,
      message: "Email is required",
    },
    {
      type: "email" as const,
      message: "Invalid email address",
    },
  ],

  password: [
    {
      required: true,
      message: "Password is required",
    },
    {
      min: 6,
      message: "Password must be at least 6 characters",
    },
  ],
};
