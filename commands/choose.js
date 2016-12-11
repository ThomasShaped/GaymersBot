const splitargs = require('splitargs');

module.exports = {
  usage: '[Option 1] [Option 2] [etc]',
  description: 'Let DiscoBot choose for you.',
  allowDM: true,
  process: (bot, message) => {

    const responses = [
      'I think \"%\" is the best choice',
      'I\'ve decided on \"%\"',
      'Definitely \"%\"',
      '\"%\" would be best',
      'After much deliberation, \"%\"',
      'I reckon \"%\"',
      'I choose \"%\"'
    ];

    let choices = splitargs(message.content);
    choices.shift();

    let choice = choices[Math.floor(Math.random() * choices.length)];

    let response = responses[Math.floor(Math.random() * responses.length)];

    message.reply(response.replace('%', choice));
  }
};
