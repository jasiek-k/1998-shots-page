export const formatTeaserTitle = (title: string) => {
  if (!title) {
    return;
  }

  const arr = new Array(10).fill(title);

  return arr.join(" - ");
};
