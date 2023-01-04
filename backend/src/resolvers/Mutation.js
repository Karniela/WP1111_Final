export const Mutation = {
  addArtist: async (parent, { name }, { Painter }, info) => {
    const newPainter = new Painter({name});
    return await newPainter.save();
  }
}