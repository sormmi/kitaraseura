module.exports = {
  linkResolver(doc) {
    if (doc.type === 'homepage') {
      return `/`;
    }
    if (doc.type === 'historypage') {
      return `/historia/${doc.uid}`;
    }
    if (doc.type === 'eventpage') {
      return '/tapahtumat'
    }

    if (doc.uid === 'info') return '/info'
    if (doc.uid === 'linkit') return '/linkit'

    return '/';
  },
};
