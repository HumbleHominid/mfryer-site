import DS from 'ember-data';
import $ from 'jquery';

export default DS.Adapter.extend({
    host: window[document.title].host,
    namespace: window[document.title].namespace,

    buildURL(modelName, id = '') {
        let URL = this.host;

        if (this.namespace) URL += `/${this.namespace}`
        
        URL += `/${modelName}`;

        if (id) URL += `/${id}`;

        return URL;
    },
    findAll(store, type) {
        return new Promise((resolve, reject) => {
            $.get(this.buildURL(type.modelName))
            .then((data) => {
                data.id = data.filename;
                resolve(data);
            })
            .catch(reject);
        });
    }
});
