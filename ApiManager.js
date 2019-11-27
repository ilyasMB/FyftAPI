var mysql = require('mysql'); // use mysql module
var http = require('http'); // http request
var https = require('https'); // https request
var con = mysql.createConnection({ // connecte to database
  host: "localhost",    // host: "XX.X.XX.XXX",
  user: "root",        // username
  password: "",       
  database: "fyft"  // data base name 

});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database connected !");
});
var linkdinFindByName = function (user, callback) {
  var url = 'https://api.linkedin.com/v1/user/' + user;
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += codeWarsExample;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });
    resp.on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
};
var codewarsFindBySkills = function (language, callback) {
  var url = 'https://www.codewars.com/api/v1/languages/' + language;
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += codeWarsExample;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });
    resp.on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
};
var codewarsFindByName = function (user, callback) {
  var url = 'https://www.codewars.com/api/v1/users/' + user;
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += codeWarsExample;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });
    resp.on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
};
var stackoverflowFinfBySubject = function (subject, callback) {
  var url = 'https://api.stackexchange.com/2.2/comments?order=desc&min=10&sort=votes&site=askubuntu'+ subject;
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += codeWarsExample;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });
    resp.on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
};
var stackoverflowGetReputationByName = function (user, callback) {
  var url = 'https://api.stackexchange.com/2.2/user/' + user;
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += codeWarsExample;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });
    resp.on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
};
module.exports = {
  linkdinFindByName,
  codewarsFindByName,
  codewarsFindBySkills,
  stackoverflowFinfBySubject,
  stackoverflowGetReputationByName
};