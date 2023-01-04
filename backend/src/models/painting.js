import mongoose from 'mongoose'
const Schema = mongoose.Schema
const PaintingSchema = new Schema({
    imgURL: { type: String, required: true },
    title: { type: String, required: true},
    artist:{ type: String, required: true},
    material:{ type: String, required: true},
    dimension:{ type: String, required: true},
    price:{ type: Number, required: true},
    auction_date:{ type: String, required: false},
    auction_house:{ type: String, required: false},
    area:{ type: Number, required: true},
    priceCentimeter:{ type: Number, required: true}
})
PaintingSchema.index({title: "text", artist: "text"})
const Painting = mongoose.model('paintings', PaintingSchema)
export default Painting