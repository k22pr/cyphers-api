export type GameItem = {
   limit?: number;
   wordType?: WordType,
   q: Query

}

export enum WordType {
   Match = "match",
   Front = "front",
   Full = "full"
}

export type Query = {
   characterId?: string,
   slotCode?: SlotType,
   rarityCode: RarityCode,
   seasonCode: number
}

export enum SlotType {
   손 = 101,
   머리 = 102,
   가슴 = 103,
   허리 = 104,
   다리 = 105,
   발 = 106,
   목 = 107,
   장신구ALL = 201,
   장신구1 = 202,
   장신구2 = 203,
   장신구3 = 204,
   장신구4 = 205,
   회복킷 = 301,
   가속킷 = 302,
   공격킷 = 303,
   방어킷 = 304,
   특수킷 = 305,
}

export enum RarityCode {
   커먼 = 101,
   언커먼 = 102,
   레어 = 103,
   유니크 = 104,
}