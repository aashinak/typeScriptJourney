abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    abstract getSepia(): void
    getReelTime(): number{
        return 9
    }
}
// let aashin = new TakePhoto("", "") // Cannot create an instance of an abstract class.
class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("");
    }
}
let aashin = new Instagram("", "", 5)
aashin.getReelTime()
