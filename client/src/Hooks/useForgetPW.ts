import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { ForgetPw, SERVER_URL } from "../Keys/keys";
import { useNavigate } from "react-router";

export const useForgetPW = () => {
  const [Form, setForm] = useState({
    email: "",
  });
  const [IsLoading, setIsLoading] = useState(false);
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
    if (!Form.email) {
      toast.error("Please fill the email field");
      setIsLoading(false);
      return;
    }

    try {
      await axios
        .post(`${SERVER_URL}${ForgetPw}`,
          {
            email: Form.email,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsLoading(false);

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
      Nevigate("/");
    }


  }


  return { HandleChange, Form, IsLoading, HandleSubmit };

}
export default useForgetPW
