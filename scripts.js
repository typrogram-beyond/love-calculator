function calculateLoveMatch() {
    // We set two names here, which we will use to get the love match between these two people
    var name1 = 'John Doe';
    var name2 = 'Jane Doe';

    // We need to set a few things here, to make sure our API works. Don't change these options, or you'll break it!
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ask-your-tech-lead-for-the-API-key',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    // This is where we fetch the data from our API.
    fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=' + encodeURI(name1) + '&fname=' + encodeURI(name2), options)
      .then(response => response.json())
      .then(response => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
      })
      .catch(err => console.error(err));
}