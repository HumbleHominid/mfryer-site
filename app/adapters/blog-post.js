import DS from 'ember-data';
import $ from 'jquery';
import ENV from 'mfryer-site/config/environment';

export default DS.Adapter.extend({
    findRecord(store, type, id = '') {
        return new Promise((resolve, reject) => {
            $.get(`${ENV.APP.endpoint}/blog-post/${id}`)
            .then((data) => {
                data.id = id;
                resolve(data);
            })
            .catch(reject);
        });
    }
});
