import DS from 'ember-data';
import $ from 'jquery';

export default DS.Adapter.extend({
    host: window[document.title].host,
    namespace: window[document.title].namespace,

    buildURL(modelName, id) {
        let URL = this.host;

        if (this.namespace) {
            URL += `/${this.namespace}`
        }

        URL += `/${modelName}/${id}`;

        return URL;
    },
    findRecord(store, type, id) {
        return new Promise((resolve, reject) => {
            $.get(this.buildURL(type.modelName, id))
            .then((data) => {
                data.id = id;
                resolve(data);
            })
            .catch(reject);
        })
    }
});
