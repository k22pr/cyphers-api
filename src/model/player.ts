export type Player = {
   playerId: string,
   nickname: string,
   grade: number
}


export type PlayerInfo = {
   playerId: string;
   nickname: string;
   grade: number;
   clanName: null;
   ratingPoint: null;
   maxRatingPoint: null;
   tierName: null;
   records: Record[];
}

export type Record = {
   gameTypeId: string;
   winCount: number;
   loseCount: number;
   stopCount: number;
}

