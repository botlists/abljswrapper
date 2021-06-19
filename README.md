# Astro Bot List API Wrapper v2

#### Currently, you can post and get your bot stats.

```js
const Botlists = require('abl.js');

const abl = new Botlists('api-key', 'bot id');

/* get your bot stats */

abl
    .stats()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

/* post your bot stats */

abl
    .postStats(20, 0, 'online')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


/*
    First param is the servers
    second param is the shards
*/

```
##### Using async/await

```js
    const Botlists = require('abl.js');
    
    const abl = new Botlists('api key', 'bot id');
    (async () => {
      try {
        const botStats = await abl.stats();
        console.log(botStats);
      } catch (e) {
        console.log(e);
      }
    
      try {
        const postStats = await abl.postStats(20, 0, 'online');
        console.log(postStats, 'here');
      } catch (e) {
        console.log(e);
      }
    })();
   
```
