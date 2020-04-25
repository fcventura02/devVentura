import React from 'react';
import './styles.css';
export default function SecondPage() {
    document.title = 'Dev Ventura | TCC'
    return (
        <section className="tcc">
            <header className="tcc__header">
                <div className="tcc__autor">
                    <p>Dev Ventura</p>
                    <p>8 . Abril . 2020</p>
                    <p>tcc</p>
                </div>
                <div className="autor__redeSocial">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fcventura02/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
            </header>

            <main className="tcc__conteudo">
                <h1 className="title">
                    Aplicação de teste de Software em ambientes de desenvolvimento.
            </h1>

                <div className="introducao">
                    <p>
                        Com a evolução da tecnologia e a necessidade das empresas em
                        automatizar seus serviços, cresce-se a necessidade de criar novos softwares,
                        sites, e-commerces e mais. Com esta demanda e a disputa
                        no mercado de desenvolvimento, prevalece aqueles que
                        produzem um produto com melhor qualidade.
                </p>
                    <p>
                        A qualidade é um termo bastante subjetivo, que por exemplo,
                        um produto de qualidade para uma pessoa pode não estar de
                        acordo com as necessidades de outra, fazendo com que aquele
                        produto não tenha uma mesma qualidade para ambos.
                </p>
                    <p>
                        Uma das formas de garantir a qualidade do Software é através de
                        testes. Os testes de software consistem em um conjunto de procedimentos
                        com o propósito de analisar aspectos do produto sendo desenvolvido. Existem vários
                        tipos de teste, integridade, unitário, segurança, funcional, integração,
                        performasse e outros, também existem técnicas de aplicação de testes, como
                        desenvolvimento orientado a testes (TDD), Desenvolvimento guiado por comportamento
                        e Desenvolvimento guiado por design (DDD).
                </p>
                    <p>
                        Com tudo isso, será abordado na pesquisa a relação dos testes de software
                        com a qualidade do mesmo, reforçando a importância de se aplicar os testes,
                        ressaltando o custo benefício dessa aplicação, fazer a valorização da aplicação dos testes.
                </p>
                </div>
                <div className="problema">
                    <p className="title-problema">
                        Problema:
                </p>
                    <p>
                        É necessário aplicar testes em projetos de software?
                </p>
                </div>

                <div className="objetivos">
                    <p className="title-objetivo">
                        OBJETIVO GERAL OU PRIMÁRIO
                </p>

                    <p className="conteudo">
                        O objetivo geral irá desmistificar os testes, trazendo uma quebra de paradigma aos desenvolvedores, compreendendo a relação dos testes com a qualidade.
                </p>

                    <p className="title-objetivo">
                        OBJETIVO GERAL OU PRIMÁRIO
                </p>

                    <p className="conteudo">
                        O objetivo geral irá desmistificar os testes, trazendo uma quebra de paradigma aos desenvolvedores, compreendendo a relação dos testes com a qualidade.
                </p>
                </div>

                <div className="justificativa">
                    <p className="titulo-tema">
                        Tema: Aplicação de teste de Software em ambientes de desenvolvimento.
                </p>

                    <p>
                        O presente projeto de pesquisa tem por motivação a crescente utilização
                        de tecnologias, seja embarcado, web, desktop ou mobile. Trazendo consigo
                        a importância de aplicação de testes seja automatizado ou manual.
                </p>
                    <p>
                        A aplicação de testes tem como objetivo revelar falhas/bugs, que por via
                        das vezes pode trazer a falência de empresas ou causar sérios danos para
                        o seu meio. Outro benefício é a economia de gasto com correção, pelo motivo
                        de quanto mais tarde se encontra o bug/falha, mais caro fica sua manutenção,
                        podendo até mesmo inviabilizar terminar a aplicação.
                </p>
                    <p>
                        Com a evolução da tecnologia, vem com ela a automatização de processos e o ganho de produtividade. Com a utilização de testes não é tão diferente, devido ao tamanho das aplicações e o crescimento de demandas, a aplicação da automação se torna primordial para o ganho de produtividade e garantia de conformidade da aplicação dos requisitos.
                </p>
                </div>
            </main>

        </section>
    )
}