const express = require('express');
const figlet = require('figlet');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const text = req.query.text || 'Hello World!';
  const color = req.query.color || '#FF5733'; // Default color is a shade of red

  figlet(text, (err, data) => {
    if (err) {
      res.send('Error occurred: ' + err.message);
      return;
    }
    // Wrap the ASCII art in a <pre> tag and apply the color style
    const styledData = `<pre style="color: ${color}; font-family: monospace;">${data}</pre>`;
    res.send(styledData);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});