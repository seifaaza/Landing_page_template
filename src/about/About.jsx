import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { ArrowDownOutlined } from "@ant-design/icons";

export default function About() {
  return (
    <div
      id="about"
      className=" bg-gradient-to-b from-white to-sky-50 dark:to-slate-950 dark:from-slate-900 flex flex-col py-14 pt-24"
    >
      <div className="p-3  main-container flex flex-col gap-8 tablet:gap-10 laptop:gap-16 justify-center items-center">
        <h1 className="text-5xl tablet:text-6xl laptop:text-7xl font-main font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-500">
          Our passions define us
        </h1>
        <div className="flex flex-col-reverse justify-center items-center gap-8 laptop:flex-row">
          <div className=" flex flex-col items-center gap-10 tablet:gap-12 laptop:gap-16">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <span className="text-left">
                    <h1 className="text-sky-500 text-small-heading">
                      Crafting Distinctive Flying Experiences
                    </h1>
                    <p className="text-lg text-slate-700 dark:text-slate-100 ">
                      Embrace the sky with Sky Airways, where our unwavering
                      commitment and boundless enthusiasm converge to shape a
                      distinctive flying experience.
                    </p>
                  </span>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <span className="laptop:text-right">
                    <h1 className="text-sky-500 text-small-heading">
                      Skyward Commitment
                    </h1>
                    <p className="text-lg  text-slate-700 dark:text-slate-100 ">
                      In every pursuit at Sky Airways, our unwavering commitment
                      and enthusiasm shine, shaping our distinctive identity.
                    </p>
                  </span>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        <a>
          <button className="main-btn text-center laptop:text-left hover:scale-105 duration-300 text-white bg-sky-500">
            <span>Download Plan</span>
            <ArrowDownOutlined />
          </button>
        </a>
      </div>
    </div>
  );
}
