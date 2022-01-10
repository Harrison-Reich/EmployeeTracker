const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('')