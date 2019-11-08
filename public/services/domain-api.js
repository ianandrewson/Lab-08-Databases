const URL = '/api';

export async function getBuildings() {
    const url = `${URL}/buildings`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}