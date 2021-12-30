import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import Image from 'next/image';
import styled from '@emotion/styled';
import axios from 'axios';
import { ROLE } from '../utils/constants';
import template from '../utils/template';
import colorTemplate from '../utils/colorTemplate';
import loadingGIF from '../assets/images/loading.gif';

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
  border: 2px solid #CDCDCD;
  border-radius: 8px;
  font-size: 1.2rem;
  &:focus-visible {
    width: 20rem;
  }
  transition: all 0.3s ease-in-out;
`;

const Button = styled.button`
  width: 5rem;
  border: 2px solid #CDCDCD;
  background-color: #FFFFFF;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #EDEDED;
  }
  &:active {
    background-color: #CDCDCD;
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
  const [colorSvg, setColorSVG] = useState(colorTemplate('Hong Gil Dong', ROLE.MEMBER, 2));
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithubID(e.currentTarget.value);
  };
  const generateSVG = async () => {
    setIsLoading(true);
    const basicBadgeRes = await axios.get(`/api/${githubID}`);
    const colorBadgeRes = await axios.get(`/api/color/${githubID}`);
    if (basicBadgeRes.status === 200) {
      setSVG(basicBadgeRes.data);
      setColorSVG(colorBadgeRes.data);
      setSuccess(true);
    } else if (basicBadgeRes.status === 204) {
      alert('데이터 찾을 수 없음');
      setSuccess(false);
    }
    setIsLoading(false);
  };
  const copyToMarkdownBasicBadge = async () => {
    if (success) {
      await navigator.clipboard.writeText(`![GDSC UOS Github Badge](https://gdsc-uos-github-badge.vercel.app/api/${githubID})`);
      alert('복사 완료');
    } else {
      alert('복사할 데이터가 없음');
    }
  };
  const copyToMarkdownColorBadge = async () => {
    if (success) {
      await navigator.clipboard.writeText(`![GDSC UOS Github Badge](https://gdsc-uos-github-badge.vercel.app/api/color/${githubID})`);
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
        />
        <Button onClick={generateSVG}>생성</Button>
      </InputContainer>
      {!isLoading && (
        <SampleBadge src={svg} clickFn={copyToMarkdownBasicBadge} />
      )}
      {!isLoading && (
        <SampleBadge src={colorSvg} clickFn={copyToMarkdownColorBadge} />
      )}
      {isLoading && <Image src={loadingGIF} />}
    </Layout>
  );
};

export default Index;
