/**
 * Fetch the nav bar html.
 */
async function getNavbar(): Promise<string> {
    return fetch('navbar.html')
    .then(res => res.text())
    .then(html => {
        return html;
    }).catch(err => {
        console.error("Error fetching navbar: ", err);
        return "ERROR";
    });
}

export {getNavbar}
