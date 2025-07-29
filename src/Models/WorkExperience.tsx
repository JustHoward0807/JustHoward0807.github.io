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
        id: "co-diagnostic",
        company: "Co-Diagnostics, Inc",
        companyUrl: "https://codiagnostics.com/",
        title: "Software Engineer",
        period: "June 2024 - Present",
        description: [
            "Developed and maintained software solutions for molecular diagnostic instruments and laboratory information systems.",
            "Collaborated with cross-functional teams to implement new features and improve existing applications in the healthcare technology sector.",
            "Gained hands-on experience with software development lifecycle in a professional environment, contributing to products that impact medical diagnostics."
        ]
    },

    {
        id: "marriott-library",
        company: "J. Willard Marriott Library",
        companyUrl: "https://lib.utah.edu/",
        title: "Web Developer & User Experience Assistant",
        period: "June 2023 - May 2024",
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