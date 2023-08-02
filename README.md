# Projeto Playground Functions!

Este é meu 2° projeto durante a minha jornada na Trybe!

Nele coloquei em prática conceitos fundamentais como variáveis, objetos, funções, arrays, loops for, arrow functions e template literals. Através dos 13 desafios propostos, o projeto permitiu a aplicação prática desses conceitos, fortalecendo a compreensão e habilidades em programação JavaScript. #vqv 🚀

## Estrutura do Repositório

- A pasta `src` contém todo o código.
- Cada implementação foi desenvolvida em uma função específica;

# Funcionalidades implementadas

## Implementado uma função usando o operador &&

<details>
  <summary>
    Implementado a função <code>compareTrue</code> utilizando somente o operador <code>&&</code>
  </summary> <br />

A função `compareTrue` ao receber dois parâmetros booleanos:

- Retorna `true` se ambos os valores forem verdadeiros;
- Retorna `false` se um ou ambos os parâmetros forem falsos.

Exemplo:

```javascript
const hamburguer = true;
const fritas = true;
const manga = false;
const leite = false;
```

Se a função for chamada com os valores `hamburguer` e `fritas` como parâmetro, retorna `true`, mas caso seja chamada com os parâmetros `fritas` e `manga` ou `manga` e `leite` retorna `false`.

</details>

## Implementado uma função que divide uma frase

<details>
  <summary>
Implementado a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />

A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.

  Exemplo:

- Se a função receber a string `'Vamo que vamo!'`, o retorno deverá ser `['Vamo', 'que', 'vamo!']`.

</details>

## Implementado uma função que use concatenação de strings

<details>
  <summary>
Implementado a função <code>concatName</code> que recebe um array de strings e retorna o último item na primeira posição

  </summary> <br />

A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.

  Exemplo:

- Caso o parâmetro passado para a função `concatName` seja o array `['Fritas', 'Manga', 'Leite', 'Hamburguer']`, a função deverá retornar `Hamburguer, Fritas`.

</details>

## Implementado uma função que calcula a área de um triângulo

<details>
  <summary>
Implementado a função <code>calcArea</code> que retorna o cálculo da área total de um triângulo

  </summary> <br />

A função `calcArea` recebe o valor `base` e `height` de um triângulo e retorna o cálculo da sua área.

- O cálculo da área total do triângulo utiliza a fórmula `(base * altura) / 2`.

  Exemplo:

- A função `calcArea` retorna o valor 250 quando recebe o parâmetro `base` com o valor 10 e o parâmetro `height` com o valor 50;

- A função `calcArea` retorna o valor 5 quando recebe o parâmetro `base` com o valor 5 e o parâmetro `height` com o valor 2;

- A função `calcArea` retorna o valor 25.5 quando recebe o parâmetro `base` com o valor 51 e o parâmetro `height` com o valor 1.

</details>

## Implementado uma função que calcula a quantidade de pontos em um campeonato de futebol

<details>
  <summary>
Implementado a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates

  </summary> <br />

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

- `wins`: é o número de vitórias e vale 3 pontos;
- `ties`: é o número de empates e vale 1 ponto.

  Exemplo:

- A função `footballPoints` deve retornar o valor `50` pontos quando o time tenha 14 vitórias e 8 empates;

- A função `footballPoints` deve retornar o valor `5` pontos quando o time tenha 1 vitória e 2 empates;

- A função `footballPoints` deve retornar o valor `0` pontos quando o time tenha 0 vitórias e 0 empates.

</details>

## Implementado uma função que calcula o número de repetições do maior número

<details>
  <summary>
Implementado a função <code>highestCount</code> que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números.

  </summary> <br />

A função `highestCount` retorna a quantidade de vezes em que o **maior** número se repete dentro do array.

  Exemplo:

- A função `highestCount` retorna `2` quando receber o parâmetro `[9, 1, 2, 3, 9, 5, 7]`;

- A função `highestCount` retorna `1` quando receber o parâmetro `[1, 2, 2, 2, 7, 4, 6]`;

- A função `highestCount` retorna `3` quando receber o parâmetro `[1, 1, 1]`.

</details>

## Implementado uma função de Caça ao Rato

<details>
  <summary>
Implementado a função <code>catAndMouse</code> que verifica qual gato está mais perto do rato

  </summary> <br />
Imagine que dois gatos estão caçando o mesmo rato e você precisa verificar qual gato está mais perto de sua presa. Para isso, a função `catAndMouse` recebe 3 parâmetros do tipo `number` na seguinte ordem:

- `mouse`: representa a posição do rato.

- `cat1`: representa a posição do gato 1;

- `cat2`: representa a posição do gato 2;

- A função calcula as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

- Retorna a string `'cat2'` se o gato `cat2` estiver mais próximo do rato;
- Retorna a string `'cat1'` se o gato `cat1` estiver mais próximo do rato;
- Retorna a string `'Os gatos trombam e o rato foge'` caso os gatos estejam na mesma distância do rato.

  Exemplo:

- A função `catAndMouse` deve retornar a string `'cat2'` quando receber os parâmetros onde gato `cat2` esteja a 2 unidades de distância do rato e `cat1` esteja a 3 unidades de distância do rato;

- A função `catAndMouse` deve retornar a string `'cat1'` quando receber os parâmetros onde gato `cat1` esteja a 6 unidades de distância do rato e `cat2` esteja a 12 unidades de distância do rato;

- A função `catAndMouse` deve retornar a string `'Os gatos trombam e o rato foge'` quando receber os parâmetros onde os gatos estejam na mesma distância do rato.

</details>

## Implementado uma função FizzBuzz

<details>
  <summary>
Implementado a função <code>fizzBuzz</code> que recebe um array de números e retorna um array de string de acordo com o resultado

  </summary> <br />

A função `fizzBuzz` recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, retorna um array de strings:

- Retorna a string `'fizz'` para cada número do array que seja divisível apenas por 3;
- Retorna a string `'buzz'` para cada número do array que seja divisível apenas por 5;
- Retorna a string `'fizzBuzz'` para cada número do array que seja divisível por 3 **e** 5;
- Retorna a string `'bug!'` para cada número do array que não seja dividido por 3 nem por 5.

  Exemplo:

- A função `fizzBuzz` retorna as strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` quando receber os parâmetros [2, 15, 7, 9, 45];

- A função `fizzBuzz` retorna as strings `['bug!', 'fizz']` quando receber os parâmetros [7, 9];

- A função `fizzBuzz` retorna as strings `['fizz', 'buzz']` quando receber os parâmetros [9, 25].

</details>

## Implementado uma função que Codifique e Decodifique

<details>
  <summary>
Implementado uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

  </summary> <br />

Para codificar a frase utilize a função `encode` que recebe uma string como parâmetro e deverá trocar todas as **vogais minúsculas por números**, de acordo com o formato:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

  Exemplo:

- A função `encode` quando receber o parâmetro `'hi there!'`, deve retornar o valor `'h3 th2r2!'`;
- A função `encode` quando receber o parâmetro `How are you today?` deve retornar o valor `H4w 1r2 y45 t4d1y?`;
- A função `encode` quando receber o parâmetro `This is an encoding test.` deve retornar o valor `Th3s 3s 1n 2nc4d3ng t2st.`;

Para decodificar a frase utilize a função `decode` que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os **números por vogais minúsculas**, de acordo com o formato:

1 -> a \
2 -> e \
3 -> i \
4 -> o \
5 -> u

  Exemplo:

- A função `decode` quando receber o parâmetro `'h3 th2r2!'`, deve retornar o valor `'hi there!'`;
- A função `decode` quando receber o parâmetro `H4w 1r2 y45 t4d1y?`, deve retornar o valor `How are you today?`;
- A função `decode` quando receber o parâmetro `'Th3s 3s 1 d2c4d2 t2st.'`, deve retornar o valor `'This is a decode test.'`;

</details>

## Implementado uma função de Lista de Tecnologias

<details>
  <summary>
Implementado a função <code>techList</code> que recebe um array e uma string e retorna um array de objetos.

  </summary> <br />

A função `techList` recebe dois parâmetros:

- Um array com nomes de tecnologias ;
- Um nome referente ao nome de uma pessoa.

A função deverá retornar:
- 'Vazio!' se não receber parâmetro algum ;
- Um objeto para cada tecnologia do array, com a seguinte estrutura:

```javascript
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
```

  Exemplo:

-Se a função recebe os parâmetros `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` e `'Paulo'`, o retorno deve ser:

```javascript
[
  {
    tech: "CSS",
    name: "Paulo"
  },
  {
    tech: "HTML",
    name: "Paulo"
  },
  {
    tech: "JavaScript",
    name: "Paulo"
  },
  {
    tech: "Jest",
    name: "Paulo"
  },
  {
    tech: "React",
    name: "Paulo"
  }
]
```

</details>

## Implementado uma função de número de telefone

<details>
  <summary>
Implementado a função  <code>generatePhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

- A função `generatePhoneNumber` retorna a string `'Array com tamanho incorreto.'` caso o array tenha o tamanho diferente de 11;

- A função `generatePhoneNumber` retorna a string `'Não é possível gerar um número de telefone com esses valores.'` caso algum dos números do array seja menor que 0;

- A função `generatePhoneNumber` retorna a string `'Não é possível gerar um número de telefone com esses valores.'` caso algum número do array seja maior que 9;

- A função `generatePhoneNumber` retorna a string `'Não é possível gerar um número de telefone com esses valores.'` caso algum número do array se repetir 4 vezes ou mais;

Exemplo:

- Caso o parâmetro da função seja `[1, 6, 9, 9, 4, 0, 1, 0, 5, 3, 1]`, a função `generatePhoneNumber` deverá retornar `(16) 99401-0531`.

</details>

## Implementado uma função que teste a condição de existência de um triângulo

<details>
  <summary>
Implementado a função <code>triangleCheck</code> que verifica se é possível formar um triângulo analisando o comprimento de três linhas.

  </summary> <br />

A função `triangleCheck` recebe os parâmetros `lineA`, `lineB` e `lineC` com o valor do comprimento de três linhas distintas.

- Para que seja possível formar um triângulo, é necessário atender uma das seguintes condições:

  1) **a medida de _um_ dos lados** é **menor** que a soma das medidas dos outros dois lados e **maior** que o valor absoluto (módulo) da diferença entre os outros dois lados. Por exemplo: `lineA` é menor que `lineB + lineC` e maior que `lineB - lineC`. Se o resultado de `lineB - lineC` for um valor negativo, o valor é convertido para positivo e checado se `lineA` é maior que esse resultado convertido;

  **_OU_**

  2) **a medida de _qualquer_ um dos lados** é **menor** que a soma das medidas dos outros dois lados. Por exemplo: `lineA` é menor que `lineB + lineC`, `lineB` é menor que `lineA + lineC` e `lineC` é menor que `lineA + lineB`.

- O retorno da sua função é um valor booleano.

  Exemplo:

- A função `triangleCheck` deve retornar o valor `true` quando passado os parâmetros `(10, 14, 8)`;

- A função `triangleCheck` deve retornar o valor `false` quando passado os parâmetros `(5, 10, 20)`;

</details>

## Implementado uma função de boas vindas ao Bar da Trybe!

<details>
  <summary>
Implementado a função <code>hydrate</code> que recebe uma string e retorna a sugestão de quantos copos de água você deve beber.

  </summary> <br />

- A função `hydrate` retorna a sugestão de quantos copos de água deve-se beber ao receber uma string informando a quantidade de bebida ingerida.

- A string **sempre** terá o formato *quantidade (em número) + tipo da bebida*;

- O número na frente de cada bebida deve estar entre 1 e 9.

  Exemplo:

```javascript
// String recebida:
  '1 cerveja'

// String retornada:
  '1 copo de água'

// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'
```

</details>
