import buddy from "@/assets/pet-buddy.jpg";
import luna from "@/assets/pet-luna.jpg";
import max from "@/assets/pet-max.jpg";
import mango from "@/assets/pet-mango.jpg";
import coco from "@/assets/pet-coco.jpg";
import oreo from "@/assets/pet-oreo.jpg";

export type Pet = {
  id: string;
  name: string;
  type: "Dog" | "Cat";
  breed: string;
  age: string;
  ageGroup: "Puppy" | "Young" | "Adult" | "Senior";
  gender: "Male" | "Female";
  status: "Available" | "Pending" | "Adopted";
  image: string;
  gallery: string[];
  description: string;
  health: string[];
};

export const pets: Pet[] = [
  {
    id: "buddy",
    name: "Buddy",
    type: "Dog",
    breed: "Beagle Mix",
    age: "1 year",
    ageGroup: "Young",
    gender: "Male",
    status: "Available",
    image: buddy,
    gallery: [buddy, max, coco],
    description:
      "Buddy is an energetic, sweet-natured pup who loves morning runs and belly rubs. He gets along great with kids and other dogs.",
    health: ["Vaccinated", "Dewormed", "Neutered"],
  },
  {
    id: "luna",
    name: "Luna",
    type: "Cat",
    breed: "Domestic Long Hair",
    age: "4 months",
    ageGroup: "Puppy",
    gender: "Female",
    status: "Available",
    image: luna,
    gallery: [luna, mango, oreo],
    description: "Tiny, curious, and full of purrs. Luna will melt your heart in seconds.",
    health: ["Vaccinated", "Dewormed"],
  },
  {
    id: "max",
    name: "Max",
    type: "Dog",
    breed: "Labrador",
    age: "3 years",
    ageGroup: "Adult",
    gender: "Male",
    status: "Available",
    image: max,
    gallery: [max, buddy, coco],
    description: "Calm, loyal, and gentle giant. Max is house-trained and ready for a quiet home.",
    health: ["Vaccinated", "Dewormed", "Neutered", "Heartworm tested"],
  },
  {
    id: "mango",
    name: "Mango",
    type: "Cat",
    breed: "Tabby",
    age: "2 years",
    ageGroup: "Adult",
    gender: "Male",
    status: "Pending",
    image: mango,
    gallery: [mango, luna, oreo],
    description: "Playful tabby who loves sunny windowsills and chasing feather toys.",
    health: ["Vaccinated", "Neutered"],
  },
  {
    id: "coco",
    name: "Coco",
    type: "Dog",
    breed: "Poodle",
    age: "6 months",
    ageGroup: "Puppy",
    gender: "Female",
    status: "Available",
    image: coco,
    gallery: [coco, buddy, max],
    description: "A fluffy little cloud with endless cuddles to give. Hypoallergenic coat.",
    health: ["Vaccinated", "Dewormed"],
  },
  {
    id: "oreo",
    name: "Oreo",
    type: "Cat",
    breed: "Tuxedo",
    age: "5 years",
    ageGroup: "Adult",
    gender: "Female",
    status: "Available",
    image: oreo,
    gallery: [oreo, luna, mango],
    description: "Wise, calm, and observant. Oreo would thrive in a peaceful home as your shadow.",
    health: ["Vaccinated", "Spayed"],
  },
];

export const getPet = (id: string) => pets.find((p) => p.id === id);
