class Projects {
    constructor(title, description, imagePath, tags, githubLink, carouselImagePath) {
        this.description = description;
        this.title = title;
        this.imagePath = imagePath;
        this.tags = tags;
        this.githubLink = githubLink;
        this.carouselImagePath = carouselImagePath;
    }

    title;
    description;
    imagePath;
    tags;
    githubLink;
    carouselImagePath;
}

const projects = [
    new Projects(
        "MovieAddict",
        "Developed an innovative user interface movie application showcasing movie theater locations and movie playtimes and storing bookmarked info in Hive, a local database within Flutter framework. <br>" +
        "Utilized Figma to construct prototype, wireframe, and create the workflow. <br>" +
        "Programed the language with Dart using JSON as the output file of Movie-Web-Scraping and Flutter framework as the primary source.",
        "images/MovieAddict-0.png",
        ["Flutter", "Dart", "Hive", "Firebase", "Self-taught", "Side Project"],
        "https://github.com/JustHoward0807/MovieAddict",
        ["images/MovieAddict-0.png","images/MovieAddict-1.png", "images/MovieAddict-2.png", "images/MovieAddict-3.png", "images/MovieAddict-4.png", "images/MovieAddict-5.png"],
        ),

    new Projects("Graduation Points(GP)",
        "A capstone project made in 2020-2021 by Information Communication(IC) department PCCU. Team B06",
        "images/gp-banner.png",
        ["Flutter", "Dart", "SQLite", "Firebase", "Capstone", "Collaboration", "Self-taught"],
        "https://github.com/JustHoward0807/GP",
        ["images/gp-banner.png", "images/gp-1.jpeg", "images/gp-2.jpeg", "images/gp-3.jpeg", "images/gp-4.jpeg", "images/gp-5.jpeg", "images/gp-6.png"],
        ),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "images/python-5.svg",
        ["Python", "JSON", "Self-taught", "Side Project"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",
        ["images/python-5.svg"],
        ),

    new Projects("Game APP (Flappy Bird)",
        "Team up project with classmate to make a game within 4 days.",
        "images/c.svg",
        ["C++", "SFML", "Collaboration"],
        "https://github.com/JustHoward0807/MSD-CS6010-Final-Project",
        ["images/c.svg"],
        ),

    new Projects("Pacman (BFS Pathfinder)",
        "Course assignment with pacman game using BFS pathfinding algorithm",
        "images/pacman pathfinding result.png",
        ["Java", "Coursework", "BFS"],
        "https://github.com/JustHoward0807/Pacman-BFS-Pathfinder",
        ["images/pacman pathfinding result.png", "images/outputQ.png", "images/outputSol.png"],
    ),


];

