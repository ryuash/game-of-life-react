import { toast } from 'react-toastify';

const defaultConfig:object = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: false,
};


export const toastError = (message:string, config = defaultConfig) => {
  return (
    toast.error(message, config)
  );
};
