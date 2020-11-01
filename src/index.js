/* eslint-disable no-restricted-globals */
const axios = require('axios');

class Botlists {
  /**
     * Botlists stats
     * @param {string} apiKey
     */

  constructor(apiKey) {
    this.url = 'https://botlists.com/api/bot';
    this.apiKey = apiKey;
  }

  async stats() {
    const stats = await axios.get(this.url, {
      headers: {
        token: this.apiKey,
      },
    });
    return stats.data;
  }

  /**
     * post bots guild and shard count
     * @param {number} guildCount
     * @param {number} shardCount
     * @return {Promise<void>}
     */

  async postStats(guildCount, shardCount) {
    if (!guildCount) throw new Error('missing guildCount param');
    if (isNaN(guildCount)) throw new Error('guildCount param must be a number');
    if (isNaN(shardCount)) throw new Error('guildCount param must be a number');

    const post = await axios.post(this.url, {
      guild_count: guildCount,
      shard_count: shardCount || 0,
    }, {
      headers: {
        'Content-Type': 'application/json',
        token: this.apiKey,
      },
    });

    return post.data;
  }
}

module.exports = Botlists;
