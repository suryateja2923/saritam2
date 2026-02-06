import stylewar from "../../assets/nontech1.png";
import shortfilm from "../../assets/nontech2.png";
import painting from "../../assets/nontech3.png";
import instareels from "../../assets/nontech4.png";
import facepaint from "../../assets/nontech5.png";

const nonTechEventsData = [
    {
        name: "Style War (Fashion Show)",
        image: stylewar,
        description:
            "Participants showcase creativity and confidence through themed fashion walks and styling.",
        guidelines: {
            Participation: "Team or solo participation allowed",
            Theme: "Theme should be followed",
            Attire: "Decent attire mandatory"
        }
    },
    {
        name: "Short Film",
        image: shortfilm,
        description:
            "Participants create short films that express stories, messages, or social themes creatively.",
        guidelines: {
            Participation: "Individual or team participation",
            TimeLimit: "Time limit applies",
            Content: "Original content only"
        }
    },
    {
        name: "Painting",
        image: painting,
        description:
            "An art event where participants express ideas and emotions through painting.",
        guidelines: {
            Participation: "Individual participation",
            Materials: "Participants bring their own materials",
            Theme: "Theme will be given on the spot"
        }
    },
    {
        name: "Insta Reels",
        image: instareels,
        description:
            "Participants create engaging Instagram reels based on creativity and trends.",
        guidelines: {
            Participation: "Individual participation",
            TimeLimit: "Time limit applies",
            Hashtag: "Use event hashtag"
        }
    },
    {
        name: "Face Painting",
        image: facepaint,
        description:
            "A creative art event that showcases imagination, color harmony, and artistic expression through face painting.",
        guidelines: {
            EventType: "Individual event",
            Categories: ["Boys", "Girls"],
            Rules: "Participants must bring their own materials; only skin-safe paints allowed"
        }
    }

];

export default nonTechEventsData;
