import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import Image from 'next/image';
import styled from '@emotion/styled';
import axios from 'axios';
import { ROLE } from '../utils/constants';
import template from '../utils/template';
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

const SampleImg = ({ src }) => {
  return <SVG src={src} />;
};

const Index = () => {
  const [githubID, setGithubID] = useState('');
  const [svg, setSVG] = useState(template('', ROLE.MEMBER, 0));
  const [isLoading, setIsLoading] = useState(false);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGithubID(e.currentTarget.value);
  };
  const generateSVG = async () => {
    setIsLoading(true);
    const res = await axios.get(`/api/${githubID}`);
    setSVG(res.data);
    setIsLoading(false);
  };
  return (
    <Layout>
      <Title>GDSC UOS Github Badge Generator</Title>
      <InputContainer>
        <Input placeholder='Github ID 입력' value={githubID} onChange={inputHandler} />
        <Button onClick={generateSVG}>생성</Button>
      </InputContainer>
      { !isLoading && <SampleImg src={svg} /> }
      { isLoading && <Image src={loadingGIF} /> }
    </Layout>
  );
};

export default Index;
