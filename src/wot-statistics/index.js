import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Container,
  Header,
  SearchContainer,
  UsersList,
  ListUser
} from "./styled";

class Wot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      userId: "",
      users: []
    };
  }

  getUser = async id => {
    const api_url_userId = await fetch(
      `https://api.worldoftanks.ru/wot/account/info/?application_id=e3f27f300bd358faad37dc512d75f7aa&account_id=${id}`
    );
    const response = await api_url_userId.json();
    console.log(response.data[id]);

    this.setState({});
  };

  wotStatistics = async () => {
    const nickname = this.state.nickname;
    const response = await fetch(
      `https://api.worldoftanks.ru/wot/account/list/?application_id=e3f27f300bd358faad37dc512d75f7aa&search=${nickname}`
    ).then(response => response.json());
    //console.log(response);

    this.setState({
      users: response.data
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.wotStatistics();
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      nickname: value
    });
  };

  render() {
    const { nickname, users } = this.state;
    return (
      <Container>
        <Header>
          <img src={`public/wotLogo.svg`} alt="WorldOfTanks" />
        </Header>
        <SearchContainer>
          <input
            placeholder="Search nickname"
            value={nickname}
            onChange={this.onChange}
            onKeyPress={this.handleKeyPress}
          />
          <BsSearch className={"Search"} />
          {nickname !== "" && (
            <AiOutlineCloseCircle
              className={"Close"}
              onClick={() => {
                this.setState({ nickname: "", users: [] });
              }}
            />
          )}
        </SearchContainer>
        <UsersList>
          {users.map(item => {
            //console.log(item);
            return (
              <ListUser
                onClick={() => {
                  this.getUser(item.account_id);
                }}
                key={item.nickname}
              >
                {item.nickname}
              </ListUser>
            );
          })}
        </UsersList>
      </Container>
    );
  }
}

export default Wot;
