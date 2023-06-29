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

  findWord(word, index = 0) {
    var char = word[index];
    var subTrie = this.characters[char];
    if (!subTrie) return undefined;

    if (index === word.length - 1) {
      return subTrie;
    }
    return subTrie.findWord(word, index + 1);
  }
}
