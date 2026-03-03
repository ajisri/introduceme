export interface StoryFloorStructure {
    id: number;
    image: string;
    duration: number;
    gap: number;
}

export const storyFloors: StoryFloorStructure[] = [
    {
        id: 1,
        image: "/story/1_awakening.png",
        duration: 4.2,
        gap: 2.8,
    },
    {
        id: 2,
        image: "/story/2_aksa.png",
        duration: 7.5,
        gap: 3.5,
    },
    {
        id: 3,
        image: "/story/3_time.png",
        duration: 6.0,
        gap: 3.5,
    },
    {
        id: 4,
        image: "/story/4_stuck.png",
        duration: 7.0,
        gap: 4.2,
    },
    {
        id: 5,
        image: "/story/5_test.svg",
        duration: 4.8,
        gap: 2.8,
    },
    {
        id: 6,
        image: "/story/6_realize.svg",
        duration: 6.0,
        gap: 3.5,
    },
    {
        id: 7,
        image: "/story/7_reflection.png",
        duration: 7.2,
        gap: 3.8,
    },
    {
        id: 8,
        image: "/story/8_journey.png",
        duration: 6.2,
        gap: 3.2,
    },
    {
        id: 9,
        image: "/story/8_journey.png",
        duration: 7.5,
        gap: 4.0,
    },
];
