// NodeJS does not run our code directly,
//  it wraps the entire code inside a function before execution.
//  This function is termed as Module Wrapper Function

// Syntax

(function(exports, require, module, __filename, __dirname){
    //module code
})

// The top-level variables declared with var, const, or let are scoped
//  to the module rather than to the global object.