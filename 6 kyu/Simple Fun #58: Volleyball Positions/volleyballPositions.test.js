const volleyballPositions = require("./volleyballPositions");

describe("Simple Fun #58: Volleyball Positions", () => {
    test("test 1", () => {
        expect(volleyballPositions(
            [["empty", "Alice", "empty"],
            ["Bob", "empty", "Charlie"],
            ["empty", "Dave", "empty"],
            ["Eve", "empty", "Frank"]], 6))
            .toEqual(
                [["empty", "Alice", "empty"],
                ["Bob", "empty", "Charlie"],
                ["empty", "Dave", "empty"],
                ["Eve", "empty", "Frank"]]
            )
    });

    test("test 2", () => {
        expect(volleyballPositions(
            [["empty", "player 3", "empty"],
            ["player 3", "empty", "player"],
            ["empty", "4", "empty"],
            ["5", "empty", "42"]], 1000000))
            .toEqual(
                [["empty", "5", "empty"],
                ["4", "empty", "player 3"],
                ["empty", "player", "empty"],
                ["42", "empty", "player 3"]]
            )
    });
});


