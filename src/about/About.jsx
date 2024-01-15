import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { QRCode } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

export default function About() {
  return (
    <div
      id="about"
      className=" bg-gradient-to-b from-white to-sky-200 dark:from-slate-700 dark:to-slate-900 flex flex-col py-14 pt-24"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1 className="text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">
          About Us
        </h1>
        <div className="ticket flex h-32 max-w-3xl tablet:max-w-full tablet:h-40 laptop:h-64 tablet:w-4/5 rotate-2 my-8 overflow-hidden">
          <div className="w-2/12 h-full shadow-md rounded-md tablet:rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 relative">
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-full w-full flex gap-1 tablet:gap-2 laptop:gap-5 items-center justify-center -rotate-90">
              <img
                src="/logo.svg"
                className="w-10 tablet:w-16 laptop:w-20"
                alt=""
              />
              <h1 className="text-xs laptop:text-xl font-title text-white text-center">
                Sky Airways
              </h1>
            </div>
          </div>
          <div
            className="w-7/12 tablet:w-8/12 laptop:w-7/12 h-full shadow-md rounde-md tablet:rounded-xl 
          bg-gradient-to-tr from-slate-300 to-slate-100 font-mono p-2 tablet:p-4 tablet:py-3
           laptop:p-8 flex flex-col justify-between "
          >
            <div className="flex justify-between">
              <div className="flex flex-col tablet:gap-1 laptop:gap-2 text-xs tablet:text-sm laptop:text-lg">
                <p>
                  NAME: <span className="font-bold">AAZA Seifeddine</span>
                </p>
                <p>
                  FROM: <span className="font-bold">CASABLANCA</span>
                </p>
                <p>
                  TO: <span className="font-bold">ANYWHERE</span>
                </p>
                <p>
                  TIME: <span className="font-bold">ANYTIME</span>
                </p>
              </div>
              <div className="flex flex-col tablet:gap-1 laptop:gap-2 text-xs tablet:text-sm laptop:text-lg">
                <p>
                  GATE: <span className="font-bold">12</span>
                </p>
                <p>
                  FLIGHT: <span className="font-bold">W1937</span>
                </p>
                <p>
                  SEAT: <span className="font-bold">01</span>
                </p>
                <p>
                  CLASS: <span className="font-bold">FIRST</span>
                </p>
              </div>
            </div>
            <p className="font-mono font-bold text-center text-xs tablet:text-sm laptop:text-xl text-sky-600">
              {" "}
              Have a nice flight !
            </p>
          </div>
          <div className="w-3/12 h-full shadow-md rounded-xl bg-gradient-to-tr from-slate-300 to-slate-100 relative flex flex-col justify-center items-center overflow-hidden">
            <hr className="absolute top-2/4 -left-2/4 h-1 rotate-90 w-full border-2 border-gray-500 border-dashed" />
            <p className="font-mono font-bold text-xs p-2 text-center laptop:text-lg">
              Mr AAZA Seifeddine
            </p>

            <QRCode
              value="https://www.linkedin.com/in/seifeddine-aaza-6813b0248/"
              className="w-6"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center items-center gap-8 laptop:flex-row">
          <div className="flex flex-col items-center gap-10 tablet:gap-12 laptop:gap-16">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <p
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="easing"
                    className="text-small-heading font-main text-slate-700 dark:text-slate-100 "
                  >
                    I have the ability to collaborate effectively with
                    cross-functional teams, communicate technical concepts
                    clearly. I am excited to contribute my skills and knowledge
                    to drive meaningful results for companies and projects .
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                </TimelineSeparator>
                <TimelineContent>
                  <p
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="easing"
                    className="text-small-heading font-main text-slate-700 dark:text-slate-100 "
                  >
                    As a Full-stack Web Developer, i am creative, passionate and
                    motivated, I have a strong interest in creating dynamic and
                    user-friendly web applications .
                  </p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        <a href="/cv2-2023.pdf" download>
          <button className="main-btn text-center laptop:text-left hover:scale-105 duration-300 text-white bg-sky-500">
            <span>Download Resume</span>
            <ArrowDownOutlined />
          </button>
        </a>
      </div>
    </div>
  );
}
