import { INode } from "../Interfaces/INode";

export const parse = (input: Array<string>): Array<INode> => {
    if (input.length > 0) {
        let arr = input
            .map((x, index) => (x.includes("\t") ? null : index))
            .filter((x) => x !== null);
        return arr
            .map((item, index) => {
                return index + 1 < arr.length
                    ? [item, arr[index + 1]!]
                    : [item, input.length];
            })
            .filter((x) => x !== undefined)
            .map((range) => {
                if (range) {
                    if (range[0] === range[1]) {
                        return {
                            name: input[range[0]!],
                            children: [],
                        } as INode;
                    } else {
                        return {
                            name: input[range[0]!],
                            children: parse(
                                input
                                    .slice(range[0]! + 1, range[1]!)
                                    .map((x) => x.substring(1))
                            ),
                        } as INode;
                    }
                } else {
                    return {
                        name: "error",
                        children: [],
                    } as INode;
                }
            });
    } else {
        return [];
    }
};