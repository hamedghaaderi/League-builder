const formattedFileSize = (bytes) => {
  if (!bytes) return;

  const units = ["بایت", "کبلوبایت", "مگابایت", "گیگابایت"];
  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  return `${bytes.toFixed(2)} ${units[i]}`;
};

export default formattedFileSize;
