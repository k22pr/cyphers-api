export interface Item {
   itemId: string,
   itemName: string,
   characterId: string,
   characterName: string,
   rarityCode: number,
   rarityName: string,
   slotCode: number,
   slotName: string,
   seasonCode: number,
   seasonName: string
}

export interface ItemDetail {
   itemId: string,
   itemName: string,
   characterId: string,
   characterName: string,
   rarityCode: number,
   rarityName: string,
   slotCode: number,
   slotName: string,
   seasonCode: number,
   seasonName: string,
   explain: string,
   explainDetail: string
}