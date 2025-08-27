import {getNavbar} from "./get_html_components.js";

// Inject page content here
const contentContainer = document.getElementById('content-container') as HTMLElement;

// Navbar links
const homeButton = document.getElementById('home-button') as HTMLAnchorElement;
const projectButton = document.getElementById('projects-button') as HTMLAnchorElement;
const cvButton = document.getElementById('cv-button') as HTMLAnchorElement;
const contactButton = document.getElementById('contact-button') as HTMLAnchorElement;

function clickHome(): void {
    console.log("clicked")
}

function clickProjects(): void {
    console.log("clicked")
}

function clickMyCv(): void {
    console.log("clicked")

}

function clickContactMe(): void {
    console.log("clicked")
}

function addNavLinkEventListeners() {
    homeButton.addEventListener('click', () => {
        clickHome();
    });
    projectButton.addEventListener('click', () => {
        clickProjects();
    });
    cvButton.addEventListener('click', () => {
        clickMyCv();
    });
    contactButton.addEventListener('click', () => {
        clickContactMe();
    });
}

addNavLinkEventListeners();