const copyToClipBoard = async (message: string) => {
  await navigator.clipboard.writeText(message);
};

export default copyToClipBoard;
