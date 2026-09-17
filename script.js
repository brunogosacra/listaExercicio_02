const exercicios = [
  {
    id: 1,
    title: "Classificação de consumo de energia elétrica",
    block: "Condicionais",
    description: "Informe o consumo mensal em kWh para descobrir sua classificação.",
    campos: [
      {
        id: "consumo",
        label: "Consumo mensal em kWh:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const consumo = Number(dados.consumo);

      if (consumo < 0) {
        return "Informe um consumo válido.";
      }

      if (consumo <= 100) {
        return "Consumo baixo.";
      }

      if (consumo <= 200) {
        return "Consumo moderado.";
      }

      if (consumo <= 400) {
        return "Consumo alto.";
      }

      return "Consumo muito alto.";
    }
  },

  {
    id: 2,
    title: "Elegibilidade para bolsa acadêmica",
    block: "Condicionais",
    description: "Informe a média, a frequência e a renda familiar.",
    campos: [
      {
        id: "media",
        label: "Média escolar:",
        tipo: "number"
      },
      {
        id: "frequencia",
        label: "Frequência em porcentagem:",
        tipo: "number"
      },
      {
        id: "renda",
        label: "Renda familiar:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const media = Number(dados.media);
      const frequencia = Number(dados.frequencia);
      const renda = Number(dados.renda);

      if (
        media >= 7 &&
        frequencia >= 75 &&
        renda <= 2000
      ) {
        return "Aluno elegível para a bolsa acadêmica.";
      }

      return "Aluno não atende aos critérios da bolsa.";
    }
  },

  {
    id: 3,
    title: "Triagem de prioridade em atendimento",
    block: "Condicionais",
    description: "Informe a idade e se a pessoa possui prioridade.",
    campos: [
      {
        id: "idade",
        label: "Idade:",
        tipo: "number"
      },
      {
        id: "prioridade",
        label: "Possui prioridade?",
        tipo: "select",
        opcoes: ["Sim", "Não"]
      }
    ],
    resolver: (dados) => {
      const idade = Number(dados.idade);

      if (dados.prioridade === "Sim" && idade >= 60) {
        return "Atendimento prioritário central.";
      }else if(dados.prioridade === "Sim" && idade < 60){
        return "Atendimento prioritário.";
      }

      return "Atendimento comum.";
    }
  },

  {
    id: 4,
    title: "Autorização de acesso a laboratório",
    block: "Condicionais",
    description: "Verifique matrícula, treinamento e horário permitido.",
    campos: [
      {
        id: "matricula",
        label: "Está matriculado?",
        tipo: "select",
        opcoes: ["Sim", "Não"]
      },
      {
        id: "treinamento",
        label: "Possui treinamento?",
        tipo: "select",
        opcoes: ["Sim", "Não"]
      },
      {
        id: "horario",
        label: "Está no Horário permitido?",
        tipo: "select",
        opcoes: ["Sim", "Não"]
      }
    ],
    resolver: (dados) => {
      if (
        dados.matricula === "Sim" &&
        dados.treinamento === "Sim" &&
        dados.horario === "Sim"
      ) {
        return "Acesso autorizado ao laboratório.";
      }

      return "Acesso negado.";
    }
  },

  {
    id: 5,
    title: "Cálculo de tarifa de estacionamento",
    block: "Condicionais",
    description: "Informe quantas horas o veículo permaneceu estacionado.",
    campos: [
      {
        id: "horas",
        label: "Horas de permanência:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const horas = Number(dados.horas);

      if (horas <= 0) {
        return "Informe um período válido.";
      }

      let valor = 10;

      if (horas > 1) {
        valor += (horas - 1) * 5;
      }

      return `Valor do estacionamento: R$ ${valor.toFixed(2)}`;
    }
  },

  {
    id: 6,
    title: "Desconto progressivo em loja",
    block: "Condicionais",
    description: "Informe o valor da compra e se o cliente é fidelizado.",
    campos: [
      {
        id: "compra",
        label: "Valor da compra:",
        tipo: "number"
      },
      {
        id: "fidelidade",
        label: "Cliente fidelizado?",
        tipo: "select",
        opcoes: ["Sim", "Não"]
      }
    ],
    resolver: (dados) => {
      const compra = Number(dados.compra);

      if (compra <= 0) {
        return "Informe um valor válido.";
      }

      let desconto = 0;

      if (compra >= 500) {
        desconto = 20;
      } else if (compra >= 200) {
        desconto = 10;
      }

      if (dados.fidelidade === "Sim") {
        desconto += 5;
      }

      const valorFinal = compra - compra * desconto / 100;

      return `Desconto aplicado: ${desconto}%\nValor final: R$ ${valorFinal.toFixed(2)}`;
    }
  },

  {
    id: 7,
    title: "Validação de nota e situação acadêmica",
    block: "Condicionais",
    description: "Informe a nota final do estudante.",
    campos: [
      {
        id: "nota",
        label: "Nota final:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const nota = Number(dados.nota);

      if (nota < 0 || nota > 10) {
        return "Nota inválida. Use valores entre 0 e 10.";
      }

      if (nota >= 7) {
        return "Aluno aprovado.";
      }

      if (nota >= 5) {
        return "Aluno em recuperação.";
      }

      return "Aluno reprovado.";
    }
  },

  {
    id: 8,
    title: "Escolha de plano de internet",
    block: "Condicionais",
    description: "Informe o consumo mensal e a quantidade de dispositivos.",
    campos: [
      {
        id: "consumo",
        label: "Consumo mensal em GB:",
        tipo: "number"
      },
      {
        id: "dispositivos",
        label: "Quantidade de dispositivos:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const consumo = Number(dados.consumo);
      const dispositivos = Number(dados.dispositivos);

      if (consumo > 300 || dispositivos > 8) {
        return "Plano recomendado: Internet Ultra.";
      }

      if (consumo > 100 || dispositivos > 4) {
        return "Plano recomendado: Internet Família.";
      }

      return "Plano recomendado: Internet Básica.";
    }
  },

  {
    id: 9,
    title: "Alerta de estoque",
    block: "Condicionais",
    description: "Informe a quantidade atual e a capacidade máxima do estoque.",
    campos: [
      {
        id: "estoque",
        label: "Quantidade atual:",
        tipo: "number"
      },
      {
        id: "maximo",
        label: "Capacidade máxima:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const estoque = Number(dados.estoque);
      const maximo = Number(dados.maximo);

      if (estoque < maximo * 0.2) {
        return "Estoque crítico.";
      }

      if (estoque > maximo * 0.8) {
        return "Estoque em excesso.";
      }

      return "Estoque adequado.";
    }
  },

  {
    id: 10,
    title: "Conversor de temperatura",
    block: "Condicionais",
    description: "Informe uma temperatura em Celsius para convertê-la em Fahrenheit.",
    campos: [
      {
        id: "temperatura",
        label: "Temperatura em Celsius:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const celsius = Number(dados.temperatura);
      const fahrenheit = celsius * 9 / 5 + 32;

      return `${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F.`;
    }
  },

  {
    id: 11,
    title: "Aprovação de crédito didático",
    block: "Condicionais",
    description: "Informe a renda e o valor solicitado.",
    campos: [
      {
        id: "renda",
        label: "Renda mensal:",
        tipo: "number"
      },
      {
        id: "valor",
        label: "Valor solicitado:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const renda = Number(dados.renda);
      const valor = Number(dados.valor);

      if (valor <= renda * 0.3) {
        return "Crédito aprovado na simulação.";
      }

      return "Crédito não aprovado na simulação.";
    }
  },

  {
    id: 12,
    title: "Controle de velocidade",
    block: "Condicionais",
    description: "Informe a velocidade registrada e o limite da via.",
    campos: [
      {
        id: "velocidade",
        label: "Velocidade registrada:",
        tipo: "number"
      },
      {
        id: "limite",
        label: "Limite da via:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const velocidade = Number(dados.velocidade);
      const limite = Number(dados.limite);

      if (velocidade <= limite) {
        return "Velocidade dentro do limite.";
      }

      return `Velocidade acima do limite em ${velocidade - limite} km/h.`;
    }
  },

  {
    id: 13,
    title: "Avaliação de desempenho de servidor",
    block: "Condicionais",
    description: "Informe os percentuais de uso da CPU e da memória.",
    campos: [
      {
        id: "cpu",
        label: "Uso da CPU (%):",
        tipo: "number"
      },
      {
        id: "memoria",
        label: "Uso da memória (%):",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const cpu = Number(dados.cpu);
      const memoria = Number(dados.memoria);

      if (cpu >= 90 || memoria >= 90) {
        return "Desempenho crítico.";
      }

      if (cpu >= 70 || memoria >= 70) {
        return "Desempenho requer atenção.";
      }

      return "Desempenho normal.";
    }
  },

  {
    id: 14,
    title: "Validação de triângulo",
    block: "Condicionais",
    description: "Informe os três lados de um triângulo.",
    campos: [
      {
        id: "a",
        label: "Primeiro lado:",
        tipo: "number"
      },
      {
        id: "b",
        label: "Segundo lado:",
        tipo: "number"
      },
      {
        id: "c",
        label: "Terceiro lado:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const a = Number(dados.a);
      const b = Number(dados.b);
      const c = Number(dados.c);

      if (
        a <= 0 ||
        b <= 0 ||
        c <= 0 ||
        a + b <= c ||
        a + c <= b ||
        b + c <= a
      ) {
        return "Os valores não formam um triângulo válido.";
      }

      if (a === b && b === c) {
        return "Triângulo equilátero.";
      }

      if (a === b || a === c || b === c) {
        return "Triângulo isósceles.";
      }

      return "Triângulo escaleno.";
    }
  },

  {
    id: 15,
    title: "Cálculo de imposto simulado",
    block: "Condicionais",
    description: "Informe a renda mensal para calcular um imposto fictício.",
    campos: [
      {
        id: "renda",
        label: "Renda mensal:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const renda = Number(dados.renda);
      let aliquota = 0;

      if (renda > 5000) {
        aliquota = 20;
      } else if (renda > 3000) {
        aliquota = 15;
      } else if (renda > 1500) {
        aliquota = 10;
      }

      const imposto = renda * aliquota / 100;

      return `Alíquota: ${aliquota}%\nImposto: R$ ${imposto.toFixed(2)}`;
    }
  },

  {
    id: 16,
    title: "Classificação de índice de qualidade",
    block: "Condicionais",
    description: "Informe um índice entre 0 e 100.",
    campos: [
      {
        id: "indice",
        label: "Índice de qualidade:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const indice = Number(dados.indice);

      if (indice < 0 || indice > 100) {
        return "Índice inválido.";
      }

      if (indice >= 80) {
        return "Qualidade excelente.";
      }

      if (indice >= 60) {
        return "Qualidade boa.";
      }

      if (indice >= 40) {
        return "Qualidade regular.";
      }

      return "Qualidade ruim.";
    }
  },

  {
    id: 17,
    title: "Regras de frete",
    block: "Condicionais",
    description: "Informe o valor da compra e a região de entrega.",
    campos: [
      {
        id: "compra",
        label: "Valor da compra:",
        tipo: "number"
      },
      {
        id: "regiao",
        label: "Região:",
        tipo: "select",
        opcoes: ["Sul", "Sudeste", "Centro-Oeste", "Norte", "Nordeste"]
      }
    ],
    resolver: (dados) => {
      const compra = Number(dados.compra);

      if (compra >= 300) {
        return "Frete grátis.";
      }

      const valores = {
        Sul: 20,
        Sudeste: 15,
        "Centro-Oeste": 25,
        Norte: 40,
        Nordeste: 30
      };

      return `Valor do frete: R$ ${valores[dados.regiao].toFixed(2)}`;
    }
  },

  {
    id: 18,
    title: "Monitoramento semanal de consumo",
    block: "Estruturas de repetição",
    description: "Informe sete consumos separados por vírgula.",
    campos: [
      {
        id: "valores",
        label: "Sete consumos:",
        tipo: "text",
        placeholder: "10, 20, 15, 30, 25, 18, 22"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores
        .split(",")
        .map(Number)
        .filter((valor) => !Number.isNaN(valor));

      if (valores.length !== 7) {
        return "Informe exatamente sete valores separados por vírgula.";
      }

      const total = valores.reduce((soma, valor) => soma + valor, 0);
      const media = total / valores.length;

      return `Total: ${total}\nMédia: ${media.toFixed(2)}\nMaior: ${Math.max(...valores)}\nMenor: ${Math.min(...valores)}`;
    }
  },

  {
    id: 19,
    title: "Tabuada personalizada",
    block: "Estruturas de repetição",
    description: "Informe um número para gerar sua tabuada.",
    campos: [
      {
        id: "numero",
        label: "Número:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const numero = Number(dados.numero);
      let resultado = "";

      for (let i = 1; i <= 10; i++) {
        resultado += `${numero} × ${i} = ${numero * i}\n`;
      }

      return resultado;
    }
  },

  {
    id: 20,
    title: "Contagem regressiva",
    block: "Estruturas de repetição",
    description: "Informe um número inicial para realizar a contagem regressiva.",
    campos: [
      {
        id: "inicio",
        label: "Número inicial:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const inicio = Number(dados.inicio);
      const valores = [];

      for (let i = inicio; i >= 0; i--) {
        valores.push(i);
      }

      return valores.join(" → ");
    }
  },

  {
    id: 21,
    title: "Soma de valores",
    block: "Estruturas de repetição",
    description: "Informe valores separados por vírgula para somá-los.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "5, 10, 20, 15"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores
        .split(",")
        .map(Number);

      if (valores.some((valor) => Number.isNaN(valor))) {
        return "Informe somente números separados por vírgula.";
      }

      const soma = valores.reduce((total, valor) => total + valor, 0);

      return `Soma total: ${soma}`;
    }
  },

  {
    id: 22,
    title: "Tentativas de autenticação",
    block: "Estruturas de repetição",
    description: "Informe a senha. O sistema permite três tentativas.",
    campos: [
      {
        id: "senha",
        label: "Senha:",
        tipo: "password"
      }
    ],
    resolver: (dados) => {
      if (dados.senha === "1234") {
        return "Autenticação realizada com sucesso.";
      }

      return "Senha incorreta. Limite de três tentativas aplicado na simulação.";
    }
  },

  {
    id: 23,
    title: "Números pares e ímpares",
    block: "Estruturas de repetição",
    description: "Informe o início e o fim de um intervalo.",
    campos: [
      {
        id: "inicio",
        label: "Início:",
        tipo: "number"
      },
      {
        id: "fim",
        label: "Fim:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const inicio = Number(dados.inicio);
      const fim = Number(dados.fim);

      const pares = [];
      const impares = [];

      for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
          pares.push(i);
        } else {
          impares.push(i);
        }
      }

      return `Pares: ${pares.join(", ")}\nÍmpares: ${impares.join(", ")}`;
    }
  },

  {
    id: 24,
    title: "Fatorial com validação",
    block: "Estruturas de repetição",
    description: "Informe um número inteiro não negativo.",
    campos: [
      {
        id: "numero",
        label: "Número:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const numero = Number(dados.numero);

      if (!Number.isInteger(numero) || numero < 0) {
        return "Informe um número inteiro não negativo.";
      }

      let fatorial = 1;

      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }

      return `${numero}! = ${fatorial}`;
    }
  },

  {
    id: 25,
    title: "Levantamento de notas",
    block: "Estruturas de repetição",
    description: "Informe as notas de uma turma separadas por vírgula.",
    campos: [
      {
        id: "notas",
        label: "Notas:",
        tipo: "text",
        placeholder: "7, 8, 6, 9, 10"
      }
    ],
    resolver: (dados) => {
      const notas = dados.notas.split(",").map(Number);

      if (notas.some((nota) => Number.isNaN(nota))) {
        return "Informe somente notas válidas.";
      }

      const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
      const aprovados = notas.filter((nota) => nota >= 7).length;

      return `Média da turma: ${media.toFixed(2)}\nAprovados: ${aprovados}\nReprovados: ${notas.length - aprovados}`;
    }
  },

  {
    id: 26,
    title: "Crescimento de investimento",
    block: "Estruturas de repetição",
    description: "Informe o valor inicial, a taxa mensal e o objetivo.",
    campos: [
      {
        id: "valor",
        label: "Valor inicial:",
        tipo: "number"
      },
      {
        id: "taxa",
        label: "Taxa mensal (%):",
        tipo: "number"
      },
      {
        id: "objetivo",
        label: "Valor-alvo:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      let valor = Number(dados.valor);
      const taxa = Number(dados.taxa);
      const objetivo = Number(dados.objetivo);
      let meses = 0;

      if (valor <= 0 || taxa <= 0 || objetivo <= valor) {
        return "Informe valores válidos.";
      }

      while (valor < objetivo && meses < 1000) {
        valor += valor * taxa / 100;
        meses++;
      }

      return `Meses necessários: ${meses}\nValor final: R$ ${valor.toFixed(2)}`;
    }
  },

  {
    id: 27,
    title: "Sequência de Fibonacci",
    block: "Estruturas de repetição",
    description: "Informe quantos termos deseja visualizar.",
    campos: [
      {
        id: "quantidade",
        label: "Quantidade de termos:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const quantidade = Number(dados.quantidade);
      let a = 0;
      let b = 1;
      const resultado = [];

      for (let i = 0; i < quantidade; i++) {
        resultado.push(a);

        const proximo = a + b;
        a = b;
        b = proximo;
      }

      return resultado.join(", ");
    }
  },

  {
    id: 28,
    title: "Verificação de número primo",
    block: "Estruturas de repetição",
    description: "Informe um número inteiro para verificar se ele é primo.",
    campos: [
      {
        id: "numero",
        label: "Número:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const numero = Number(dados.numero);

      if (numero < 2 || !Number.isInteger(numero)) {
        return "O número não é primo.";
      }

      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return "O número não é primo.";
        }
      }

      return "O número é primo.";
    }
  },

  {
    id: 29,
    title: "Pesquisa de satisfação",
    block: "Estruturas de repetição",
    description: "Informe as notas de satisfação separadas por vírgula.",
    campos: [
      {
        id: "notas",
        label: "Notas de satisfação:",
        tipo: "text",
        placeholder: "5, 4, 3, 5, 4"
      }
    ],
    resolver: (dados) => {
      const notas = dados.notas.split(",").map(Number);

      if (notas.some((nota) => nota < 0 || nota > 5 || Number.isNaN(nota))) {
        return "As notas devem estar entre 0 e 5.";
      }

      const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

      return `Média de satisfação: ${media.toFixed(2)}`;
    }
  },

  {
    id: 30,
    title: "Controle de caixa diário",
    block: "Estruturas de repetição",
    description: "Informe as movimentações do caixa separadas por vírgula.",
    campos: [
      {
        id: "movimentos",
        label: "Entradas positivas e saídas negativas:",
        tipo: "text",
        placeholder: "100, -30, 250, -50"
      }
    ],
    resolver: (dados) => {
      const movimentos = dados.movimentos.split(",").map(Number);

      if (movimentos.some((valor) => Number.isNaN(valor))) {
        return "Informe valores válidos.";
      }

      const saldo = movimentos.reduce((total, valor) => total + valor, 0);

      return `Saldo final do caixa: R$ ${saldo.toFixed(2)}`;
    }
  },

  {
    id: 31,
    title: "Jogo de adivinhação",
    block: "Estruturas de repetição",
    description: "Tente adivinhar o número secreto, que é 7.",
    campos: [
      {
        id: "tentativa",
        label: "Seu palpite:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const tentativa = Number(dados.tentativa);

      if (tentativa === 7) {
        return "Parabéns! Você acertou o número secreto.";
      }

      if (tentativa < 7) {
        return "Você errou. O número secreto é maior.";
      }

      return "Você errou. O número secreto é menor.";
    }
  },

  {
    id: 32,
    title: "Múltiplos em intervalo",
    block: "Estruturas de repetição",
    description: "Informe um intervalo e dois números para encontrar múltiplos.",
    campos: [
      {
        id: "inicio",
        label: "Início:",
        tipo: "number"
      },
      {
        id: "fim",
        label: "Fim:",
        tipo: "number"
      },
      {
        id: "multiplo",
        label: "Múltiplo de:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const inicio = Number(dados.inicio);
      const fim = Number(dados.fim);
      const multiplo = Number(dados.multiplo);
      const resultado = [];

      if (multiplo === 0) {
        return "O múltiplo não pode ser zero.";
      }

      for (let i = inicio; i <= fim; i++) {
        if (i % multiplo === 0) {
          resultado.push(i);
        }
      }

      return resultado.join(", ");
    }
  },

  {
    id: 33,
    title: "Padrão textual com laços",
    block: "Estruturas de repetição",
    description: "Informe o tamanho do padrão de caracteres.",
    campos: [
      {
        id: "tamanho",
        label: "Tamanho:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const tamanho = Number(dados.tamanho);
      let resultado = "";

      for (let i = 1; i <= tamanho; i++) {
        resultado += "*".repeat(i) + "\n";
      }

      return resultado;
    }
  },

  {
    id: 34,
    title: "Processamento de leituras de sensor",
    block: "Estruturas de repetição",
    description: "Informe as leituras do sensor separadas por vírgula.",
    campos: [
      {
        id: "leituras",
        label: "Leituras:",
        tipo: "text",
        placeholder: "20, 25, -1, 30, 28"
      }
    ],
    resolver: (dados) => {
      const leituras = dados.leituras.split(",").map(Number);
      const validas = leituras.filter((valor) => valor >= 0);

      if (validas.length === 0) {
        return "Nenhuma leitura válida foi encontrada.";
      }

      const media = validas.reduce((soma, valor) => soma + valor, 0) / validas.length;

      return `Leituras válidas: ${validas.length}\nMédia: ${media.toFixed(2)}\nMaior leitura: ${Math.max(...validas)}\nMenor leitura: ${Math.min(...validas)}`;
    }
  },

  {
    id: 35,
    title: "Cadastro e análise de notas",
    block: "Vetores e integração",
    description: "Informe as notas para analisar o desempenho.",
    campos: [
      {
        id: "notas",
        label: "Notas:",
        tipo: "text",
        placeholder: "7, 8, 9, 6"
      }
    ],
    resolver: (dados) => {
      const notas = dados.notas.split(",").map(Number);
      const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

      return `Média: ${media.toFixed(2)}\nMaior nota: ${Math.max(...notas)}\nMenor nota: ${Math.min(...notas)}`;
    }
  },

  {
    id: 36,
    title: "Controle de consumo mensal",
    block: "Vetores e integração",
    description: "Informe os consumos dos 12 meses.",
    campos: [
      {
        id: "consumos",
        label: "Consumos dos 12 meses:",
        tipo: "text",
        placeholder: "100, 120, 110, 130..."
      }
    ],
    resolver: (dados) => {
      const consumos = dados.consumos.split(",").map(Number);

      if (consumos.length !== 12) {
        return "Informe exatamente 12 consumos.";
      }

      const total = consumos.reduce((soma, valor) => soma + valor, 0);
      const media = total / 12;

      return `Total anual: ${total}\nMédia mensal: ${media.toFixed(2)}\nMaior consumo: ${Math.max(...consumos)}\nMenor consumo: ${Math.min(...consumos)}`;
    }
  },

  {
    id: 37,
    title: "Busca de produto por código",
    block: "Vetores e integração",
    description: "Informe os códigos e depois o código que deseja procurar.",
    campos: [
      {
        id: "codigos",
        label: "Códigos disponíveis:",
        tipo: "text",
        placeholder: "101, 202, 303, 404"
      },
      {
        id: "busca",
        label: "Código procurado:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const codigos = dados.codigos.split(",").map(Number);
      const busca = Number(dados.busca);

      if (codigos.includes(busca)) {
        return "Produto encontrado.";
      }

      return "Produto não encontrado.";
    }
  },

  {
    id: 38,
    title: "Contagem de ocorrências",
    block: "Vetores e integração",
    description: "Informe os valores e o elemento que deseja contar.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "1, 2, 3, 2, 4, 2"
      },
      {
        id: "procurado",
        label: "Valor procurado:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores.split(",").map(Number);
      const procurado = Number(dados.procurado);

      const quantidade = valores.filter((valor) => valor === procurado).length;

      return `O valor ${procurado} aparece ${quantidade} vez(es).`;
    }
  },

  {
    id: 39,
    title: "Separação de pares e ímpares",
    block: "Vetores e integração",
    description: "Informe os números separados por vírgula.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "1, 2, 3, 4, 5, 6"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores.split(",").map(Number);

      const pares = valores.filter((valor) => valor % 2 === 0);
      const impares = valores.filter((valor) => valor % 2 !== 0);

      return `Pares: ${pares.join(", ")}\nÍmpares: ${impares.join(", ")}`;
    }
  },

  {
    id: 40,
    title: "Remoção de valores duplicados",
    block: "Vetores e integração",
    description: "Informe valores repetidos separados por vírgula.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "1, 2, 2, 3, 4, 4, 5"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores.split(",").map(Number);
      const semDuplicados = [];

      for (const valor of valores) {
        if (!semDuplicados.includes(valor)) {
          semDuplicados.push(valor);
        }
      }

      return `Vetor sem duplicados: ${semDuplicados.join(", ")}`;
    }
  },

  {
    id: 41,
    title: "Inversão manual de vetor",
    block: "Vetores e integração",
    description: "Informe os valores que deseja inverter.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "1, 2, 3, 4, 5"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores.split(",").map(Number);
      const invertido = [];

      for (let i = valores.length - 1; i >= 0; i--) {
        invertido.push(valores[i]);
      }

      return `Vetor invertido: ${invertido.join(", ")}`;
    }
  },

  {
    id: 42,
    title: "Ordenação simples",
    block: "Vetores e integração",
    description: "Informe os valores que deseja ordenar.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "5, 2, 8, 1, 3"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores.split(",").map(Number);

      for (let i = 0; i < valores.length - 1; i++) {
        for (let j = 0; j < valores.length - 1 - i; j++) {
          if (valores[j] > valores[j + 1]) {
            const temporario = valores[j];

            valores[j] = valores[j + 1];
            valores[j + 1] = temporario;
          }
        }
      }

      return `Vetor ordenado: ${valores.join(", ")}`;
    }
  },

  {
    id: 43,
    title: "Ranking de desempenho",
    block: "Vetores e integração",
    description: "Informe as pontuações para descobrir as três maiores.",
    campos: [
      {
        id: "pontuacoes",
        label: "Pontuações:",
        tipo: "text",
        placeholder: "80, 95, 70, 100, 88"
      }
    ],
    resolver: (dados) => {
      const pontuacoes = dados.pontuacoes
        .split(",")
        .map(Number)
        .sort((a, b) => b - a);

      return `Ranking:\n1º ${pontuacoes[0]}\n2º ${pontuacoes[1]}\n3º ${pontuacoes[2]}`;
    }
  },

  {
    id: 44,
    title: "Análise de temperaturas semanais",
    block: "Vetores e integração",
    description: "Informe as temperaturas registradas.",
    campos: [
      {
        id: "temperaturas",
        label: "Temperaturas:",
        tipo: "text",
        placeholder: "25, 26, 27, 28, 29"
      }
    ],
    resolver: (dados) => {
      const temperaturas = dados.temperaturas.split(",").map(Number);
      const media = temperaturas.reduce((soma, valor) => soma + valor, 0) / temperaturas.length;

      return `Média: ${media.toFixed(2)}°C\nMaior: ${Math.max(...temperaturas)}°C\nMenor: ${Math.min(...temperaturas)}°C`;
    }
  },

  {
    id: 45,
    title: "Carrinho de compras",
    block: "Vetores e integração",
    description: "Informe os preços dos produtos e suas quantidades.",
    campos: [
      {
        id: "precos",
        label: "Preços:",
        tipo: "text",
        placeholder: "10, 20, 30"
      },
      {
        id: "quantidades",
        label: "Quantidades:",
        tipo: "text",
        placeholder: "2, 1, 3"
      }
    ],
    resolver: (dados) => {
      const precos = dados.precos.split(",").map(Number);
      const quantidades = dados.quantidades.split(",").map(Number);

      if (precos.length !== quantidades.length) {
        return "Informe a mesma quantidade de preços e quantidades.";
      }

      let total = 0;

      for (let i = 0; i < precos.length; i++) {
        total += precos[i] * quantidades[i];
      }

      return `Total da compra: R$ ${total.toFixed(2)}`;
    }
  },

  {
    id: 46,
    title: "Fila de atendimento",
    block: "Vetores e integração",
    description: "Informe os nomes das pessoas que estão na fila.",
    campos: [
      {
        id: "nomes",
        label: "Pessoas na fila:",
        tipo: "text",
        placeholder: "Ana, Bruno, Carlos"
      }
    ],
    resolver: (dados) => {
      const fila = dados.nomes
        .split(",")
        .map((nome) => nome.trim())
        .filter((nome) => nome !== "");

      const atendido = fila.shift();

      return `Pessoa atendida: ${atendido}\nPessoas restantes: ${fila.join(", ")}`;
    }
  },

  {
    id: 47,
    title: "Valores acima de um limite",
    block: "Vetores e integração",
    description: "Informe os valores e um limite.",
    campos: [
      {
        id: "valores",
        label: "Valores:",
        tipo: "text",
        placeholder: "10, 25, 30, 5, 40"
      },
      {
        id: "limite",
        label: "Limite:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const valores = dados.valores.split(",").map(Number);
      const limite = Number(dados.limite);

      const acima = valores.filter((valor) => valor > limite);

      return `Valores acima do limite: ${acima.join(", ")}`;
    }
  },

  {
    id: 48,
    title: "Comparação entre dois vetores",
    block: "Vetores e integração",
    description: "Informe dois vetores com a mesma quantidade de valores.",
    campos: [
      {
        id: "vetor1",
        label: "Primeiro vetor:",
        tipo: "text",
        placeholder: "1, 2, 3"
      },
      {
        id: "vetor2",
        label: "Segundo vetor:",
        tipo: "text",
        placeholder: "1, 4, 3"
      }
    ],
    resolver: (dados) => {
      const vetor1 = dados.vetor1.split(",").map(Number);
      const vetor2 = dados.vetor2.split(",").map(Number);

      if (vetor1.length !== vetor2.length) {
        return "Os vetores devem ter o mesmo tamanho.";
      }

      const iguais = vetor1.every((valor, indice) => valor === vetor2[indice]);

      return iguais
        ? "Os vetores são iguais."
        : "Os vetores são diferentes.";
    }
  },

  {
    id: 49,
    title: "Matriz simplificada",
    block: "Vetores e integração",
    description: "Informe os valores de uma matriz 2x2.",
    campos: [
      {
        id: "a",
        label: "Valor A:",
        tipo: "number"
      },
      {
        id: "b",
        label: "Valor B:",
        tipo: "number"
      },
      {
        id: "c",
        label: "Valor C:",
        tipo: "number"
      },
      {
        id: "d",
        label: "Valor D:",
        tipo: "number"
      }
    ],
    resolver: (dados) => {
      const a = Number(dados.a);
      const b = Number(dados.b);
      const c = Number(dados.c);
      const d = Number(dados.d);

      const soma = a + b + c + d;

      return `Matriz:\n[ ${a} ${b} ]\n[ ${c} ${d} ]\n\nSoma dos elementos: ${soma}`;
    }
  },

  {
    id: 50,
    title: "Painel de eficiência energética",
    block: "Vetores e integração",
    description: "Informe os consumos de vários meses para gerar um resumo.",
    campos: [
      {
        id: "consumos",
        label: "Consumos mensais:",
        tipo: "text",
        placeholder: "100, 120, 90, 150, 130"
      }
    ],
    resolver: (dados) => {
      const consumos = dados.consumos.split(",").map(Number);

      const total = consumos.reduce((soma, valor) => soma + valor, 0);
      const media = total / consumos.length;
      const maior = Math.max(...consumos);
      const menor = Math.min(...consumos);

      let classificacao = "Consumo adequado.";

      if (media > 400) {
        classificacao = "Consumo muito alto.";
      } else if (media > 200) {
        classificacao = "Consumo alto.";
      }

      return `Total consumido: ${total} kWh\nMédia: ${media.toFixed(2)} kWh\nMaior consumo: ${maior} kWh\nMenor consumo: ${menor} kWh\nClassificação: ${classificacao}`;
    }
  }
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

const modal = document.querySelector("#modal");
const fechar = document.querySelector("#fechar");

const modalBloco = document.querySelector("#modalBloco");
const modalTitulo = document.querySelector("#modalTitulo");
const modalDescricao = document.querySelector("#modalDescricao");

const campos = document.querySelector("#campos");
const resolver = document.querySelector("#resolver");
const saida = document.querySelector("#saida");

let filtroAtual = "Todos";
let exercicioAtual = null;

function renderizarExercicios() {
  const termo = busca.value.toLowerCase();

  lista.innerHTML = "";

  const filtrados = exercicios.filter((exercicio) => {
    const correspondeFiltro =
      filtroAtual === "Todos" ||
      exercicio.block === filtroAtual;

    const correspondeBusca =
      exercicio.title.toLowerCase().includes(termo) ||
      String(exercicio.id).includes(termo);

    return correspondeFiltro && correspondeBusca;
  });

  filtrados.forEach((exercicio) => {
    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <span class="numero">#${exercicio.id}</span>
      <span class="tag">${exercicio.block}</span>

      <h3>${exercicio.title}</h3>

      <p>${exercicio.description}</p>
    `;

    card.addEventListener("click", () => {
      abrirExercicio(exercicio);
    });

    lista.appendChild(card);
  });
}

function abrirExercicio(exercicio) {
  exercicioAtual = exercicio;

  modalBloco.textContent =
    `Exercício ${exercicio.id} • ${exercicio.block}`;

  modalTitulo.textContent = exercicio.title;
  modalDescricao.textContent = exercicio.description;

  campos.innerHTML = "";

  exercicio.campos.forEach((campo) => {
    const grupo = document.createElement("div");

    grupo.className = "campo";

    const label = document.createElement("label");
    label.textContent = campo.label;

    let entrada;

    if (campo.tipo === "select") {
      entrada = document.createElement("select");

      campo.opcoes.forEach((opcao) => {
        const option = document.createElement("option");

        option.value = opcao;
        option.textContent = opcao;

        entrada.appendChild(option);
      });
    } else {
      entrada = document.createElement("input");
      entrada.type = campo.tipo;
      entrada.placeholder = campo.placeholder || "";
    }

    entrada.id = campo.id;

    grupo.appendChild(label);
    grupo.appendChild(entrada);

    campos.appendChild(grupo);
  });

  saida.textContent =
    'Preencha os campos e clique em "Resolver exercício".';

  modal.classList.remove("escondido");
}

resolver.addEventListener("click", () => {
  if (!exercicioAtual) {
    return;
  }

  const dados = {};

  exercicioAtual.campos.forEach((campo) => {
    const elemento = document.querySelector(`#${campo.id}`);

    dados[campo.id] = elemento.value;
  });

  try {
    const resultado = exercicioAtual.resolver(dados);

    saida.textContent = resultado;
  } catch (erro) {
    saida.textContent =
      "Não foi possível resolver. Verifique os valores informados.";
  }
});

document.querySelectorAll(".filtro").forEach((botao) => {
  botao.addEventListener("click", () => {
    filtroAtual = botao.dataset.filtro;

    document.querySelectorAll(".filtro").forEach((item) => {
      item.classList.toggle("ativo", item === botao);
    });

    renderizarExercicios();
  });
});

busca.addEventListener("input", renderizarExercicios);

fechar.addEventListener("click", () => {
  modal.classList.add("escondido");
});

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.classList.add("escondido");
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    modal.classList.add("escondido");
  }
});

renderizarExercicios();