const AnaliseDeDados = require("../src/AnaliseDeDados");

describe("Classe AnaliseDeDados - Método adicionarDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3]);
  });

  test("Adicionar novos dados corretamente", async () => {
    analise.adicionarDados([4, 5]);
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });

  test("Deve lançar erro ao adicionar dados não-array", async () => {
    expect(() => analise.adicionarDados(10)).toThrow("Os dados devem ser um array.");
  });
});

describe("Classe AnaliseDeDados - Método limparDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3]);
  });

  test("Limpar os dados corretamente", async () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });
});

describe("Classe AnaliseDeDados - Método ordenarDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([5, 3, 1, 4, 2]);
  });

  test("Ordenar os dados corretamente", async () => {
    expect(analise.ordenarDados()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Classe AnaliseDeDados - Método calcularMedia", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular média corretamente", async () => {
    expect(analise.calcularMedia()).toBe(3);
  });

  test("Deve retornar null quando não houver dados para média", async () => {
    analise.limparDados();
    expect(analise.calcularMedia()).toBeNull();
  });
});

describe("Classe AnaliseDeDados - Método calcularMediana", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular mediana corretamente", async () => {
    expect(analise.calcularMediana()).toBe(3);
  });

  test("Deve retornar null quando não houver dados para mediana", async () => {
    analise.limparDados();
    expect(analise.calcularMediana()).toBeNull();
  });
});

describe("Classe AnaliseDeDados - Método calcularModa", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 2, 3, 4, 5, 5]);
  });

  test("Calcular moda corretamente", async () => {
    expect(analise.calcularModa()).toEqual([2, 5]);
  });

  test("Deve retornar null quando não houver dados para moda", async () => {
    analise.limparDados();
    expect(analise.calcularModa()).toBeNull();
  });
});

describe("Classe AnaliseDeDados - Método calcularVariancia", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular variância corretamente", async () => {
    expect(analise.calcularVariancia()).toBe(2);
  });

  test("Deve retornar null quando não houver dados para variância", async () => {
    analise.limparDados();
    expect(analise.calcularVariancia()).toBeNull();
  });
});

describe("Classe AnaliseDeDados - Método calcularDesvioPadrao", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular desvio padrão corretamente", async () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.41, 2);
  });

  test("Deve retornar null quando não houver dados para desvio padrão", async () => {
    analise.limparDados();
    expect(analise.calcularDesvioPadrao()).toBeNull();
  });
});

describe("Classe AnaliseDeDados - Método normalizarDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Normalizar dados corretamente", async () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });
});

describe("Classe AnaliseDeDados - Método calcularPercentil", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular percentil corretamente", async () => {
    expect(analise.calcularPercentil(50)).toBe(3);
  });

  test("Deve retornar null quando percentil for inválido", async () => {
    expect(analise.calcularPercentil(150)).toBeNull();
    expect(analise.calcularPercentil(-10)).toBeNull();
  });

  test("Deve retornar null quando não houver dados para percentil", async () => {
    analise.limparDados();
    expect(analise.calcularPercentil(50)).toBeNull();
  });
});

describe("Classe AnaliseDeDados - Método calcularSoma", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular soma corretamente", async () => {
    expect(analise.calcularSoma()).toBe(15);
  });
});

describe("Classe AnaliseDeDados - Método calcularProduto", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular produto corretamente", async () => {
    expect(analise.calcularProduto()).toBe(120);
  });
});

describe("Classe AnaliseDeDados - Método calcularAmplitude", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular amplitude corretamente", async () => {
    expect(analise.calcularAmplitude()).toBe(4);
  });
});

describe("Classe AnaliseDeDados - Método calcularCoeficienteVariacao", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("Calcular coeficiente de variação corretamente", async () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.14, 2);
  });
});

describe("Classe AnaliseDeDados - Método removerOutliers", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5, 100, 200]);
  });

  test("Remover outliers corretamente", async () => {
    analise.removerOutliers(1.5);
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Classe AnaliseDeDados - Método calcularCorrelacao", () => {
  let analise;
  let outroConjunto;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    outroConjunto = [2, 4, 6, 8, 10];
  });

  test("Calcular correlação entre dois conjuntos de dados", async () => {
    expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(1, 2); // Correlação positiva perfeita
  });

  test("Deve retornar null quando os conjuntos de dados tiverem tamanhos diferentes", async () => {
    outroConjunto = [1, 2, 3];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeNull();
  });

  test("Deve retornar null quando o outro conjunto não for um array", async () => {
    expect(analise.calcularCorrelacao("not an array")).toBeNull();
  });
});
