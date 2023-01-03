import mongoose from 'mongoose'
const Schema = mongoose.Schema
const PaintingSchema = new Schema({
    imgsrc: { type: String, required: true },
    title: { type: String, required: true},
    painter:{ type: String, required: true},
    material:{ type: String, required: true},
    dimension:{ type: String, required: true},
    price:{ type: Number, required: true},
    auction_date:{ type: String, required: false},
    auction_house:{ type: String, required: false},
    area:{ type: Number, required: true},
    priceCentimeter:{ type: Number, required: true}

})
const Painting = mongoose.model('user', PaintingSchema)
export default Painting