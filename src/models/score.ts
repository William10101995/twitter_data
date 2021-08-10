import { Schema, model, Document } from "mongoose";

export interface IScore extends Document {
  candidate: string;
  scorePositive: number;
  scoreNegative: number;
  scoreNeutral: number;
}

const scoreSchema = new Schema<IScore>({
  candidate: { type: String,  trim: true },
  scorePositive: { type: Number,  trim: true, default: 0 },
  scoreNegative: { type: Number,  trim: true, default: 0 },
  scoreNeutral: { type: Number,  trim: true, default: 0 },
});

export default model<IScore>("Score", scoreSchema);