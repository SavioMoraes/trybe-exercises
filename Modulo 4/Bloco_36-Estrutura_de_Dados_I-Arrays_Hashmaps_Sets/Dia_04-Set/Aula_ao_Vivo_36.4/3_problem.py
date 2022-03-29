def dict_friends(friends):
    person_to_friends = {}

    for a, b in friends:
        if a not in person_to_friends:
            person_to_friends[a] = set()
        if b not in person_to_friends:
            person_to_friends[b] = set()

        person_to_friends[a].add(b)
        person_to_friends[b].add(a)

    return person_to_friends


if __name__ == "__main__":
    friends = [('Flavio', 'Carlos'), ('Carlos', 'Roni'), ('Roni', 'Felps'),
               ('Flavio', 'Felps')]

    print(dict_friends(friends))
