# Projeto Playground Functions!

Este é meu 2° projeto durante a minha jornada na Trybe!

Nele coloquei em prática conceitos fundamentais como variáveis, objetos, funções, arrays, loops for, arrow functions e template literals. Através dos 13 desafios propostos, o projeto permitiu a aplicação prática desses conceitos, fortalecendo a compreensão e habilidades em programação JavaScript. #vqv 🚀

## Estrutura do Repositório

- A pasta `src` contém todo o código.

# Requisitos

## 1. Implementado uma função usando o operador &&

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

## 2. Implementado uma função que divide uma frase

<details>
  <summary>
Implementado a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.

  Exemplo:

- Se a função receber a string `'Vamo que vamo!'`, o retorno deverá ser `['Vamo', 'que', 'vamo!']`.

</details>

## 3. Implementado uma função que use concatenação de strings

<details>
  <summary>
Implementado a função <code>concatName</code> que recebe um array de strings e retorna o último item na primeira posição

  </summary> <br />
A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.

  Exemplo:

- Caso o parâmetro passado para a função `concatName` seja o array `['Fritas', 'Manga', 'Leite', 'Hamburguer']`, a função deverá retornar `Hamburguer, Fritas`.

</details>

## 4 - Implementado uma função que calcula a área de um triângulo

<details>
  <summary>
Implementado a função <code>calcArea</code> que retorna o cálculo da área total de um triângulo

  </summary> <br />

A função `calcArea` recebe o valor `base` e `height` de um triângulo e retorna o cálculo da sua área.

- O cálculo da área total do triângulo utiliza a fórmula `(base * altura) / 2`.

</details>

## 5 - Implementado uma função que calcula a quantidade de pontos em um campeonato de futebol

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
