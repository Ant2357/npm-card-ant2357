const newline = '\n';

const samuraiAaText = [
  "　　　　∧__∧",
  "　　　 （｀･ω･）< text",
  "　　　.ノ^　yヽ、",
  "　　　ヽ,,ﾉ==l ﾉ",
  "　　　　/ 　l |",
  "\"\"\"~\"\"\"\"\"\"~\"\"\"~\"\"\"~\""
].join(newline);

/**
 * 侍AAを通して文字列を出力する
 * (cowsayみたいなもの)
 * @param {string} str 文章
 * @return {string} 侍AA文章
 */
export const samuraiAa = str => samuraiAaText.replaceAll("text", str);
