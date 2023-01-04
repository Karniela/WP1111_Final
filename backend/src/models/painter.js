import mongoose from 'mongoose'
const Schema = mongoose.Schema
const PainterSchema = new Schema({
    name: { type: String, required: true },
    imgURL: { type: String },
    description: { type: String },
})
const Painter = mongoose.model('Painter', PainterSchema)
export default Painter