## Desafio Classificador de Nível Herói

Foi criado uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois foi utilizado uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for **menor do que 1.000** = Ferro  
Se XP for **entre 1.001 e 2.000** = Bronze  
Se XP for **entre 2.001 e 5.000** = Prata  
Se XP for **entre 5.001 e 7.000** = Ouro  
Se XP for **entre 7.001 e 8.000** = Platina  
Se XP for **entre 8.001 e 9.000** = Ascendente  
Se XP for **entre 9.001 e 10.000** = Imortal  
Se XP for **maior ou igual a 10.001** = Radiante

Foi utilizado a estrutura de decisão, switch case, onde o default é: "Nível desconhecido" para o número de XP que não se encaixe nos critérios estabelecidos pela atividade.

Por fim, como exemplo, o código apresenta a seguinte mensagem:

> "O Herói de nome Naruto está no nível de Ouro"