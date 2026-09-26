import ImageKit, { toFile } from "@imagekit/nodejs";
import config from "../config/config.js";

const client = new ImageKit({
  publicKey: config.IMAGE_KIT_PUBLIC_KEY,
  privateKey: config.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: config.IMAGE_KIT_URL_ENDPOINT,
});

export async function uploadFiles({ buffer, fileName }) {
  const response = await client.files.upload({
    file: await toFile(buffer),
    fileName: fileName,
    folder: "snitch",
  });

  return response;
}
