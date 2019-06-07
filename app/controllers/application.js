import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    host: window[document.title].host,
    namespace: window[document.title].namespace,

    filepath: computed('host', 'namespace', function() {
        let URL = this.host;

        URL += '/resume';

        return URL;
    })
});
