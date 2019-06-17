import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const ArtPieceSchema = new Schema(
    {
        title: { type: String, required: true, max: 128 },
        synopsis: { type: String, required: true, max: 1024 },
        image: { type: String, required: false },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        author: { type: String, required: true },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

ArtPieceSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

ArtPieceSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

ArtPieceSchema.virtual('id').get(function () { return this._id; });
ArtPieceSchema.virtual('category', {
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true,
});

ArtPieceSchema.plugin(mongoosePaginate);
export default mongoose.model('ArtPiece', ArtPieceSchema);
