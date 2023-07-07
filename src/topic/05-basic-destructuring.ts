

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;
}


interface Details {
    author: string; 
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran', 
        year: 2015
    }
}

const song = 'New song'

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
 const { author } = details;



 const [ , , trunks]: string[] = ['Goku','Vegeta','Trunks'];

 console.error('Personagem 3:' , trunks )



// console.log('Song: ', anotherSong, 'Duracao: ', duration, 'Author: ', author )



export{}