# Astro Bot List API Wrapper v2

#### Currently, you can post and get your bot stats.

```js
const Botlists = require('abl.js');

const abl = new Botlists('1234');

/* get your bot stats */

abl.stats().then((r) => console.log(r.message)).catch((r) => console.log(r));

/* post your bot stats */

abl.postStats(10, 2).then((r) => console.log(r)).catch((r) => console.log(r));


/*
    First param is the servers
    second param is the shards
*/

```
##### Using async/await

```js
    const Botlists = require('abl.js');
    
    const abl = new Botlists('api key');
    (async () => {
      try {
        const botStats = await abl.stats();
        console.log(botStats);
      } catch (e) {
        console.log(e);
      }
    
      try {
        const postStats = await abl.postStats(10, 2);
        console.log(postStats, 'here');
      } catch (e) {
        console.log(e);
      }
    })();
   
```
