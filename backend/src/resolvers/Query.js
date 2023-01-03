const Query = {
  // searching
  featured: async (parent, data, { Painting }, info) => {
    return await Painting.find({}).limit(4).exec();
  },

  newest: async (parent, data, { Painting }, info) => {
    return await Painting.find({}).sort({ auction_date: -1 }).limit(4).exec();
  },

  artworks: async (parent, { input }, { Painting }, info) => {
    // const keywords = input.split(/\s/);
    const results = 
        input 
          ?await Painting.find({ $text : { $search : input } }).exec()
          :await Painting.find({});
    console.log(results);
    return results;
  },

  artists: async (parent, { input }, { Painter }, info) => {
    // const keywords = input.split(/\s/);
    const results = 
        input 
          ?await Painter.find({ name: new RegExp(input, "i") }).exec()
          :await Painter.find({});
    console.log(results);
    return results;
  },

  artwork: async (parent, { id }, { Painting }, info) => {
    return Painting.findById(id).exec();
  },
  artist: async (parent, { id }, { Painter }, info) => {
    return Painter.findById(id).exec();
  }
};

export default Query