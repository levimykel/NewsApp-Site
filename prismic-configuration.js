module.exports = {

  apiEndpoint: 'https://prismic-news-example.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    if (doc.type == 'article') {
      return '/' + encodeURIComponent(doc.uid);
    }
    return '/';
  },  
  
  // -- Date Converter
  // This function converts a Timestamp into a human readable date
  dateConverter: function(timestamp) {
    var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    var year = timestamp.getFullYear();
    var month = months[timestamp.getMonth()];
    var date = timestamp.getDate();
    var time = date + ' ' + month + ' ' + year ;
    return time;
  }
};
