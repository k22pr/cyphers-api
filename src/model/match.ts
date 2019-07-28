export interface Match {
   date: string;
   gameTypeId: string;
   teams: Team[];
   players: Player[];
}

export interface Player {
   playerId: string;
   nickname: string;
   playInfo: PlayInfo;
   position: Position;
   items: Item[];
}

export interface Item {
   itemId: string;
   itemName: string;
   slotCode: string;
   slotName: string;
   rarityCode: string;
   rarityName: RarityName;
   equipSlotCode: string;
   equipSlotName: string;
}

export enum RarityName {
   레어 = "레어",
   언커먼 = "언커먼",
   유니크 = "유니크",
}

export interface PlayInfo {
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

export interface Position {
   name: Name;
   explain: string;
   attribute: Attribute[];
}

export interface Attribute {
   level: number;
   id: string;
   name: string;
}

export enum Name {
   근거리딜러 = "근거리딜러",
   원거리딜러 = "원거리딜러",
   탱커 = "탱커",
}

export interface Team {
   result: string;
   players: string[];
}
