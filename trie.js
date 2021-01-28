function makeNode(ch) {
    this.ch = ch;
    this.isTerminal = false;
    this.map = {};
    this.words = [];
} 

function add(name, i, root) {

    if (i === name.length) {
        root.isTerminal = true;
        return;
    }

    if (!root.map[name[i]]) {
        root.map[name[i]] = new makeNode(name[i]);
    }

    root.words.push(name);
    add(name,i+1,root.map[name[i]]);
}

function search(name, i, root) {
    if(i === name.length) {
        return root.words;
    }
    if(!root.map[name[i]]) {
        return [];
    }
    return search(name,i+1,root.map[name[i]]);
}
