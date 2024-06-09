async function linkShortener(link) {
  const url = `https://www.shareaholic.com/v2/share/shorten_link?apikey=4eb892fbecfdb2216690c0483a40ae14&url=${link}`;
  const reponse = await fetch(url);

  if (!reponse.ok) return "";

  const data = reponse.json();
  return data;
}

export default linkShortener;
