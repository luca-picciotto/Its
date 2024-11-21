class Video {
    constructor(config) {
        this.title  = config.title || 'is missing';
        this.seconds = config.seconds || 'is missing';
    }
    watch(xSeconds) {
        console.log(
            xSeconds === this.seconds           //operatore ternario
                ? `You watch all ${this.seconds} of '${this.title}'` 
                : xSeconds < this.seconds 
                    ? `You watch ${xSeconds} seconds of '${this.title}'` 
                    : `You watch '${this.title}' many times!`
        ); 
             
    }
}

class MusicVideo extends Video {
    constructor(config){
        super(config);
        this.artist = config.artist || 'is missing';
    }
    play(){
        console.log(`You played ${this.title} by ${this.artist}`); 
    }
}

let mediaArray = [      //Generate by ChatGPT :-)
    new Video({ title: 'Inception', seconds: 120 }),
    new MusicVideo({ title: 'Rolling in the Deep', artist: 'Adele', seconds: 200 }),
    new Video({ title: 'The Matrix', seconds: 150 }),
    new MusicVideo({ title: 'Shape of You', artist: 'Ed Sheeran', seconds: 240 }),
    new Video({ title: 'Avatar', seconds: 180 }),
    new MusicVideo({ title: 'Thriller', artist: 'Michael Jackson', seconds: 300 }),
    new Video({ title: 'The Dark Knight', seconds: 170 }),
    new MusicVideo({ title: 'Bad Romance', artist: 'Lady Gaga', seconds: 250 }),
    new Video({ title: 'Gladiator', seconds: 160 }),
    new MusicVideo({ title: 'Uptown Funk', artist: 'Mark Ronson', seconds: 260 })
];

mediaArray.forEach(video => {
    let randomSeconds = Math.floor(Math.random() * (video.seconds + 100));
    video.watch(randomSeconds);
    if(video instanceof MusicVideo) {
        video.play();
    }
    console.log("---------------");
    
});