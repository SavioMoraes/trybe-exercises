def convert(n):
    result, rest = divmod(n, 2)
    if n > 1:
        convert(result)
    print(rest, end="")


convert(29)

print("\n")
