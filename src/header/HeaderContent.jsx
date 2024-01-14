import { ArrowRightOutlined } from "@ant-design/icons";
import mainStore from "../store/mainStore";
import Talk from "./Talk";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function HeaderContent() {
  const store = mainStore();
  return (
    <div className="absolute w-9/12 left-2/4 top-32 tablet:top-40 laptop:items-start laptop:text-start laptop:w-6/12 laptop:top-56 laptop:left-10 desktop:w-6/12 -translate-x-2/4 laptop:translate-x-0 flex flex-col items-center text-center gap-5 tablet:gap-6 laptop:gap-8">
      <h1 className="font-bold font-title text-white text-5xl tablet:text-6xl laptop:text-7xl desktop:text-8xl">
        Sky Airways
      </h1>
      <p className=" font-medium text-small-heading laptop:max-w-xl font-main text-white dark:text-slate-300 ">
        I am AAZA Seifeddine, a full-stack web developer based in morocco
      </p>

      <button
        onClick={() => store.openTalk()}
        className="main-btn text-center laptop:text-left text-white border border-white hover:bg-white hover:text-sky-500 dark:hover:text-black"
      >
        <span>Let{"'"}s Talk</span>
        <ArrowRightOutlined />
      </button>
      <Modal
        open={store.talk}
        onClose={store.closeTalk}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="p-4 tablet:p-6 laptop:p-8 desktop:p-10 bg-white/20 dark:bg-white/10 desktop:px-16 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  backdrop-blur-lg rounded-xl">
          <Talk />
        </Box>
      </Modal>
    </div>
  );
}
