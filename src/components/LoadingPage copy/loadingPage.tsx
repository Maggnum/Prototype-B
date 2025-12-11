import type { FC } from "react";
import { Outlet, useLoaderData } from "react-router";
import "./loadingPage.css";

export const LoadingPage: FC = () => {
  const data: unknown = useLoaderData();

  if (data) {
    return <Outlet context={data} />;
  } else
    return (
      <div id="loading-page">
        <img src="src/assets/Image.jpg" alt="image" />
        <h1>Loading...</h1>
      </div>
    );
};
