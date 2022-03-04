import { ROLE, VERSION } from './constants';
import * as svgTemplate from './svgTemplate';

export const role2Str = (role: string): string => {
  switch (role) {
    case ROLE.MEMBER:
      return 'Member';
    case ROLE.CORE:
      return 'Core Member';
    case ROLE.LEAD:
      return 'Lead';
    case ROLE.ALUMNI:
      return 'Alumni';
    default:
      return '';
  }
};

const getTemplate = (
  name: string,
  role: string,
  posts: number,
  version: string
) => {
  switch (version) {
    case VERSION.BASIC:
      return svgTemplate.basicTemplate(name, role, posts);
    case VERSION.YELLOW:
      return svgTemplate.yellowTemplate(name, role, posts);
    case VERSION.GREEN:
      return svgTemplate.greenTemplate(name, role, posts);
    case VERSION.RED:
      return svgTemplate.redTemplate(name, role, posts);
    case VERSION.BLUE:
      return svgTemplate.blueTemplate(name, role, posts);
    case VERSION.ALUMNI:
      return svgTemplate.alumniTemplate(name, role, posts);
    default:
      return '';
  }
};

export default getTemplate;
