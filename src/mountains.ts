export interface Mountain {
    name: string;
    height: number;
}

export const arrayOfMountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029,
    },
    {
        name: 'Denali',
        height: 20310,
    }
]


export function findNameOfTallestMountain(arrayOfMountains: Mountain[]) : string {
    let tallestMountain: Mountain = arrayOfMountains[0];
    arrayOfMountains.forEach((mountain) => {
        if (tallestMountain.height < mountain.height) {
            tallestMountain = mountain;
        }
    })
    console.log(tallestMountain.name);
    return tallestMountain.name;
}