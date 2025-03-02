import axios from "axios";
import toast from "react-hot-toast";
import { Logout, SERVER_URL } from "../Keys/keys";
import { useNavigate } from "react-router";

const useLogOut = () => {
  const nevigate = useNavigate();

  const HandleLogOut = async () => {
    await axios
      .post(`${SERVER_URL}${Logout}`, {}, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        nevigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return { HandleLogOut };
};

export default useLogOut;
