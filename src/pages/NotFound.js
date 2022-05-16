import { Link } from "react-router-dom";
import { ReactComponent as ErrorImage } from "../assets/illustrations/404page.svg";

const NotFound = () => {
  return (
    <>
      <div className="my-20 px-8 py-12 flex flex-col items-center">
        <h2 className="text-lg font-medium">404 error</h2>
        <ErrorImage className="max-w-[700px] h-auto" />
        <p>That page cannot be found</p>
        <Link
          to="/"
          className="underline hover:text-blue-400 transition duration-200"
        >
          Back to the homepage...
        </Link>
      </div>
    </>
  );
};

export default NotFound;
