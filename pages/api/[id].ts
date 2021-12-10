import cheerio from 'cheerio';
import axios from 'axios';
import YAML from 'yamljs';
import template from '../../utils/template';
import { ROLE } from '../../utils/constants';

const authorURL = 'https://github.com/GDSC-University-of-Seoul/gdsc-university-of-seoul.github.io/blob/master/_data/author.yml';

const makeUser = async (id) => {
  const user = await getUser(id);
  const role = (user.role === 'normal' ? ROLE.MEMBER : user.role === 'core' ? ROLE.CORE : user.role === 'lead' ? ROLE.LEAD : 'undefined');
  user.role = role;
  return user;
};

export default async (req, res) => {
  const { id } = req.query;
  const user = await makeUser(id);
  res.setHeader('Content-type', 'image/svg+xml');
  res.status(200).send(template(user.name, user.role));
};

const getYaml = async () => {
  try {
    return await axios.get(authorURL);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (id) => {
  const yaml = await getYaml();
  const $ = cheerio.load(yaml.data);
  const $searchItemList = $('.blob-code');
  let searchItems = '';
  $searchItemList.each((idx, node) => {
    searchItems += `${($(node).text())}\n`.toLowerCase();
  });
  const user = await {...YAML.parse(searchItems)[id]};
  console.log(id, user);
  return user;
};

/*
const getBlog = async (page) => {
  try {
    return await axios.get(`https://gdsc-university-of-seoul.github.io/${(page !== 1) ? `page${page}` : ''}`);
  } catch (error) {
    if (error.response.status === 404) {
      return false;
    } else {
      console.error(error);
    }
  }
};

const postList = async () => {
  let idx = 1;
  const postInfo = [];

  while (1) {
    const html = await getBlog(idx++);

    if (!html) break;

    const $ = cheerio.load(html.data);
    const $postList = $('.recent-posts .card');

    $postList.each((idx, node) => {
      postInfo.push({
        title: $(node).find('.card-title').text().trim(),
        author: $(node).find('.author-meta > .post-name > a').text().trim(),
        date: $(node).find('.author-meta > .post-date').text().trim()
      })
    });
  }
  return postInfo;
}
*/