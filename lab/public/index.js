!function (error) {
  console.error(error);
  if (typeof document === 'undefined') {
    return;
  } else if (!document.body) {
    document.addEventListener('DOMContentLoaded', print);
  } else {
    print();
  }
  function print() {
    var pre = document.createElement('pre');
    pre.className = 'errorify';
    pre.textContent = error.message || error;
    if (document.body.firstChild) {
      document.body.insertBefore(pre, document.body.firstChild);
    } else {
      document.body.appendChild(pre);
    }
  }
}({"message":"{\n  \"name\": \"8x\",\n  \"version\": \"0.0.1\",\n  \"description\": \"The 8x Website\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"node tools/test.js\",\n    \"open\": \"open \\\"http://localhost:8080\\\" -g\",\n    \"watch\": \"node tools/watch.js\"\n    \"publish\": tools/publish.sh\"\n  },\n  \"author\": \"Thomas Huber\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"fast-simplex-noise\": \"^3.2.0\",\n    \"immutable\": \"^3.8.1\",\n    \"react\": \"^15.3.1\",\n    \"react-dom\": \"^15.3.1\",\n    \"react-three-renderer\": \"^2.3.3\",\n    \"seedrandom\": \"^2.4.2\",\n    \"three\": \"^0.79.0\"\n  },\n  \"devDependencies\": {\n    \"babel-cli\": \"^6.24.1\",\n    \"babel-preset-es2015\": \"^6.18.0\",\n    \"babel-preset-react\": \"^6.16.0\",\n    \"babelify\": \"^7.3.0\",\n    \"browserify\": \"^13.1.1\",\n    \"errorify\": \"^0.3.1\",\n    \"watchify\": \"^3.7.0\"\n  }\n}\n : Unexpected string in JSON at position 234","name":"SyntaxError","stack":"SyntaxError: {\n  \"name\": \"8x\",\n  \"version\": \"0.0.1\",\n  \"description\": \"The 8x Website\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"node tools/test.js\",\n    \"open\": \"open \\\"http://localhost:8080\\\" -g\",\n    \"watch\": \"node tools/watch.js\"\n    \"publish\": tools/publish.sh\"\n  },\n  \"author\": \"Thomas Huber\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"fast-simplex-noise\": \"^3.2.0\",\n    \"immutable\": \"^3.8.1\",\n    \"react\": \"^15.3.1\",\n    \"react-dom\": \"^15.3.1\",\n    \"react-three-renderer\": \"^2.3.3\",\n    \"seedrandom\": \"^2.4.2\",\n    \"three\": \"^0.79.0\"\n  },\n  \"devDependencies\": {\n    \"babel-cli\": \"^6.24.1\",\n    \"babel-preset-es2015\": \"^6.18.0\",\n    \"babel-preset-react\": \"^6.16.0\",\n    \"babelify\": \"^7.3.0\",\n    \"browserify\": \"^13.1.1\",\n    \"errorify\": \"^0.3.1\",\n    \"watchify\": \"^3.7.0\"\n  }\n}\n : Unexpected string in JSON at position 234\n    at Object.parse (native)\n    at find_shims_in_package (/Users/Thomas/Code/8x-graphics/node_modules/browserify/node_modules/browser-resolve/index.js:30:25)\n    at /Users/Thomas/Code/8x-graphics/node_modules/browserify/node_modules/browser-resolve/index.js:109:17\n    at tryToString (fs.js:456:3)\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:443:12)"})