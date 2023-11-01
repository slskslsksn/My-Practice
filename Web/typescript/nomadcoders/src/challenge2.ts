// https://huchu.link/aXJSTxX
type Words = { [key: string]: string };

class Word {
  constructor(public term: string, public def: string) {}
}
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // add: 단어를 추가함.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // get: 단어의 정의를 리턴함.
  get(term: string) {
    return this.words[term];
  }
  // delete: 단어를 삭제함.
  delete(term: string) {
    delete this.words[term];
  }
  // update: 단어를 업데이트 함.
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  // showAll: 사전 단어를 모두 보여줌.
  showAll() {
    console.log(Object.keys(this.words).join(' '));
  }
  // count: 사전 단어들의 총 갯수를 리턴함.
  count() {
    return Object.keys(this.words).length;
  }
  // upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
  upsert(word: Word) {
    this.words[word.term] = word.def;
  }
  // exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exists(term: string) {
    return this.words[term] ? true : false;
  }
  // bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
  bulkAdd(bulk: Array<Word>) {
    for (const word of bulk) {
      this.add(word);
    }
  }
  // bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
  bulkDelete(terms: Array<string>) {
    for (const term of terms) {
      this.delete(term);
    }
  }
}

const dict = new Dict();
dict.add({ term: '김치', def: '맛있다' });
dict.add({ term: '김치2', def: '맛있다222' });
dict.bulkAdd([
  { term: '김치', def: '대박이네~' },
  { term: '아파트', def: '비싸네~' },
]);
console.log('bulkadd');
dict.showAll();
console.log(dict.get('김치2'));
console.log(dict.count());
dict.bulkDelete(['김치', '김치2']);
console.log('bulkdelete');
dict.showAll();
dict.upsert({ term: '아파트', def: 'ㅋㅋㅋㅋ' });
console.log(dict.get('아파트'));
