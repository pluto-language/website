<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Pluto</title>

    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script src="js/hljs/highlight.pack.js" charset="utf-8"></script>
    <script src="js/pluto.js" charset="utf-8"></script>
    <script src="js/examples.js" charset="utf-8"></script>
    <script src="js/update-example.js" charset="utf-8"></script>

    <link rel="stylesheet" href="js/hljs/styles/atom-one-dark.css">
    <link rel="stylesheet" href="css/index.css">
  </head>
  <body onload="startUpdates()">
    <div class="me">
      <a href="https://zacgarby.co.uk">By Zac Garby</a>
    </div>
    <header>
      <h1>
        pluto
      </h1>
      <h2>
        <div class="links">
          <a href="https://github.com/Zac-Garby/pluto">star</a>
          <a href="https://github.com/Zac-Garby/pluto/fork">fork</a>
        </div>
      </h2>

      <table>
        <td class="features">
          <h3>Features:</h3>

          <ul>
            <li>Pattern based functions</li>
            <li>Object oriented features</li>
            <li>Most things are expressions</li>
            <li>Powerful collection system</li>
          </ul>

          <h4>In the future:</h4>

          <ul>
            <li>Module system</li>
            <li>Huge standard library</li>
            <li>Macros</li>
            <li>Maybe even bytecode compilation</li>
          </ul>
        </td>
        <td class="example">
          <pre class="hljs language-pluto"><code id="example"></code></pre>
        </td>
      </table>

      <?php require "assets/surface.svg" ?>
    </header>

    <div class="content">
      <?php
        require "lib/Parsedown.php";

        $contents = file_get_contents("https://raw.githubusercontent.com/Zac-Garby/pluto/master/README.md");

        $Parsedown = new Parsedown();
        echo $Parsedown->text($contents);
      ?>
    </div>
  </body>
  <script>
    document
      .querySelectorAll(".language-r")
      .forEach(e => {
        e.className = "language-pluto"
        hljs.highlightBlock(e)
      })
  </script>
</html>
