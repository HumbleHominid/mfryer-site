import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return fetch(`http://localhost:3000/blog-post`)
        .then((res) => {
            return res.json();
        })
        .catch(console.error)
    }
});
