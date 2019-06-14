import Route from '@ember/routing/route';
import ENV from 'mfryer-site/config/environment';

export default Route.extend({
    async model() {
        return fetch(`${ENV.APP.endpoint}/blog-post`)
        .then((res) => res.json())
        .catch(() => undefined)
    },
    afterModel(model) {
        if (model === undefined) this.transitionTo('error-page');
    }
});
