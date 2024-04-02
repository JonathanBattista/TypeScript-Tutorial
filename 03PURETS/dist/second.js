"use strict";
class Instagram {
    constructor(camerMode, filter, burst) {
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(camerMode, filter, burst, short) {
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story was created");
    }
}
