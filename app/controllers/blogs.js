import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateModalData(blog_id) {
            this.transitionToRoute('blogs.blog', blog_id);
        },
        reroute() { this.transitionToRoute('blogs'); }
    }
});
