/*
* A função foi chamada direta dentro do module.exports, notar a sintaxe...!
* Poderia ser criada e exportada da seguinte maneira:
  const readFile = () => {

  }

  module.exports = { readFile }
*/

const fs = require('fs').promises

module.exports = {
  readFile: async (fileName) => {

    // const content = await fs.readFile(fileName, 'utf-8').catch(() => null)
    // return content

    try {
      const content = await fs.readFile(fileName, 'utf-8')
      return content
    } catch {
      return null
    }

  }
}