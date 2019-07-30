export type Player = {
   limit?: number
   wordType?: WordType
}

export enum WordType {
   Match = "match",
   Full = 'full'
}