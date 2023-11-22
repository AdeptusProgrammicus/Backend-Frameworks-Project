import { Document, Schema, Model, model } from 'mongoose';

interface IBellow extends Document {
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const bellowSchema: Schema = new Schema({
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Bellow: Model<IBellow> = model('Bellow', bellowSchema);

export { IBellow, Bellow };