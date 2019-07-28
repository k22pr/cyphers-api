export type Player = {
   nickname: string,
   limit: number
   wordType: WordType
}

export enum WordType {
   Match = "match",
   Full = 'full'
}