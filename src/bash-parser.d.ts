declare module "bash-parser" {


  // Options: Object
  // An optional option objects, containing one or more of the following properties:
  // insertLOC: Boolean = false - if true, includes lines and columns information in the source file.
  // resolveAlias: (name: String) => String - a callback to resolve shell alias. If specified, the parser call it whenever it need to resolve an alias. It should return the resolved code if the alias exists, otherwise null. If the option is not specified, the parser won't try to resolve any alias.
  // resolveEnv: (name: String) => String - a callback to resolve environment variables. If specified, the parser call it whenever it need to resolve an environment variable. It should return the value if the variable is defined, otherwise null. If the option is not specified, the parser won't try to resolve any environment variable.
  // resolvePath: (text: String) => String - a callback to resolve path globbing. If specified, the parser call it whenever it need to resolve a path globbing. It should return the value if the expanded variable. If the option is not specified, the parser won't try to resolve any path globbing.
  // resolveHomeUser: (username: String) => String - a callback to resolve users home directories. If specified, the parser call it whenever it need to resolve a tilde expansion. If the option is not specified, the parser won't try to resolve any tilde expansion. When the callback is called with a null value for username, the callbackshould return the current user home directory.
  // resolveParameter: (parameterAST: Object) => String - a callback to resolve parameter expansion. If specified, the parser call it whenever it need to resolve a parameter expansion. It should return the result of the expansion. If the option is not specified, the parser won't try to resolve any parameter expansion.
  // execCommand: (cmdAST: Object) => String - a callback to execute a simple_command. If specified, the parser call it whenever it need to resolve a command substitution. It receive as argument the AST of a simple_command node, and shall return the output of the command. If the option is not specified, the parser won't try to resolve any command substitution.
  // execShellScript: (scriptAST: Object) => String - a callback to execute a complete_command in a new shell process. If specified, the parser call it whenever it need to resolve a subshell statement. It receive as argument the AST of a complete_command node, and shall return the output of the command. If the option is not specified, the parser won't try to resolve any subshell statement.
  // runArithmeticExpression: (arithmeticAST: Object) => String - a callback to execute an arithmetic_expansion. If specified, the parser call it whenever it need to resolve an arithmetic substitution. It receive as argument the AST of a arithmetic_expansion node, and shall return the result of the calculation. If the option is not specified, the parser won't try to resolve any arithmetic_expansion substitution. Please note that the aritmethic expression AST is built using babylon, you cand find there it's AST specification.
  
  



  // The parser function
  // The parser function is a function that receive a string as input, and return the AST of the parsed code. The function signature is:
  // parse(input: String, options?: Object): Object

  function parse(input: string, options?: Object): any;
  export default parse;
}