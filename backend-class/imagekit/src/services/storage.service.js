import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const storageInstance = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_URL,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

export const sendFiles = async (file, fileName) => {
  const obj = {
    file,
    fileName,
    folder: "cohort-3",
  };

  return await storageInstance.upload(obj);
};
