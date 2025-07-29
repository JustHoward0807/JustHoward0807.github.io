interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    imagePath: string;
    tags: string[];
    githubLink: string;
    carouselImagePath: string[];
    year: Date;
    isFeatured: boolean;
}

const projects: Project[] = [
    {
        id: "pacman-bfs",
        title: "Pacman (BFS Pathfinder)",
        shortDescription: "Course assignment with pacman game using BFS pathfinding algorithm",
        description: "Course project using BFS algorithm to find the path from start to end.",
        imagePath: "images/pacman pathfinding result.png",
        tags: ["Java", "Coursework", "BFS"],
        githubLink: "https://github.com/JustHoward0807/Pacman-BFS-Pathfinder",
        carouselImagePath: ["images/pacman pathfinding result.png", "images/outputQ.png", "images/outputSol.png"],
        year: new Date(2022, 12),
        isFeatured: false
    },
    {
        id: "movieaddict",
        title: "MovieAddict",
        shortDescription: "Self-taught side project using Flutter to develop a movie tracker to see the location and movie information. Users are able to store data in the local device",
        description: "Developed an innovative user interface movie application showcasing movie theater locations and movie playtimes and storing bookmarked info in Hive, a local database within Flutter framework. <br>" +
            "Utilized Figma to construct prototype, wireframe, and create the workflow. <br>" +
            "Programed the language with Dart using JSON as the output file of Movie-Web-Scraping and Flutter framework as the primary source.",
        imagePath: "images/MovieAddict-0.png",
        tags: ["Flutter", "Dart", "Hive", "Firebase", "Self-taught", "Side Project"],
        githubLink: "https://github.com/JustHoward0807/MovieAddict",
        carouselImagePath: ["images/MovieAddict-0.png", "images/MovieAddict-1.png", "images/MovieAddict-2.png", "images/MovieAddict-3.png", "images/MovieAddict-4.png", "images/MovieAddict-5.png"],
        year: new Date(2021, 12),
        isFeatured: true
    },
    {
        id: "graduation-points",
        title: "Graduation Points(GP)",
        shortDescription: "A capstone project made in 2020-2021 by Information Communication(IC) department PCCU. Team B06",
        description: "Since our school require 5 different points category(18 points each, 90 points in total) in order to graduate. But we don't have any tools or APP that help us develop a convenient way to collect those points." +
            "\n<br>" +
            "We always have to check out the school website and download the .xlsx file to look at tons of events that provide 1 or 2 points, while the file data are really messy. " +
            "\n<br><br>" +
            "Therefore, We decided to make an APP that help our students to get points in more efficient way.",
        imagePath: "images/gp-banner.png",
        tags: ["Flutter", "Dart", "SQLite", "Firebase", "Capstone", "Collaboration", "Self-taught"],
        githubLink: "https://github.com/JustHoward0807/GP",
        carouselImagePath: ["images/gp-banner.png", "images/gp-1.jpeg", "images/gp-2.jpeg", "images/gp-3.jpeg", "images/gp-4.jpeg", "images/gp-5.jpeg", "images/gp-6.png"],
        year: new Date(2021, 5),
        isFeatured: true
    },
    {
        id: "movie-web-scraping",
        title: "Movie-Web-Scraping",
        shortDescription: "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        description: "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.\n" +
            "Website: https://movies.yahoo.com.tw/movie_intheaters.html\n" +
            "\n<br><br>" +
            "This project used in the movie app as local JSON file -> https://github.com/JustHoward0807/MovieAddict\n" +
            "\n<br><br>" +
            "Tools: Python, JSON, BeautifulSoup4\n" +
            "\n<br><br>" +
            "Check out the movie-output file to know what it's like.",
        imagePath: "images/python-5.svg",
        tags: ["Python", "JSON", "Self-taught", "Side Project"],
        githubLink: "https://github.com/JustHoward0807/Movie-Web-Scraping",
        carouselImagePath: ["images/python-5.svg"],
        year: new Date(2021, 10),
        isFeatured: false
    },
    {
        id: "flappy-bird",
        title: "Game APP (Flappy Bird)",
        shortDescription: "Team up project with classmate to make a game within 4 days.",
        description: "Team up project with classmate to make a game within 4 days.",
        imagePath: "images/c.svg",
        tags: ["C++", "SFML", "Collaboration"],
        githubLink: "https://github.com/JustHoward0807/MSD-CS6010-Final-Project",
        carouselImagePath: ["images/c.svg"],
        year: new Date(2023, 11),
        isFeatured: false
    },
    {
        id: "pccu-passports",
        title: "PCCU-Passports",
        shortDescription: "This is a web scraping project for my graduation work - GP(Graduation Points)",
        description: "So... Basically, our school require 5 different points collected in order to graduate which are '德(Dé)', '智(Zhi)', '體(Ti)', '群(Qún)', '美(Mei)'.\n" +
            "\n<br><br>" +
            "Each points required totally different activities, such as '智(Zhi)' which you need to attend events that is related to gaining knowledge like museum and '體(Ti)' need students to attend school events related to sport.\n" +
            "\n<br><br>" +
            "Find more information on our school website: https://pass.pccu.edu.tw/bin/home.php" +
            "\n<br><br>" +
            "How it work: " +
            "\n<br>" +
            "I use Python to capture the .xlsx file from the school website which I just provided and get the data I want and output as a CSV file format then upload to firebase.\n",
        imagePath: "images/pccu-passport-before.png",
        tags: ["Python", "Self-taught", "Side project", "Firebase"],
        githubLink: "https://github.com/JustHoward0807/PCCU-passports",
        carouselImagePath: ["images/pccu-passport-before.png", "images/pccu-passport-after.png", "images/pccu-passport-firebase.png"],
        year: new Date(2020, 12),
        isFeatured: false
    },
    {
        id: "ubetter-surplus",
        title: "UBetterSurplus",
        shortDescription: "This repository contains the source code for a dynamic and efficient Web Application developed using React, JavaScript, C#, Entity Framework Core, and ASP.NET Core. The application features a user interface crafted through Figma and Fluent UI Design principles.",
        description: "This repository contains the source code for a dynamic and efficient Web Application developed using React, JavaScript, C#, Entity Framework Core, and ASP.NET Core. The application features a user interface crafted through Figma and Fluent UI Design principles.<br><br>" +
            "As an international student, we often need to buy cheap stuff such as furniture, monitor or a desk. University of Utah Surplus Store is typically the first place that comes to mind for such purchases. However, the store relies on a PDF file to update customers about the current availability and timing of items. The way it displays the items is a HUGE pain; hence, I created this website to better showcase the items from that PDF file through data visualization and improved search filters.",
        imagePath: "images/Capstone-Home.png",
        tags: ["C#", "React", "MySQL", "ASP.NET Core", "Self-taught", "Capstone Project", "EF Core", "Figma", "JavaScript"],
        githubLink: "https://github.com/JustHoward0807/UBetterSurplus",
        carouselImagePath: ["images/Capstone-Home.png", "images/Capstone-About.png", "images/Capstone-History.png", "images/Capstone-Tracked.png"],
        year: new Date(new Date().getFullYear(), new Date().getMonth()),
        isFeatured: true
    }
];

export { Project, projects };