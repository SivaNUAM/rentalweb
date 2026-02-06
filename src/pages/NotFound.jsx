import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-amber-600">404</h1>
      <p className="mt-3 text-neutral-600">Page not found</p>

      <Link
        to="/"
        className="mt-6 rounded-md bg-amber-600 px-6 py-2 text-white hover:bg-amber-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
