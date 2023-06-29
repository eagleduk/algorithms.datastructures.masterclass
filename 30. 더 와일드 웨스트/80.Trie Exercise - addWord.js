class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    var char = word[index];

    var sub = this.characters[char] || new Trie();

    if (word.length - 1 > index) {
      sub.addWord(word, index + 1);
    } else {
      sub.isWord = true;
    }
    this.characters[char] = sub;
  }
}
