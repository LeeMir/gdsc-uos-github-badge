import { memberIcon, coreIcon, leadIcon } from './icons';
import { ROLE } from './constants';

const role2Str = (role): string => {
  if (role === ROLE.MEMBER)
    return 'Member';
  if (role === ROLE.CORE)
    return 'Core Member';
  if (role === ROLE.LEAD)
    return 'Lead';
  return '';
}

export default (name, role) => `
<svg width="450" height="150" viewBox="0 0 450 150" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_8_24)">
<rect width="450" height="150" rx="10" fill="white"/>
<rect x="0.5" y="0.5" width="449" height="149" rx="9.5" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="25.5" x2="25.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="50.5" x2="50.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="75.5" x2="75.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="100.5" x2="100.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="125.5" x2="125.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="150.5" x2="150.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="175.5" x2="175.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="200.5" x2="200.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="225.5" x2="225.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="250.5" x2="250.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="275.5" x2="275.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="300.5" x2="300.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="325.5" x2="325.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="350.5" x2="350.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="375.5" x2="375.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="400.5" x2="400.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line x1="425.5" x2="425.5" y2="150" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line y1="24.5" x2="1000" y2="24.5" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line y1="49.5" x2="1000" y2="49.5" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line y1="74.5" x2="1000" y2="74.5" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line y1="99.5" x2="1000" y2="99.5" stroke="#8EC9FB" stroke-opacity="0.5"/>
<line y1="124.5" x2="1000" y2="124.5" stroke="#8EC9FB" stroke-opacity="0.5"/>
<rect x="26" y="25" width="399" height="99" fill="white"/>
<rect x="50" y="54" width="90" height="43" fill="url(#pattern0)"/>
${(role === ROLE.MEMBER) ? memberIcon : (role === ROLE.CORE) ? coreIcon : (role === ROLE.LEAD) ? leadIcon : ''}
</g>
<text x="150" y="60" fill="#000000" font-size="14" font-weight="900">${"in GDSC UOS"}</text>
<text x="150" y="80" fill="#000000" font-size="14" font-weight="500">${`Name: ${name}`}</text>
<text x="150" y="100" fill="#000000" font-size="14" font-weight="500">${`Role: ${role2Str(role)}`}</text>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_8_24" transform="translate(0 -0.00651163) scale(0.001 0.00209302)"/>
</pattern>
<clipPath id="clip0_8_24">
<rect width="450" height="150" fill="white"/>
</clipPath>
<image id="image0_8_24" width="1000" height="484" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;
