const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorial = tutorials.map( tutorial => {
    const vocabs = tutorial.split(' ');
    const capitilesed = vocabs.map( vocab => {
      const first = vocab[0].toUpperCase();
      const rest = vocab.slice(1);
      return first + rest;
    })
  })
  return newTutorial  
}

console.log(titleCased())
