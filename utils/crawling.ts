import cheerio from 'cheerio';
import axios from 'axios';
import YAML from 'yamljs';
import { ROLE } from './constants';

interface User {
  name: string;
  display_name: string;
  email: string;
  github: string;
  role: string;
  member: boolean;
  alumni: boolean;
  blog_team?: boolean;
  web?: string;
}

const authorURL = 'https://github.com/GDSC-University-of-Seoul/gdsc-university-of-seoul.github.io/blob/master/_data/author.yml';
const blogURL = 'https://gdsc-university-of-seoul.github.io';

const getYaml = async () => {
  try {
    return await axios.get(authorURL);
  } catch (error) {
    console.log(error);
  }
};

const getUserInfo = async (id: string) => {
  const yaml = await getYaml();
  const $ = cheerio.load(yaml.data);
  const $searchItemList = $('.blob-code');
  let searchItems = '';
  $searchItemList.each((idx, node) => {
    searchItems += `${($(node).text())}\n`.toLowerCase();
  });
  const user = await {...YAML.parse(searchItems)[id]};
  return user;
};

export const getUser = async (id: string) => {
  const user = await getUserInfo(id);

  if (Object.keys(user).length === 0) {
    return undefined;
  }

  const role = (user.role === 'normal' ? ROLE.MEMBER : user.role === 'core' ? ROLE.CORE : user.role === 'lead' ? ROLE.LEAD : 'undefined');
  user.role = role;
  return user;
};

const getBlog = async (page: number) => {
  try {
    return await axios.get(`${blogURL}/${(page !== 1) ? `page${page}` : ''}`);
  } catch (error) {
    if (error.response.status === 404) {
      return false;
    } else {
      console.error(error);
    }
  }
};

export const countPosts = async (user: User) => {
  let idx = 1;
  let cnt = 0;

  while (1) {
    const html = await getBlog(idx++);
    if (!html) break;
    const $ = cheerio.load(html.data);
    const $postList = $('.recent-posts .card');
    $postList.each((idx, node) => {
      if (user.display_name === $(node).find('.author-meta > .post-name > a').text().trim()) {
        cnt++;
      }
    });
  }
  return cnt;
};
