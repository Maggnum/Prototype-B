import type { FC } from "react";
import "./errorPage.css";
import { isRouteErrorResponse, useRouteError } from "react-router";
export const ErrorPage: FC = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <img src="src/assets/Image.jpg" alt="image" />
        <h1>Sorry!</h1>
        <h2>something went wrong...</h2>
        <h3>
          {error.status} {error.statusText}
        </h3>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <img src="src/assets/Image.jpg" alt="image" />
        <h1>Sorry! something went wrong...</h1>
        <h2>{error.message}</h2>
        <p>stack trace:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return (
      <div id="error-page">
        <img src="src/assets/Image.jpg" alt="image" />
        <h1>Sorry!</h1>
        <h2>something went wrong...</h2>
        <p>please try again</p>
      </div>
    );
  }
};
