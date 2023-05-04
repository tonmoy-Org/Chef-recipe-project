import { useRouteError } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export default function ErrorPage() {
    useTitle('Error Page')
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex justify-center mt-40 font-bold text-center">
            <div>
                <h1 className="text-4xl">Oops!</h1>
                <p className="my-4">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}