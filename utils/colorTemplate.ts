import { VERSION } from './constants';
import getTemplate from './getTemplate';

const isAlumni = (name: string) => {
  return [
    'hojunee',
    'enoch-kim',
    'mobumin',
    'r4k0nb4k0n',
    'gusrb3164',
    'min6choi',
    'lsh3163',
    'handal95',
    'edit8080',
    'jeongukjae',
    'howtolivelikehuman',
    'hoyeon94',
    'maybeluna',
    'lsh110600',
    'koreanhole',
    'coloryourlife',
    'presentnine',
  ].find((v) => v === name);
};

const isFrontEnd = (name: string) => {
  return [
    'poiu694',
    'leemir',
    'pasly0920',
    'jihamsong',
    '0inhae0',
    'Hong Gil Dong'
  ].find((v) => v === name);
};

const isBackEnd = (name: string) => {
  return [
    'suin0730',
    'iju1633',
    'rxdcxdrnine',
    'kir3i',
    'hyehyeonmoon',
    'jminie-o8o',
  ].find((v) => v === name);
};

const isDataML = (name: string) => {
  return [
    'yubeenson',
    'happiesoo41',
    'ms9648',
    'keepproceeding',
    'aerojohn1223',
    'solbat',
  ].find((v) => v === name);
};

const isMobile = (name: string) => {
  return ['sheele41', 'kstew16', 'eggheadiary', 'owao'].find((v) => v === name);
};

/**
 *
 * Now, the name matches the team here,
 * but it would be nice to be organized with Github GDSC Blog.
 *
 * @param name githubId
 * @returns version that means color theme template
 */
const matchVersion = (name: string) => {
  if (isAlumni(name)) return VERSION.ALUMNI;
  if (isFrontEnd(name)) return VERSION.YELLOW;
  if (isBackEnd(name)) return VERSION.RED;
  if (isDataML(name)) return VERSION.BLUE;
  if (isMobile(name)) return VERSION.GREEN;
  return '';
};

const colorTemplate = (name: string, role: string, posts: number) => {
  return getTemplate(name, role, posts, matchVersion(name));
}

export default colorTemplate;
