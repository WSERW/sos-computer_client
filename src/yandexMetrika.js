export const token = 94467189
export const yandexMetrikaInit = () => {
    // Инициализация Яндекс Метрики
    window.ym(token, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
};

export const trackPageView = (pathname) => {
    // Отправка данных о просмотре страницы в Яндекс Метрику
    window.ym(token, 'hit', pathname);
};