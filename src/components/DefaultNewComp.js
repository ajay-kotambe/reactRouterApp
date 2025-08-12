import { Outlet } from "react-router-dom";

const DefaultNewComp = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultNewComp;
