import { APP_CONFIG } from "@/config/app.config";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="flex items-center justify-center text-sm text-slate-500 py-10">
        <p>
          {APP_CONFIG.footer.copyright}{" "}
          <span className="font-semibold text-primary">
            {APP_CONFIG.appName}
          </span>{" "}
          (
          <span className="font-medium text-slate-700">
            {APP_CONFIG.footer.reservedText}
          </span>
          )
        </p>
      </div>
    </footer>
  );
};

export default Footer;
