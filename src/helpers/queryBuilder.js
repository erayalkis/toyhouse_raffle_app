const API_URL = "https://toyhouse-api.onrender.com";

export const makeQueryFromOptions = (opts) => {
  let url = API_URL + `/raffle/${opts.character_id}`;
  let queryStr = "";

  if (opts.must_comment) {
    queryStr += `&must_comment=true&comment_ticket_count=${opts.comment_points}`;
  }

  if (opts.must_subscribe) {
    queryStr += `&must_subscribe=true&subscribe_ticket_count=${opts.subscribe_points}`;
  }

  queryStr += `&fav_ticket_count=${opts.favorite_points}`;

  return url + queryStr;
};
