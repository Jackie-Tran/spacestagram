const getShareLink = (date: string) => {
  const link = `${window.location.protocol}//${window.location.host}/${date}`;
  navigator.clipboard.writeText(link);
};

export default getShareLink;
