# Unhandled Asynchronous Error in Node.js Express.js Application

This repository demonstrates a common error in Node.js applications: unhandled exceptions in asynchronous callbacks.  The `bug.js` file showcases an Express.js server where an error thrown within a `setTimeout` callback is not handled, causing the application to crash.

The `bugSolution.js` file provides a corrected version with proper error handling using `try...catch` blocks or `process.on('uncaughtException')`.