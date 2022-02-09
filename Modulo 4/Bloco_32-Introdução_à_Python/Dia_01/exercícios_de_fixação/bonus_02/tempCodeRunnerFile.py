def draw_triangle(n):
    for row in range(1, n + 1):
        if row > n:
            print(row * '*')


print(draw_triangle(4))
