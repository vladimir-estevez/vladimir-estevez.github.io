export const getDownloadName = (filePath) => {
    const filename = filePath.split('/').pop();
    const parts = filename.split('.');
    if (parts.length >= 3) {
      const potentialHash = parts[parts.length - 2];
      if (/^[0-9a-f]+$/i.test(potentialHash)) {
        parts.splice(parts.length - 2, 1);
      }
      return parts.join('.');
    }
    return filename;
  };