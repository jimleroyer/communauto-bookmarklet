/*
 * Node Connect server to host the necessary Javascript files during testing.
 *
 * Copyright (c) 2013
 * Released under the Creative Commons Attribution 3.0 Unported License,
 * as defined here: http://creativecommons.org/licenses/by/3.0/
 */

var connect = require("connect");

connect.createServer(
        connect.static("../../deploy/")
).listen(8080);
