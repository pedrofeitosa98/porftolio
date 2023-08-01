# Estrutura para projetos NextJS (Beta)

> O projeto ainda está em Beta, não recomendo que usem esse template por enquanto, pois preciso saber se tá confiável. Mas aproveita pra se jogar na documentação e me ajudar com sugestões, pelo menos algo você vai aprender por aqui :)

Esse template foi montado e pensado baseado no conteúdo de **João Bibiano**, **Junior Alves** e **RocketSeat** sobre a organização e arquitetura de pastas para projetos em **React** ou **Next**, unido aos conceitos de **Atomic Design**.

Ele também foi adaptado por mim, Pedro Feitosa, usando minha experiência pessoal como estudante e profissional sobre o que funciona e funcionou trabalhando sozinho ou em grupo, além da seleção das ferramentas aqui contidas.

## 🧱 Ferramentas e Bibliotecas

* 🔍 **ESLint**
* ✨ **Prettier**
* 🌐 **Axios**
* 💅 **Styled Components**
* 📑 **React Hook Form + Yup**
* 🎨 **React Icons**
* 🍞 **React Toastify**
* ⌛ **Moment JS**

## 📁 Estrutura de pastas

### `/public`

Armazena os arquivos de mídia como imagens, fontes, ícones, etc

### `/src`

`components`: Contém os componentes atômicos, que são de ordem mais simples. Exmeplos: botões, inputs, ícones, títulos, tags, etc.

`pattern`: São os componentes moleculares, que são compostos por grupos de componentes atômicos para formar elementos reutilizáveis mais complexos. Exemplos: cards, itens de lista, boxes, etc.

`templates`: Aqui estão os componentes orgânicos, que são os de ordem mais complexa e são compostos por componentes atômicos e orgânicos para montar seções e estruturas padrão. Exemplos: cabeçalhos, tabelas, modais, etc.

`pages`: Contém as páginas, que são compostas de componentes das mais variadas ordem. Geralmente com pouca ou nenhuma estilização.

`styles`: Armazena os estilos globais para toda a aplicação (reset e normalização) junto da construção do tema.

`types`: Armazena as tipagens comuns e genéricas.

`services`: Arquivos de configuração de consumo de API e ligações HTTP.

`store`: Utilizada para agrupar os gerenciadores de estado e os contextos.

`utils`: Funções de utilidade geral para toda a aplicação, como formatadores, conversores, cálculos e todo tipo de algorítmo.

## 🚀 Planejamento futuro

* Adicionar um guia de instalação
* Implementar por padrão algum gerenciados de estado
* Criar arquivos padrão em cada pasta
* Implementar uma layoutzação básica estilizada de boas-vindas
* Organizar uma seção de contribuição

## 📚 Referências

* **Junior Alves** - ([GitHub](https://github.com/jjunior96) | [YouTube](https://www.youtube.com/@devjunioralves))
* **João Bibiano** - ([GitHub](https://github.com/joaobibiano) | [YouTube](https://www.youtube.com/@joaobibiano))
* **RocketSeat** - ([YouTube](https://www.youtube.com/@rocketseat))
* **Atomic Design** - ([Blog](https://bradfrost.com/blog/post/atomic-web-design/) | [Livro](https://atomicdesign.bradfrost.com/))

### Gostaria de me ajudar?

No momento, sou um desenvolvedor iniciante com muita vontade de ajudar outros como eu. Toda e qualquer ajuda para melhorar este template é sempre bem-vinda! Criei ele apenas com o objetivo de padronizar os meus projetos e diminuir o tempo que eu gastava configurando a inicialização de cada um, já que sempre precisava voltar em algum guia para isso, porém concluí que poderia ser um ótimo projeto pro meu currículo transformá-lo em um template público.
