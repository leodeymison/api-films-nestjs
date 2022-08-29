export interface DeleteType {
  acknowledged: boolean;
  deletedCount: number;
}

export interface UpdateType {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: any;
  upsertedCount: number;
  matchedCount: number;
}
