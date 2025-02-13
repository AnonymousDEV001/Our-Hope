import mongoose from "mongoose";
const { Schema } = mongoose;
const donorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    city: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const recipientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    city: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    exchange: {
      type: Boolean,
      default: false,
    },
    needs: {
      type: String,
    },
    provides: [
      {
        type: String,
      },
    ],
    documents: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Donor =
  mongoose.models.donor || mongoose.model("donor", donorSchema);
export const Recipient =
  mongoose.models.recipient || mongoose.model("recipient", recipientSchema);
