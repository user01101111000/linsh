async function linkShortener(link) {
  const url = `https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${link}/&service[name]=shrlc`;
  const reponse = await fetch(url);

  if (!reponse.ok) return "";

  const data = reponse.json();
  return data;
}

export default linkShortener;
