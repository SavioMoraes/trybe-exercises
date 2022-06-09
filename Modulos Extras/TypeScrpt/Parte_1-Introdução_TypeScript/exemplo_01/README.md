Iniciando estudo de TypeScript:

Considerações:

TSC - TypeScript Compiler
O TSC é o responsável por realizar a tradução do nosso código TypeScript para código JavaScript .
Lembra que estudamos nas sessões anteriores tipagem em linguagens de programação e descobrimos que o TypeScript é uma linguagem estaticamente tipada e fortemente tipada? O TSC também é o responsável por realizar a verificação de tipo no nosso código TypeScript . Veremos como isso funciona.
Para isso, podemos instalar o TSC e o suporte ao TypeScript em nossa máquina via npm , e utilizarmos o comando tsc seguido do arquivo que desejamos compilar e realizar a análise de tipo. Caso não deseje instalá-lo, você pode utilizar o comando tsc como um executável npx .
Para instalar o compilador TypeScript globalmente:

1 - npm install -g typescript

  --> Caso tenhamos um arquivo com a extenção do TepeScript (ts),
      se executarmos "tsc nomeDoArquivo.ts" com o TypeScript
      instalado, ele criará um arquivo com extensão .js (JavaScript),
      que poderá ser executado com o comando "node nomeDoArquivo.js".

  --> Podemos executar também com "npx tsc nomeDoArquivo.ts", mas
      ambos só funcionam se já tiver um arquivo .ts criado.
      Será, sim, feita uma verufucação, mas pra ver se não há
      problemas com o arquivo .ts, não para verificara existência
      pra depois criá-lo!