/*1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
свойству highlighted значение true.
*/

// ES5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype = {
    edit: function (text) {
        this.text = text;
    }
};

Post.prototype.constructor = Post;

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

// Не работает наследование. Почему? Если поставить ниже, то перестаёт работать AttachedPost.makeTextHighlighted
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype = {
    makeTextHighlighted: function () {
        this.highlighted = true;
    }
};
AttachedPost.prototype.constructor = AttachedPost;


const date = new Date();
const attached_post = new AttachedPost('Vasya', 'lorem', `${date}`);
attached_post.makeTextHighlighted();
// attached_post.edit('new lorem') - не работает наследование. Почему?;

const post = new Post('Vanya', 'ipsum', `${date}`);
post.edit('new ipsum');
console.log(post, attached_post);


// ES6
class PostClass {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPostClass extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached_post_class = new AttachedPostClass('Vasya', 'lorem', `${date}`);
attached_post_class.makeTextHighlighted();
attached_post_class.edit('new lorem');

const post_class = new PostClass('Vanya', 'ipsum', `${date}`);
post_class.edit('new ipsum');
console.log(post_class, attached_post_class);
