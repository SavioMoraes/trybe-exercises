from collections import deque

fila = deque(['a', 'b', 'c'])

fila.append('D')

print(fila)
print(fila[0])
print(fila.popleft())
