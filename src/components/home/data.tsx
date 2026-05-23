import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

// import imageOne from "../../../public/home/img_clients/our_ideas_vector.jpg";
import imageOne from "../../../public/autonez_logo_font_black.png";

export const ideasData = {
    image: imageOne,
};

const dataIdeasOne = {
    title: "Our Ideas",
    desc: "We are committed to being partners who understand your every need. As a solid team, we will walk together toward the same goals and ensure the best results in every achievement.",
    image: imageOne,
    bullets: [
        {
            title: "Understand your customers",
            desc: "Then explain the first point breifly in one or two lines.",
            icon: <FaceSmileIcon />,
        },
        {
            title: "Improve acquisition",
            desc: "Here you can add the next benefit point.",
            icon: <ChartBarSquareIcon />,
        },
        {
            title: "Drive customer retention",
            desc: "This will be your last bullet point in this section.",
            icon: <CursorArrowRaysIcon />,
        },
    ],
};


export { dataIdeasOne, };