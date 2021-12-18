import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    productCategory: String
});

export default mongoose.model('ProductCategory', categorySchema);