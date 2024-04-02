abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

//const jb = new TakePhoto("test", "test") // cant make an object from an abstract class

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const jb = new Instagram("test", "test", 3); // can extend it

jb.getReelTime();
