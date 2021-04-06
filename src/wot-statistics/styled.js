import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(10px) brightness(0.4);
    background-image: url(public/bg.jpg);
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 450px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Search = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 250px;
    height: 40px;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.9);
    border: 0;
    border-bottom: 0;
    border-radius: 0;
    color: #000;
    padding: 0px 50px 0px 50px;
  }
  .Search {
    position: absolute;
    left: 10px;
    width: var(--size);
    height: var(--size);
    --size: 20px;
  }
  .Close {
    position: absolute;
    right: 10px;
    width: var(--size);
    height: var(--size);
    --size: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const UsersList = styled.div`
  display: flex;
  width: 350px;
  box-sizing: border-box;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  background-color: #eee;
  margin-bottom: 25px;
`;
export const ListUser = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 10px;
  background-color: #dadada;
  cursor: pointer;
  :hover {
    background-color: #b1b1b1;
  }
`;
export const Footer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: auto;
  user-select: none;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    color: #d1d5da;
    :hover {
      color: #6a737d;
    }
  }
`;
export const Stats = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

`;
export const NickName = styled.div`
  display: flex;
  font-size: 44px;
  line-height: 46px;
  font-weight: 700;
  color: #f9f5e1;
  max-width: 100%;
  word-wrap: break-word;
  margin-bottom: 20px;
`;
export const RegistrationDate = styled.div`
  display: flex;
  color: #eee;
  span {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;
export const LastTime = styled.div`
  display: flex;
  color: #eee;
  span {
    margin-right: 10px;
  }
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const GlobalRating = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 32px;
  color: #fff;
  padding: 0 50px;
  p {
    align-items: center;
    padding: 0;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
  }
`;
export const StatBoxLeft = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;
export const StatBoxRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;
export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 165px;
  height: 115px;
  padding: 30px;
  color: #f9f5e1;
`;
export const StatsIcon = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const StatsValue = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  p {
    text-align: center;
    padding: 0;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
export const AllStats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const General = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: normal;
    border-bottom: 1px solid #333335;
    color: #a29e87;
    padding: 0 10px;
    height: 50px;
  }
  .value {
    margin-left: auto;
  }
  .title {
    width: 280px;
  }
`;
export const AllStatsHeader = styled.h4`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: #e9e2bf;
  margin-bottom: 23px;
  padding: 0;
  margin: 0;
`;
export const ContentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  p {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .DropText {
    color: #fff;
    font-weight: 600;
  }
`;
export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f7e7e;
  font-weight: 700;
`;
