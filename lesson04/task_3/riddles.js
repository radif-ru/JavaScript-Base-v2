class Riddle {
    constructor(riddle) {
        this.riddle = riddle.riddle;
        this.options = riddle.options;
        this.correct = riddle.correct;
    }

    get getOptions() {
        let option = '';
        for (let key in this.options) {
            option += `${config.list[key]}. ${this.options[key]}\n`;
        }
        return option
    }

    get correctOption() {
        return `${config.list[this.correct]}. ${this.options[this.correct]}`
    }
}

const riddles = [
    {
        riddle: 'Зимой и летом одним цветом',
        options: ['ёлка', 'доллар', 'негр', 'все варианты верны'],
        correct: 3
    },
    {
        riddle: 'Не лает, не кусает, в дом не пускает',
        options: ['ёлка', 'доллар', 'негр', 'все варианты верны'],
        correct: 3
    },
    {
        riddle: 'Зимой и летом одним цветом',
        options: ['ёлка', 'доллар', 'негр', 'все варианты верны'],
        correct: 3
    },
    {
        riddle: 'Зимой и летом одним цветом',
        options: ['ёлка', 'доллар', 'негр', 'все варианты верны'],
        correct: 3
    },
    {
        riddle: 'Зимой и летом одним цветом',
        options: ['ёлка', 'доллар', 'негр', 'все варианты верны'],
        correct: 3
    },
];

// const riddle1 = new Riddle(riddles[0]);
// const riddle2 = new Riddle(riddles[1]);
// const riddle3 = new Riddle(riddles[2]);
// const riddle4 = new Riddle(riddles[3]);
// const riddle5 = new Riddle(riddles[4]);

