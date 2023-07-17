const BASE_URL = 'https://api.sos-computer.site/';
// const BASE_URL = 'http://127.0.0.1:8000/';


async function get(endpoint = '') {
    const response = await fetch(BASE_URL + endpoint);
    return response.json();
}

async function post(endpoint = '', data = null, headers = {}) {
    const response = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        credentials: 'include',
        body: JSON.stringify(data),
    });
    return response.json();
}

async function put(endpoint = '', data = null) {
    const response = await fetch(BASE_URL + endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

async function del(endpoint = '') {
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

export const getCSRF = async () => {
    return await get(`order/csrf/`)
}

export const postOrder = async (data, token) => {
    return await post(`order/`, Object.assign({ csrfmiddlewaretoken: token }, data), { 'X-CSRFToken': token })
}
