const dados = [
{q:'O preço estimado a partir das fotos é o preço final?', a:'O valor passado a partir das fotos é apenas uma estimativa para que você tenha um norte a respeito da complexidade e do valor do tratamento. O preço definitivo vem com a análise da documentação e confecção do planejamento do caso.'},
{q:'Qual o prazo de entrega após aprovação?', a:'O prazo é de 7 dias úteis de fabricação + prazo de entrega para sua cidade'},
{q:'Como envio um planejamento?', a:'Para solicitar este planejamento, você só precisa fazer o seguinte:<br>-Envio da documentação (escaneamento em formato .stl sem braquetes e panorâmica) via plataforma<br>-Preenchimento do formulário de solicitação de tratamento, onde teremos os detalhes necessários para realizar o planejamento: https://app.smiller.com.br/NovoPaciente<br>Com o formulário preenchido, retornaremos com o documento de planejamento do caso e os vídeos das movimentações em até 3 dias úteis.'},
{q:'Quais as formas de pagamento?', a:'Temos as seguintes formas de pagamento para alinhadores hoje:<br>- À vista no pix com 10% de desconto<br> -Em até 5x no boleto ou cartão de crédito<br> -Em até 12x no cartão de crédito ou boleto com entrada.'},
{q:'Como solicitar ajustes no planejamento?', a:'Agora você pode solicitar os ajustes do planejamento diretamente na plataforma. No site app.smiller.com.br/meuspacientes , no perfil do paciente'},
{q:'Qual elástico devo utilizar?', a:'Segue um guia sucinto sobre quais os tipos de elástico mais recomendados para cada tipo de movimentação (lembrando que a escolha do elástico envolve análise clínica do paciente pelo ortodontista):<br>- Correção anteroposterior: 1/4 ou 3/16 Força Média<br>- Intercuspidação Cross-Bite: 1/8 Força  Média<br>- Rotação: 1/8 Força Média<br>- Sistema binários: 1/8 Força Média<br>- Extrusão e Intrusão: 1/8 Força Leve'},
{q:'Posso escanear com bráquetes?', a:'Pedimos que realizem os escaneamentos sem braquetes, pois não conseguimos remove-los digitalmente no nosso Software'},
{q:'Posso escanear com contenções?', a:'O time consegue retirar a contenção metálica digitalmente, mas recomendamos que escaneie a boca do paciente já sem contenções. Isso porque alterar o modelo digital manualmente pode acarretar diferenças entre o real e o virtual, o que influencia no encaixe das placas na boca.'},
{q:'Como solicitar contenções?', a:'-Envio do escaneamento (sem braquetes) via plataforma após preenchimento do formulário <br>- Preenchimento do formulário de solicitação de tratamento, marcando a opção Contenções: https://app.smiller.com.br/MeusPacientes'},
{q:'Como funcionam as contençoes?', a:'As contenções da Smiller são placas semelhantes às dos alinhadores, mas um pouco mais espessas. Nossa recomendação é a utilização delas durante a noite por aproximadamente 1 ano e meio e que a troca seja feita de 6 em 6 meses, por isso indicamos a aquisição do pacote com 3 pares.'},
{q:'Qual prazo de entrega das contençoes?', a:'Prazo de 5 dias úteis de fabricação + prazo de entrega para sua cidade.'},
{q:'Como solicitar placa de bruximo?', a:'-Envio do escaneamento via plataforma<br>- Preenchimento do formulário de solicitação de tratamento, marcando a opção "Placas de Bruxismo": https://app.smiller.com.br/NovoPaciente<br>Nossas placas de bruxismo são feitas a base de resina acrílica e o valor de cada placa é R$399,90<br>O prazo de fabricação é de 7 dias úteis + o prazo de entrega para sua cidade.'},
{q:'Como solicitar placa de clareamento?', a:'O Kit de clareamento sai no valor de R$119,90 e acompanha 3 seringas de gel clareador Opalescence 15% da Ultradent (1,2 ml por seringa) e 1 par de placas Smiller para clareamento<br>Instruções para solicitação de Clareamento<br>- Envio do escaneamento (sem braquetes) via email: exames@smiller.com.br<br>- Preenchimento do formulário de solicitação de tratamento, marcando a opção "Clareamento": https://app.smiller.com.br/NovoPaciente<br>Prazo: 5 dias úteis para fabricação + prazo de entrega para sua cidade'},
{q:'Como acompanhar o status do meu caso?', a:'Acompanhe pela plataforma da Smiller https://app.smiller.com.br/meuspacientes ou solicite ao suporte o status de fabricação e envio.'},
{q:'O que fazer em caso de perda de placa pelo paciente?', a:'Recomendamos ao paciente usar a placa anterior até orientação. Se necessário, solicite uma reposiçao da placa. Para reposição de placas cobramos um valor de 35,9 por unidade de placa.'},
{q:'Como funciona o refinamento?', a:'Nosso refinamento padrão compreende na quantidade de placas total do pacote pago menos a quantidade de placas programadas para o seu planejamento inicial aprovado. Por exemplo: se o planejamento tem 40 placas (dentro da faixa de 32 a 51), sobram 11 placas (51 - 40). Essas 11 podem ser usadas no refinamento sem custo extra.'},
{q:'Como solicitar refinamento?', a:'Para solicitar o Refinamento do seu caso precisamos de um novo escaneamento, que pode ser enviado no nosso e-mail exames@smiller.com.br e que você preencha a solicitação de refinamento na plataforma: https://app.smiller.com.br/ Segue vídeo de como fazer a solicitação: https://www.youtube.com/watch?v=rvlutnbhPkE'}, 
{q:'Como é realizado o envio das placas?', a:'Por padrão, nós enviamos os alinhadores em blocos de cerca de 5 pares. Isso diminui a chance de perda de placas, faz com que seja mais fácil realizarmos ajustes de rota e facilita nossa operação como um todo. Para solicitar novas placas assim que precisar, você pode solicitar no nosso site app.smiller.com.br/MeusPacientes.Como solicitar placas na plataforma: https://www.youtube.com/watch?v=8HOZ6qxANO8'},
{q:'Pode ser feito o envio de todas as placas?', a:'Para que possamos enviar todas as placas do caso do paciente, é necessário que o pagamento seja feito à vista boleto ou pix e solicitado via atendimento. Lembrando que o doutor também deve avisar se já quer o envio das contenções junto com os alinhadores (caso tenha solicitado na aprovação). Além disso, o prazo de fabricação dos alinhadores pode aumentar dependendo da quantidade de placas a serem produzidas.'},
{q:'Como funciona o Smiller Flow?', a:'<strong>Condições de pagamento e entrega</strong><br>1 placa por mês (30 dias de uso).<br> Mensalidade: R$ 60,00 por placa (total R$ 120,00/mês).<br> Entrada: R$ 380,00 — primeira parcela: R$ 500,00 (R$ 380,00 + R$ 120,00).<br><br><strong>Pagamento e entrega</strong><br>Pagamento 1x/mês via boleto.<br> Entrega 1x/mês, mediante ao pagamento.<br><br><strong>Planejamento</strong><br>Pedido de planejamento normal; escolha definida na hora da aprovação'},
{q:'Qual o canal oficial para dúvidas?', a:'Todas as dúvidas devem ser encaminhadas via WhatsApp ao suporte Smiller.'},
{q:'Podemos emitir boleto no nome do paciente?', a:'Infelizmente não podemos faturar ou emitir nota para o paciente diretamente, por questões regulatórias. As cobranças e as NFs são sempre para o dentista ou para a clínica.'},
{q:'Como funciona o fluxo de solicitação?', a:'Nosso fluxo funciona da seguinte forma. Caso você queira já ter uma noção de preço e duração de algum caso de forma mais rápida, pode nos mandar fotos da boca do paciente por aqui mesmo, que nosso time consegue fazer uma rápida pré-avaliação. Com isso, já forneceremos estimativa de preço e duração do caso para você.<br><br>Porém, a forma de obter um preço e uma duração definitivos é solicitando o planejamento completo do caso conosco. Ele basicamente é um documento que enviamos para você propondo uma estratégia de tratamento, mostrando um antes e depois e trazendo instruções adicionais. É uma ótima maneira de convencer o paciente a fechar o tratamento, pois ele consegue ver detalhes de como ficará o resultado através de uma simulação em software. Esse planejamento não tem custo! <br><br>Para solicitar este planejamento, você só precisa fazer o seguinte:<br>-Envio da documentação (escaneamento sem braquetes em formato stl e panorâmica) via formulário na plataforma<br>-Preenchimento do formulário de solicitação de tratamento, onde teremos os detalhes necessários para realizar o planejamento: https://app.smiller.com.br/NovoPaciente<br><br>Com isso, nosso time fará o planejamento e nós enviaremos para você por aqui mesmo em 3 dias úteis.<br><br>O passo seguinte é você analisar a proposta, e assim que aprovar, ela servirá como base para confeccionarmos os alinhadores. <br><br>Em geral, a fabricação e os envios são feitos em blocos de cerca de 5 pares de placas, então para casos mais extensos você terá mais de um bloco de envio que você pode nos solicitar assim que for necessário. <br><br>Assim que o planejamento é aprovado, temos um prazo de 7 dias úteis de fabricação e mais o prazo de envio da transportadora para que você receba os alinhadores.Me avise se ficou alguma dúvida.'},
{q:'Como funciona alinhadores para crianças?', a:'Os casos de crianças são mais complexos devido à troca de dentição, assim como a erupção dos elementos permanentes. Esses fatos podem levar às alterações na boca,fazendo com que haja grandes chances de mau encaixe de placas e a necessidade de recorrentes replanejamentos. Por isso, para casos de crianças o mais indicado é o plano ilimitado, os pacientes têm direito a uma quantidade ilimitada de placas e quantos replanejamentos forem necessários por um período de 5 anos.<br>IMPORTANTE:Alguns casos de dentição mista podem ter contra indicações para tratamento com alinhadores.<br>-Dentes decíduos normalmente não podem ser movimentados (dependendo da movimentação, há limitações)<br>- Dentes em erupção podem tornar o tratamento imprevisível, por afetar a movimentação dos vizinhos.<br>-Pelo menos dois terços das raízes precisam estar formados'},
{q:'Qual o procedimento de instalação dos attachments?', a:'-Ataque ácido nos dentes que terão attachments (ver na guia de attachments os locais de protuberância)<br>- Aplicação de sistema adesivo <br>- Aplicação de resina nas protuberâncias das guias<br>- Colocação das guias no paciente<br>- Fotopolimerização<br>- Tirar excessos e ver se as primeiras placas encaixam certinho.<br><br><strong>Dicas para instalação de attachments:</strong><br>- Repartir a guia em hemiarcos para reduzir a retenção da guia<br>- utilizar resina composta com carga<br>- Utilizar isolante hidrossolúvel (KY) na região dos attachments (na placa)'},
{q:'Qual resina utilizar para os attachments?', a:'Geralmente recomendamos resinas com carga, como a Z250 e a Z350 da 3M. '},
{q:'Para que serve o mordedor e gancho?', a:'O mordedor serve para o paciente mastigar para melhorar o encaixe do alinhador. Além disso, um outro benefício é potencializar a ação dos alinhadores se o paciente mastigar essa peça de 15 a 20 minutos por dia. Já o gancho auxilia na retirada dos alinhadores da boca.'},
{q:'Como funciona o credenciamento plus?', a:'O Smiller Plus é adquirido através de um pagamento único de R$ 399,90 e o doutor receberá:<br>- Um kit expositor com um modelo em acrílico para demonstração, junto com a nossa caixa do paciente e um calibrador interproximal para auxiliar na realização dos desgastes durante os tratamentos;<br>- Um kit de mídias com fotos e vídeos para divulgação nas redes sociais e utilização em campanhas de marketing digital.<br>- Um treinamento clínico, no qual nossa ortodontista responsável ministra uma aula ao vivo falando sobre os principais temas ligados ao tratamento com os nossos alinhadores;<br>- Um treinamento comercial, no qual discutimos juntos estratégias de venda, precificação e divulgação dos alinhadores para conseguir novos pacientes;<br>- Um desconto no primeiro tratamento no valor de 299,90 como restituição do valor investido na aquisição do plano;'},
{q:'Porque a panorâmica é importante?', a:'A radiografia panorâmica é fundamental no planejamento de tratamentos com alinhadores ortodônticos, pois fornece uma visão ampla e detalhada das estruturas ósseas e dentárias. Essa imagem permite ao ortodontista avaliar a posição, forma e saúde das raízes dentárias, o que é essencial para definir a viabilidade dos movimentos planejados. Além disso, a radiografia panorâmica facilita a identificação de anomalias e problemas ocultos e auxilia no planejamento de extrações, quando necessário, garantindo um tratamento seguro e eficaz. Por isso, essa documentação é de envio obrigatório para o nosso planejamento.'},
{q:'O que é Triple Flex?', a:'O Smiller Triple Flex é nossa opção premium de material — conta com a tecnologia tripla camada, o que há de mais moderno em alinhadores.<br>Essa combinação inteligente garante forças mais constantes ao longo do tempo, trazendo mais previsibilidade para o seu tratamento e muito mais conforto para o paciente. Isso porque a força é distribuída de forma mais equilibrada, reduzindo aquele desconforto comum nos primeiros dias de uso.<br>É composto por duas camadas de poliuretano (PU) e uma de PETG ao centro, formando uma estrutura flexível e confiável.<br> Importante: nossa linha Classic continua sendo uma excelente opção — segura, eficiente e indicada para a maioria dos casos.<br>O Triple Flex é ideal para quem busca um algo a mais: mais controle em casos complexos, maior conforto para pacientes sensíveis e o melhor desempenho nos tratamentos mais desafiadores.'},
{q:'Para quais casos eu utilizo a Triple Flex?', a:'O uso da Triple Flex é uma escolha do dentista, e deve ser feita principalmente com base na avaliação do perfil do paciente.Se for um paciente mais sensível ou queixoso, por exemplo, a TripleFlex pode ser uma ótima opção, já que, por ser mais flexível, proporciona um maior conforto durante o uso.Além disso, como já mencionei, recomendamos esse material também para casos mais complexos, com movimentações mais imprevisíveis, apinhamento severo, por exemplo.Vale reforçar que ambos os materiais entregam o mesmo resultado final, portanto o principal fator a ser analisado é realmente o perfil individual do paciente.'},
{q:'Preços de produtos avulsos', a:'<br><br><strog>-Estojinho:</strong>R$49,90<br><strog>-Unidade de placa:</strong> R$35,90<br><strog>-Kit paciente(mordedor e gancho):</strong>R$10,00<br><strog>-Somente placas de clareamento:</strong>R$89,90'},
{q:'Plano ilimitado x Refinamento ilimitado', a:'O Plano Ilimitado é indicado para casos mais complexos, onde são necessárias 71 placas ou mais. Nesse plano, o paciente tem direito a uma quantidade ilimitada de placas e diferentes tipos de planejamentos, por um período de 5 anos.<br><br>Já o refinamento ilimitado que oferecemos é voltada para casos mais simples, que não atingem a quantidade de placas do plano ilimitado. Nessa condição, o dentista também pode garantir refinamentos ilimitados durante 5 anos, desde que siga a proposta inicial do tratamento.'},
{q:'Como precificar?', a:'A precificação dos tratamentos varia bastante de acordo com diferentes aspectos como localização do consultório e perfil dos pacientes. Nós também deixamos bem livre para nossos parceiros precificarem da forma que acharem mais adequada!<br><br>No entanto, vemos a maioria de nossos parceiros cobrarem em média de 2x a 3x o valor de custo do tratamento, com um valor de  entrada e o parcelamento do restante do valor de acordo com a duração do caso.'}, 
{q:'Porque meus casos precisam de refinamento?', a:'Em nosso protocolo de tratamento, o planejamento inicial é cuidadosamente elaborado com o objetivo de alcançar os resultados desejados sem a necessidade de refinamentos. No entanto, como profissionais da área, compreendemos que cada organismo responde de maneira única ao tratamento. Fatores biológicos individuais, variações no tempo de uso diário dos alinhadores e outras particularidades podem fazer com que os dentes não se movimentem exatamente conforme o previsto inicialmente.<br>É importante ressaltar que cerca de 20 a 30% dos casos requerem ajustes no planejamento original para garantir a excelência dos resultados finais. Esta é uma característica intrínseca ao sistema de alinhadores, que difere da ortodontia convencional - onde os ajustes podem ser feitos durante as consultas sem necessidade de nova documentação. O refinamento não representa falha no tratamento, mas sim nosso compromisso com a perfeição do resultado.'}, 
{q: 'Como exportar do iTero?', a: 'Na aba de Pedidos, clique no botão Exportar.<br>Uma janela vai abrir, onde você selecionará as seguintes especificações:<br>- Tipo de exportação: Concha Aberta<br>- Formato de dados: File Per Arch (arcos orientados em oclusão)<br>- Tipo de arquivo: STL (sem cor)<br>Não precisa ocultar o nome do paciente. Em seguida, basta clicar em Exportar.'},
{q:'Porque não aceitamos escaneamentos com braquetes?', a:'Pedimos que o paciente realize escaneamento sem bráquetes, pois mesmo que retiremos cada um deles no modelo digital, o formato dos dentes pode ficar diferente em relação ao formato real. Como isso pode causar um mau encaixe dos alinhadores, por isso não aceitamos escaneamentos com braquetes.<br><br>Entendemos a preocupação em relação aos pacientes que estão migrando de tratamentos com bráquetes para alinhadores. De fato, conseguimos remover os bráquetes na imagem STL, mas é importante destacar que esse processo pode resultar em algumas deformações, o que pode comprometer o encaixe da placa. Além disso, em alguns casos, o software que utilizamos bloqueia a remoção, pois a anatomia dos dentes pode não ser visualizada com clareza suficiente após a remoção dos bráquetes.Outro ponto a considerar é que esse processo demanda um tempo significativo para ser realizado com precisão.'},
{q:'Como exportar do iTero?', a:' Na aba de Pedidos, clique no botão Exportar.Uma janela vai abrir, onde você selecionará as seguintes especificações: <br>- Tipo de exportação: Concha Aberta<br> Formato de dados: File Per Arch (arcos orientados em oclusão)<br> Tipo de arquivo: STL (sem cor) <br>Não precisa ocultar o nome do paciente. Em seguida, basta clicar em Exportar.'}, 
{q:'Aceitamos gesso para realização do planejamento?', a: 'Não costumamos trabalhar com gesso, apenas com escaneamento. Quando fazemos um caso a partir do gesso, precisamos escaneá-lo e a qualidade fica inferior a um caso confeccionado a partir do escaneamento intraoral. O gesso sofre deformação conforme a temperatura e os alinhadores podem não encaixar tão bem.'},
{q:'Como  funciona o SmillerPay?', a:'Na etapa de aprovação do caso na plataforma, você poderá selecionar a opção “Cobrar o paciente”. Ao escolher essa modalidade, basta informar o valor total do tratamento, e a Smiller se encarrega do restante:<br><br>1- Você informa o valor total do tratamento diretamente na plataforma na hora da aprovação.<br><br>2 - Nós geramos automaticamente um link de pagamento personalizado no nome do paciente, com opções de PIX à vista ou cartão de crédito em até 18x.<br><br>3- Nessa etapa, será necessário preencher alguns dados para o cadastro do dentista e do pagador (paciente ou responsável). <br><br>4- Após a confirmação, você receberá o seu lucro de forma antecipada, enquanto a Smiller assume toda a gestão financeira, incluindo a cobrança ao paciente.<br><br>Com isso, você não precisa se preocupar com inadimplência, controle de boletos ou acompanhamento de pagamentos.'},
{q: 'Como aprovar o meu caso?', a:'Agora as aprovações estão sendo feitas diretamente pela plataforma.<br>Site para acesso: https://app.smiller.com.br/MeusPacientes'},
];


function highlight(text, term) {
  if (!term) return text;
  const re = new RegExp(`(${term})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function htmlToPlainText(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = (html || '').replace(/<br\s*\/?>(gi)/, '\n');
  return tmp.textContent || tmp.innerText || '';
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    return true;
  } catch {
    return false;
  }
}


function render(lista, termo) {
  const root = document.getElementById('faqs');
  root.innerHTML = '';
  if (lista.length === 0) {
    root.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    return;
  }

  lista.forEach((item) => {
    const d = document.createElement('details');

    const s = document.createElement('summary');
    s.innerHTML = highlight(item.q, termo);

    const p = document.createElement('p');
    p.innerHTML = highlight(item.a, termo);

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.marginTop = '8px';

    const btnCopy = document.createElement('button');
    btnCopy.textContent = 'Copiar';
    btnCopy.className = 'copy-btn';

    btnCopy.addEventListener('click', async (ev) => {
      ev.stopPropagation();
      const plain = htmlToPlainText(item.a);
      const ok = await copyText(plain);
      const old = btnCopy.textContent;
      btnCopy.textContent = ok ? 'Copiado!✅' : 'Falhou ❌ :(';
      setTimeout(() => (btnCopy.textContent = old), 1000);
    });

    actions.appendChild(btnCopy);

    d.appendChild(s);
    d.appendChild(p);
    d.appendChild(actions);

    d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('#faqs details').forEach((det) => {
        if (det !== d) det.removeAttribute('open');
      });
    }
  });

    root.appendChild(d);
  });
}


function filtrar() {
  const termo = (document.getElementById('busca').value || '').toLowerCase();
  const res = dados.filter((x) => (x.q + ' ' + x.a).toLowerCase().includes(termo));
  render(res, termo);
}

render(dados, '');
