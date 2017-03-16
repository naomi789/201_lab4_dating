var express = require('express');
var router = express.Router();

/* GET home page. */
//<li>router.get('/', function(req, res) {</li>
//  res.sendFile('index.html', { root: 'public' });
//});
var pokemon = [
  {
    name: 'Aaleigh',
    avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200'
  },
  {
    name: 'Aaronica',
    avatarUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif'

  },
  {
    name: 'Benzley',
    avatarUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif'
  },
  {
    name: 'Bergetta',
    avatarUrl: 'http://rs1169.pbsrc.com/albums/r511/nthndo/tumblr_ljsx6dPMNm1qii50go1_400.gif~c200'
  },
  {
    name: 'Chanice',
    avatarUrl: 'http://media1.giphy.com/media/pTh2K2xTJ1nag/giphy.gif'
  },
  {
    name: 'Charlesa',
    avatarUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7e/3b/67/7e3b67c53469cc4302035be70a7f2d60.gif'
  },
  {
    name: 'Corwyn',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  },
  {
    name: 'Daquari',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  },
  {
    name: 'DaRhonda',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  },
  {
    name: 'Glendalee',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  }
];

var man = [
  {
    name: 'Aaric',
    avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200'
  },
  {
    name: 'Arvol',
    avatarUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif'

  },
  {
    name: 'Bryce-Zock',
    avatarUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif'
  },
  {
    name: 'Burnell',
    avatarUrl: 'http://rs1169.pbsrc.com/albums/r511/nthndo/tumblr_ljsx6dPMNm1qii50go1_400.gif~c200'
  },
  {
    name: 'Coshell',
    avatarUrl: 'http://media1.giphy.com/media/pTh2K2xTJ1nag/giphy.gif'
  },
  {
    name: 'Cougar-Flash',
    avatarUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7e/3b/67/7e3b67c53469cc4302035be70a7f2d60.gif'
  },
  {
    name: 'Davan',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  },
  {
    name: 'Demmick',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  },
  {
    name: 'Edlow',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  },
  {
    name: 'Elden',
    avatarUrl: 'http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg'
  }
];

var activity = [
  {
    type: 'Explore',
    name: 'Drive around the Alpine Loop'
  },
  {
    type: 'Explore',
    name: 'Explore bookstore/library, children\'s books downtown Provo'
  },
  {
    type: 'Explore',
    name: 'Go to a historic sight, drive a “scenic road”'
  },
  {
    type: 'Explore',
    name: 'Go to a museum - dinosaur, Bean, MOA, Museum of People and Cultures, SLC (At the museum, you can try taking turns playing “I Spy.” Who can find a painting with a dog in it, or a sculpture made out of some strange material?)'
  },
  {
    type: 'Explore',
    name: 'Take public transit to SLC/temple square (christmas lights and live nativity in Dec)'
  },
  {
    type: 'Explore',
    name: 'Go window shopping (for really ugly stuff, super expensive stuff, things you might actually want, etc) or Christmas shopping or try on ugly outfits at DI'
  },
  {
    type: 'Explore',
    name: 'Go to one of the MOA special events'
  },
  {
    type: 'Explore',
    name: 'Drive to visit a temple you usually don’t attend'
  },
  {
    type: 'Explore',
    name: 'Go to the SWKT penny golf drop - penny between stairs'
  },
  {
    type: 'Explore',
    name: 'Visit the Eyring Science Center'
  },
  {
    type: 'Explore',
    name: 'Visit the Ice castles' 
  },
  {
    type: 'Explore',
    name: 'Go to a Provo rooftop concert'
  },
  {
    type: 'Explore',
    name: 'Go to a random BYU clubs'
  },
  {
    type: 'Explore',
    name: 'Visit the BYU Planetarium (7 or 8 pm Fri night) - no reservations, 6:30 tickets $2 ea  http://planetarium.byu.edu/Scheduling/Calendar.aspx' 
  },
  {
    type: 'Explore',
    name: 'Play on a playground, Nielson\'s grove park, etc. (Take a walk, ride bikes, throw a Frisbee, rollerblade, feed the birds, fly kites, have a picnic, go geocaching)' 
  },
  {
    type: 'Explore',
    name: 'At a park: set up an obstacle course and have a tournament.'
  },
  {
    type: 'Explore',
    name: 'Walk around not-your-college-campus BYU/UVU #friendtherivals. Actually register to go on a tour of either campus.' 
  },
  {
    type: 'Creative',
    name: 'Make a stop motion video'
  },
  {
    type: 'Creative',
    name: 'Direct and film yourselves for a short movie (make it a group date)'
  },
  {
    type: 'Creative',
    name: 'Make a storybook together (like illustrate a ten page picture book)' 
  },
  {
    type: 'Creative',
    name: 'Get a bunch of magazines and make collages (cutting out funny phrases or just ordinary phrases, making them funny by juxtaposing them with interesting pictures. You could write letters to each other like this)'
  },
  {
    type: 'Creative',
    name: 'Start a band (at least for an evening :))'
  },
  {
    type: 'Creative',
    name: 'Go to DI and buy things for your date to wear for the rest of the date'
  },
  {
    type: 'Creative',
    name: 'Play the game “whose line is it anyway”'
  },
  {
    type: 'Creative',
    name: 'Experiment with light painting' 
  },
  {
    type: 'Creative',
    name: 'Organize or partcipate to a murder/character night'
  },
  {
    type: 'Creative',
    name: 'Make Graham cracker/gingerbread castles'
  },
  {
    type: 'Creative',
    name: 'Nerf war, marshmallow guns'
  },
  {
    type: 'Creative',
    name: 'Go to “color me mine”'
  },
  {
    type: 'Creative',
    name: 'Buy/make play dough and have a sculpting contest'
  },
  {
    type: 'Creative',
    name: 'Paint a pet rock'
  },
  {
    type: 'Creative',
    name: 'Make friendship bracelets'
  },
  {
    type: 'Creative',
    name: 'Teach each other a song on the guitar/piano' 
  },
  {
    type: 'Creative',
    name: 'Buy an electronic thing at DI and take it apart to learn how it works (toaster, VCR player, computer monitor). Bonus points if you make recycle art out of it!!' 
  },
  {
    type: 'Creative',
    name: 'Paper airplane competition'
  },
  {
    type: 'Organized Sports',
    name: 'Go the a BYU Club night - swing, country, salsa…'
  },
  {
    type: 'Organized Sports',
    name: 'Attend a martial arts club'
  },
  {
    type: 'Organized Sports',
    name: 'Go ice skating'
  }
];

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.sendFile('index.html', { root: 'public'}); 
  res.send(pokemon);
});
router.get('/activity', function(req, res) {
  console.log("In Activity");
  res.sendFile('index.html', { root: 'public'}); 
  res.send(activity);
});

router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

module.exports = router;
