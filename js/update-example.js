let i = 0

function updateExample() {
  const example = examples[i++]
  if (i >= examples.length) {
    i = 0
  }
  const exampleDOM = document.querySelector("code#example")

  exampleDOM.innerHTML = example

  hljs.highlightBlock(exampleDOM)
}

function startUpdates() {
  i = Math.floor(Math.random() * examples.length)
  updateExample()

  window.setInterval(updateExample, 10000)
}
