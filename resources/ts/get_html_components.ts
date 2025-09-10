/**
 * Fetch html content for home page.
 */
async function getHomeContent(): Promise<string> {
    return fetch('home.html')
    .then(res => res.text())
    .then(html => {
        return html;
    }).catch(err => {
        console.error("Error fetching home content: ", err);
        return "ERROR";
    });
}

/**
 * Fetch html content for projects page.
 */
async function getProjectsContent(): Promise<string> {
    return fetch('projects.html')
    .then(res => res.text())
    .then(html => {
        return html;
    }).catch(err => {
        console.error("Error fetching projects content: ", err);
        return "ERROR";
    });
}

/**
 * Fetch html content for contact me page.
 */
async function getContactMeContent(): Promise<string> {
    return fetch('contactme.html')
    .then(res => res.text())
    .then(html => {
        return html;
    }).catch(err => {
        console.error("Error fetching contact me content: ", err);
        return "ERROR";
    });
}

export {getHomeContent, getProjectsContent, getContactMeContent}
