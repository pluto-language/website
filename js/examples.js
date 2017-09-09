const examples = [
`def evaluate $number times $multiplier {
  number * multiplied
}

evaluate 5 times 10`,

`class Animal {
  init of type $species called $name {
    self.species = species
    self.name = name
  }

  def speak {
    print "{} the {} says hello!" with (
      self.name,
      self.species,
    )
  }
}`,

`def fibonacci $n {
  if (n < 2) {
    n
  } else {
    fibonacci (n - 2) + fibonacci (n - 1)
  }
}`,

`def calc $text {
  fold $text with { |result, ch| ->
    match (ch) {
      '+' => result + 1
      '-' => result - 1
      '*' => result * 2
      '/' => result / 2
      *   => result
    }
  } from 0
}`,

`a = [1, 3, 2, 2, 8, 4]
b = [3, 6, 2, 3, 10, 7]

a + b    # [1, 3, 2, 2, 8, 4, 3, 6, 2, 3, 10, 7]
a - b    # [1, 8, 4]
a & b    # [3, 2, 2]
a | b    # [1, 3, 2, 8, 4, 6, 10, 7]`,

`triple = { |x| -> x * 3 }

do $triple on 5   # 15

def factorial $n {
  fold (\\1 to (n + 1)) with {
    |result, n| -> result * n
  }
}

factorial 5       # 120`,

`my_map = [
  "x": 10,
  "y": 5,
  "z": 15,
  true: "True!",
  3: "Three",
]

ten = my_map["x"]
fifteen = my_map.z

for (key : keys of $my_map) {
  print "{}: {}" with (key, my_map[key])
}`
]
