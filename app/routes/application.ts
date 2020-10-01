import Route from '@ember/routing/route';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  model() {
    return { name: 'Tomster' }
  }
}
