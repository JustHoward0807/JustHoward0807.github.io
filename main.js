"use strict";


const apiUrl = "https://www.greetingsapi.com/greetings";
const hello = document.getElementById("hello");
let helloList = [];
const bottomProjectsBox = document.getElementById("bottomProjectsBox");

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

overlay.addEventListener("click", function () {
    let imgBox = document.getElementById("imgBox");
    let descriptionModal = document.getElementById("descriptionModal");
    if (imgBox != undefined && descriptionModal != undefined) {
        imgBox.remove();
        descriptionModal.remove();
    }
    modal.classList.remove("active");
    overlay.classList.remove("active");
});

const nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click", function () {
    document.querySelector("#secondPage").scrollIntoView({
        behavior: "smooth"
    })
})

function runProgram() {
    addProjects();
}

function openResume() {
    window.open("Howard_Tung_Resume.pdf");
}

async function getHello() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    helloList = data.greetings;
    changeName();
}

async function changeName() {
    let typedHello = new Typed("#hello", {
        strings: helloList,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        backDelay: 1000,
        cursorChar: '🌎',
        autoInsertCss: false,
    });

}

function addProjects() {

    for (const pj of projects) {
        const project = document.createElement("div");
        project.className = "projects";
        const img = document.createElement("img");
        const p = document.createElement("p");
        const projectName = document.createElement("h1");
        projectName.className = "projectName";
        p.className = "description";
        p.innerHTML = pj.description;
        projectName.innerHTML = pj.title;
        img.src = pj.imagePath;
        // img.width = 90;
        img.height = 100;
        img.alt = pj.title;
        project.addEventListener("click", () => openProjectDetail(pj));
        project.append(img);
        project.append(projectName);
        project.append(p);
        bottomProjectsBox.append(project);
    }

}


function openProjectDetail(project) {
    modal.classList.add("active");
    overlay.classList.add("active");

    const imgBox = document.createElement("div");
    imgBox.id = "imgBox";
    imgBox.style.backgroundImage = `url(${project.imagePath})`;

    const descriptionModal = document.createElement("div");
    descriptionModal.id = "descriptionModal";
    const introduction = document.createElement("div");
    introduction.className = "introduction";
    const introduction_h2 = document.createElement("h2");
    introduction_h2.className = "introduction-h2";
    introduction_h2.innerHTML = "Introduction: ";
    const introduction_p = document.createElement("p");
    introduction_p.className = "introduction-p";
    introduction_p.innerHTML = project.description;
    introduction.append(introduction_h2);
    introduction.append(introduction_p);
    descriptionModal.append(introduction);


    const tags = document.createElement("div");
    tags.className = "tags";
    const tags_tags = document.createElement("h2");
    tags_tags.className = "tags-tags";
    tags_tags.innerHTML = "Tools";
    const tags_ul = document.createElement("ul");
    tags_ul.className = "tags-ul";
    for (const tag of project.tags) {
        let tags_li = document.createElement("li");
        tags_li.className = "tags-li";
        tags_li.innerHTML = tag;
        tags_ul.append(tags_li);
    }

    const tags_links_h2 = document.createElement("h2");
    tags_links_h2.className = "tags-links-h2";
    tags_links_h2.innerHTML = "Links: ";
    const tags_link_a = document.createElement("a");
    tags_link_a.className = "tags-link-a";
    tags_link_a.innerHTML = project.githubLink;
    tags_link_a.href = project.githubLink;
    tags.append(tags_tags);
    tags.append(tags_ul);
    tags.append(tags_links_h2);
    tags.append(tags_link_a);
    descriptionModal.append(tags);


    modal.append(imgBox);
    modal.append(descriptionModal);
}


runProgram();
setInterval(function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    hello.style.color = "#" + randomColor;
}, 4000);