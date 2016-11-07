var http = require("http");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML(data) {
  console.log(data);
}

function readHTML(site, callback) {
http.get(site, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", callback)

  response.on("end", function() {                // On Data Completed
    console.log("Response stream complete.");
  });

});
};

readHTML(requestOptions, getAndPrintHTML);
