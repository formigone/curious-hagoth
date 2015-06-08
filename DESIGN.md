# Design

```
{
   /** @controller */
   Engine: {
      /** @type {Array.<Team>} */
      teams: [],

      /** @type {Array.<number>} */
      scoreboard: [],

      /** @type {number} */
      currTurn: 0,

      /** @type {Array.<Screen>} */
      screens: [],

      /** @type {Screen} */
      activeScreen: {},

      onScore: function(points){},
      onGameOver: function(){},
      onSwitchScreen: function(screenName){},
   }
}

{
   /** @controller */
   /** @extends {Screen} */
   ChallengesScreen: {
      /** @type {Array.<Category>} */
      questions: [],

      onChallengeSelected: function(challenge){},
      onChallengeCorrect: function(challenge){},
   }
}

{
   Screen: {
      name: '',
      src: 'tmplSrc'
   }
}

{
   Team: {
      name: '',
      color: 'rgb',
      token: 'imgSrc'
   }
}

{
   Category: {
      name: '',

      /** @type {Array.<Challenge>} */
      challenges: [],
   }
}

{
   Challenge: {
      points: 0,
      type: '',
      content: '',
      media: '',

      /** @type {Array.<string>} */
      options: [],
      answer: 0,
   }
}

{
   /** @service */
   ChallengeService: {
      /** @type {Array.<Category>} */
      questions: [],

      load: function(url){},
      reset: function(){}      
   }
}
```
