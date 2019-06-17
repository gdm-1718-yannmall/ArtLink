import mongoose from 'mongoose';
import slug from 'slug';

const { Schema } = mongoose;

const MuseumSchema = new Schema(
    {
        title: { type: String, required: true, max: 128 },
        description: { type: String, required: true, max: 512 },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        logo: { type: String, required: false },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
        artPieces: [{ type: Schema.Types.ObjectId, ref: 'Artpieces', required: false }],
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

MuseumSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

MuseumSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

MuseumSchema.virtual('id').get(function () { return this._id; });

export default mongoose.model('Museum', MuseumSchema);
