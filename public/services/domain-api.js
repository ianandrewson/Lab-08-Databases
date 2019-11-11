const URL = '/api';

export async function getBuildings() {
    const url = `${URL}/buildings`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getIsHome(){
    const url = `${URL}/ishome`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function postBuilding(form){
    const url = `${URL}/buildings`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    });
    const data = await response.json();
    return data;
}

export async function getSingleBuilding(id) {
    const url = `${URL}/buildings/${id}`;
    return fetch(url)
        .then(response => response.json());
}