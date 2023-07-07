

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Higino',
}

const passenger2: Passenger = {
    name: 'Lidia', 
    children: ['Katiavala','Rodeira']
}

const printChildren = ( passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren)
}

printChildren(passenger1 )