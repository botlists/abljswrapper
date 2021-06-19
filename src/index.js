/* eslint-disable no-restricted-globals */
const axios = require('axios');

class Botlists {
  /**
   * Botlists stats
   * @param { string } apiKey
   * @param { string } botId
   */

  constructor(apiKey, botId) {
    this.url = 'https://api.botlists.com';
    this.apiKey = apiKey;
    this.botId = botId;
    if (!this.botId) {
      console.log('/*------ BOT LIST API ERROR ------*\\');
      console.log('Missing Required Bot ID Param.');
    }
  }

  async stats() {
    try {
      const { data } = await axios.get(`${this.url}/bot/${this.botId}`, {
        headers: {
          Authorization: this.apiKey,
        },
      });
      return data;
    } catch (e) {
      console.log('/*------ BOT LIST API ERROR ------*\\');
      console.log(e);
    }
  }

  /**
   * post bots guild and shard count
   * @param { number } guildCount
   * @param { number } shardCount
   * @param { string } status
   * @return {Promise<void>}
   */

  async postStats(guildCount, shardCount, status = 'online') {
    if (!guildCount) throw new Error('missing guildCount param');
    if (isNaN(guildCount)) throw new Error('guildCount param must be a number');
    if (isNaN(shardCount)) throw new Error('guildCount param must be a number');

    const post = await axios.patch(`${this.url}/bot/${this.botId}`, {
      stats: {
        guilds: guildCount,
        shards: shardCount || 0,
        status: status,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        authorization: this.apiKey,
      },
    });

    return post.data;
  }

}

module.exports = Botlists;
