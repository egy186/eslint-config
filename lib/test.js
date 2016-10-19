'use strict';

const checkRules = require('./check-rules');
const conf = require('eslint/conf/eslint-all');
const index = require('../index');
const react = require('../react');
const reactConf = require('eslint-plugin-react').configs.all;

const pass = checkRules(conf, index) && checkRules(reactConf, react);

// eslint-disable-next-line no-process-exit
process.exit(pass ? 0 : 1);
