import mongoose from "mongoose";

const coachSchema = new mongoose.Schema(
  {
    schemaVersion: {
      type: Number,
      required: true,
      default: 1,
    },
    sqlId: {
      type: Number,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    // },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    profileImgKey: {
      type: String,
      required: false,
    },
    address: {
      street: {
        type: String,
        required: false,
        trim: true,
      },
      city: {
        type: String,
        required: false,
        trim: true,
      },
      state: {
        type: String,
        required: false,
        maxlength: 2,
        trim: true,
      },
      postalCode: {
        type: String,
        required: false,
        trim: true,
      },
      country: {
        type: String,
        required: false,
        trim: true,
      },
    },
    socialLinks: {
      facebook: {
        type: String,
        required: false,
        trim: true,
      },
      twitter: {
        type: String,
        required: false,
        trim: true,
      },
      instagram: {
        type: String,
        required: false,
        trim: true,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      required: false,
    },
    deletedBy: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Coach = mongoose.model("Coach", coachSchema);

export default Coach;
