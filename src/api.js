// const BASE_URL = 'https://api.sos-computer.site/';
// const BASE_URL = 'http://127.0.0.1:8000/';
const BASE_URL = 'https://185-46-8-102.cloudvps.regruhosting.ru/';

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

export const downloadFile = async (id) => {
    let url_path = `${BASE_URL}programm/${id}/`
    console.log(url_path)
    const response = await fetch(url_path, {
        method: 'GET',
        headers: {
            Accept: 'application/pdf', // Установите тип, который ожидаете получить (application/pdf)
        },
        responseType: 'blob', // Установка responseType в 'blob' для обработки файла
    });

    if (!response.ok) {
        throw new Error('Ошибка при получении файла');
    }

    // Преобразуем ответ в Blob
    const blob = await response.blob();

    // Создаем ссылку на Blob
    const url = window.URL.createObjectURL(blob);

    // Создаем элемент <a> для скачивания файла
    const a = document.createElement('a');
    a.href = url;

    // Получаем имя файла из заголовков ответа (если оно доступно)
    const contentDisposition = response.headers.get('Content-Disposition');
    console.log(response)
    const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
    const fileName = fileNameMatch ? fileNameMatch[1] : 'file.pdf'; // По умолчанию 'file.pdf', если имя файла не найдено

    a.download = fileName; // Устанавливаем имя файла для скачивания
    document.body.appendChild(a);
    a.click();
    a.remove();
};
