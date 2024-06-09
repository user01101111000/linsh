import axios from "axios";
async function linkShortener(link) {
  const url = `https://www.shareaholic.com/v2/share/shorten_link`;
  const reponse = await axios.get(url, {
    params: {
      apikey: "4eb892fbecfdb2216690c0483a40ae14",
      url: link,
    },
  });

  return reponse.data;
}

export default linkShortener;
