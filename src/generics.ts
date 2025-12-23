function wrap<t>(item: t):t[]{
    return [item]
}

wrap("masala")
wrap(54)
wrap({flavor: "ginger"})

function pair<A,B>(a:A,b:B): [A,B]{
    return [a,b]
}

pair("masala", 34)
pair("masala", {flavor: "ginger"})

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "dfj"}

interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}


