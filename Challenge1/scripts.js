// scripts.js

import './config.js'

import {company, year} from './config.js'


const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message