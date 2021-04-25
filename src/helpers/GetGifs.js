export const getGifs = async (category) => {
  const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=66ATDnouzCZjgxnHcxBaTHGHTbO9lvof`;
  const resp = await fetch(fetchUrl);
  const { data } = await resp.json();
  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
};
