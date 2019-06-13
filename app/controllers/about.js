import Controller from '@ember/controller';
import { computed } from '@ember/object';
import ENV from 'mfryer-site/config/environment';

export default Controller.extend({
    filepath: computed(function() {
        return `${ENV.APP.endpoint}/resume`;
    })
});
