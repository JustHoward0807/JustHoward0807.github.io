"use strict";


console.log(projects);

function openResume() {
    window.open("Howard_Tung_Resume.pdf");
}

let apiUrl = "https://www.greetingsapi.com/greetings";
let hello = document.getElementById("hello");
let helloList = [];

async function getHello() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    helloList = data.greetings;
}

async function changeName() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let random = Math.floor(Math.random() * (helloList.length - 1));
    hello.innerHTML = await helloList[random];
    hello.style.color = "#" + randomColor;
}

setInterval(async function () {
    await changeName();
}, 4000);

let bottomProjectsBox = document.getElementById("bottomProjectsBox");

function addProjects() {

    for (const pj of projects) {
        let project = document.createElement("div");
        project.className = "projects";
        let img = document.createElement("img");
        let p = document.createElement("p");
        let projectName = document.createElement("h1");
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

addProjects();

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

function openProjectDetail(project) {
    modal.classList.add("active");
    overlay.classList.add("active");

    let imgBox = document.createElement("div");
    imgBox.id = "imgBox";
    imgBox.style.backgroundImage = `url(${project.imagePath})`;

    let descriptionModal = document.createElement("div");
    descriptionModal.id = "descriptionModal";
    let introduction = document.createElement("div");
    introduction.className = "introduction";
    let introduction_h2 = document.createElement("h2");
    introduction_h2.className = "introduction-h2";
    introduction_h2.innerHTML = "Introduction: ";
    let introduction_p = document.createElement("p");
    introduction_p.className = "introduction-p";
    introduction_p.innerHTML = project.description;
    introduction.append(introduction_h2);
    introduction.append(introduction_p);
    descriptionModal.append(introduction);


    let tags = document.createElement("div");
    tags.className = "tags";
    let tags_tags = document.createElement("h2");
    tags_tags.className = "tags-tags";
    tags_tags.innerHTML = "Tools";
    let tags_ul = document.createElement("ul");
    tags_ul.className = "tags-ul";
    for (const tag of project.tags) {
        let tags_li = document.createElement("li");
        tags_li.className = "tags-li";
        tags_li.innerHTML = tag;
        tags_ul.append(tags_li);
    }

    let tags_links_h2 = document.createElement("h2");
    tags_links_h2.className = "tags-links-h2";
    tags_links_h2.innerHTML = "Links: ";
    let tags_link_a = document.createElement("a");
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