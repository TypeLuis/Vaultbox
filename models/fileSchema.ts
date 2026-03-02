import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
    {
        deviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true, index: true },
        uploadedByUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },

        filenameOriginal: { type: String, required: true },
        filenameStored: { type: String, required: true },
        mimeType: { type: String, required: true },
        sizeBytes: { type: Number, required: true },

        storageDriver: { type: String, enum: ["minio"], default: "minio", required: true },
        bucket: { type: String, required: true },
        objectKey: { type: String, required: true },
        storagePath: { type: String, required: true },

        checksum: { type: String },
        etag: { type: String },
    },
    { timestamps: true }
);

fileSchema.index({ bucket: 1, objectKey: 1 }, { unique: true });
fileSchema.index({ deviceId: 1, createdAt: -1 });

export default mongoose.model("File", fileSchema);