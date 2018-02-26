export default {
  Query: {
    user(root, args, context) {
      if (context) {
        return context.user || {};
      }
      return {};
    }
  }
};
