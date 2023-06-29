class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }
  getWords(words = [], currentWord = "") {
    var subTrie;
    var word;
    for (const character in this.characters) {
      subTrie = this.characters[character];
      word = currentWord + character;
      if (subTrie.isWord) words.push(word);
      subTrie.getWords(words, word);
    }
    return words;
  }
}
