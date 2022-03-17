import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import Image from 'next/image';
import styled from '@emotion/styled';
import axios from 'axios';
import { BADGE_TYPE, ROLE } from '../utils/constants';
import template from '../utils/template';
import colorTemplate from '../utils/colorTemplate';
import loadingGIF from '../assets/images/loading.gif';
import copyToClipBoard from '../utils/copyToClipboard';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const BadgeWrap = styled.div`
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  transition: all 0.2s ease-in-out;
`;

const Input = styled.input`
  outline: none;
  width: 10rem;
  height: 3rem;
  padding: 0.3rem;
  border: 2px solid #cdcdcd;
  border-radius: 8px;
  font-size: 1.2rem;
  &:focus-visible {
    width: 20rem;
  }
  transition: all 0.3s ease-in-out;
`;

const Button = styled.button`
  width: 5rem;
  border: 2px solid #cdcdcd;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
  &:active {
    background-color: #cdcdcd;
  }
  transition: all 0.2s ease-in-out;
`;

const SampleBadge = ({ src, clickFn }) => {
  return (
    <BadgeWrap onClick={clickFn}>
      <SVG src={src} />
    </BadgeWrap>
  );
};

const Index = () => {
  const [githubID, setGithubID] = useState('');
  const [svg, setSVG] = useState(template('Hong Gil Dong', ROLE.MEMBER, 2));
  const [colorSvg, setColorSVG] = useState(
    colorTemplate('Hong Gil Dong', ROLE.MEMBER, 2)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithubID(e.currentTarget.value);
  };
  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateSVG();
    }
  };
  const generateSVG = async () => {
    setIsLoading(true);
    const res = await axios.get(`/api/all/${githubID}`);
    if (res.status === 204) {
      alert('데이터 찾을 수 없음');
      setSuccess(false);
    }
    if (res.status === 200) {
      const badgeList = await res.data;
      setSVG(badgeList.default);
      setColorSVG(badgeList.color);
      setSuccess(true);
    }
    setIsLoading(false);
  };
  const copyToMarkdownBadge = (type: string) => {
    if (success) {
      let text: string;
      switch (type) {
        case BADGE_TYPE.COLOR:
          text = `![GDSC UOS Github Badge](https://gdsc-uos-github-badge.vercel.app/api/color/${githubID})`;
          break;
        case BADGE_TYPE.DEFAULT:
          text = `![GDSC UOS Github Badge](https://gdsc-uos-github-badge.vercel.app/api/${githubID})`;
          break;
        default:
          break;
      }
      copyToClipBoard(text);
      alert('복사 완료');
    } else {
      alert('복사할 데이터가 없음');
    }
  };
  return (
    <Layout>
      <Title>GDSC UOS Github Badge Generator</Title>
      <InputContainer>
        <Input
          placeholder='Github ID 입력'
          value={githubID}
          onChange={inputHandler}
          onKeyPress={enterHandler}
        />
        <Button onClick={generateSVG}>생성</Button>
      </InputContainer>
      {!isLoading && (
        <SampleBadge
          src={svg}
          clickFn={() => copyToMarkdownBadge(BADGE_TYPE.DEFAULT)}
        />
      )}
      {!isLoading && (
        <SampleBadge
          src={colorSvg}
          clickFn={() => copyToMarkdownBadge(BADGE_TYPE.COLOR)}
        />
      )}
      {isLoading && <Image src={loadingGIF} alt='loading' />}
    </Layout>
  );
};

export default Index;
