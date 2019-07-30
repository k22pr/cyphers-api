export type Matches = {
   gameTypeId?: GameTypeId,
   startDate?: Date,
   endDate?: Date,
   limit?: number,
   next?: string
}

export enum GameTypeId {
   Rating = "rating",
   Normal = "normal"
}