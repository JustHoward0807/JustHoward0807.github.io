class Projects {
    constructor(title, shortDescription, description, imagePath, tags, githubLink, carouselImagePath) {
        this.description = description;
        this.title = title;
        this.imagePath = imagePath;
        this.tags = tags;
        this.githubLink = githubLink;
        this.carouselImagePath = carouselImagePath;
        this.shortDescription = shortDescription;
    }

    title;
    description;
    imagePath;
    tags;
    githubLink;
    carouselImagePath;
    shortDescription;
}

const projects = [
    new Projects("Pacman (BFS Pathfinder)",
        "Course assignment with pacman game using BFS pathfinding algorithm",
        "Course project using BFS algorithm to find the path from start to end.",
        "images/pacman pathfinding result.png",
        ["Java", "Coursework", "BFS"],
        "https://github.com/JustHoward0807/Pacman-BFS-Pathfinder",
        ["images/pacman pathfinding result.png", "images/outputQ.png", "images/outputSol.png"],
    ),

    new Projects(
        "MovieAddict",
        "Self-taught side project using Flutter to develop a movie tracker to see the location and movie information. Users are able to store data in the local device",
        "Developed an innovative user interface movie application showcasing movie theater locations and movie playtimes and storing bookmarked info in Hive, a local database within Flutter framework. <br>" +
        "Utilized Figma to construct prototype, wireframe, and create the workflow. <br>" +
        "Programed the language with Dart using JSON as the output file of Movie-Web-Scraping and Flutter framework as the primary source.",
        "images/MovieAddict-0.png",
        ["Flutter", "Dart", "Hive", "Firebase", "Self-taught", "Side Project"],
        "https://github.com/JustHoward0807/MovieAddict",
        ["images/MovieAddict-0.png", "images/MovieAddict-1.png", "images/MovieAddict-2.png", "images/MovieAddict-3.png", "images/MovieAddict-4.png", "images/MovieAddict-5.png"],
    ),

    new Projects("Graduation Points(GP)",
        "A capstone project made in 2020-2021 by Information Communication(IC) department PCCU. Team B06",
        "Since our school require 5 different points category(18 points each, 90 points in total) in order to graduate. But we don't have any tools or APP that help us develop a convenient way to collect those points." +
        "\n<br>" +
        "We always have to check out the school website and download the .xlsx file to look at tons of events that provide 1 or 2 points, while the file data are really messy. " +
        "\n<br><br>" +
        "Therefore, We decided to make an APP that help our students to get points in more efficient way.",
        "images/gp-banner.png",
        ["Flutter", "Dart", "SQLite", "Firebase", "Capstone", "Collaboration", "Self-taught"],
        "https://github.com/JustHoward0807/GP",
        ["images/gp-banner.png", "images/gp-1.jpeg", "images/gp-2.jpeg", "images/gp-3.jpeg", "images/gp-4.jpeg", "images/gp-5.jpeg", "images/gp-6.png"],
    ),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.\n" +
        "Website: https://movies.yahoo.com.tw/movie_intheaters.html\n" +
        "\n<br><br>" +
        "This project used in the movie app as local JSON file -> https://github.com/JustHoward0807/MovieAddict\n" +
        "\n<br><br>" +
        "Tools: Python, JSON, BeautifulSoup4\n" +
        "\n<br><br>" +
        "Check out the movie-output file to know what it's like.",
        "images/python-5.svg",
        ["Python", "JSON", "Self-taught", "Side Project"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",
        ["images/python-5.svg"],
    ),

    new Projects("Game APP (Flappy Bird)",
        "Team up project with classmate to make a game within 4 days.",
        "Team up project with classmate to make a game within 4 days.",
        "images/c.svg",
        ["C++", "SFML", "Collaboration"],
        "https://github.com/JustHoward0807/MSD-CS6010-Final-Project",
        ["images/c.svg"],
    ),

    new Projects("PCCU-Passports",
        "This is a web scraping project for my graduation work - GP(Graduation Points)",
        "So... Basically, our school require 5 different points collected in order to graduate which are '德(Dé)', '智(Zhi)', '體(Ti)', '群(Qún)', '美(Mei)'.\n" +
        "\n<br><br>" +
        "Each points required totally different activities, such as '智(Zhi)' which you need to attend events that is related to gaining knowledge like museum and '體(Ti)' need students to attend school events related to sport.\n" +
        "\n<br><br>" +
        "Find more information on our school website: https://pass.pccu.edu.tw/bin/home.php" +
        "\n<br><br>" +
        "How it work: " +
        "\n<br>" +
        "I use Python to capture the .xlsx file from the school website which I just provided and get the data I want and output as a CSV file format then upload to firebase.\n",
        "images/pccu-passport-before.png",
        ["Python", "Self-taught", "Side project", "Firebase"],
        "https://github.com/JustHoward0807/PCCU-passports",
        ["images/pccu-passport-before.png", "images/pccu-passport-after.png", "images/pccu-passport-firebase.png"],
    ),


];

