const URL = '/api';

export async function getBuildings() {
    const url = `${URL}/buildings`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getIsHome(){
    const url = `${URL}/ishome`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}