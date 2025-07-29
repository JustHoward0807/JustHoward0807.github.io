interface WorkExperience {
    id: string;
    company: string;
    companyUrl: string;
    title: string;
    period: string;
    description: string[];
}

const workExperiences: WorkExperience[] = [
    {
        id: "marriott-library",
        company: "J. Willard Marriott Library",
        companyUrl: "https://lib.utah.edu/",
        title: "Web Developer & User Experience Assistant",
        period: "June 2023 - Present",
        description: [
            "Proficiently resolve website-related issues reported by library employees using Jira project management software. This includes adding elements and editing pages, utilizing WordPress and Omni CMS.",
            "Implement custom PHP functions to enhance website functionality, resulting in improved user interactions and efficiency.",
            "Conducted thorough quality checks on all library website pages, ensuring they met design standards and were free from style issues, typos, and other errors."
        ]
    },
    {
        id: "codingape-school",
        company: "CodingAPE School",
        companyUrl: "https://codingapeschool.com/",
        title: "Lecturer",
        period: "July 2020 - June 2021",
        description: [
            "Utilized visual programming language to teach students about programming.",
            "Taught students to use the AI automatic translating function of mBlock 5; taught students to enter color recognition program to Codey Rocky, a coding robot."
        ]
    }
];

export { WorkExperience, workExperiences }; 