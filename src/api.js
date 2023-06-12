const BASE_URL = 'https://api.sos-computer.site/';

async function get(endpoint='') {
    const response = await fetch(BASE_URL + endpoint);
    return response.json();
}

async function post(endpoint='', data=null) {
    const response = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

async function put(endpoint='', data=null) {
    const response = await fetch(BASE_URL + endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

async function del(endpoint='') {
    const response = await fetch(BASE_URL + endpoint, {
        method: 'DELETE',
    });
    return response.json();
}

// endpoints

export const getCourses = async () => {
    return await get()
}

export const getDemoCourses = async () => {
    return await get('demo')
}

export const getCourse = async (id) => {
    return await get(`course/${id}`)
}
