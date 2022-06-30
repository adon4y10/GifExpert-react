export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3XTPr69I0JbZAgNnaWhKbQrxlrzh8S88&q= ${ category }&limit=10`;

    const resp = await fetch( url );
    //interesa sacar la data que viene en el boody de la api
    const { data } = await resp.json();

    //gif a tomar. Regresa un objeto
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}