export const getSchedule = async (formatedDate) => {
  const res = await fetch(
    `https://api-web.nhle.com/v1/schedule/${formatedDate}`
  );
  const data = await res.json();
  const todayGamesData = data.gameWeek[0].games;
  console.log(todayGamesData);
  return todayGamesData;
};

export const getStandings = async (view) => {
  const res = await fetch(`https://api-web.nhle.com/v1/standings/now`);
  const data = await res.json();
  const standings = data.standings;
  console.log(standings);
  if (view === "league") {
    return standings;
  }
  if (view === "conference") {
    const westData = standings.filter((data) => {
      return data.conferenceAbbrev === "W";
    });
    const eastData = standings.filter((data) => {
      return data.conferenceAbbrev === "E";
    });
    const filteredData = {
      westConference: westData,
      eastConference: eastData,
    };
    console.log(filteredData);
    return filteredData;
  }
  if (view === "division") {
    const metropolitanData = standings.filter((data) => {
      return data.divisionAbbrev === "M";
    });
    const pacificData = standings.filter((data) => {
      return data.divisionAbbrev === "P";
    });
    const centralData = standings.filter((data) => {
      return data.divisionAbbrev === "C";
    });
    const atlanticData = standings.filter((data) => {
      return data.divisionAbbrev === "A";
    });
    const filteredData = {
      metropolitan: metropolitanData,
      pacific: pacificData,
      central: centralData,
      atlantic: atlanticData,
    };
    console.log(filteredData);
    return filteredData;
  }
};

export const getTeamsData = async () => {
  const res = await fetch(
    `https://api-web.nhle.com/v1/schedule-calendar/2023-09-23`
  );
  const data = await res.json();
  const teamsArray = data.teams;
  console.log(teamsArray);
  return teamsArray;
};

export const getRoster = async (teamAbbrev) => {
  const res = await fetch(
    `https://api-web.nhle.com/v1/roster/${teamAbbrev}/current`
  );
  const data = await res.json();
  return data;
};

export const getLeaders = async () => {
  const res = await fetch(
    "https://api-web.nhle.com/v1/skater-stats-leaders/current/?categories=points,goals"
  );
  const data = await res.json();
  return data;
}