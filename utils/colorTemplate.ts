import getTemplate from './getTemplate';
import { matchVersion } from './isUtil';

const colorTemplate = (name: string, role: string, posts: number) => {
  return getTemplate(name, role, posts, matchVersion(name));
};

export default colorTemplate;
