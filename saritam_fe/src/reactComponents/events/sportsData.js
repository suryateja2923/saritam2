import kabaddi from "../../assets/sport1.jpeg";
import khokho from "../../assets/sport2.jpeg";
import volleyball from "../../assets/sport3.jpeg";
import throwball from "../../assets/sport4.jpeg";
import badminton from "../../assets/sport5.jpeg";
import run100 from "../../assets/sport6.jpeg";
import longjump from "../../assets/sport8.jpeg";
import cricket from "../../assets/sport7.jpeg";


const sportsData = [
    {
        name: "Kabaddi",
        image: kabaddi,
        description:
            "A high-energy team sport that tests strength, strategy, and teamwork.",
        guidelines: {
            EventType: "Team event",
            Categories: ["Boys", "Girls"],
            Rules: "College rules apply"
        }
    },
    {
        name: "Kho-Kho",
        image: khokho,
        description:
            "A fast-paced traditional sport focusing on speed and agility.",
        guidelines: {
            EventType: "Team event",
            Categories: ["Boys", "Girls"],
            DressCode: "Proper sportswear mandatory"
        }
    },
    {
        name: "Volleyball",
        image: volleyball,
        description:
            "A team sport that emphasizes coordination, teamwork, and reflexes.",
        guidelines: {
            EventType: "Team event",
            Categories: ["Boys"],
            Rules: "Standard volleyball rules"
        }
    },
    {
        name: "Throwball",
        image: throwball,
        description:
            "A popular team sport focusing on quick throws and team coordination.",
        guidelines: {
            EventType: "Team event",
            Categories: ["Girls"],
            Rules: "Standard throwball rules"
        }
    },
    {
        name: "Badminton",
        image: badminton,
        description:
            "A racket sport testing speed, focus, and reflexes.",
        guidelines: {
            EventType: "Singles / Doubles",
            Categories: ["Boys", "Girls"],
            Format: "Knockout matches"
        }
    },
    {
        name: "100 Mts Run",
        image: run100,
        description:
            "A sprint event that tests speed and athletic performance.",
        guidelines: {
            EventType: "Individual event",
            Categories: ["Boys", "Girls"],
            Rules: "Track rules apply"
        }
    },
    {
        name: "Cricket",
        image: cricket,
        description:
            "A team sport that tests batting, bowling, fielding skills, and strategic gameplay.",
        guidelines: {
            EventType: "Team event",
            Categories: ["Boys"],
            Rules: "Standard cricket rules (limited overs as per organizers)"
        }
    },
    {
        name: "Long Jump",
        image: longjump,
        description:
            "A track and field event that tests speed, strength, and jumping technique.",
        guidelines: {
            EventType: "Individual event",
            Categories: ["Boys", "Girls"],
            Rules: "Standard long jump rules"
        }
    }

];

export default sportsData;
