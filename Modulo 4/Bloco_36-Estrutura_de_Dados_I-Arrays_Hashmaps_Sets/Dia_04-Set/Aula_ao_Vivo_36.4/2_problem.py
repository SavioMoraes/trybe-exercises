def members(friends):
    unique_members = set()

    for a, b in friends:
        unique_members.add(a)
        unique_members.add(b)
    return len(unique_members)


if __name__ == "__main__":
    friends = [('d', 'a'), ('f', 'z'), ('g', 'i'),
               ('f', 'r'), ('a', 'f'), ('r', 'l'), ('g', 'h'),
               ('e', 'h'), ('h', 'd'), ('z', 'g'), ('f', 'g')]

    print(members(friends))
