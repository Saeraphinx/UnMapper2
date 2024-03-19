export class V3BeatMap {
    version: string;
    colorNotes: ColorNote[];
    bombNotees: Note[];
    obstacles: Obstacle[];
    sliders: ArcNote[];
    burstSliders: Chain[];
    basicBeatmapEvents: BasicEvent[];
    bpmEvents: BPMEvent[];
    rotationEvents: SpawnRotationEvent[];
    colorBoostBeatmapEvents: ColorBoostEvent[];
    waypoints: any[];
    basicEventTypesWithKeywords: any[];
    lightColorEventBoxGroups: any[];
    lightRotationEventBoxGroups: any[];
    useNormalEventsAsCompatibleEvents: boolean;
}

export class BeatMapObject {
    private b: number;
    public get beat(): number { return this.b; }
    public set beat(value: number) { this.b = value; }
}

export class Note extends BeatMapObject {
    public x: number; //x
    public y: number; //y
}

export class ColorNote extends Note {
    private c: string;
    public get color (): string { return this.c; }
    public set color (value: string) { this.c = value; }
    private d: number;
    public get cutDirection (): number { return this.d; }
    public set cutDirection (value: number) { this.d = value; }
    private a: number;
    public get angleOffset (): number { return this.a; }
    public set angleOffset (value: number) { this.a = value; }
}

export class ArcNote extends Note {
    private c: string;
    public get color (): string { return this.c; }
    public set color (value: string) { this.c = value; }
    private d: number;
    public get cutDirection (): number { return this.d; }
    public set cutDirection (value: number) { this.d = value; }
    private mu: number;
    public get headControlPointLengthMultiplier (): number { return this.mu; }
    public set headControlPointLengthMultiplier (value: number) { this.mu = value; }
    private tmu: number;
    public get tailControlPointLengthMultiplier (): number { return this.tmu; }
    public set tailControlPointLengthMultiplier (value: number) { this.tmu = value; }
    private m: number;
    public get midAnchorMode (): number { return this.m; }
    public set midAnchorMode (value: number) { this.m = value; }
    private tb: number; //tb
    public get tailBeat (): number { return this.tb; }
    public set tailBeat (value: number) { this.tb = value; }
    private tx: number; //tx
    public get tailX (): number { return this.tx; }
    public set tailX (value: number) { this.tx = value; }
    private ty: number; //ty
    public get tailY (): number { return this.ty; }
    public set tailY (value: number) { this.ty = value; }
    private tc: number; //tc
    public get tailCutDirection (): number { return this.tc; }
    public set tailCutDirection (value: number) { this.tc = value; }
}

export class Chain extends Note {
    private c: string;
    public get color (): string { return this.c; }
    public set color (value: string) { this.c = value; }
    private d: number;
    public get cutDirection (): number { return this.d; }
    public set cutDirection (value: number) { this.d = value; }
    private tb: number; //tb
    public get tailBeat (): number { return this.tb; }
    public set tailBeat (value: number) { this.tb = value; }
    private tx: number; //tx
    public get tailX (): number { return this.tx; }
    public set tailX (value: number) { this.tx = value; }
    private ty: number; //ty
    public get tailY (): number { return this.ty; }
    public set tailY (value: number) { this.ty = value; }
    private sc: number; //sc
    public get sliceCount (): number { return this.sc; }
    public set sliceCount (value: number) { this.sc = value; }
    private s: number; //s
    public get squishFactor (): number { return this.s; }
    public set squishFactor (value: number) { this.s = value; }
}

export class Obstacle extends BeatMapObject {
    public d: number;
    public get duration (): number { return this.d; }
    public set duration (value: number) { this.d = value; }
    public x: number;
    public y: number;
    public w: number;
    public get width (): number { return this.w; }
    public set width (value: number) { this.w = value; }
    public h: number;
    public get height (): number { return this.h; }
    public set height (value: number) { this.h = value; }

}

export class BasicEvent extends BeatMapObject {
    public et: number; //et
    public get type (): number { return this.et; }
    public set type (value: number) { this.et = value; }
    public i: number; //i
    public get value (): number { return this.i; }
    public set value (value: number) { this.i = value; }
    public f: number; //f
    public get floatValue (): number { return this.f; }
    public set floatValue (value: number) { this.f = value; }
}

export class BPMEvent extends BeatMapObject {
    public m: number; // m
    public get bpm (): number { return this.m; }
    public set bpm (value: number) { this.m = value; }
}

export class SpawnRotationEvent extends BeatMapObject {
    public t: number; // t
    public get executionTime (): number { return this.t; }
    public set executionTime (value: number) { this.t = value; }
    public r: number; // r (magnitude)
    public get rotationDegrees (): number { return this.r; }
    public set rotationDegrees (value: number) { this.r = value; }

}

export class ColorBoostEvent extends BeatMapObject {
    public o: boolean; // o
    public get boost (): boolean { return this.o; }
    public set boost (value: boolean) { this.o = value; }
}