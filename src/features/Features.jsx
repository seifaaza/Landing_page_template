const Features = () => {
  return (
    <>
      <div className=" flex flex-col-reverse justify-center items-center gap-8 laptop:flex-row">
        <div className=" flex flex-col items-center gap-10 tablet:gap-12 laptop:gap-16">
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
                  Developing front end website architecture and esigning user
                  interactions on web pages.
                </p>
              </TimelineContent>
            </TimelineItem>
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
                  Developing back-end website applications and creating servers
                  and databases for functionality
                </p>
              </TimelineContent>
            </TimelineItem>
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
                  Ensuring responsiveness of applications and working alongside
                  graphic designers for web design features .
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-easing="easing"
                  className="text-small-heading font-main text-slate-700 dark:text-slate-100 "
                >
                  Designing and developing APIs and meeting both technical and
                  consumer needs.
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className=" flex justify-evenly flex-nowrap w-full">
        {store.theme == "light" ? (
          <>
            <div className="relative overflow-hidden w-20 tablet:w-32">
              <span className="window absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-sky-600 to-sky-200"></span>
              <img
                src="/assets/cloud.svg"
                alt=""
                className="w-16 cloud-window absolute"
              />
              <img
                src="/assets/window.svg"
                alt=""
                className="w-52 overflow-hidden z-10 relative"
              />
            </div>
            <div className="relative overflow-hidden w-20 tablet:w-32">
              <span className="window absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-sky-600 to-sky-200"></span>
              <img
                src="/assets/cloud.svg"
                alt=""
                className="cloud-window absolute delay1"
              />
              <img
                src="/assets/window2.svg"
                alt=""
                className="w-52 overflow-hidden z-10 relative "
              />
            </div>
            <div className="relative overflow-hidden w-20 tablet:w-32">
              <span className="window absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-sky-600 to-sky-200"></span>
              <img
                src="/assets/cloud.svg"
                alt=""
                className="w-16 cloud-window absolute delay2"
              />
              <img
                src="/assets/window3.svg"
                alt=""
                className="w-52 overflow-hidden z-10 relative"
              />
            </div>
          </>
        ) : (
          <>
            <div className="relative overflow-hidden w-20 tablet:w-32">
              <span className="window absolute top-0 left-0 h-full w-full bg-black"></span>
              <img
                src="/assets/star.svg"
                alt=""
                className="w-2 star-window top-2/4 left-2/3 absolute "
              />
              <img
                src="/assets/window-dark.svg"
                alt=""
                className="w-52 overflow-hidden z-10 relative"
              />
            </div>
            <div className="relative overflow-hidden w-20 tablet:w-32">
              <span className="window absolute top-0 left-0 h-full w-full bg-black"></span>
              <img
                src="/assets/star.svg"
                alt=""
                className="w-4 star-window top-3/4 left-1/3 absolute"
              />
              <img
                src="/assets/window-dark.svg"
                alt=""
                className="w-52 overflow-hidden z-10 relative"
              />
            </div>
            <div className="relative overflow-hidden w-20 tablet:w-32">
              <span className="window absolute top-0 left-0 h-full w-full bg-black"></span>
              <img
                src="/assets/star.svg"
                alt=""
                className="w-3 star-window top-1/4 left-2/4 absolute"
              />
              <img
                src="/assets/window-dark.svg"
                alt=""
                className="w-52 overflow-hidden z-10 relative"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Features;
