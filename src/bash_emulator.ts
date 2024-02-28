// parse
import parse from "bash-parser";
const { Worker } = require('worker_threads');

// Filesystem 

class Nutshell{

    constructor(){
        this._command_history = [];
        this._env_variables = new Map();
        this._current_working_dir = '/';
    }
    
    
    _command_history : string[]; 
    _env_variables: Map<string, string>;
    _current_working_dir: string;

}



export  function run(code: string, parse_options?: Object): any{
    const ast =  parse(code, parse_options);




    // const w = new Worker('./dist/esm/worker.js', {
    //     type: 'module'
    // });

    // w.postMessage({code: code, ast: ast});
}
