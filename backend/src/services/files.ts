import fs from 'fs-extra';

const readFile = async (path: string) => {
  const file = await fs.readFile(path, 'utf8');
  return file;
};

const deleteFile = async (path: string) => {
  await fs.remove(path);
};

export default {
  readFile,
  deleteFile,
};
