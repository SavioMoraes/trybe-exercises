# código inviável no caso de arrays muito grandes:

A = [False for i in range(5)]
print(A)
A[1] = True
A[2] = True
A[3] = True
print(A)
print(A[0] is True)
print(A[1] is True)

# -----------------------------------------------------------------------
print("-----------------------------------------------------------------")

# com Dict:

D = {1: True, 2: True, 3: True}
print(D)
print(1 in D)
print(0 in D)

# -----------------------------------------------------------------------
print("-----------------------------------------------------------------")

# com chaves em forma de string:

S = {"Teste": True, 2: True, 3: True}
print(S)
print("Teste" in S)
print("teste" in S)  # testa case sensitive
print("Testesss" in S)  # testa palavra diferente da chave
print(1 in S)  # testa uma chave inexistente
