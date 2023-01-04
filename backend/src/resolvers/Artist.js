export const Artist = {
  id: (parent) => (parent._id),
  name: (parent) => (parent.name),
  picture: (parent) => (parent.imgURL),
  description: (parent) => (parent.description),
};