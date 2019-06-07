import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return fetch(`http://localhost:3000/blog-post`)
        .then((res) => res.json())
        .catch(() => undefined)
    },
    afterModel(model) {
        if (model === undefined) this.transitionTo('error-page');
    }
});
