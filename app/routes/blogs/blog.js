import Route from '@ember/routing/route';
import marked from 'marked';
import $ from 'jquery';
import { htmlSafe } from '@ember/string';

export default Route.extend({
    model(params) {
        return new Promise((resolve, reject) => {
            $.get(`/blog-posts/${params.blog_id}.md`)
            .then((data) => {
                resolve({
                    content: htmlSafe(marked(data))
                });
            })
            .catch(reject);
        });
    }
});
