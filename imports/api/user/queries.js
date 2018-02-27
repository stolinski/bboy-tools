export default {
  Query: {
    user(root, args, context = {}) {
      return context.user || {};
    }
  }
};
