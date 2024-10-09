// interfaces/Launch.ts
export interface Launch {
  _id?: string; // This may be used when saving to MongoDB
  flight_number: number;
  name: string;
  date_utc: string;
}
