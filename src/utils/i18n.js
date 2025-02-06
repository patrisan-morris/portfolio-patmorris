export async function loadLocale(lang) {
    let locale = {
        globals: '',
        skills: '',
        works: '',
        projects: '',
        certifications: '',
        contact: '',
    };

    switch(lang) {
        case 'en':
            locale.globals = await import('@locales/en/globals.json');      
            locale.skills = await import('@locales/en/skills.json');
            locale.works = await import('@locales/en/works.json');
            locale.projects = await import('@locales/en/projects.json');
            locale.certifications = await import('@locales/en/certifications.json');
            locale.contact = await import('@locales/en/contact.json');
            break;
        case 'es':
            locale.globals = await import('@locales/es/globals.json');      
            locale.skills = await import('@locales/es/skills.json');
            locale.works = await import('@locales/es/works.json');
            locale.projects = await import('@locales/es/projects.json');
            locale.certifications = await import('@locales/es/certifications.json');
            locale.contact = await import('@locales/es/contact.json');
            break;
        default:
            locale.globals = await import('@locales/en/globals.json');      
            locale.skills = await import('@locales/en/skills.json');
            locale.works = await import('@locales/en/works.json');
            locale.projects = await import('@locales/en/projects.json');
            locale.certifications = await import('@locales/en/certifications.json');
            locale.contact = await import('@locales/en/contact.json');
            breeak;
    } 
    return locale;
}