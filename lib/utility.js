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
};
