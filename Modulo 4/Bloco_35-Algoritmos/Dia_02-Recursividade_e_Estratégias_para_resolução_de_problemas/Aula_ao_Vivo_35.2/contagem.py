def countdown(n):
    if n == 0:
        print("fim")
    else:
        print(n)
        countdown(n - 1)


countdown(5)
