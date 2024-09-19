import axios from "axios";
async function linkShortener(link) {
  const url = `https://spoo.me`;
  const { data } = await axios.post(
    url,
    {},
    {
      params: {
        url: link,
      },
      headers: {
        Accept: "application/json",
      },
    }
  );
  return data.short_url;
}

export default linkShortener;
