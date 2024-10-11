import mongoose, { Schema, Document } from "mongoose";

// Launch interface
interface IModel extends Document {
  flightNumber: number;
  missionName: string;
  launchDate: Date;
}

// Create the schema for the Launch model
const LaunchSchema = new Schema<IModel>(
  {
    flightNumber: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => {
          return value > 0; // Custom validation: flight_number must be positive
        },
        message: "Flight number must be positive.",
      },
    },
    missionName: { type: String, required: true },
    launchDate: { type: Date, required: true },
  },
  {
    collection: "launchesCollection", // Use existing collection name or create it if it doesn't exist
  }
);

// Create the Launch model
const Launch =
  mongoose.models.Launch || mongoose.model<IModel>("Launch", LaunchSchema);

export default Launch;
