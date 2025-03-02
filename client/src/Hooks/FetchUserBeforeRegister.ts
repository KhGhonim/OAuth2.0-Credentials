import { useNavigate } from "react-router";
import axios from "axios";
import { SERVER_URL, GetUser } from "../Keys/keys";

export const FetchUserBeforeRegister = () => {
  const Nevigate = useNavigate();

  const HandleFetchingUserData = async () => {
    await axios
      .get(`${SERVER_URL}${GetUser}`, {
        withCredentials: true,
      })
      .then((res) => {
        Nevigate(`/set-password?ID=${res.data.googleId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return { HandleFetchingUserData };
}
