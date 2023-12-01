export const getSchedule = async (formatedDate) => {
  const res = await fetch(
    `https://api-web.nhle.com/v1/schedule/${formatedDate}`
  );
  const data = await res.json();
  const todayGamesData = data.gameWeek[0].games;
  console.log(todayGamesData);
  return todayGamesData;
};

export const getStandings = async () => {
  const res = await fetch(`https://api-web.nhle.com/v1/standings/now`);
  const data = await res.json();
  const standings = data.standings;
  console.log(standings);
  return standings;
};
