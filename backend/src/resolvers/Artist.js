export const Artist = {
  id: (parent) => (parent._id),
  name: (parent) => (parent.name),
  imgURL: (parent) => (parent.imgURL),
  description: (parent) => (parent.description),
};