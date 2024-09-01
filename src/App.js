import './index.css'
import React, { useState, useEffect } from 'react';
// import hotelImage from './img/hotel4.jpeg'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
  
  return (
    // testando tamanho de texto, cores e alinhamento
    <div className='bg-gray-900 rounded text-white p-4 m-4'>
        <h1 className='pb-3 font-bold text-2xl text-center'>testando tamanho do texto: </h1>
        <h2 className='text-sm pb-2  text-yellow-400' >hello world!</h2>
        <h2 className='text-base pb-2  text-green-300'>hello world!</h2>
        <h2 className='text-lg pb-2  text-red-600'>hello world!</h2>
        <h2 className='text-xl pb-2  text-blue-400'>hello world!</h2>
        <h2 className='text-2xl text-orange-500'>hello world!</h2>
        <p className='text-b p-4'>
          para tamanho de texto nos temos 5 opçoes, 'sm' 'base' 'lg' 'xl' e '2xl'<br/>
          para criar cores nos colocamos a cor e seu valor que vai de 50 a 900<br/> 
          e por fim o alinhamento do texto, nos temos: "text-right" "text-left" "text-center" "text-top" "text-bottom" "end" e "start"
         </p>
    {/* linha para cortar espaçamento  */}
        <hr/>
    {/* testando espaçamento com margin, padding e space between */}
        <div className='p-4'>
        <h1 className='pb-3 font-bold text-2xl text-center'>padding, margin e space between</h1>
          padding é um espaçamento interno, usando apenas o 'p' com um valor voce cria um espaçamento interno em todos os lados<br/>
           - 'px' serve para espaçamento interno na horizontal<br/>
           - 'py' serve para espaçamento interno na vertical<br/>
          e tem para todos os lados separados : 'pt' 'pr' 'pb' 'pl'<br/><br/>

          margin é um espaçamento externo, usando o 'm' feito da mesma forma que o padding<br/><br/>

          e temos o space between, que é um espaçamento entre os elementos, podemos criar esse espaçamento com 'space' e determinamos se queremos criar
          um espaçamento na vertical 'space-y-valor' ou horizontal 'space-x-valor'<br/><br/>

          exemplo de padding:<br/>
      
          <div className='p-4 bg-gray-600'>
            <p>teste de padding</p>
          </div><br/>

          exemplo de margin:<br/>
      
          <div className='m-4 bg-gray-600'>
            <p>teste de margin</p>
          </div><br/>

          exemplo de space between:<br/>
      
          <div className='space-y-4 bg-gray-600'>
            <p className='bg-red-700 p-4' >teste de space between 1</p>
            <p className='bg-green-700 p-4'>teste de space between 2</p>
            <p className='bg-yellow-700 p-4'>teste de space between 3</p>
          </div><br/>

        {/* linha para cortar espaçamento  */}
        <hr/><br/>
        {/* testando bordas */}
        <h1 className='pb-3 font-bold text-2xl text-center'>border, rounded e ring</h1>
        para borda usamos 'border' essa propriedade com um valor, exemplo: 'border-4' define a grossura da borda,mas tambem podemos colocar cor na borda
        dassa forma 'border-red-400' isso e varias outras coisas.<br/>
        - temos o 'rounded' que deixa as bordas arredondadas <br />
        - e por fim o 'ring' ele cria um tipo de borda, mais parecida com um anel 
        <br/><br/>
        exemplo: <br/><br/>

        <div className='bg-gray-600 p-4 border-4 border-red-900  rounded-lg' >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p><br />
          <button className='bg-blue-800 text-white px-4 py-2 ring-2'>save</button>
        </div><br />

         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/* background */}
         <h1 className='pb-3 font-bold text-2xl text-center'>background</h1>
          para o background, nos temos muitas opçoes para estilizaçao. os mais comuns sao: background-color; repeat; image; size e position <br/>
          um que eu gostaria de comentar é sobre o background-image, mas especificadamente o 'gradient'. utilitários em combinação com os 
          utilitários de interrupção de cor de gradiente para dar a um elemento um fundo de gradiente linear. Dando um efeito visual de mudança
          de cor <br/>
          usado da seguinte forma: <br/>
          'bg-gradient-to-[posiçao] from [cor inicio] via [passa pela cor] to [termina na cor] <br/><br />
          exemplo:<br/><br/>
          bg-gradient-to-r  from-yellow-500 via-red-400 to-pink-600 

          <div className='h-14 bg-gradient-to-r  from-yellow-500 via-red-400 to-pink-600'></div>
          <p>lendo esse codigo ficaria : a cor de fundo tem a direçao para ir para a direita, começa com a cor amarela, passa pela vermelha 
            e termina na rosa
          </p><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/* largura e altura */}
         <h1 className='pb-3 font-bold text-2xl text-center'>largura e altura</h1>
         para trabalharmos com largura nos usamos o 'w' em seguida do seu valor <br/>
         da mesma fomra é com a altura, porem usamos o 'h'<br /><br />
         exemplo: <br />

        <div className='w-16 h-16 bg-blue-500'></div>
        <p>aqui criamos um quadrao usando apenas altura e largura</p>
        dentro da documentaçao aparece varias opcoes altenativas sobre como usar altura e largura. <br /><br/>
        exemplo: <br/>

        'w-full' e 'h-full'<br/>
        essas duas classes dao a ordem para pegar a largura e altura completa da pagina(Define a largura/altura do elemento 
        para ocupar 100% da largura do seu contêiner pai. Isso significa que o elemento se ajustará à largura/altura 
        disponível dentro do elemento em que está contido)
        dentro da documentaçao aparece varias opcoes altenativas sobre como usar altura e largura. <br /><br/>
        exemplo: <br/>

        'w-screen' e 'h-screen'<br/>
        essas duas classes dao a ordem para pegar a largura e altura completa da pagina(Define a largura/altura do elemento para 
        ocupar 100% da largura da viewport (a janela de visualização do navegador).Isso significa que o elemento terá a 
        largura/altura  total da tela, <strong>independentemente</strong> do contêiner pai.)
        dentro da documentaçao aparece varias opcoes altenativas sobre como usar altura e largura.  <br /><br />

        tambem podemos configurar uma largura e uma altura maxima ou minima, util para trabalhar com resposividade

        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/* flexbox */}
         <h1 className='pb-3 font-bold text-2xl text-center'>flexbox</h1>
         sempre que vamos usar o flexbox antes de digitar o codigo, primeiro precisamos chama-lo. dessa forma : <br/>
         <b>1- 'flex flex-col'</b><br />
         usado para deixar o elemento em colunas<br />
         primeiro eu chamei o flex e depois eu o configurei dizendo que eu quero duas colunas:

         <div className='flex flex-col m-2'>
            <div className='w-16 h-16 bg-blue-500 mb-4'>1</div>
            <div className='w-16 h-16 bg-red-500 '>2</div>
         </div>

         <b>2- 'flex flex-row'</b><br />
         usado para deixar o elemento em linhas<br />
         primeiro eu chamei o flex e depois eu o configurei dizendo que eu quero meu elemento em uma linha  <br />

         <div className='flex flex-row m-2'>
            <div className='w-16 h-16 bg-blue-500 mr-4 '>1</div>
            <div className='w-16 h-16 bg-red-500 '>2</div>
         </div>

         <b>3- 'flex flex-wrap'</b><br />
         usado para deixar informar se eu quero que o elemento cai para a linha de baixo <br />
         primeiro eu chamei o flex e depois eu o configurei dizendo que eu quero meu elemento caia uma linha  <br />

         <div className='flex flex-wrap m-2'>
            <div className='w-96 h-16 bg-blue-500 mr-4 '>1</div>
            <div className='w-96 h-16 bg-red-500  mr-4'>2</div>
            <div className='w-96 h-16 bg-green-500 '>3</div>
            <div className='w-96 h-16 bg-orange-500 mt-4 '>4</div>
         </div>

         veja que como nao tem espaço para caber o quarto elemento na mesma linha ele cai para a proxima linha.

         <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/* justify-content */}
         <h1 className='pb-3 font-bold text-2xl text-center'>justify-content</h1>
         usado para justificar onde sera posicionados os elementos internos de um container, exemplos de justify-content:<br />
         - justify-start<br />
         - justify-center<br />
         - justify-between<br />
         - justify-end<br />  

         esses sao os mais usados, mas temos varios outros. <br /><br />
         exemplos:<br />

        <h3 className='pb-3 font-bold text- xl text-center'>justify-start</h3>
         <div class="flex justify-start ...">
          <div className= 'w-56 h-16 bg-blue-500 mr-4 '>1</div>
          <div className= 'w-56 h-16 bg-red-500 mr-4'>2</div>
          <div className= 'w-56 h-16 bg-green-500 mr-4'>2</div>
        </div><br/><br/>
        <h3 className='pb-3 font-bold text- xl text-center'>justify-center</h3>
         <div class="flex justify-center ...">
          <div className= 'w-56 h-16 bg-blue-500 mr-4 '>1</div>
          <div className= 'w-56 h-16 bg-red-500 mr-4'>2</div>
          <div className= 'w-56 h-16 bg-green-500 mr-4'>2</div>
        </div><br/><br/>
        <h3 className='pb-3 font-bold text- xl text-center'>justify-between</h3>
         <div class="flex justify-between ...">
          <div className= 'w-56 h-16 bg-blue-500 mr-4 '>1</div>
          <div className= 'w-56 h-16 bg-red-500 mr-4'>2</div>
          <div className= 'w-56 h-16 bg-green-500 mr-4'>2</div>
        </div><br/><br/>
        <h3 className='pb-3 font-bold text- xl text-center'>justify-end</h3>
         <div class="flex justify-end ...">
          <div className= 'w-56 h-16 bg-blue-500 mr-4 '>1</div>
          <div className= 'w-56 h-16 bg-red-500 mr-4'>2</div>
          <div className= 'w-56 h-16 bg-green-500 mr-4'>2</div>
        </div><br/><br/>

        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/* grid  */}
         <h1 className='pb-3 font-bold text-2xl text-center'>grid </h1>
         para o grid, nos temos muitas opçoes, sao elas :<br/>
         - grid-cols*quatidade (definir uma quantidade de colunas )<br />
         - grid-rows*quatidade (definir uma quantidade de linhas )<br />
         essas opçoes vao ser baseadas nas quantidades de elementos que voce criou <br/><br />

         exemplo:<br /> 

        <h3 className='pb-3 font-bold text- xl text-center'>grid-cols-2 (duas colunas)</h3>
        <div className='grid grid-cols-2'>
          <div className= ' h-16 bg-red-500 border border-black '>01</div>
          <div className= ' h-16 bg-red-500 border border-black '>02</div>
          <div className= ' h-16 bg-red-500 border border-black '>03</div>
          <div className= ' h-16 bg-red-500 border border-black'>04</div>
          <div className= ' h-16 bg-red-500 border border-black'>05</div>
          <div className= ' h-16 bg-red-500 border border-black'>06</div>
        </div><br/><br />
        - grid-cols-2: vai criar duas colunas iguais com a mesma quantidade de elementos em cada<br /><br />
      
        <h3 className='pb-3 font-bold text- xl text-center'>grid-rows-3 grid-flow-col gap-4 </h3>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 bg-blue-500 ">01</div>
          <div class="col-span-2 bg-blue-500 ">02</div>
          <div class="row-span-2 col-span-2 bg-blue-500 ">03</div>
        </div><br/>
        - grid: Define o elemento como um contêiner de grade.<br/>
        - grid-rows-3: Configura a grade para ter três linha <br/>
        - grid-flow-col: Define o fluxo da grade para preencher as colunas antes de passar para a próxima linha.<br />
        - gap-4: Define um espaçamento (gap) de 1rem (16px) entre os itens da grade.<br /><br />
          ai voce precisa entrar no elemento que voce quer que ocupe mais linhas ou mais colunas e configurar com 'col-span-quantidade'
          u 'row-span-quantidade'
          é recomendado ver a documentaçao para melhor entendimento, e tem muito mais varioes e opçoes.

          <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>resposividade </h1>

         <div>
           <h1 class="text-red-500 md:text-blue-800 lg:text-green-700 sm:text-base md:text-xl lg:text-2xl">
            testando responsividade mudando a cor e o tamanho do texto
          </h1>

          <br></br>

          <p>
            A responsividade no Tailwind CSS é gerenciada através de um sistema de breakpoints que permite aplicar diferentes 
            estilos com base no tamanho da tela. Tailwind usa um modelo "mobile-first", o que significa que as classes 
            padrão são aplicadas a dispositivos menores, e você pode usar prefixos para definir estilos para tamanhos 
            de tela maiores. Ou seja, o primeiro valor que voce colocar como padrao, sera aplicado para a menor tela possivel e
            os seguintes valores voce coloca para alterar os tamanhos maiores
            </p><br />  
          <p>
            Para usar a responsividade no tailwind nos temos 5 valores, sao eles:<br />
            sm - md - lg - xl - 2xl<br /> 
            agora vou detalhar mais para qual caso voce usara cada uma delas :<br /> <br /> 
            <h3>sm (small)</h3>
            <p>Largura: 640px</p>
            <p>Plataforma: Dispositivos móveis (smartphones) em modo retrato.</p><br /> 

            <h3>md (Medium)</h3>
            <p>Largura: 768px</p>
            <p>Plataforma: Tablets e dispositivos móveis maiores (smartphones) em modo paisagem.</p><br /> 

            <h3>lg (Large)</h3>
            <p>Largura: 1024px</p>
            <p>Plataforma: Tablets em modo paisagem e laptops menores.</p><br /> 
        
            <h3>xl (Extra Large)</h3>
            <p>Largura: 1280px</p>
            <p>Plataforma: Laptops e desktops com telas de tamanho médio.</p><br /> 
            
            <h3>2xl (2x Extra Large)</h3>
            <p>Largura: 1536px</p>
            <p>Plataforma: Monitores de desktop grandes e telas de alta resolução.</p>

            <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>hover, focus etc </h1><br />

         <p>hover e focus servem para estilizar elementos ao passar o mouse, focar e muito mais. Cada classe 
          de utilitário no Tailwind pode ser aplicada condicionalmente adicionando um modificador ao início do 
          nome da classe que descreve a condição que você deseja atingir.
         </p>
         <p>vamos ver agora o exemplo simples mas que pode ser usado para qualquer coisa. vamos usar o utilitario <strong>Hover </strong> 
          para trocar a cor de fundo quando passarmos o mouse por cima de um botao
         </p><br />

         <button className="bg-black p-2 rounded hover:bg-gray-600 mr-5 ">
             testando hover 
        </button> 

        <button className=" bg-black hover:bg-gray-600 focus:ring focus:ring-blue-200 p-2 rounded">
          testando focus
        </button> 
        <br /><br />
        <p>
          em resumo, o estado de <strong class="underline">hover</strong> serve para dar uma leve mudança quando o usuario passar com o mouse sobre algum determinado 
          lugar do site, pode ser em um botao, um link, uma imagem e etc
        </p>
        <p>
          ja o estado de  <strong class="underline">focus</strong>, É usado para melhorar a acessibilidade e a usabilidade, destacando elementos como campos de formulário, 
          botões, e links quando eles recebem foco. Geralmente por meio de navegação com teclado ou clique.
        </p>

        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Arquivo de configuraçao tailwind</h1><br />

         <p>O arquivo de configuração do Tailwind CSS, normalmente chamado de tailwind.config.js, é onde você pode personalizar as definições padrões 
          do Tailwind para adaptá-las às necessidades do seu projeto. Esse arquivo é gerado automaticamente quando você roda o comando npx tailwindcss 
          init. </p><br />
          <p>Quando gerado esse arquivo, ele nos tras 3 seçoes: (content, theme e  plugins)</p>
          <br />
          <h3>Explicação de Cada Seção</h3>
          <br />
          <p><strong>content :</strong> </p>
          <p>Propósito: Define quais arquivos o Tailwind deve "escutar" para gerar os estilos CSS.
          Por que isso é importante? O Tailwind funciona de forma otimizada. Ele só gera os estilos que são realmente usados no seu projeto. 
          Portanto, você precisa dizer ao Tailwind onde estão os arquivos que contêm classes que você usará, como HTML, JS, JSX, TS, etc.</p>
          <p><strong>- Por padrao quando voce gera o arquivo essa parte ja vem configurada</strong></p>
          <br />
          <p><strong>theme :</strong></p>
          <p>Propósito: Personaliza a aparência do seu projeto. Aqui, você pode ajustar as cores, fontes, espaçamentos, tamanhos, etc.
          ubseção extend: É onde você adiciona personalizações que "estendem" as configurações padrões do Tailwind. Se você não quiser substituir 
          totalmente uma configuração padrão, use extend.
          </p>
          <br />
          <p><strong>plugins :</strong></p>
          <p>Propósito: Permite adicionar plugins que extendem a funcionalidade do Tailwind. Existem vários plugins oficiais e da comunidade que você 
          pode usar para adicionar novas utilidades ou componentes.</p>


        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Dark mode(modo escuro)</h1><br />
        < div className={`h-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
            <header className="p-4">
               <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 rounded bg-blue-500 text-white"
                 >
                Toggle Dark Mode
              </button>
           </header>
           <main className="p-4">
               <h1 className="text-3xl font-bold">Hello, World!</h1>
          </main>
       </div>

       <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Componente Card</h1><br />
          <div className='container mx-auto px-4 py-8'>
              <h6 className='font-bold mb-2'>Componente card</h6>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <div className='w-full bg-gray-300 p-4 border-b border-gray-200'>
                      <h4 className='font-bold text-black'>topo</h4>
                  </div>
                  <div className='p-4 text-black'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem 
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s
                  </div>
                  <div className='w-full bg-gray-50 p-3 border-t border-gray-200 text-black'>
                    rodape
                  </div>
              </div>
          </div>

        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Componente Button</h1><br />
         <div>
          <button className='text-sm mr-2 bg-blue-700 px-4 py-1 rounded-lg text-white '>
               save
          </button>
          <button className='text-sm mr-2  bg-blue-700 px-6 py-2 rounded-lg text-white hover:bg-blue-800 '>
               save
          </button>
          <button className='text-base bg-blue-700 px-8 py-3 rounded-lg text-white hover:bg-blue-800 focus:ring focus:ring-white'>
               save
          </button>
         </div>
         <p className='mt-4'>
          Como da pra perceber eu criei tres botoes com tamanhos diferentes. mas o que diferencia eles nao é apenas o tamanho. O primeiro nao tem açao
          caso voce passe o mouse em cima, o segundo tem a açao quando voce passa o mouse e o terceiro tem essa açao e um adicional de quando voce
          clica no botao
         </p>

         <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Componente badge/tag   </h1><br />
         <p>
            Um componente badge (ou em português, "distintivo" ou "selo") é utilizado em interfaces de usuário para exibir informações pequenas e chamativas, 
            geralmente usadas para notificar o usuário sobre algo. Eles podem indicar contagens, status, ou destacar algum elemento específico.
         </p>
          <h3 className='mt-3 font-bold text-xl mb-3'>Exemplos: </h3>

          <div className='mb-2'>
            <div className='mb-2'>
              <div className='inline-flex items-center text-sm bg-green-400 px-1.5 py-0.5 rounded-md text-green-950 font-medium mr-2'>
                Ativo
              </div>
              <div className='inline-flex items-center text-sm bg-green-400 px-1.5 py-0.5 rounded-full text-green-950 font-medium'>
                Ativo
              </div>
            </div>
            <div  className='mb-2'>
              <div className='inline-flex items-center text-sm bg-red-400 px-1.5 py-0.5 rounded-md text-red-900 font-medium mr-2'>
                Inativo
              </div>
              <div className='inline-flex items-center text-sm bg-red-400 px-1.5 py-0.5 rounded-full text-red-900 font-medium'>
                Inativo
              </div>
            </div>
            <div className='mb-2'>
              <div className='inline-flex items-center text-sm bg-yellow-200 px-1.5 py-0.5 rounded-md text-yellow-700 font-medium mr-2'>
                Em progresso
              </div>
              <div className='inline-flex items-center text-sm bg-yellow-200 px-1.5 py-0.5 rounded-full text-yellow-700 font-medium'>
                Em progresso
              </div>
            </div>
          </div>

        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Componente input</h1><br />
         <p>
         O componente input é um dos elementos fundamentais em interfaces de usuário, usado para capturar dados do usuário. Ele representa um campo 
         onde o usuário pode digitar ou selecionar informações, como texto, números, senhas, e muito mais.
         </p>
         <h3 className='mt-3 font-bold text-xl mb-3'>Exemplos: </h3>
         <div className='space-y-4 inline-block'>
            <input 
               type='text' 
               placeholder='Digite seu nome'
              className='w-full px-2 py-1 rounded bg-gray-50 border-gray-500 border-4 focus:border-red-900 text-sm text-gray-900 placeholder-gray-500 focus:outline-none'
            />
            <input 
               type='text' 
               placeholder='Digite seu nome'
              className='w-full px-3 py-2 rounded bg-gray-50 border-gray-500 border-4 focus:border-red-900 text-base text-gray-900 placeholder-gray-500 focus:outline-none'
            />
            <input 
               type='text' 
               placeholder='Digite seu nome'
              className='w-full px-3 py-3 rounded bg-gray-50 border-gray-500 border-4 focus:border-red-900 text-lg text-gray-900 placeholder-gray-500 focus:outline-none'
            />
            <input 
               type='text' 
               placeholder='Digite seu nome'
              className='w-full px-5 py-4 rounded bg-gray-50 border-gray-500 border-4 focus:border-red-900 text-xl text-gray-900 placeholder-gray-500 focus:outline-none'
            />
            <input 
               type='text' 
               placeholder='Digite seu nome com transition'
              className='w-full px-6 py-5 rounded bg-gray-50 border-gray-500 border-4 focus:border-red-900 text-2xl text-gray-900 placeholder-gray-500 focus:outline-none transition duration-500 ease-in-out'
            />
         </div>

         <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Componente Dropdown</h1><br />
         <p>
         Um componente Dropdown (ou "menu suspenso") é um elemento de interface de usuário que permite ao usuário selecionar uma opção de uma lista 
         suspensa de itens. Ele é usado quando há múltiplas opções, mas o espaço na tela é limitado, ou para manter a interface limpa e organizada.
         </p>
         <br />
         {/* este exemplo eu peguei com chatgpt, mas no video o professor fez de outro jeito usando mais tailwind */}
          <h2 className='text-lg font-bold mb-3'>Exemplo pego no chatgpt: </h2>
         <div className='border border-gray-500 p-3'>
            <label htmlFor="fruits" className='mr-2'>Escolha uma fruta:</label>
              <select id="fruits" value={selectedOption} onChange={handleChange} className='bg-gray-800 rounded px-1 py-1' >
                  <option value="" disabled >
                      Selecione uma fruta
                  </option>
                  <option value="maçã">Maçã</option>
                  <option value="banana">Banana</option>
                  <option value="laranja">Laranja</option>
                  <option value="manga">Manga</option>
             </select>
           {selectedOption && (
           <div>
              <p>Você selecionou: {selectedOption}</p>
           </div>
           )}
        </div><br />
        <p>O exemplo da aula ficou um pouco confuso entao eu pesquisei pra ver outra forma</p>

        <br /><br />
         {/* linha para cortar espaçamento  */}
         <hr/><br/>
         {/*   */}
         <h1 className='pb-3 font-bold text-2xl text-center'>Login/cadastro </h1><br /> <br /> 
        
              <p>Quando criamos um componente de Login(que por nao ter tanta informaçao acaba sendo mais rapido e pratico) automaticamente nos ja temos 
                uma noçao a mais de como criar um componente de cadastro, porque segue a mesma logica porem com mais informaçoes.
              </p>
              <p>
                Como por exemplo: nome, idade, profissao etc
              </p>
              <br /> <br />

         <div className='flex justify-center'>
            <div className='bg-gray-100 w-2/5 p-6 rounded-lg shadow-xl space-y-4'>
                    <h6 className='font-bold text-black text-center mb-2 text-2xl'>Login</h6> 
                    <div>
                      <label className='text-black block'>E-mail: </label>
                      <input 
                        type='text'
                        id='email'
                        placeholder='Digite seu email'
                        className='w-full mt-1 bg-white border-gray-600 border-2 text-gray-700 px-3 py-1 rounded focus:border-blue-500 focus:outline-none trasition duration-500 ease-in-out'
                      />
                    </div>
                    <div>
                      <label className='text-black block'>Senha </label>
                      <input 
                        type='password'
                        id='email'
                        placeholder='Digite sua senha'
                        className='w-full mt-1 bg-white border-gray-600 border-2 text-gray-700 px-3 py-1 rounded focus:border-blue-500 focus:outline-none trasition duration-500 ease-in-out'
                      />
                    </div>
                    <div>
                      <button className='text-white bg-blue-500 px-3 py-2 w-full rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-800'>
                        Login
                      </button>
                    </div>
                </div>
              </div>
          

        <br /><br />
         {/* linha para cortar espaçamento  */}
         {/*   */}
          </p>
         </div>
        </div>
    </div>
  );
}

export default App;
