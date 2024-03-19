export class V3Map {
    
}

export class V3MapInfo {
    public _version: string;
    public _songName: string;
    public _songSubName: string;
    public _songAuthorName: string;
    public _levelAuthorName: string;
    public _songFileName: string;
    public _coverImageFilename: string;
    public _beatsPerMinute: number;
    public _songTimeOffset: number;
    public _shuffle: number;
    public _shufflePeriod: number;
    public _previewStartTime: number;
    public _previewDuration: number;
    public _environmentName: string;
    public _allDirectionsEnvironment: boolean;
    public _difficultyBeatmapSets: { _difficultyBeatmaps: V3Map[]}[];
}

export class V3BeatMap {
    
}