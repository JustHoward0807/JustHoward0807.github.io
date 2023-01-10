class Projects {
    constructor(title, description, imagePath, tags, githubLink) {
        this.description = description;
        this.title = title;
        this.imagePath = imagePath;
        this.tags = tags;
        this.githubLink = githubLink;
        // this.bannerPath = bannerPath;
    }

    title;
    description;
    imagePath;
    tags;
    githubLink;
    // bannerPath;
}

const projects = [
    new Projects(
        "MovieAddict",
        "Developed an innovative user interface movie application showcasing movie theater locations and movie playtimes and storing bookmarked info in Hive, a local database within Flutter framework. <br>" +
        "Utilized Figma to construct prototype, wireframe, and create the workflow. <br>" +
        "Programed the language with Dart using JSON as the output file of Movie-Web-Scraping and Flutter framework as the primary source.",
        "/images/flutter-logo.svg",
        ["Flutter", "Dart", "Hive", "Firebase"],
        "https://github.com/JustHoward0807/MovieAddict",),

    new Projects("Graduation Points(GP)",
        "A capstone project made in 2020-2021 by Information Communication(IC) department PCCU. Team B06",
        "/images/gp-banner.png",
        ["Flutter", "Dart", "SQLite", "Firebase"],
        "https://github.com/JustHoward0807/GP",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

    new Projects("Movie-Web-Scraping",
        "Catching data such as movie title, information, actors, movie theater location and playtime from the yahoo movie website.",
        "/images/python-5.svg",
        ["Python", "JSON"],
        "https://github.com/JustHoward0807/Movie-Web-Scraping",),

];

