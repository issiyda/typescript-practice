// string
const firstName = "石田";

// number
const age = 24;

// boolean
let isHuman = true;

isHuman = false;

// Date
let birthday = new Date("1996-01-01");

let color: "red" | "yellow" | "green" = "red";

let rank: "S" | "A" | "B" | "C" = "S";

// any 使わないように
let AnyData: any = "文字列";
AnyData = 1;
AnyData = true;
AnyData = new Date("1996-01-01");

let funcLog = () => {
    console.log('ログを出力しました。');
}

let funcSum = (a: number, b: number) => {
    return a + b;
}

funcSum(1, 2);

// オブジェクト
let object = {
    name: "石田",
    age: 24,
    isHuman: true,
    birthday: new Date("1996-01-01"),
}

type User = {
    name: string;
    age: number;
    isHuman: boolean;
    birthday: Date;
    phoneNumber?: string;
}

let user: User = {
    name: "石田",
    age: 24,
    isHuman: true,
    birthday: new Date("1996-01-01"),
}

// 配列
let array: number[] = [1, 2, 3, 4, 5];

let array2: Array<number> = [1, 2, 3, 4, 5];

// タプル
let tuple: [string, number, boolean] = ["石田", 24, true];

let userArray: User[] = [
    {
        name: "石田",
        age: 24,
        isHuman: true,
        birthday: new Date("1996-01-01"),
    },
    {
        name: "459494994",
        age: 24,
        isHuman: true,
        birthday: new Date("1996-01-01"),
    }
]

type UserDetail = {
    prefecture: string;
    sex: string;
}

type UserDetailInfo = User & UserDetail;

let user2: UserDetailInfo = {
    name: "石田",
    age: 24,
    isHuman: true,
    birthday: new Date("1996-01-01"),
    prefecture: "東京都",
    sex: "男性",
}

type UserDetailInfo2 = {
    user: User;
    userDetail:  UserDetail
}

let user3: UserDetailInfo2 = {
    user: {
        name: "石田",
        age: 24,
        isHuman: true,
        birthday: new Date("1996-01-01"),
    },
    userDetail: {
        prefecture: "東京都",
        sex: "男性",
    }
}



export * from './index';
