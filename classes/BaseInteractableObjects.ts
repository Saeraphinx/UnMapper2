import { BeatMapObject } from "./BeatMapObject";

export class Note extends BeatMapObject {
    public x: number; //x
    public y: number; //y
}

/*
{
  "colorNotes": [
    {
      "b": 10.0, // Beat
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "c": 0, // Color
      "d": 1, // Cut Direction
      "a": 0, // Angle Offset
    },
  ],
}
*/

export class ColorNote extends Note {
    public color: string; //c
    public cutDirection: number;//d
    public angleOffset: number;//a
}

export class ArcNote extends Note {
    public color: string;
    public cutDirection: number;
    public headControlPointLengthMultiplier: number;
    public tailControlPointLengthMultiplier: number;
    public midAnchorNote: number;
    public tailBeat: number; //tb
    public tailX: number; //tx
    public tailY: number; //ty
    public tailCutDirection: number; //tc
}

export class Chain extends Note {
    public color: string; //c
    public cutDirection: number; //d
    public tailBeat: number; //tb
    public tailX: number; //tx
    public tailY: number; //ty
    public sliceCount: number; //sc
    public squishFactor: number; //s
}

export class Obstacle extends BeatMapObject {
    public duration: number;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
}