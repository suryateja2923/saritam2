import paper from "../../assets/techimg2.jpeg";
import quiz from "../../assets/techimg4.jpeg";
import project from "../../assets/techimg3.jpeg";
import ttt from "../../assets/techimg5.jpeg";
import codeitcrack from "../../assets/techimg1.jpeg";

const techEventsData = [
    {
        name: "Paper Presentation",
        image: paper,
        description:
            "Students present innovative technical ideas or research topics using a PowerPoint presentation before judges.",
        guidelines: {
            TeamSize: "1–2 members",
            PaperFormat: "IEEE format paper",
            Presentation: "PPT presentation required"
        }
    },
    {
        name: "Tech Quiz",
        image: quiz,
        description:
            "A quiz competition focused on engineering concepts and latest technologies.",
        guidelines: {
            TeamSize: "Team of 2 members",
            Rounds: "Multiple rounds",
            Instructions: "No mobile phones",
        }
    },
    {
        name: "Project Expo",
        image: project,
        description:
            "Students showcase working or demo projects that provide technical solutions to real-world problems.",
        guidelines: {
            TeamSize: "1–4 members",
            ProjectType: ["Hardware", "Software"],
            Preference: "Working model preferred"
        }
    },
    {
        name: "Technical Think & Talk",
        image: ttt,
        description:
            "An event where participants speak on technical topics to test thinking and communication skills.",
        guidelines: {
            TeamSize: "Individual participation",
            Instructions: "Topic given on spot,Time limit applies"
        }
    },
    {
        name: "Code It Crack",
        image: codeitcrack,
        description:
            "A coding challenge that tests logical thinking and programming skills.",
        guidelines: {
            TeamSize: "Individual or team participation",
            Instructions: "Any programming language allowed, Time-bound coding rounds"
        }
    }
];

export default techEventsData;
