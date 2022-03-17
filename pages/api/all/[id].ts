import { countPosts, getUser } from '../../../utils/crawling';
import colorTemplate from '../../../utils/colorTemplate';
import template from '../../../utils/template';

const AllBadgeController = async (req, res) => {
  const { id } = req.query;
  const user = await getUser(id);
  if (!user) {
    return res.status(204).send();
  }
  const posts = await countPosts(user);
  res.setHeader('Content-type', 'image/svg+xml');

  const badges = {
    default: template(user.github, user.role, posts),
    color: colorTemplate(user.github, user.role, posts),
  };

  res.status(200).json(badges);
};

export default AllBadgeController;
