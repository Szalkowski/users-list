export async function fetchData(url) {
    const getData = await fetch(url);
    return await getData.json();
}
