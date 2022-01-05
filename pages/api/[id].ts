import template from '../../utils/template';
import { countPosts, getUser } from '../../utils/crawling';

const defaultBadgeController = async (req, res) => {
  const { id } = req.query;
  const user = await getUser(id);
  if (!user) {
    return res.status(204).send();
  }
  const posts = await countPosts(user);
  res.setHeader('Content-type', 'image/svg+xml');
  res.status(200).send(template(user.name, user.role, posts));
};

export default defaultBadgeController;
