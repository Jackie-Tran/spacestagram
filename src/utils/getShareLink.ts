const getShareLink = (date: string) => {
  const link = `${window.location.protocol}//${window.location.host}/${date}`;
  const temp = document.createElement('textarea');
  temp.value = link;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
};

export default getShareLink;
