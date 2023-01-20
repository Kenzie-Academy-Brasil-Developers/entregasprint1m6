# Calculadora de custo para antecipação de pagamentos parcelados. 

<h2>Tabela de Conteúdos</h2>

- [Calculadora de custo para antecipação de pagamentos parcelados.](#calculadora-de-custo-para-antecipação-de-pagamentos-parcelados)
  - [1. Sobre](#1-sobre)
  - [2. O Problema a ser solucionado](#2-o-problema-a-ser-solucionado)
  - [3. A solução](#3-a-solução)
  - [4. Tecnologias](#4-tecnologias)
  - [5. Imagens do layout](#5-imagens-do-layout)


<a name="sobre"></a>
## 1. Sobre

O projeto foi proposto com objetivo de treinar o uso do React e a interação com uma API.  Caso queira testar a aplicação você deverá apenas clonar o respositório e depois instalar as dependências usando o yarn install. 

<a name="problema"></a>
## 2. O Problema a ser solucionado

A dificuldade de calcular quanto diminuirá o repasse por parte do banco caso o comerciante deseje adiantar o pagamento.

<a name="solucao"></a>
## 3. A solução

Para facilitar esse cálculo a aplicação tem como objetivo calcular o custo para adiantamento de pagamentos parcelados da parte dos bancos para os comerciantes de forma fácil.

<a name="techs"></a>
## 4. Tecnologias

- <p name="axios">Axios</p>
- <p name="styled-comp">Styled Components</p>
- <p name="react-hook-form">React Hook Form</p>
- <p name="yup">Yup</p>
- <p name="hookform-resolvers">@Hookform/Resolvers</p>

<a name="features"></a>
## 5. Imagens do layout

 <h4 align="center">Layout</h4>
 <div align="center">
   <a name="img1" href="https://imgur.com/a/DMAVdMR" target="_blank">Imagem layout</a>

   <!-- <img src=https://imgur.com/a/DMAVdMR></img> -->
 </div>
 <p align="center">
Aqui você colocará os dados para a realização do calculo.
 </p>
 
 

  <h4 align="center">Resultado</h4>
 <div align="center">

   <a name="img2" href="https://imgur.com/a/Uvzjw3M" target="_blank">Exemplo de calculo não passando um período</a>
   <a name="img3" href="https://imgur.com/a/Lj4uMF8" target="_blank">Exemplo de calculo passando um período</a>
   
   <!-- <img src=https://imgur.com/a/Uvzjw3M></img>
   <img src=https://imgur.com/a/Lj4uMF8></img> -->
 </div>
 <p align="center">
Assim ficará a resposta da aplicação. Caso o usuário não passe um período ele voltára com o padrao: 1, 15, 30, 90 dias, mas o usuário pode colocar o período que preferir.
 </p>
 
 
 
 



