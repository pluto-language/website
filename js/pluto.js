const pluto = {
  keywords: {
    keyword: "def return if else elif while for next break",
    literal: "true false yes no null"
  },
  contains: [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.NUMBER_MODE,
    hljs.HASH_COMMENT_MODE,
    {
      className: "identifier",
      begin: hljs.UNDERSCORE_IDENT_RE
    },
    {
      className: "param",
      begin: "\\$\\w+"
    },
    {
      className: "punctuation",
      begin: "->|\\+|-|\\*\\*|\\*|\\/\\/|\\/|\\(|\\)|<=|>=|<|>|\\{|\\}" +
             "|\\[|\\]|==|!=|\\|\\||&&|\\||&|=|:=|\\,|:|%|\\?"
    },
    {
      className: "semicolon",
      begin: ";"
    },
    {
      className: "backslash",
      begin: "\\\\"
    }
  ]
}

hljs.registerLanguage("pluto", () => pluto)
