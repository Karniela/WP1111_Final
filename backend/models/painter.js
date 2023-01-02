import mongoose from 'mongoose'
const Schema = mongoose.Schema
const PainterSchema = new Schema({
    name: { type: String, required: true},
})
const Painter = mongoose.model('user', PainterSchema)
export default Painter