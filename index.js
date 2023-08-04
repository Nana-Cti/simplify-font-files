const keys = require('./3500.json')
const fs = require('fs');
const fileName = 'HYXiaoBoZheZhiTiJ_Regular';

(() => {
  try {
    const data = fs.readFileSync(`./${fileName}.json`, "utf-8")
    let fontAll = JSON.parse(data);
    const glyphs = {}
    keys.map(key => {
      if (fontAll.glyphs[key] === undefined) return
      glyphs[key] = fontAll.glyphs[key]
    })
    fontAll.glyphs = glyphs
    // let str = JSON.stringify(fontAll, "", "\t");
    let str = JSON.stringify(fontAll);
    
    const err = fs.writeFileSync(`./${fileName}_3500.json`, str)
    if (err) {console.error(err);}

    
  } catch (error) { console.log(error) }
})()
