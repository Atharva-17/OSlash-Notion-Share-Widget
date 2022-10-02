import person1 from "../src/Assets/person1.svg";
import person2 from "../src/Assets/person2.svg";
import { SampleData } from "./types";

export const sampleUsers: SampleData[] = [
    {
        name: "Wade Cooper",
        imgSrc: person1,
        type: "user",
        details: "wadecooper@oslash.com",
    },
    {
        name: "Arlene Mccoy",
        imgSrc: person2,
        type: "user",
        details: "arlenemccoy@oslash.com",
    },
 
    {
        name: "Tom Cook",
        imgSrc: "https://picsum.photos/id/1005/200/200",
        type: "user",
        details: "tomcook@oslash.com",
    },
   
    {
        name: "Product",
        type: "group",
        details: "5 workspace members",
    },
    {
        name: "Engineering",
        type: "group",
        details: "20 workspace members",
    },
];
