import getAxiosInstance from "../axios_instance";

async function linkShortener(link) {
  const { data } = await getAxiosInstance(link).post();

  return data.short_url;
}

export default linkShortener;
