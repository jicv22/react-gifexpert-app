export const getGifs = async (category, imageAmount) => {
    const limit = imageAmount;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NY3kas2OxT8nzaOGXkmlRfeUnQUPwYRq&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}
