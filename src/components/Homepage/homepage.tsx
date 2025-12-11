import type { FC } from "react";
import "./homepage.css";

export const Homepage: FC = () => {
  return (
    <div id="homepage">
      <img src="src/assets/Image.jpg" alt="image" />
      <h1>Large Header</h1>
      <p>This is a generic react website</p>
    </div>
  );
};
