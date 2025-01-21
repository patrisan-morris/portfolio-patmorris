export async function loadLocale(lang) {
    let locale;
    switch(lang) {
        case 'en':
            locale = await import('@locales/en.json');
            break;
        case 'es':
            locale = await import('@locales/es.json');
            break;
        default:
            locale = await import('@locales/en.json');
            breeak;
    } 
    return locale.default;
}