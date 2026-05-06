import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

import imageOne from "../../../public/home/img_clients/our_ideas_vector.jpg";

export const ideasData = {
    image: imageOne,
};

const dataIdeasOne = {
    title: "Our Ideas",
    desc: "we will always try to be partners whounderstand all the need so four colleagues, and we will walk together to the same destination and ensurewe will always arrive at that destination.",
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