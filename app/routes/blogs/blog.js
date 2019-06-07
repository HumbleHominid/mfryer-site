import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        return this.store.findRecord('blog-post', params.blog_id)
        .then((data) => data)
        .catch(() => undefined);
    },
    afterModel(model) {
        if (model === undefined) this.transitionTo('error-page');
    }
});
