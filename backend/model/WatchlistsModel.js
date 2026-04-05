const { model } = require("mongoose");

const { WatchlistsSchema } = require("../schemas/WatchlistSchema");

const WatchlistModel = new model("watchlist", WatchlistsSchema);

module.exports = { WatchlistModel };