const obj:Obj = {
    firstName: 'Shahzaib',
    age: 18,
    email: 'abc@gmail.com',
    hobbies: ['a','b','c','d']
}

type Obj = {
    firstName: string;
    age: number;
    email: string;
    hobbies: string[];
}

const newObj:NewObj = {
    ...obj,
    lastName: 'Ali',
}

type NewObj = Obj & {
    lastName: string;
}
