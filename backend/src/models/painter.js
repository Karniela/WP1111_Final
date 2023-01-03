import mongoose from 'mongoose'
const Schema = mongoose.Schema
const PainterSchema = new Schema({
    name: { type: String, required: true },
    imgsrc: { type: String },
    // TODO: paintings: list with foreign key
})
const Painter = mongoose.model('user', PainterSchema)
export default Painter