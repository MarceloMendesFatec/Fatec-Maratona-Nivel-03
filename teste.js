console.log('Hello World!');

 a = 10;
 b = 20;

soma = a + b;

console.log(soma);


// Classe Pilha
class Pilha {
    constructor() {
        this.items = []; // Array para armazenar os elementos da pilha
    }

    // Método para adicionar um elemento à pilha
    push(element) {
        this.items.push(element);
    }

    // Método para remover o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.items.pop();
    }

    // Método para verificar se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para verificar o elemento no topo da pilha (sem removê-lo)
    peek() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.items[this.items.length - 1];
    }

    // Método para obter o tamanho da pilha
    size() {
        return this.items.length;
    }

    // Método para limpar a pilha
    clear() {
        this.items = [];
    }
}

// Exemplo de uso da pilha
const minhaPilha = new Pilha();

minhaPilha.push(10);
minhaPilha.push(20);
minhaPilha.push(30);

console.log(minhaPilha.peek()); // Saída: 30

console.log(minhaPilha.pop()); // Saída: 30
console.log(minhaPilha.pop()); // Saída: 20

console.log(minhaPilha.size()); // Saída: 1

console.log(minhaPilha.isEmpty()); // Saída: false

minhaPilha.clear();
console.log(minhaPilha.isEmpty()); // Saída: true

