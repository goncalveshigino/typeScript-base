
const skills: string[] = ['Bash','Counter','Healing'];


interface Charater {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Charater = {
    name: 'Strider', 
    hp: 100, 
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';


console.table(strider);



export{}