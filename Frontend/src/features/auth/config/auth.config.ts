import logo from "@/assets/images/logo.png";

export const AUTH_CONFIG = {
  branding: {
    logo,
    appName: "Expense Tracker",
    title: "Welcome Back 👋",
    subtitle: "Track your Spending.",
    footer: "Secure JWT Authentication",
  },

  layout: {
    maxWidth: "max-w-md",
    cardPadding: "p-8",
  },

  background: {
    topBlob: "bg-cyan-500/20",
    bottomBlob: "bg-blue-600/20",
  },
} as const;
