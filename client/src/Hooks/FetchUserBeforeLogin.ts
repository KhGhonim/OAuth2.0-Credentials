import { useNavigate } from "react-router";
import axios from "axios";
import { SERVER_URL, GetUser } from "../Keys/keys";
import { Logging } from "../Redux/Slicers/UserSlicer";
import { useAppDispatch } from "./ReduxHooks";

export const FetchUserBeforeLogin = () => {
  const Nevigate = useNavigate();
  const dispatch = useAppDispatch();
  const HandleFetchingUserData = async () => {
    await axios
      .get(`${SERVER_URL}${GetUser}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (!res.data.password) {
          Nevigate(`/set-password?ID=${res.data.googleId}`);
        } else {
          dispatch(Logging(res.data));
          Nevigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return { HandleFetchingUserData };
}
