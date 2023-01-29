import React from "react";
import Layout from "../components/Layout";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { send } from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState(""); // 「ご氏名」の部分
  const [mail, setMail] = useState(""); // 「メールアドレス」の部分
  const [message, setMessage] = useState(""); // 「お問い合わせ内容」の部分

  const disableSend = name === "" || mail === "" || message === ""; //入力不備で送信不可

  const handleOnSend = (e) => {
    e.preventDefault();
    send(
      "service_51l5n2n",
      "template_3efd6mq",
      { name, mail, message },
      "BMphNzjpmfVJIvv-z"
    )
      .then((response) => {
        console.log("Message send", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });

    window.alert("お問い合わせを送信致しました。");
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <Layout>
      <div className="px-4 lg:px-20 lg:mt-0 pt-5 lg:pt-28 w-full min-h-screen bg-deepgreen grid lg:grid-cols-2">
        <div className="flex mt-10 flex-col lg:flex-col  text-4xl lg:text-6xl tracking-wider">
          <div className=" font-bold">Contact</div>
          <div className="mt-10 lg:mt-20 flex">
            <div className="flex  text-lg lg:text-xl  ml-0 lg:ml-0">
              <a href="https://twitter.com/itwebzozo">
                <FaTwitterSquare
                  size={40}
                  className="hover:brightness-75 duration-300"
                />
              </a>
            </div>
            <div className="text-lg lg:text-xl ml-1 lg:ml-1">
              <a href="https://github.com/AtsukiU">
                <FaGithubSquare
                  size={40}
                  className="hover:brightness-75 duration-300"
                />
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={handleOnSend}
          className="text-lg lg:text-2xl mt-0 lg:mt-0 "
        >
          <div className="">
            <div className="tracking-wider">Email</div>
            <input
              value={mail}
              name={"mail"}
              type={"email"}
              onChange={(e) => {
                setMail(e.target.value);
              }} //mail input //////////////////////
              className="mt-2  px-2 h-10 text-sm lg:text-lg w-full bg-deepgreen brightness-95"
            ></input>
          </div>
          <div className="pt-4">
            <div className="tracking-wider">Name</div>
            <input
              type={"text"}
              name={"name"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }} //
              className="mt-2 px-2  h-10 text-sm lg:text-lg w-full bg-deepgreen brightness-95"
            ></input>
          </div>

          <textarea
            type="text"
            value={message}
            name={"message"}
            onChange={(e) => {
              setMessage(e.target.value);
            }} //textinput/////////////////////////
            className="min-h-[30vh]  pt-2 px-2 mt-10 mb-10 text-sm lg:text-lg w-full bg-deepgreen brightness-95"
          ></textarea>
          <div className="w-full  flex justify-end">
            <button
              type="submit"
              value="Send"
              className=" mb-5 px-6 py-1 text-lg lg:text-2xl  backdrop-brightness-95  rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
