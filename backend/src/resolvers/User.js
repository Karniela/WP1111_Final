export const User = {
  id: (parent) => (parent._id),
  collection: (parent) => (parent.likes),
}