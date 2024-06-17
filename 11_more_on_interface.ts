interface TakePhoto{
    cameraMode: string,
    burst: number,
    filter: string
}

interface Story {
    createStory(): void
}
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public burst: number,
        public filter: string
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public burst: number,
        public filter: string,
        public shorts: string
    ) { }
    createStory(): void {
        
    }
}