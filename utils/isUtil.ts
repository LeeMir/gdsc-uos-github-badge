import { VERSION } from './constants';

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
    'keepproceeding',
    'kir3i',
    'owao',
    'aerojohn1223'
  ].find((v) => v === name.toLowerCase());
};

const isFrontEnd = (name: string) => {
  return [
    'poiu694',
    'leemir',
    'pasly0920',
    'jihamsong',
    '0inhae0',
    'hyehyeonmoon',
    'ssuhyunkim',
    'tnghd5761',
    'hong gil dong',
  ].find((v) => v === name.toLowerCase());
};

const isBackEnd = (name: string) => {
  return [
    'suin0730',
    'iju1633',
    'rxdcxdrnine',
    'yubeenson',
    'qf9ar8nv',
    'dghg'
  ].find((v) => v === name.toLowerCase());
};

const isDataML = (name: string) => {
  return [
    'hjm507',
    'happiesoo41',
    'ms9648',
    'solbat',
    'custardcream98',
  ].find((v) => v === name.toLowerCase());
};

const isMobile = (name: string) => {
  return ['sheele41', 'kstew16', 'eggheadiary', 'jminie-o8o'].find(
    (v) => v === name.toLowerCase()
  );
};

/**
 *
 * Now, the name matches the team here,
 * but it would be nice to be organized with Github GDSC Blog.
 *
 * @param name githubId
 * @returns version that means color theme template
 */
export const matchVersion = (name: string) => {
  if (isAlumni(name)) return VERSION.ALUMNI;
  if (isFrontEnd(name)) return VERSION.YELLOW;
  if (isBackEnd(name)) return VERSION.RED;
  if (isDataML(name)) return VERSION.BLUE;
  if (isMobile(name)) return VERSION.GREEN;
  return '';
};
