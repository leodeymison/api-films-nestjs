export interface Delete {
  acknowledged: boolean;
  deletedCount: number;
}

export interface Update {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: any;
  upsertedCount: number;
  matchedCount: number;
}
