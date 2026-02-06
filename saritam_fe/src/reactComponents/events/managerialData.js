import youngmanager from "../../assets/manEvent1.png";
import businessquiz from "../../assets/manEvent2.png";
import businessplan from "../../assets/manEvent3.png";
import marketmakers from "../../assets/manEvent4.png";

const managerialData = [
    {
        name: "Young Manager",
        image: youngmanager,
        description:
            "An event that tests leadership, decision-making, and management skills through multiple rounds.",
        guidelines: {
            Participation: "Individual participation",
            Rounds: "Multiple rounds",
            TimeLimit: "Time limits apply"
        }
    },
    {
        name: "Business Quiz",
        image: businessquiz,
        description:
            "A quiz event based on business knowledge, management concepts, and current affairs.",
        guidelines: {
            TeamSize: "Team of 2 members",
            Rounds: "Multiple rounds",
            Restrictions: "No mobile phones"
        }
    },
    {
        name: "Business Plan",
        image: businessplan,
        description:
            "Participants present innovative business ideas with clear planning and strategy.",
        guidelines: {
            Participation: "Individual or team participation",
            Presentation: "PPT presentation required",
            TimeLimit: "Time limits apply"
        }
    },
    {
        name: "Market Makers",
        image: marketmakers,
        description:
            "A fun event that tests marketing skills, creativity, and selling strategies.",
        guidelines: {
            EventType: "Team event",
            Rounds: "Task-based rounds",
            Decision: "Judges’ decision is final"
        }
    }
];

export default managerialData;
