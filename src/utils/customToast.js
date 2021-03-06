import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (text, kind) => {
  let closeSpeed;
  kind === "info" ? (closeSpeed = 5000) :kind === "success" ?(closeSpeed = 1000):(closeSpeed = 3000);
  const props = {
    position: "top-right",
    autoClose: closeSpeed,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  toast[kind](text, props);
};
