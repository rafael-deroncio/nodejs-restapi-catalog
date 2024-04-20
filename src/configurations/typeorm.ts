import { DataSource, DataSourceOptions } from "typeorm";
import config from "../config";
import { CategoryEntity } from "./entities/category.entity";
import { ProductEntity } from "./entities/product.entity";

export const options = { ...config.database.options } as DataSourceOptions
export const typeorm = new DataSource(options);
export const initialize = () => typeorm.initialize()
    .then(async (database) => {
console.log(options);

        let categories: Array<CategoryEntity> = []

        if (config.app.environment === 'dev') {
            console.log('Starting integration with the database...');

            if ((await database.getRepository(CategoryEntity).find()).length == 0)
                categories = await database.getRepository(CategoryEntity).save([
                    { name: 'Eletrônicos', description: 'Produtos eletrônicos diversos' },
                    { name: 'Roupas', description: 'Roupas masculinas e femininas' },
                    { name: 'Alimentos', description: 'Alimentos diversos' },
                    { name: 'Livros', description: 'Livros de diversos gêneros' },
                    { name: 'Cosméticos', description: 'Produtos de beleza e cosméticos' },
                    { name: 'Móveis', description: 'Móveis para casa e escritório' },
                    { name: 'Esportes', description: 'Equipamentos esportivos' },
                    { name: 'Automotivos', description: 'Produtos automotivos' },
                    { name: 'Jogos', description: 'Jogos de tabuleiro e videogames' },
                    { name: 'Ferramentas', description: 'Ferramentas para construção e manutenção' },
                ]);

            if ((await database.getRepository(ProductEntity).find()).length == 0) {
                await database.getRepository(ProductEntity).save([
                    { name: 'iPhone 13 Pro', description: 'O iPhone 13 Pro foi projetado para proporcionar uma experiência incomparável. Com seu processador A15 Bionic, câmeras avançadas e tela Super Retina XDR, o iPhone 13 Pro redefine o que um smartphone pode fazer.', price: 1099.99, stock: 100, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'Samsung Galaxy S22 Ultra', description: 'Com o Samsung Galaxy S22 Ultra, a Samsung redefine a experiência do smartphone. Com uma câmera profissional, uma tela dinâmica e uma bateria de longa duração, este dispositivo é uma verdadeira potência.', price: 1299.99, stock: 150, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'Sony PlayStation 5', description: 'O PlayStation 5 da Sony é o epítome da próxima geração de jogos. Com sua capacidade de jogos em 4K, tempos de carregamento ultrarrápidos e um novo controle DualSense, o PS5 leva a jogabilidade a novos patamares.', price: 499.99, stock: 200, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'LG OLED C1 TV', description: 'A LG OLED C1 é uma obra-prima da tecnologia de TV. Com sua tela OLED, cores vibrantes e pretos profundos, esta TV oferece uma experiência de visualização inigualável. Seja para filmes, jogos ou streaming, a LG OLED C1 é incomparável.', price: 1599.99, stock: 80, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'Apple Watch Series 7', description: 'O Apple Watch Series 7 redefine o que um relógio pode fazer. Com recursos avançados de saúde, monitoramento de condicionamento físico e uma tela maior e mais brilhante, o Series 7 é o companheiro perfeito para um estilo de vida saudável e conectado.', price: 399.99, stock: 120, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'Bose QuietComfort 45', description: 'Os Bose QuietComfort 45 são os fones de ouvido definitivos para audiófilos. Com cancelamento de ruído avançado, som imersivo e conforto duradouro, os QC45 garantem uma experiência auditiva sem igual.', price: 329.99, stock: 150, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'DJI Mavic Air 2', description: 'O DJI Mavic Air 2 é um drone revolucionário para entusiastas e profissionais. Com uma câmera de alta resolução, modos de voo inteligentes e uma bateria de longa duração, o Mavic Air 2 eleva a fotografia aérea a novas alturas.', price: 799.99, stock: 70, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'Amazon Kindle Oasis', description: 'O Amazon Kindle Oasis é o melhor leitor de e-books do mercado. Com uma tela Paperwhite de alta resolução, iluminação ajustável e resistência à água, o Kindle Oasis oferece uma experiência de leitura incomparável.', price: 249.99, stock: 200, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'GoPro Hero 10 Black', description: 'A GoPro Hero 10 Black é a câmera de ação definitiva. Com vídeo 5.3K, estabilização avançada e capacidade de transmissão ao vivo, a Hero 10 Black captura cada momento com detalhes incríveis.', price: 499.99, stock: 100, category: categories.find(category => category.name === 'Eletrônicos') },
                    { name: 'Microsoft Surface Pro 8', description: 'O Microsoft Surface Pro 8 é a combinação perfeita entre um tablet e um laptop. Com seu design elegante, poder de processamento rápido e caneta Surface incluída, o Surface Pro 8 é ideal para produtividade em movimento.', price: 999.99, stock: 80, category: categories.find(category => category.name === 'Eletrônicos') }
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Camisa Polo', description: 'Uma camisa polo clássica e elegante para qualquer ocasião.', price: 39.99, stock: 200, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Calça Jeans Skinny', description: 'Uma calça jeans ajustada e moderna para um visual despojado.', price: 49.99, stock: 150, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Vestido Floral', description: 'Um vestido leve e florido perfeito para dias ensolarados.', price: 59.99, stock: 100, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Blazer Slim Fit', description: 'Um blazer sofisticado e elegante para ocasiões especiais.', price: 79.99, stock: 80, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Sapato Social', description: 'Um sapato social de couro para um visual refinado.', price: 89.99, stock: 120, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Jaqueta Jeans', description: 'Uma jaqueta jeans clássica e versátil para todos os momentos.', price: 69.99, stock: 100, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Saia Midi', description: 'Uma saia midi elegante e feminina para diversas ocasiões.', price: 29.99, stock: 150, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Blusa de Tricot', description: 'Uma blusa de tricot macia e confortável para os dias mais frios.', price: 34.99, stock: 180, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Calça Legging', description: 'Uma calça legging versátil e confortável para atividades físicas.', price: 24.99, stock: 200, category: categories.find(category => category.name === 'Roupas') },
                    { name: 'Terno Slim Fit', description: 'Um terno elegante e moderno para eventos formais.', price: 159.99, stock: 60, category: categories.find(category => category.name === 'Roupas') }
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Arroz Integral', description: 'Arroz integral de alta qualidade, rico em fibras e nutrientes.', price: 5.99, stock: 300, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Feijão Carioca', description: 'Feijão carioca selecionado, ideal para preparar deliciosos pratos.', price: 3.99, stock: 250, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Azeite de Oliva Extra Virgem', description: 'Azeite de oliva extra virgem de origem mediterrânea, perfeito para temperar saladas e pratos.', price: 9.99, stock: 200, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Macarrão Integral', description: 'Macarrão integral de trigo duro, fonte de fibras e de baixo índice glicêmico.', price: 2.99, stock: 350, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Leite Desnatado', description: 'Leite desnatado pasteurizado, rico em cálcio e com baixo teor de gordura.', price: 1.99, stock: 400, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Ovos Orgânicos', description: 'Ovos orgânicos de galinhas criadas soltas, fonte de proteína e nutrientes essenciais.', price: 6.99, stock: 200, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Frutas Variadas', description: 'Cesta de frutas variadas frescas e saudáveis, ideais para uma alimentação equilibrada.', price: 12.99, stock: 150, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Vegetais Orgânicos', description: 'Seleção de vegetais orgânicos frescos, cultivados sem pesticidas ou herbicidas.', price: 8.99, stock: 180, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Iogurte Natural', description: 'Iogurte natural sem adição de açúcar, rico em probióticos e vitaminas.', price: 3.49, stock: 250, category: categories.find(category => category.name === 'Alimentos') },
                    { name: 'Castanhas do Pará', description: 'Castanhas do Pará cruas, ricas em selênio e antioxidantes.', price: 14.99, stock: 100, category: categories.find(category => category.name === 'Alimentos') }
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'A Culpa é das Estrelas', description: 'Uma emocionante história de amor entre dois jovens enfrentando o câncer.', price: 29.99, stock: 80, category: categories.find(category => category.name === 'Livros') },
                    { name: 'Harry Potter e a Pedra Filosofal', description: 'O primeiro livro da série Harry Potter, que narra as aventuras de um jovem bruxo.', price: 24.99, stock: 120, category: categories.find(category => category.name === 'Livros') },
                    { name: 'O Pequeno Príncipe', description: 'Um clássico da literatura infantil que encanta leitores de todas as idades.', price: 19.99, stock: 150, category: categories.find(category => category.name === 'Livros') },
                    { name: '1984', description: 'Um romance distópico que aborda questões políticas e sociais de forma impactante.', price: 27.99, stock: 100, category: categories.find(category => category.name === 'Livros') },
                    { name: 'Orgulho e Preconceito', description: 'Um romance clássico de Jane Austen que explora temas de amor e classe social.', price: 22.99, stock: 90, category: categories.find(category => category.name === 'Livros') },
                    { name: 'A Revolução dos Bichos', description: 'Uma fábula satírica que critica os regimes totalitários e a corrupção do poder.', price: 18.99, stock: 110, category: categories.find(category => category.name === 'Livros') },
                    { name: 'O Hobbit', description: 'Uma aventura épica que narra a jornada de Bilbo Bolseiro em busca do tesouro guardado por um dragão.', price: 26.99, stock: 70, category: categories.find(category => category.name === 'Livros') },
                    { name: 'Cem Anos de Solidão', description: 'Um romance que narra a história da família Buendía ao longo de várias gerações.', price: 31.99, stock: 80, category: categories.find(category => category.name === 'Livros') },
                    { name: 'O Senhor dos Anéis: A Sociedade do Anel', description: 'O primeiro livro da trilogia O Senhor dos Anéis, uma obra-prima da literatura fantástica.', price: 34.99, stock: 60, category: categories.find(category => category.name === 'Livros') },
                    { name: 'Crime e Castigo', description: 'Um dos principais romances do autor russo Fiódor Dostoiévski, que aborda temas como culpa e redenção.', price: 28.99, stock: 100, category: categories.find(category => category.name === 'Livros') }
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Base Líquida', description: 'Base líquida de alta cobertura, ideal para uma pele impecável.', price: 19.99, stock: 200, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Máscara de Cílios', description: 'Máscara de cílios alongadora e volumizadora, para um olhar marcante.', price: 9.99, stock: 180, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Batom Matte', description: 'Batom de acabamento matte, com cores intensas e de longa duração.', price: 12.99, stock: 150, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Hidratante Facial', description: 'Hidratante facial leve e não oleoso, para uma pele macia e radiante.', price: 15.99, stock: 220, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Paleta de Sombras', description: 'Paleta de sombras com diversas cores e acabamentos, para criar looks versáteis.', price: 29.99, stock: 120, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Corretivo Líquido', description: 'Corretivo líquido de alta cobertura, para disfarçar imperfeições e olheiras.', price: 8.99, stock: 250, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Pó Compacto', description: 'Pó compacto de acabamento natural, para uma pele livre de brilho excessivo.', price: 14.99, stock: 200, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Gloss Labial', description: 'Gloss labial com brilho intenso e textura confortável, para lábios volumosos e hidratados.', price: 7.99, stock: 180, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Delineador Líquido', description: 'Delineador líquido de precisão, para traços definidos e duradouros.', price: 10.99, stock: 160, category: categories.find(category => category.name === 'Cosméticos') },
                    { name: 'Esponja de Maquiagem', description: 'Esponja de maquiagem macia e versátil, para aplicação uniforme de produtos.', price: 5.99, stock: 300, category: categories.find(category => category.name === 'Cosméticos') },
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Sofá de Couro', description: 'Sofá de couro legítimo, confortável e durável.', price: 699.99, stock: 50, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Mesa de Jantar', description: 'Mesa de jantar extensível, ideal para receber amigos e familiares.', price: 399.99, stock: 80, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Guarda-Roupa de Madeira', description: 'Guarda-roupa espaçoso e resistente, com acabamento em madeira de alta qualidade.', price: 799.99, stock: 60, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Cama Box Casal', description: 'Cama box casal com colchão de molas ensacadas, garantindo conforto e suporte.', price: 499.99, stock: 70, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Cômoda Moderna', description: 'Cômoda moderna com design elegante e ampla capacidade de armazenamento.', price: 299.99, stock: 90, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Escrivaninha de Escritório', description: 'Escrivaninha de escritório com gavetas e nichos, perfeita para trabalhar ou estudar.', price: 249.99, stock: 100, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Cadeira Giratória', description: 'Cadeira giratória ergonômica, com ajuste de altura e apoio lombar.', price: 149.99, stock: 120, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Rack para TV', description: 'Rack para TV com nichos e prateleiras, organizando sua sala de estar com estilo.', price: 199.99, stock: 80, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Criado-Mudo de Madeira', description: 'Criado-mudo de madeira com gaveta, complementando a decoração do quarto.', price: 79.99, stock: 150, category: categories.find(category => category.name === 'Móveis') },
                    { name: 'Poltrona Reclinável', description: 'Poltrona reclinável com apoio para os pés, proporcionando conforto e relaxamento.', price: 349.99, stock: 60, category: categories.find(category => category.name === 'Móveis') },
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Bicicleta Mountain Bike', description: 'Bicicleta mountain bike de alta performance, ideal para trilhas e aventuras.', price: 799.99, stock: 50, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Tênis de Corrida', description: 'Tênis de corrida leve e amortecido, proporcionando conforto e desempenho.', price: 99.99, stock: 100, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Bola de Futebol', description: 'Bola de futebol profissional, com excelente durabilidade e precisão.', price: 29.99, stock: 150, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Raquete de Tênis', description: 'Raquete de tênis de alto desempenho, oferecendo potência e controle.', price: 129.99, stock: 80, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Caneleira de Futebol', description: 'Caneleira de futebol acolchoada, proporcionando proteção e conforto durante o jogo.', price: 19.99, stock: 120, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Luvas de Academia', description: 'Luvas acolchoadas para academia, oferecendo proteção e aderência durante o treino.', price: 14.99, stock: 150, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Prancha de Surf', description: 'Prancha de surf de alta qualidade, ideal para pegar ondas grandes.', price: 399.99, stock: 30, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Corda de Pular', description: 'Corda de pular ajustável, ótima para exercícios aeróbicos e cardiovasculares.', price: 9.99, stock: 200, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Mochila de Hidratação', description: 'Mochila de hidratação leve e resistente, perfeita para corridas de longa distância.', price: 49.99, stock: 80, category: categories.find(category => category.name === 'Esportes') },
                    { name: 'Saco de Pancadas', description: 'Saco de pancadas resistente, ideal para treinos de boxe e artes marciais.', price: 79.99, stock: 70, category: categories.find(category => category.name === 'Esportes') },
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Kit Lâmpadas LED', description: 'Kit com lâmpadas LED para faróis e lanternas do carro, proporcionando maior visibilidade.', price: 39.99, stock: 100, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Tapetes Automotivos', description: 'Tapetes automotivos de borracha, resistentes e fáceis de limpar.', price: 29.99, stock: 120, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Carregador de Carro USB', description: 'Carregador de carro com múltiplas portas USB, para carregar dispositivos durante viagens.', price: 14.99, stock: 150, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Shampoo Automotivo', description: 'Shampoo automotivo concentrado, para lavagem eficiente e proteção da pintura.', price: 9.99, stock: 200, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Cera Protetora', description: 'Cera protetora para carro, proporcionando brilho intenso e proteção contra raios UV.', price: 19.99, stock: 180, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Suporte de Celular para Carro', description: 'Suporte de celular para carro com fixação por ventosa, ideal para uso durante viagens.', price: 12.99, stock: 150, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Kit de Ferramentas Automotivas', description: 'Kit completo de ferramentas automotivas, para pequenos reparos e manutenção.', price: 49.99, stock: 80, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Desodorizador de Carro', description: 'Desodorizador para carro com fragrância suave, eliminando odores indesejados.', price: 7.99, stock: 200, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Protetor Solar para Carro', description: 'Protetor solar para carro, reduzindo o calor e protegendo o interior do veículo.', price: 14.99, stock: 120, category: categories.find(category => category.name === 'Automotivos') },
                    { name: 'Limpador de Para-brisa', description: 'Limpador de para-brisa eficiente, garantindo visibilidade em dias de chuva.', price: 6.99, stock: 250, category: categories.find(category => category.name === 'Automotivos') },
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'PlayStation 5', description: 'Console de nova geração com jogos exclusivos e gráficos impressionantes.', price: 499.99, stock: 50, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Xbox Series X', description: 'Console de alta performance com acesso a uma biblioteca de jogos incríveis.', price: 499.99, stock: 60, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Nintendo Switch', description: 'Console híbrido que pode ser usado tanto em casa quanto em movimento.', price: 299.99, stock: 70, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'The Last of Us Part II', description: 'Jogo de ação e aventura que narra uma história emocionante em um mundo pós-apocalíptico.', price: 59.99, stock: 80, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Cyberpunk 2077', description: 'Jogo de RPG de mundo aberto ambientado em um futuro distópico cheio de possibilidades.', price: 49.99, stock: 90, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Assassin\'s Creed Valhalla', description: 'Jogo da aclamada franquia Assassin\'s Creed, que desta vez se passa na Era Viking.', price: 49.99, stock: 100, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'FIFA 22', description: 'Jogo de simulação de futebol com gráficos realistas e jogabilidade imersiva.', price: 59.99, stock: 110, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Call of Duty: Warzone', description: 'Jogo de tiro em primeira pessoa online com batalhas épicas e intensas.', price: 0, stock: 200, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Animal Crossing: New Horizons', description: 'Jogo de simulação de vida em que você constrói e decora sua própria ilha paradisíaca.', price: 59.99, stock: 120, category: categories.find(category => category.name === 'Jogos') },
                    { name: 'Minecraft', description: 'Jogo de construção e exploração em um mundo voxel, oferecendo infinitas possibilidades.', price: 29.99, stock: 130, category: categories.find(category => category.name === 'Jogos') },
                ]);

                await database.getRepository(ProductEntity).save([
                    { name: 'Furadeira sem Fio', description: 'Furadeira sem fio com bateria de longa duração, ideal para trabalhos domésticos.', price: 79.99, stock: 150, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Jogo de Chaves de Fenda', description: 'Jogo de chaves de fenda com pontas magnéticas e ergonômicas, para diversos tipos de parafusos.', price: 19.99, stock: 200, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Martelo de Carpinteiro', description: 'Martelo de carpinteiro de alta qualidade, com cabo ergonômico e cabeça resistente.', price: 14.99, stock: 250, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Serra Circular', description: 'Serra circular elétrica com lâmina de alta precisão, ideal para cortes retos e precisos.', price: 99.99, stock: 100, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Nível a Laser', description: 'Nível a laser compacto e preciso, para alinhar e nivelar objetos com facilidade.', price: 29.99, stock: 120, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Alicate Universal', description: 'Alicate universal de alta resistência, com mandíbulas endurecidas e cabo emborrachado.', price: 9.99, stock: 200, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Trena Métrica', description: 'Trena métrica retrátil com trava, para medições precisas em diferentes situações.', price: 7.99, stock: 300, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Plaina Manual', description: 'Plaina manual de alta qualidade, para nivelar e suavizar superfícies de madeira.', price: 49.99, stock: 80, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Broca para Concreto', description: 'Broca de metal duro para concreto e alvenaria, com ponta resistente e corte preciso.', price: 8.99, stock: 150, category: categories.find(category => category.name === 'Ferramentas') },
                    { name: 'Serrote de Poda', description: 'Serrote de poda com lâmina afiada e dentes precisos, ideal para cortes de galhos.', price: 12.99, stock: 100, category: categories.find(category => category.name === 'Ferramentas') },
                ]);

            }
        }
    }).catch((error) => {
        console.error('Database integration error: ', error);
    }).finally(() => {
        console.log('Finishing the integration with the database...');
    });
