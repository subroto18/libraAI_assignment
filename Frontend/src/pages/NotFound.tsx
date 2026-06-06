// pages/NotFound.tsx

import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { NOT_FOUND_TEXT } from "@/constants/notFound";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-7xl font-bold tracking-tight text-slate-900">
        {NOT_FOUND_TEXT.title}
      </h1>

      <p className="mt-4 text-lg text-slate-500">{NOT_FOUND_TEXT.subtitle}</p>
      <p className="mt-2 max-w-md text-sm text-slate-400">
        {NOT_FOUND_TEXT.description}
      </p>
      <Link to={ROUTES.DASHBOARD} className="mt-8">
        <Button size="md" className="bg-cyan-500 text-white hover:bg-cyan-400">
          {NOT_FOUND_TEXT.action}
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
