import {getHomeContent, getProjectsContent, getContactMeContent} from "./get_html_components.js";

// Inject page content here
const contentContainer = document.getElementById('content-container') as HTMLElement;

// Navbar links
const homeButton = document.getElementById('home-button') as HTMLAnchorElement;
const projectButton = document.getElementById('projects-button') as HTMLAnchorElement;
const cvButton = document.getElementById('cv-button') as HTMLAnchorElement;
const contactButton = document.getElementById('contact-button') as HTMLAnchorElement;

async function clickHome(): Promise<void> {
    await getHomeContent().then(res => {
        clearContent();
        contentContainer.insertAdjacentHTML('afterbegin', res)
    });
}

function clearContent(): void {
    contentContainer.innerHTML = '';
}

async function clickProjects(): Promise<void> {
    await getProjectsContent().then(res => {
        clearContent();
        contentContainer.insertAdjacentHTML('afterbegin', res)
    });
}

function clickMyCv(): void {
    console.log("clicked")

}

async function clickContactMe(): Promise<void> {
    await getContactMeContent().then(res => {
        clearContent();
        contentContainer.insertAdjacentHTML('afterbegin', res)
    });
}

function addNavLinkEventListeners() {
    homeButton.addEventListener('click', () => {
        clickHome().then(() => console.log('Successfully fetched home page content'));
    });
    projectButton.addEventListener('click', () => {
        clickProjects().then(() => console.log('Successfully fetched project page content'));
    });
    cvButton.addEventListener('click', () => {
        clickMyCv();
    });
    contactButton.addEventListener('click', () => {
        clickContactMe().then(() => console.log('Successfully fetched contact page content'));
    });
}

addNavLinkEventListeners();