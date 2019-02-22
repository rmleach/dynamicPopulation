const movies = [
    {
      name: 'Shape of Water',
      year: 2017,
      director: 'Guillermo de Toro',
      summary: '“At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.”',
      rottenTomatoScore: '92%',
      image: 'assets/shapeWater.jpg',
    },

    {
      name: 'Moonlight',
      year: 2016,
      director: 'Barry Jenkins',
      summary: '“A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.”',
      rottenTomatoScore: '98%',
      image: 'assets/moonlight.jpg',
    },

    {
      name: 'Spotlight',
      year: 2016,
      director: 'Tom McCarthy',
      summary: '“The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.”',
      rottenTomatoScore: '97%',
      image: 'assets/spotlight.jpg',
    },

    {
      name: 'Birdman',
      year: 2014,
      director: 'Alejandro González Iñárritu',
      summary: '“A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.”',
      rottenTomatoScore: '91%',
      image: 'assets/birdman.jpg',
    },

    {
      name: 'Twelve Years a Slave',
      year: 2013,
      director: 'John Ridley',
      summary: '“In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.”',
      rottenTomatoScore: '95%',
      image: 'assets/yearsSlave.jpg',
    },

    {
      name: 'Argo',
      year: 2012,
      director: 'Ben Affleck',
      summary: '“CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.”',
      rottenTomatoScore: '96%',
      image: 'assets/argo.jpg',
    },

    {
      name: 'The Artist',
      year: 2011,
      director: 'Michel Hazanavicius',
      summary: '“An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywoods silent era.”',
      rottenTomatoScore: '95%',
      image: 'assets/artist.jpg',
    },

    {
      name: "The King’s Speech",
      year: 2010,
      director: 'Tom Hooper',
      summary: '“The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.”',
      rottenTomatoScore: '95%',
      image: 'assets/kingSpeech.jpg',
    },

    {
      name: 'Hurtlocker',
      year: 2009,
      director: 'Kathryn Bigelow',
      summary: '“During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.”',
      rottenTomatoScore: '97%',
      image: 'assets/hurtLocker.jpg',
    },

    {
      name: 'Slumdog Millionaire',
      year: 2008,
      director: 'Danny Boyle',
      summary: '“A Mumbai teen reflects on his upbringing in the slums when he is accused of cheating on the Indian Version of Who Wants to be a Millionaire?”',
      rottenTomatoScore: '91%',
      image: 'assets/slumdog.jpg',
    },

    {
      name: 'No Country for Old Men',
      year: 2007,
      director: 'Ethan Coen and Joel Coen',
      summary: '“Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.”',
      rottenTomatoScore: '93%',
      image: 'assets/oldMen.jpg',
    },
  ]

var main = document.getElementById('main')
var div = document.createElement('div')
for (let i = 0; i < movies.length; i++) {
  var card = document.createElement('div')
  card.classList.add('card')
  var cardBody = document.createElement('div')
  cardBody.classList.add('card-body')
  var img = document.createElement('img')
  img.src = movies[i].image
  var cardTitle = document.createElement('h5')
  cardTitle.innerHTML = movies[i].name
  var director = document.createElement('p')
  director.innerHTML = movies[i].director
  var img = document.createElement('img')
  img.src = movies[i].image
  var rating = document.createElement('p')
  rating.innerHTML = movies[i].rottenTomatoScore
  var summary = document.createElement('p')
  summary.innerHTML = movies[i].summary

  card.appendChild(img)
  card.appendChild(cardTitle)
  card.appendChild(director)
  card.appendChild(rating)
  card.appendChild(summary)
  main.appendChild(card)

  console.log(card)

}


