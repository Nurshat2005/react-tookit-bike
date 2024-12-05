import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import sorry from "../../assets/img/sorry.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Clear,
  Decrement,
  DelBasket,
  Incriment,
  Valuito,
} from "../../redux/reducers/BasketCliceAdd";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const Basket = () => {
  const { basket, currency, rates } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currencySymbol =
    {
      KGZ: "с",
      USD: "$",
      RUB: "₽",
    }[currency] || "";
console.log(currencySymbol);
  const total = basket.reduce(
    (acc, el) => acc + Math.floor(el.price * el.quantity * rates[currency]),
    0
  );
  const totalPrice = basket.reduce(
    (acc, el) =>
      acc + Math.floor(((el.price * 90) / 100) * el.quantity * rates[currency]),
    0
  );
  const discount = basket.reduce(
    (acc, el) =>
      acc + Math.floor((el.price / 100) * 10 * el.quantity * rates[currency]),
    0
  );

  return basket.length ? (
    <div>
      <div className="container">
        <h1 className="mt-[100px] mx-auto text-[64px] tracking-[5%] font-[600] leading-[78px] font-sans mb-[50px] ">
          Корзина
        </h1>
        <div className="flex w-[948px] justify-between items-center">
          <select
            onChange={(e) => dispatch(Valuito(e.target.value.toUpperCase()))}
          >
            <option selected value="KGZ">
              Валюта
            </option>
            <option value="KGZ">KGZ</option>
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
          </select>
          <h1
            onClick={() => navigate("/bicycels")}
            className="mb-[20px] cursor-pointer text-[16px] text-[#F57520] font-[400]"
          >
            Вернуться к покупкам
          </h1>
          <p
            onClick={() => dispatch(Clear())}
            className="text-[14px] font-[400] leading-[22.4px] text-[#B3B3B3] cursor-pointer"
          >
            Очистить корзину
          </p>
        </div>

        <div className="flex flex-col">
          <div className="h-[400px] overflow-y-scroll">
            {basket.map((el) => (
              <div
                key={el._id} // Add unique key prop
                className="flex w-[949px] h-[162px] items-center gap-[70px] justify-center border-[2px] shadow-lg mb-[50px] relative"
              >
                <div
                  className={`absolute w-[30px] h-[30px] rounded-[7px] top-0 ${el.colorSize.color} left-[10px]`}
                />
                <img
                  className="w-[170px] object-contain ml-[14px] flex items-center"
                  src={el?.url}
                  alt="img"
                />
                <h1 className="font-[300] text-[18px] tracking-[1%] leading-[28px] w-[210px] h-[87px] ">
                  {el?.name}
                </h1>
                <div className="flex items-center border-[2px] border-solid border-[#E5E5E5] justify-center w-[123px] h-[52px] rounded-[10px] gap-[32px]">
                  <button
                    onClick={() => dispatch(Decrement(el))}
                    className="text-start font-[500] text-[26px] text-[#101010] w-[20px] h-[20px] flex items-center justify-between"
                  >
                    -
                  </button>
                  <h1 className="text-[26px] text-[#101010] font-[500] leading-[19.6px] flex items-center justify-center">
                    {el?.quantity}
                  </h1>
                  <button
                    onClick={() => dispatch(Incriment(el))}
                    className="font-[500] text-[26px] text-[#101010] w-[20px] h-[20px] flex items-center justify-between text-end"
                  >
                    +
                  </button>
                </div>
                <div className="">
                  <h1 className="font-[500] text-[20px] tracking-[1%] leading-[32px] flex flex-col">
                    {Math.floor(
                      ((el.price * 90) / 100) * el.quantity * rates[currency]
                    )}{" "}
                    {currencySymbol}
                  </h1>
                  <strike className="text-[15px] text-[gray]">
                    {Math.floor(el.price * el.quantity * rates[currency])}
                    {currencySymbol}
                  </strike>
                </div>
                <a
                  onClick={() => dispatch(DelBasket(el?._id))}
                  className="text-[#B3B3B3] cursor-pointer text-[30px]"
                >
                  <IoCloseOutline />
                </a>
              </div>
            ))}
          </div>
          <div className="w-[290px] h-[378px] rounded-[10px] bg-[white] mt-[-29%] flex flex-col items-center justify-start relative ml-[67%] shadow-lg">
            <div className="w-[242px] h-[62px] flex flex-col gap-[38px] justify-start mt-[20px]">
              <div className="flex justify-between items-center">
                <h1 className="font-[300] leading-[25.6px] text-[16px] text-[#777777]">
                  Номер заказа
                </h1>
                <h1 className="leading-[25.6px] font-[300] text-[20px] text-[#101010]">
                  789563678
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[#777777] w-[113px] h-[52px] text-[16px] font-[300]">
                  Сумма заказа (без скидки)
                </h1>
                <h1 className="leading-[25.6px] text-[16px] font-[300] text-[#101010]">
                  {total} {currencySymbol}
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[16px] font-[300] leading-[25.6px] text-[#777777]">
                  Скидка
                </h1>
                <h1>-10%</h1>
                <h1 className="text-[#101010] font-[300] text-[16px] leading-[25.6px]">
                  {discount} {currencySymbol}
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="font-[500] text-[26px] leading-[38.4px] tracking-[1%] text-[#101010] font-sans">
                  Итого
                </h1>
                <h1 className="font-sans text-[#34312D] text-[24px] tracking-[1%] leading-[38.4px] font-[500]">
                  {totalPrice} {currencySymbol}
                </h1>
              </div>
            </div>
            <button onClick={()=>navigate("/order")} className="bg-[#F57520] text-[white] font-[400] rounded-[10px] w-[242px] h-[52px] flex items-center justify-center text-center absolute bottom-2 font-sans">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <center>
      <img className="w-[100%] object-cover" src={sorry} alt="img" />
    </center>
  );
};

export default Basket;
