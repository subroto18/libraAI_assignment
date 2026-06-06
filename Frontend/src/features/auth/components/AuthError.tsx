interface Props {
  error?: string;
}

const AuthError = ({ error }: Props) => {
  if (!error) return null;

  return (
    <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
      {error}
    </div>
  );
};

export default AuthError;
