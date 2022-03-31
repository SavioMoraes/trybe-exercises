def get_order(orders):
    orders_map = {pair[0]: pair[1] for pair in orders}

    next_person = ""
    for person in orders_map:

        if person not in orders_map.values():
            next_person = person
    result = [next_person]

    while next_person in orders_map:
        result.append(orders_map[next_person])
        next_person = orders_map[next_person]

    return result


if __name__ == '__main__':
    orders = [
        ('fernanda', 'rafa'),
        ('fran', 'daniel'),
        ('mirian', 'gabriel'),
        ('matheus', 'yasmin'),
        ('giovanni', 'fernanda'),
        ('rafa', 'fran'),
        ('daniel', 'mirian'),
        ('gabriel', 'matheus')
    ]

    assert get_order(orders) == [
        "giovanni",
        "fernanda",
        "rafa",
        "fran",
        "daniel",
        "mirian",
        "gabriel",
        "matheus",
        "yasmin",
    ]
    print(get_order(orders))
