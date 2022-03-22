Exercício 3: Agora vamos tanto explorar o hardware que estamos utilizando quanto aprender algo interessante: enviar programaticamente comandos para o shell. Crie um script chamado resources.py e utilize-o para exibir no console as informações solicitadas abaixo. Para isso utilize o método check_output do módulo subprocess do Python 😎.

    1) Informações sobre a sua CPU (no linux você pode usar comando lscpu , e no OSX você pode usar o comando sysctl -n machdep.cpu.brand_string ):
    2) O modelo;
    3) A quantidade de cores;
    4) A velocidade em Megahertz - MHz ;
    5) A quantidade de cache (L1, L2, L3);
    6) Informações sobre a memória RAM (no linux você pode usar comando free , e no OSX você pode usar o comando top -l 1 | head -n 10 | grep PhysMem ):
    7) A quantidade total de memória RAM disponível em sua máquina em megabytes - MB (faça a conversão também 😉).
    8) A quantidade total de memória RAM que está sendo utilizada em megabytes - MB.

Dicas:
    -> O método decode("UTF-8") vai ser útil para ler os dados oriundos da check_output ;
    -> Os métodos split e strip vão ser úteis para limpar e separar as informações obtidas com os comandos;
    -> O método startswith vai ser útil para selecionar informações específicas.
    -> Se estiver muito difícil fazer a filtragem e limpeza dos dados, se contente com a exibição de informações a mais 😉
