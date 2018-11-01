import { helper } from '@ember/component/helper';
import marked from 'marked';
import { htmlSafe } from '@ember/string';

export function mdToHtml([ arg ]) {
  return htmlSafe(marked(arg));
}

export default helper(mdToHtml);
