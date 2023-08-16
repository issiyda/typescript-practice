
// children
// コンポーネントの引数の型

import { ReactNode } from "react"

const Child = ({
    children,
    user
}: {
    children: ReactNode,
    user: {
        name: string,
        age?: number,
        isChild: boolean
        birthday: Date
        profile?: {
            height: number,
            weight: number
        }
    }
}) => {
    return <div>
        <h2>Child</h2>
        {
            children
        }
        <p>
        {user.name}
        </p>
        <p>
        { user.age && (`10年後${ user.age + 10}歳`)}
        </p>
        <p>
        {user.isChild ? "子供です" : "大人です"}
        </p>
        <p>
            {user.profile?.height}
        </p>
        <p>
            {user.profile?.weight}
        </p>
    </div>
}

export const Practice = () => {
    return <div>
        <h1>Practice</h1>
<Child user={{
    name: "石田くん",
    isChild: false,
    age: 26,
    birthday: new Date(),
}
}>
    親から渡った値
    うあああああああああ
</Child>
    </div>
}

// && ? の使い方
