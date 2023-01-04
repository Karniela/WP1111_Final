export const Artwork = {
  id: (parent) => (parent._id),
  name: (parent) => (parent.title),
  picture: (parent) => (parent.imgsrc),
  artist: (parent) => (parent.painter), 
  date: (parent) => (parent.auction_date), 
  price: (parent) => (parent.price),
  material: (parent) => (parent.material),
  size: (parent) => (parent.dimension),
  auction_house: (parent) => (parent.auction_house),
  area: (parent) => (parent.area),
  priceCentimeter: (parent) => (parent.priceCentimeter)
};