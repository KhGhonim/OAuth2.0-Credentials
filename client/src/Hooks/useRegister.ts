import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Register, SERVER_URL } from "../Keys/keys";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
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
    setIsLoading(false);
    if (!Form.email || !Form.password || !Form.fullName) {
      toast.error("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    try {
      await axios
        .post(`${SERVER_URL}${Register}`, {
          email: Form.email,
          password: Form.password,
          fullName: Form.fullName,
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsLoading(false);
          Nevigate("/login");
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
export default useRegister
