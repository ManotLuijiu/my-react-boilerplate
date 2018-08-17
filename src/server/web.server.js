import { resolve } from 'url';
import { rejects } from 'assert';

const express = require('express');

export default class WebServer {
  constructor() {
    this.app = express()
    this.app.use(express.static('dist/public'))
  }

  start () {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(3000, function() {
          resolve(0)
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }

  stop () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve(0)
        })
      } catch (e) {
        console.error(e.message)
        reject(e)
      }
    })
  }
}