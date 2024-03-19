export class MapInfo {
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
    public _difficultyBeatmapSets: { _difficultyBeatmaps: MapDifficulty[]}[];
}

export class MapDifficulty {
    public _difficulty: DifficultyStrings;
    public _difficultyRank: DifficultyRanks;
    public _beatmapFilename: string;
    public _beatmapCharacteristicName: string;
    public _noteJumpMovementSpeed: number;
    public _noteJumpStartBeatOffset: number;
}

export enum DifficultyStrings {
    Easy = "Easy",
    Normal = "Normal",
    Hard = "Hard",
    Expert = "Expert",
    ExpertPlus = "ExpertPlus"
}

export enum DifficultyRanks {
    Easy = 1,
    Normal = 3,
    Hard = 5,
    Expert = 7,
    ExpertPlus = 9
}