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
  StatBoxRight,
  AllStats,
  General,
  AllStatsHeader
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
                <span>Дата создания аккаунта игрока:</span>
                {timeRegistration}
              </RegistrationDate>
              <LastTime>
                <span>Время последнего боя:</span>
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
                      <p>ПОБЕДЫ</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/battle.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.battles}
                      <p>БОИ</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/hits.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.hits}
                      <p>ПОПАДАНИЯ</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/avgDamage.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.avg_damage_assisted}
                      <p>СРЕДНИЙ УРОН</p>
                    </StatsValue>
                  </StatsItem>
                </StatBoxLeft>
                <GlobalRating>
                  <img
                    src={`https://ru-wotp.wgcdn.co/static/5.82.1_d15c27/wotp_static/img/user_profile/frontend/scss/img/rating-ribbon.png`}
                  />
                  {user.global_rating}
                  <p>Личный рейтинг</p>
                </GlobalRating>
                <StatBoxRight>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/avgXp.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.battle_avg_xp}
                      <p>СРЕДНИЙ ОПЫТ ЗА БОЙ</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/maxExp.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.max_xp}
                      <p>МАКСИМАЛЬНЫЙ ОПЫТ ЗА БОЙ</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/maxFrags.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.max_frags}
                      <p>МАКСИМУМ УНИЧТОЖЕНО ЗА БОЙ</p>
                    </StatsValue>
                  </StatsItem>
                  <StatsItem>
                    <StatsIcon>
                      <img src={`public/damageBlocked.svg`} />
                    </StatsIcon>
                    <StatsValue>
                      {user.statistics.all.avg_damage_blocked}
                      <p>Pаблокированный бронёй урон</p>
                    </StatsValue>
                  </StatsItem>
                </StatBoxRight>
              </Rating>
              <AllStats>
                <General>
                  <AllStatsHeader>Общие параметры</AllStatsHeader>
                  <ul>
                    <li>
                      <span className={"title"}>Бои</span>
                      <span className={"value"}>
                        {user.statistics.all.battles}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Победы</span>
                      <span className={"value"}>
                        {user.statistics.all.wins}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Поражения</span>
                      <span className={"value"}>
                        {user.statistics.all.losses}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Выжил в боях</span>
                      <span className={"value"}>
                        {user.statistics.all.survived_battles}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество поваленных деревьев
                      </span>
                      <span className={"value"}>
                        {user.statistics.trees_cut}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Очки захвата базы</span>
                      <span className={"value"}>
                        {user.statistics.all.capture_points}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Очки защиты базы</span>
                      <span className={"value"}>
                        {user.statistics.all.dropped_capture_points}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Нанесено повреждений</span>
                      <span className={"value"}>
                        {user.statistics.all.damage_dealt}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Получено урона</span>
                      <span className={"value"}>
                        {user.statistics.all.damage_received}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество полученных прямых попаданий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.direct_hits_received}
                      </span>
                    </li>
                  </ul>
                </General>
                <General>
                  <AllStatsHeader>Средние показатели за бой</AllStatsHeader>
                  <ul>
                    <li>
                      <span className={"title"}>Количество пробитий</span>
                      <span className={"value"}>
                        {user.statistics.all.piercings}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество полученных пробитий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.piercings_received}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Произведено выстрелов</span>
                      <span className={"value"}>
                        {user.statistics.all.shots}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Обнаружено противников</span>
                      <span className={"value"}>
                        {user.statistics.all.spotted}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Урон по оглушённым вами целям
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.stun_assisted_damage}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество оглушений, причинённых экипажу противника
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.stun_number}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Выжил в боях</span>
                      <span className={"value"}>
                        {user.statistics.all.survived_battles}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Проведено боев в клане</span>
                      <span className={"value"}>
                        {user.statistics.clan.battles}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Получено урона</span>
                      <span className={"value"}>
                        {user.statistics.all.damage_received}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество полученных прямых попаданий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.direct_hits_received}
                      </span>
                    </li>
                  </ul>
                </General>
                <General>
                  <AllStatsHeader>Рекордные показатели</AllStatsHeader>
                  <ul>
                    <li>
                      <span className={"title"}>Ничьи</span>
                      <span className={"value"}>
                        {user.statistics.all.draws}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество нанесённых осколочно-фугасных попаданий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.explosion_hits}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество полученных осколочно-фугасных попаданий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.explosion_hits_received}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Уничтожено техники</span>
                      <span className={"value"}>
                        {user.statistics.all.frags}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Процент попаданий</span>
                      <span className={"value"}>
                        {user.statistics.all.hits_percents}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Ничьи</span>
                      <span className={"value"}>
                        {user.statistics.all.draws}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество нанесённых осколочно-фугасных попаданий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.explosion_hits}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>
                        Количество полученных осколочно-фугасных попаданий
                      </span>
                      <span className={"value"}>
                        {user.statistics.all.explosion_hits_received}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Уничтожено техники</span>
                      <span className={"value"}>
                        {user.statistics.all.frags}
                      </span>
                    </li>
                    <li>
                      <span className={"title"}>Процент попаданий</span>
                      <span className={"value"}>
                        {user.statistics.all.hits_percents}
                      </span>
                    </li>
                  </ul>
                </General>
              </AllStats>
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
