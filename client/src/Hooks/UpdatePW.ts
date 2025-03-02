import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { UpdatePW, SERVER_URL } from "../Keys/keys";

import { useNavigate } from "react-router";

export const useUpdatePW = (Token: string, Email: string) => {
  const [Form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const Nevigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
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
        .post(`${SERVER_URL}${UpdatePW}`,

          {
            password: Form.password,
            Token: Token,
            Email: Email
          },
          {
            withCredentials: true,
          })
        .then((res) => {
          toast.success(res.data.message);
          setIsLoading(false);
          Nevigate("/login");
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
export default useUpdatePW
