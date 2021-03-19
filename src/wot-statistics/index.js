import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle, AiFillGithub } from "react-icons/ai";
import {
  Container,
  Header,
  SearchContainer,
  UsersList,
  ListUser,
  Footer,
  Statistics,
  Stats,
  NickName,
  RegistrationDate,
  LastTime,
  Rating,
  GlobalRating,
  StatBoxLeft,
  StatsItem,
  StatsIcon,
  StatsValue,
  StatBoxRight
} from "./styled";

class Wot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      userId: "",
      users: [],
      user: null
    };
  }

  getUser = async id => {
    const api_url_userId = await fetch(
      `https://api.worldoftanks.ru/wot/account/info/?application_id=e3f27f300bd358faad37dc512d75f7aa&account_id=${id}`
    );
    const response = await api_url_userId.json();
    console.log(response.data[id]);

    this.setState({
      user: response.data[id]
    });
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
    const { nickname, users, user } = this.state;
    const timeRegistration = user
      ? new Date(user.created_at * 1000).toLocaleString()
      : "";
    const lastTimeBattle = user
      ? new Date(user.last_battle_time * 1000).toLocaleString()
      : "";
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
                this.setState({ nickname: "", users: [], user: "" });
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
                  this.setState({ users: [] });
                }}
                key={item.nickname}
              >
                {item.nickname}
              </ListUser>
            );
          })}
        </UsersList>
        {user && (
          <Statistics>
            <Stats {...user} key={user.nickname}>
              <NickName>{user.nickname}</NickName>
              <RegistrationDate>
                <span>Registration date:</span>
                {timeRegistration}
              </RegistrationDate>
              <LastTime>
                <span>Last time in battle:</span>
                {lastTimeBattle}
              </LastTime>
              <Rating>
                <StatBoxLeft>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/flag.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.wins}
                      <p>Wins</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/battle.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.battles}
                      <p>All Battles</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/hits.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.hits}
                      <p>All Hits</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/avgDamage.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.avg_damage_assisted}
                      <p>Avg Damage</p>
                    </StatsValue>
                  </StatsItem>
                </StatBoxLeft>
                <GlobalRating>
                  <img
                    src={`https://ru-wotp.wgcdn.co/static/5.82.1_d15c27/wotp_static/img/user_profile/frontend/scss/img/rating-ribbon.png`}
                  />
                  {user.global_rating}
                  <p>Global Rating</p>
                </GlobalRating>
                <StatBoxRight>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/avgXp.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.battle_avg_xp}
                      <p>Battle Avg Xp</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/maxExp.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.max_xp}
                      <p>Max Xp</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/maxFrags.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.max_frags}
                      <p>Max Frags</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/damageBlocked.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.avg_damage_blocked}
                      <p>Damage Blocked</p>
                    </StatsValue>
                  </StatsItem>
                </StatBoxRight>
              </Rating>
            </Stats>
          </Statistics>
        )}
        <Footer>
          <a href="https://github.com/kain647" target="_blank">
            <AiFillGithub />
          </a>
        </Footer>
      </Container>
    );
  }
}
export default Wot;
