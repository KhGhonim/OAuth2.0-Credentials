import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Login, SERVER_URL } from "../Keys/keys";
import { useAppDispatch } from "./ReduxHooks";
import { Logging } from "../Redux/Slicers/UserSlicer";
import { useNavigate } from "react-router";

export const useLoginIn = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const [IsLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const Nevigate = useNavigate();

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  const HandleSubmit = async (eo: React.FormEvent) => {
    eo.preventDefault();
    setIsLoading(true);
    if (!Form.email || !Form.password) {
      toast.error("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    try {
      await axios
        .post(`${SERVER_URL}${Login}`,
          {
            email: Form.email,
            password: Form.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          dispatch(Logging(res.data.user));
          setIsLoading(false);
          Nevigate("/");
        })
        .catch((error) => {
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


  return { HandleChange, Form, IsLoading, setIsLoading, HandleSubmit };

}
export default useLoginIn
