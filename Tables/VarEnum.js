var VarEnum = {
    VAR_SPEED: 0x0,
    VAR_EXP: 0x1,
    VAR_JOBEXP: 0x2,
    VAR_VIRTUE: 0x3,
    VAR_HONOR: 0x4,
    VAR_HP: 0x5,
    VAR_MAXHP: 0x6,
    VAR_SP: 0x7,
    VAR_MAXSP: 0x8,
    VAR_POINT: 0x9, // stat points?
    VAR_HAIRCOLOR: 0xa,
    VAR_CLEVEL: 0xb, // base level?
    VAR_SPPOINT: 0xc, // skill points?
    VAR_STR: 0xd,
    VAR_AGI: 0xe,
    VAR_VIT: 0xf,
    VAR_INT: 0x10,
    VAR_DEX: 0x11,
    VAR_LUK: 0x12,
    VAR_JOB: 0x13,
    VAR_MONEY: 0x14,
    VAR_SEX: 0x15,
    VAR_MAXEXP: 0x16,
    VAR_MAXJOBEXP: 0x17,
    VAR_WEIGHT: 0x18,
    VAR_MAXWEIGHT: 0x19,
    VAR_POISON: 0x1a,
    VAR_STONE: 0x1b,
    VAR_CURSE: 0x1c,
    VAR_FREEZING: 0x1d,
    VAR_SILENCE: 0x1e,
    VAR_CONFUSION: 0x1f,
    VAR_STANDARD_STR: 0x20, // str up
    VAR_STANDARD_AGI: 0x21,
    VAR_STANDARD_VIT: 0x22,
    VAR_STANDARD_INT: 0x23,
    VAR_STANDARD_DEX: 0x24,
    VAR_STANDARD_LUK: 0x25,
    VAR_ATTACKMT: 0x26,
    VAR_ATTACKEDMT: 0x27,
    VAR_NV_BASIC: 0x28,
    VAR_ATTPOWER: 0x29,
    VAR_REFININGPOWER: 0x2a,
    VAR_MAX_MATTPOWER: 0x2b,
    VAR_MIN_MATTPOWER: 0x2c,
    VAR_ITEMDEFPOWER: 0x2d,
    VAR_PLUSDEFPOWER: 0x2e,
    VAR_MDEFPOWER: 0x2f,
    VAR_PLUSMDEFPOWER: 0x30,
    VAR_HITSUCCESSVALUE: 0x31,
    VAR_AVOIDSUCCESSVALUE: 0x32,
    VAR_PLUSAVOIDSUCCESSVALUE: 0x33,
    VAR_CRITICALSUCCESSVALUE: 0x34,
    VAR_ASPD: 0x35,
    VAR_PLUSASPD: 0x36,
    VAR_JOBLEVEL: 0x37,
    VAR_ACCESSORY2: 0x38,
    VAR_ACCESSORY3: 0x39,
    VAR_HEADPALETTE: 0x3a,
    VAR_BODYPALETTE: 0x3b,
    VAR_PKHONOR: 0x3c,
    VAR_CURXPOS: 0x3d,
    VAR_CURYPOS: 0x3e,
    VAR_CURDIR: 0x3f,
    VAR_CHARACTERID: 0x40,
    VAR_ACCOUNTID: 0x41,
    VAR_MAPID: 0x42,
    VAR_MAPNAME: 0x43,
    VAR_ACCOUNTNAME: 0x44,
    VAR_CHARACTERNAME: 0x45,
    VAR_ITEM_COUNT: 0x46,
    VAR_ITEM_ITID: 0x47,
    VAR_ITEM_SLOT1: 0x48,
    VAR_ITEM_SLOT2: 0x49,
    VAR_ITEM_SLOT3: 0x4a,
    VAR_ITEM_SLOT4: 0x4b,
    VAR_HEAD: 0x4c,
    VAR_WEAPON: 0x4d,
    VAR_ACCESSORY: 0x4e,
    VAR_STATE: 0x4f,
    VAR_MOVEREQTIME: 0x50,
    VAR_GROUPID: 0x51,
    VAR_ATTPOWERPLUSTIME: 0x52,
    VAR_ATTPOWERPLUSPERCENT: 0x53,
    VAR_DEFPOWERPLUSTIME: 0x54,
    VAR_DEFPOWERPLUSPERCENT: 0x55,
    VAR_DAMAGENOMOTIONTIME: 0x56,
    VAR_BODYSTATE: 0x57,
    VAR_HEALTHSTATE: 0x58,
    VAR_RESETHEALTHSTATE: 0x59,
    VAR_CURRENTSTATE: 0x5a,
    VAR_RESETEFFECTIVE: 0x5b,
    VAR_GETEFFECTIVE: 0x5c,
    VAR_EFFECTSTATE: 0x5d,
    VAR_SIGHTABILITYEXPIREDTIME: 0x5e,
    VAR_SIGHTRANGE: 0x5f,
    VAR_SIGHTPLUSATTPOWER: 0x60,
    VAR_STREFFECTIVETIME: 0x61,
    VAR_AGIEFFECTIVETIME: 0x62,
    VAR_VITEFFECTIVETIME: 0x63,
    VAR_INTEFFECTIVETIME: 0x64,
    VAR_DEXEFFECTIVETIME: 0x65,
    VAR_LUKEFFECTIVETIME: 0x66,
    VAR_STRAMOUNT: 0x67,
    VAR_AGIAMOUNT: 0x68,
    VAR_VITAMOUNT: 0x69,
    VAR_INTAMOUNT: 0x6a,
    VAR_DEXAMOUNT: 0x6b,
    VAR_LUKAMOUNT: 0x6c,
    VAR_MAXHPAMOUNT: 0x6d,
    VAR_MAXSPAMOUNT: 0x6e,
    VAR_MAXHPPERCENT: 0x6f,
    VAR_MAXSPPERCENT: 0x70,
    VAR_HPACCELERATION: 0x71,
    VAR_SPACCELERATION: 0x72,
    VAR_SPEEDAMOUNT: 0x73,
    VAR_SPEEDDELTA: 0x74,
    VAR_SPEEDDELTA2: 0x75,
    VAR_PLUSATTRANGE: 0x76,
    VAR_DISCOUNTPERCENT: 0x77,
    VAR_AVOIDABLESUCCESSPERCENT: 0x78,
    VAR_STATUSDEFPOWER: 0x79,
    VAR_PLUSDEFPOWERINACOLYTE: 0x7a,
    VAR_MAGICITEMDEFPOWER: 0x7b,
    VAR_MAGICSTATUSDEFPOWER: 0x7c,
    VAR_CLASS: 0x7d,
    VAR_PLUSATTACKPOWEROFITEM: 0x7e,
    VAR_PLUSDEFPOWEROFITEM: 0x7f,
    VAR_PLUSMDEFPOWEROFITEM: 0x80,
    VAR_PLUSARROWPOWEROFITEM: 0x81,
    VAR_PLUSATTREFININGPOWEROFITEM: 0x82,
    VAR_PLUSDEFREFININGPOWEROFITEM: 0x83,
    VAR_IDENTIFYNUMBER: 0x84,
    VAR_ISDAMAGED: 0x85,
    VAR_ISIDENTIFIED: 0x86,
    VAR_REFININGLEVEL: 0x87,
    VAR_WEARSTATE: 0x88,
    VAR_ISLUCKY: 0x89,
    VAR_ATTACKPROPERTY: 0x8a,
    VAR_STORMGUSTCNT: 0x8b,
    VAR_MAGICATKPERCENT: 0x8c,
    VAR_MYMOBCOUNT: 0x8d,
    VAR_ISCARTON: 0x8e,
    VAR_GDID: 0x8f,
    VAR_NPCXSIZE: 0x90,
    VAR_NPCYSIZE: 0x91,
    VAR_RACE: 0x92,
    VAR_SCALE: 0x93,
    VAR_PROPERTY: 0x94,
    VAR_PLUSATTACKPOWEROFITEM_RHAND: 0x95,
    VAR_PLUSATTACKPOWEROFITEM_LHAND: 0x96,
    VAR_PLUSATTREFININGPOWEROFITEM_RHAND: 0x97,
    VAR_PLUSATTREFININGPOWEROFITEM_LHAND: 0x98,
    VAR_TOLERACE: 0x99,
    VAR_ARMORPROPERTY: 0x9a,
    VAR_ISMAGICIMMUNE: 0x9b,
    VAR_ISFALCON: 0x9c,
    VAR_ISRIDING: 0x9d,
    VAR_MODIFIED: 0x9e,
    VAR_FULLNESS: 0x9f,
    VAR_RELATIONSHIP: 0xa0,
    VAR_ACCESSARY: 0xa1,
    VAR_SIZETYPE: 0xa2,
    VAR_SHOES: 0xa3,
    VAR_STATUSATTACKPOWER: 0xa4,
    VAR_BASICAVOIDANCE: 0xa5,
    VAR_BASICHIT: 0xa6,
    VAR_PLUSASPDPERCENT: 0xa7,
    VAR_CPARTY: 0xa8,
    VAR_ISMARRIED: 0xa9,
    VAR_ISGUILD: 0xaa,
    VAR_ISFALCONON: 0xab,
    VAR_ISPECOON: 0xac,
    VAR_ISPARTYMASTER: 0xad,
    VAR_ISGUILDMASTER: 0xae,
    VAR_BODYSTATENORMAL: 0xaf,
    VAR_HEALTHSTATENORMAL: 0xb0,
    VAR_STUN: 0xb1,
    VAR_SLEEP: 0xb2,
    VAR_UNDEAD: 0xb3,
    VAR_BLIND: 0xb4,
    VAR_BLOODING: 0xb5,
    VAR_BSPOINT: 0xb6,
    VAR_ACPOINT: 0xb7,
    VAR_BSRANK: 0xb8,
    VAR_ACRANK: 0xb9,
    VAR_CHANGESPEED: 0xba,
    VAR_CHANGESPEEDTIME: 0xbb,
    VAR_MAGICATKPOWER: 0xbc,
    VAR_MER_KILLCOUNT: 0xbd,
    VAR_MER_FAITH: 0xbe,
    VAR_MDEFPERCENT: 0xbf,
    VAR_CRITICAL_DEF: 0xc0,
    VAR_ITEMPOWER: 0xc1,
    VAR_MAGICDAMAGEREDUCE: 0xc2,
    VAR_STATUSMAGICPOWER: 0xc3,
    VAR_PLUSMAGICPOWEROFITEM: 0xc4,
    VAR_ITEMMAGICPOWER: 0xc5,
    VAR_NAME: 0xc6,
    VAR_FSMSTATE: 0xc7,
    VAR_ATTMPOWER: 0xc8,
    VAR_CARTWEIGHT: 0xc9,
    VAR_HP_SELF: 0xca,
    VAR_SP_SELF: 0xcb,
    VAR_COSTUME_BODY: 0xcc,
    VAR_RESET_COSTUMES: 0xcd,
    VAR_ROBE: 0xce
};
