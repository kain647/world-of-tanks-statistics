import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
  img {
    width: 450px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
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
`;
export const UsersList = styled.div`
  display: flex;
  width: 350px;
  box-sizing: border-box;
  flex-direction: column;
  max-height: 350px;
  overflow-y: auto;
  background-color: #eee;
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
