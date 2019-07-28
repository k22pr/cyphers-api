export interface PlayerMatchs {
   playerId: string;
   nickname: string;
   grade: number;
   clanName: string;
   ratingPoint: number;
   maxRatingPoint: number;
   tierName: string;
   records: Record[];
   matches: Matches;
}

export interface Matches {
   date: DateClass;
   gameTypeId: string;
   next: string;
   rows: Row[];
}

export interface DateClass {
   start: string;
   end: string;
}

export interface Row {
   date: string;
   matchId: string;
   playInfo: PlayInfo;
}

export interface PlayInfo {
   result: Result;
   random: boolean;
   partyUserCount: number;
   characterId: string;
   characterName: string;
   level: number;
   killCount: number;
   deathCount: number;
   assistCount: number;
   attackPoint: number;
   damagePoint: number;
   battlePoint: number;
   sightPoint: number;
}

export enum Result {
   Lose = "lose",
   Win = "win",
}

export interface Record {
   gameTypeId: string;
   winCount: number;
   loseCount: number;
   stopCount: number;
}
