Exercício 1 : Crie um projeto que irá simular a arquitetura que vimos em aula de uma maneira bem simples, ela terá um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes que representarão a Memória Principal e a Secundária.

Cada tipo de memória irá armazenar os dados de fato na memória que ela representa, sendo a Principal armazenando tudo em memória RAM e a secundária no disco. Através do Python estaremos fazendo chamadas ao Sistema Operacional para realizar essas tarefas para gente, pois ele melhor do que ninguém saberá utilizar as memórias. O objetivo do nosso script será realizar a soma de uma lista de números aleatórios utilizando as duas implementações de memória.

//-------------------------------------------------------------------------//

1) Crie um novo diretório na sua máquina para os exercícios (pode chamar ele de computador ou pc 😎), os próximos arquivos deverão ser criados dentro dela.

2) Vamos começar a nossa memória principal, ou memória RAM, para isso crie um arquivo main_memory.py e adicione o conteúdo abaixo nela. Implemente os métodos get e load.
    -> No load você irá adicionar ( append ) o elemento passado ( value ) à lista loaded_memory.

    -> No get você irá retornar o valor presente na posição dada ( index ) na lista loaded_memory. Se o valor não existir ou não for numérico, retorne 0.

3) Agora, crie um arquivo secondary_memory.py para ser a nossa memória secundária e adicione o conteúdo abaixo. Mais uma vez você será responsável pela implementação dos métodos get e load porém, agora, você deverá utilizar a função open , para persistir esses dados em disco.
    -> No load, utilizando o método open, escreva o código que crie um novo arquivo utilizando next_file_name como path e salve o value no conteúdo deste novo arquivo.
    -> No get, também utilizando o método open , retorne o conteúdo do arquivo file_name . Não esqueça de converter o valor para numérico ( float ou int ).

4) Vamos criar nosso arquivo principal para gerenciar as "memórias" que criamos, crie um novo arquivo operating_system.py.

5) Vamos testar nosso script, execute o comando python operating_system.py e veja a saída no console. Deu certo?! Como foram os tempos de saída?!

6) Para deixar nosso script ainda mais legal, vamos aumentar a quantidade de números para serem somados, adicione uma grande quantidade de números no array de números aleatórios. Para isso, basta adicionar * 200 ao final da linha que declara a lista RANDOM_NUMBERS, para multiplicar a quantidade de elementos na lista. Rode o script novamente. Como foi o tempo de resposta agora? Deu diferença, né? Qual foi mais rápido?!

7) Agora, vamos reforçar mais um conteúdo apreendido:

8) Comente os trechos de código que fazem a operação de limpeza ( clean ) da memória.

9) Execute o comando novamente

10) Comente os trechos de código que fazem a operação de carregamento ( load ) da memória e execute novamente.

11) Compare os resultados das somas. O que aconteceu?