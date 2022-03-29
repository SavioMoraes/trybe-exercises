def to_buy(shelf):
    unique_at_shelf = set(shelf)
    all_items = set(range(1, 21))
    return all_items.difference(unique_at_shelf)


if __name__ == "__main__":
    shelf = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
    # [2, 5, 8, 10, 11, 12, 15, 16, 17, 18, 19]
    print(to_buy(shelf))

    shelf = [1, 2, 3]
    # [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    print(to_buy(shelf))

    shelf = []
    # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    print(to_buy(shelf))

    shelf = [-1, -2, -3, -4, -5]
    # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    print(to_buy(shelf))
