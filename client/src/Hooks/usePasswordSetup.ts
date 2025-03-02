import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { GetUser, SERVER_URL, SetPw } from "../Keys/keys";
import { Logging } from "../Redux/Slicers/UserSlicer";
import { useAppDispatch } from "./ReduxHooks";
import { useNavigate } from "react-router";

export const usePasswordSetup = (id: string) => {
  const [Form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const dispatch = useAppDispatch();
  const Nevigate = useNavigate();

  const [IsLoading, setIsLoading] = useState(false);
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  }
  const HandleFetchingUserData = async () => {
    await axios
      .get(`${SERVER_URL}${GetUser}`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(Logging(res.data));
        Nevigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const HandleSubmit = async (eo: React.FormEvent) => {
    eo.preventDefault();
    setIsLoading(false);
    if (!Form.confirmPassword || !Form.password) {
      toast.error("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    if (Form.password !== Form.confirmPassword) {
      toast.error("Password does not match");
      setIsLoading(false);
      return;
    }

    try {
      await axios
        .post(`${SERVER_URL}${SetPw}`,

          {
            password: Form.password,
            id: id
          },
          {
            withCredentials: true,
          })
        .then((res) => {
          toast.success(res.data.message);
          setIsLoading(false);
          HandleFetchingUserData();


        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
          setIsLoading(false);
        });


    } catch (error) {
      console.log(error);
      setIsLoading(false);

    } finally {
      setIsLoading(false);
    }


  }


  return { HandleChange, Form, IsLoading, HandleSubmit };

}
export default usePasswordSetup
