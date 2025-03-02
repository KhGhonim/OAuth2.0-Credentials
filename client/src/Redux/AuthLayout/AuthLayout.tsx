import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentState } from "../../types/types";

function AuthLayout() {
  const { IsAthenticated }: UserCurrentState = useAppSelector(
    (state) => state.user
  );
  return IsAthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthLayout;
