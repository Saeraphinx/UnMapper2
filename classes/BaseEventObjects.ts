import { BeatMapObject } from "./BeatMapObject";

export class BasicEvent extends BeatMapObject {
    public type: number; //et
    public value: number; //i
    public floatValue: number; //f
}

export class BPMEvent extends BeatMapObject {
    public bpm: number; // m
}

export class RotationEvent extends BeatMapObject {
    public executionTime: number; // t
    public rotationDegrees: number; // r (magnitude)
}

export class ColorBoostEvent extends BeatMapObject {
    public boost: boolean; // o
}