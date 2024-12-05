import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Order = () => {
  const [userName, setUserName] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  
  const ToastSucces = () => {
    toast.success("Ваш заказ доставлен ✅!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const ToastError = () => {
    toast.error("🦄 Заполните  все пустые ячейки!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const SubmitForTelegram = () => {
    if (
      userName.trim === "" ||
      userPhone.trim === "" ||
      userAdress.trim() === ""
    ) {
      ToastError();
    } else {
      let my_id = `-1002433061265`;
      let token = `7096908386:AAGR-AoOanGnQquLwoJgULy101MaB9ymL7E`;
      let api_Key = `https://api.telegram.org/bot${token}/sendMessage`;
      let newProduct = {
        chat_id: my_id,
        parse_model: "html",
        text: `USER_NAME:${userName},
               USER_ADDRESS:${userAdress},
               USER_PHONE:${userPhone}
        `,
      };
      axios.post(api_Key, newProduct);
      setUserName("");
      setUserPhone("");
      setUserAdress("");
      ToastSucces();
    }
  };
  return (
    <div>
      <div className="container">
        <center>
          <h1 className="text-[#F57520] font-[500] text-[30px] mt-[50px]">
            Ваш заказ будет отправлен в телеграм !
          </h1>
          <div className="flex flex-col  items-center  justify-center gap-[50px] mt-[10%]">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-b-solid border-b-[2px] border-b-[#F57520] outline-none w-[300px] p-[10px] placeholder:text-[#F57520] text-[#F57520]"
              type="text"
              placeholder="Ваша имя "
            />
            <input
              value={userAdress}
              onChange={(e) => setUserAdress(e.target.value)}
              className="border-b-solid border-b-[2px] border-b-[#F57520] outline-none w-[300px] p-[10px] placeholder:text-[#F57520] text-[#F57520]"
              type="text"
              placeholder="Ваш адрес"
            />{" "}
            <input
              value={userPhone}
              max={10}
              onChange={(e) => setUserPhone(e.target.value)}
              className="border-b-solid border-b-[2px] border-b-[#F57520] placeholder:text-[#F57520] outline-none w-[300px] p-[10px] text-[#F57520]"
              type="number"
              placeholder="Ваш телефон номер  "
            />
            <button
              onClick={() => SubmitForTelegram()}
              className="py-[10px] bg-[#F57520] flex items-center justify-center rounded-[7px] w-[200px] text-[#FFFF] mt-[50px]"
            >
              Oтправить
            </button>
          </div>
          <ToastContainer />
        </center>
      </div>
    </div>
  );
};

export default Order;
