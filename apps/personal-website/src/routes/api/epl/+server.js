import axios from 'axios';
import * as cheerio from 'cheerio';
import { json, text } from '@sveltejs/kit';

async function getEpl(url, season) {
  let response = await axios.get(url);
  let $ = cheerio.load(response.data);

  let table = $(season);
  console.log('table', table.html());
  let tableData = [];

  table.find('tbody tr').each((i, row) => {
    const rowData = {};

    rowData.position = $(row).find('[data-stat=rank]').text().trim();
    rowData.team = $(row).find('[data-stat=team]').text().trim();
    rowData.badge_img = $(row).find('[data-stat=team] img').attr('src');
    rowData.played = $(row).find('[data-stat=games]').text().trim();
    rowData.won = $(row).find('[data-stat=wins]').text().trim();
    rowData.draw = $(row).find('[data-stat=ties]').text().trim();
    rowData.loss = $(row).find('[data-stat=losses]').text().trim();
    rowData.points = $(row).find('[data-stat=points]').text().trim();
    rowData.average_points = $(row)
      .find('[data-stat=points_avg]')
      .text()
      .trim();
    rowData.goals_for = $(row).find('[data-stat=goals_for]').text().trim();
    rowData.goals_against = $(row)
      .find('[data-stat=goals_against]')
      .text()
      .trim();
    rowData.goal_diff = $(row).find('[data-stat=goal_diff]').text().trim();
    rowData.xg_for = $(row).find('[data-stat=xg_for]').text().trim();
    rowData.xg_against = $(row).find('[data-stat=xg_against]').text().trim();
    rowData.xg_diff_per90 = $(row)
      .find('[data-stat=xg_diff_per90]')
      .text()
      .trim();
    rowData.attendance = $(row)
      .find('[data-stat=attendance_per_g]')
      .text()
      .trim();
    rowData.top_keeper = $(row).find('[data-stat=top_keeper]').text().trim();
    // rowData.top_scorer =
    console.log(rowData);

    const last5Games = [];
    $(row)
      .find('[data-stat=last_5] .poptip')
      .each((i, game) => {
        const gameData = {};

        gameData.result = $(game).find('a').text().trim();
        gameData.score = $(game)
          .attr('tip')
          .replace(/.*<br>/, '')
          .trim();
        gameData.date = $(game)
          .attr('tip')
          .replace(/<br>.*/, '')
          .replace(/<strong>|<\/strong>/g, '')
          .trim();

        last5Games.push(gameData);
      });
    rowData.last_5_games = last5Games;

    // Extract top scorers and their scores
    const topScorersData = {};
    $(row)
      .find('[data-stat=top_team_scorers] ')
      .each((i, player) => {
        const players = [];

        let topScorerTag = $(player).find('a');
        topScorersData.goals = $(player).find('span').text();

        if (topScorerTag.length > 1) {
          topScorerTag.each((i, j) => {
            players.push($(j).text());
            topScorersData.players = players;
          });
        } else {
          players.push($(player).find('a').text());
          topScorersData.players = players;
        }
      });

    rowData.topScorers = topScorersData;

    console.log(tableData);
    tableData.push(rowData);
  });

  return tableData;
}

export async function GET() {
  // const url = `https://fbref.com/en/comps/9/Premier-League-Stats`
  const url =
    'https://fbref.com/en/comps/9/2022-2023/2022-2023-Premier-League-Stats';
  // const season =`#results2023-202491_overall`
  const season = '#results2022-202391_overall';
  let data = await getEpl(url, season);
  return json(data);
}
