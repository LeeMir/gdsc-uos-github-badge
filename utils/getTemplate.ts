import { ROLE, VERSION } from './constants';
import * as svgTemplate from './svgTemplate';

export const role2Str = (role): string => {
  if (role === ROLE.MEMBER) return 'Member';
  if (role === ROLE.CORE) return 'Core Member';
  if (role === ROLE.LEAD) return 'Lead';
  if (role === ROLE.ALUMNI) return 'Alumni';
  return '';
};

const getTemplate = (
  name: string,
  role: string,
  posts: number,
  version: string
) => {
  if (version === VERSION.BASIC)
    return svgTemplate.basicTemplate(name, role, posts);
  if (version === VERSION.YELLOW)
    return svgTemplate.yellowTemplate(name, role, posts);
  if (version === VERSION.GREEN)
    return svgTemplate.greenTemplate(name, role, posts);
  if (version === VERSION.RED)
    return svgTemplate.redTemplate(name, role, posts);
  if (version === VERSION.BLUE)
    return svgTemplate.blueTemplate(name, role, posts);
  if (version === VERSION.ALUMNI)
    return svgTemplate.alumniTemplate(name, role, posts);
  return '';
};

export default getTemplate;
