import { FunctionalComponent, h } from "preact";

const MenuItem: FunctionalComponent = ({ children }) => {
  return (
    <li>
      <a>{children}</a>
    </li>
  );
};

export default MenuItem;
