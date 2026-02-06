import solodance from "../../assets/cultural1.jpeg";
import groupdance from "../../assets/cultural2.jpeg";
import singingsolo from "../../assets/cultural3.jpeg";
import singinggroup from "../../assets/cultural4.jpeg";
import theatre from "../../assets/cultural5.jpeg";
import instrumental from "../../assets/cultural6.jpeg";
import mime from "../../assets/cultural7.jpeg";
import mimicry from "../../assets/cultural8.jpeg";

const culturalData = [
    {
        name: "Solo Dance",
        image: solodance,
        description:
            "An individual dance performance showcasing talent, expression, and stage presence.",
        guidelines: {
            Participation: "Individual participation",
            TimeLimit: "Time limit applies",
            Props: "Props allowed (inform organizers)"
        }
    },
    {
        name: "Group Dance",
        image: groupdance,
        description:
            "A team dance performance focusing on coordination, creativity, and synchronization.",
        guidelines: {
            EventType: "Team event",
            TimeLimit: "Time limit applies",
            Costumes: "Decent costumes mandatory"
        }
    },
    {
        name: "Singing (Solo)",
        image: singingsolo,
        description:
            "An individual vocal performance showcasing musical talent and voice control.",
        guidelines: {
            Participation: "Individual participation",
            Karaoke: "Karaoke allowed",
            TimeLimit: "Time limit applies"
        }
    },
    {
        name: "Singing (Group)",
        image: singinggroup,
        description:
            "A group singing performance that highlights harmony and teamwork.",
        guidelines: {
            EventType: "Team event",
            Karaoke: "Karaoke allowed",
            TimeLimit: "Time limit applies"
        }
    },
    {
        name: "Theatre Show (Skit)",
        image: theatre,
        description:
            "A short dramatic performance conveying a story or social message.",
        guidelines: {
            EventType: "Team event",
            TimeLimit: "Time limit applies",
            Content: "No offensive content"
        }
    },
    {
        name: "Instrumental",
        image: instrumental,
        description:
            "A musical performance using instruments without vocals.",
        guidelines: {
            Participation: "Solo or group participation",
            Instruments: "Participants bring their own instruments",
            TimeLimit: "Time limit applies"
        }
    },
    {
        name: "Mime",
        image: mime,
        description:
            "A silent performance expressing emotions and stories through actions.",
        guidelines: {
            Participation: "Team or solo",
            Dialogues: "No dialogues allowed",
            Music: "Background music permitted"
        }
    },
    {
        name: "Mimicry",
        image: mimicry,
        description:
            "A fun event where participants imitate voices or actions creatively.",
        guidelines: {
            Participation: "Individual participation",
            TimeLimit: "Time limit applies",
            Content: "Clean and decent content only"
        }
    }
];

export default culturalData;
