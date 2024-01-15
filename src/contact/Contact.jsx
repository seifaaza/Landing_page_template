import { SendOutlined } from "@ant-design/icons";
import TextField from "@mui/material/TextField";
export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b to-white from-sky-50 dark:from-slate-950 dark:to-slate-900 flex flex-col py-4 tablet:py-10"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1
          style={{ lineHeight: "1.1" }}
          className="text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600"
        >
          Contact Us
        </h1>
        <div className="w-10/12 laptop:w-6/12 desktop:w-4/12 flex flex-col gap-6">
          <TextField
            id="outlined-basic"
            label="Fullname"
            variant="outlined"
            placeholder="Please enter your fullname
          "
          />
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            placeholder="Please enter your email
          "
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            placeholder="How can we help you ?
          "
          />
          <button className="main-btn text-center laptop:text-left hover:scale-105 duration-300 text-white bg-sky-500">
            <span>Send</span>
            <SendOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
