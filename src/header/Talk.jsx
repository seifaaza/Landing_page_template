import { Button } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CheckIcon from "@mui/icons-material/Check";
import mainStore from "../store/mainStore";
import { MailOutlined } from "@ant-design/icons";

export default function Talk() {
  const store = mainStore();

  return (
    <form className="flex flex-col gap-5 w-full text-slate-700 dark:text-slate-400 laptop:max-w-sm">
      <div className="flex justify-center gap-4">
        <a href="mailto:seifeddine.aaza@gmail.com">
          <div className="flex gap-4 justify-center items-center rounded-xl p-10 flex-col-reverse  text-center laptop:text-left text-white border border-white duration-200 hover:scale-105 dark:hover:text-black">
            <span className="font-main font-bold text-2xl">Email</span>
            <svg
              className="h-16 fill-white"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23.37 16.69"
            >
              <path
                className="cls-1"
                d="M11.68,11.68,8.79,9.15.53,16.24a1.67,1.67,0,0,0,1.15.45h20a1.66,1.66,0,0,0,1.14-.45L14.57,9.15Z"
              />
              <path
                className="cls-1"
                d="M22.84.45A1.69,1.69,0,0,0,21.69,0h-20A1.65,1.65,0,0,0,.53.46L11.68,10Z"
              />
              <polygon
                className="cls-1"
                points="0 1.47 0 15.33 8.07 8.48 0 1.47"
              />
              <polygon
                className="cls-1"
                points="15.3 8.48 23.37 15.33 23.37 1.46 15.3 8.48"
              />
            </svg>
          </div>
        </a>
        <a href="tel:0771920270">
          <div className="flex gap-4 justify-center items-center rounded-xl p-10 flex-col-reverse  text-center laptop:text-left text-white border border-white duration-200 hover:scale-105 dark:hover:text-black">
            <span className=" font-bold text-2xl">Call</span>
            <svg
              className="h-16 fill-white"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 316.08 273.32"
            >
              <path
                className="cls-1"
                d="M158,0C-23.16,0,1.63,110.11,1.63,110.11h82.7c0-55.53,52.46-54.36,73.7-54.36s73.71-1.17,73.7,54.36h82.7S339.22,0,158,0Z"
              />
              <rect className="cls-1" y="118.65" width="85.43" height="17.09" />
              <rect
                className="cls-1"
                x="230.65"
                y="118.65"
                width="85.43"
                height="17.09"
              />
              <path
                className="cls-1"
                d="M309.63,273.32a152.94,152.94,0,0,0-305.72,0Z"
              />
              <path
                className="cls-1"
                d="M219.21,155.82c0,47.48-27.4,86-61.18,86s-61.17-38.5-61.17-86,0-86,61.17-86S219.21,108.33,219.21,155.82Z"
              />
              <path
                className="cls-2"
                d="M199.44,199.7A41.41,41.41,0,1,1,158,158.29,41.41,41.41,0,0,1,199.44,199.7Z"
              />
            </svg>
          </div>
        </a>
      </div>
    </form>
  );
}
