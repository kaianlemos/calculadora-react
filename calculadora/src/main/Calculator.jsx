import React, { Component } from "react";
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    valorDisplay: '0',
    limparDisplay: false,
    operacao: null,
    values: [0, 0],
    atual: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this);
        this.setarOperacao = this.setarOperacao.bind(this);
        this.adicionarDigito = this.adicionarDigito.bind(this)
    }

    limparMemoria() {
        this.setState({ ...initialState })
    }

    setarOperacao(operacao) {
        if (this.state.atual === 0) {
            this.setState({ operacao, atual: 1, limparDisplay: true })
        } else {
            const igual = operacao === '='
            const operacaoAtual = this.state.operacao
            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${operacaoAtual} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.limparMemoria()
                    return
                }
            }
            catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                valorDisplay: values[0],
                operacao: igual ? null : operacao,
                valorAtual: igual ? 0 : 1,
                limparDisplay: !igual,
                values
            })
        }
    }

    adicionarDigito(n) {
        if (n === '.' && this.state.valorDisplay.includes('.')) {
            return
        }

        const limparDisplay = this.state.valorDisplay === '0' || this.state.limparDisplay
        const valorAtual = limparDisplay ? '' : this.state.valorDisplay
        const valorDisplay = valorAtual + n
        this.setState({ valorDisplay, limparDisplay: false })

        if (n !== '.') {
            const i = this.state.atual
            const novoValor = parseFloat(valorDisplay)
            const values = [...this.state.values]
            values[i] = novoValor
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.valorDisplay} />
                <Button label="AC" click={this.limparMemoria} triple />
                <Button label="/" click={this.setarOperacao} operacao />
                <Button label="7" click={this.adicionarDigito} />
                <Button label="8" click={this.adicionarDigito} />
                <Button label="9" click={this.adicionarDigito} />
                <Button label="*" click={this.setarOperacao} operacao />
                <Button label="4" click={this.adicionarDigito} />
                <Button label="5" click={this.adicionarDigito} />
                <Button label="6" click={this.adicionarDigito} />
                <Button label="-" click={this.setarOperacao} operacao />
                <Button label="1" click={this.adicionarDigito} />
                <Button label="2" click={this.adicionarDigito} />
                <Button label="3" click={this.adicionarDigito} />
                <Button label="+" click={this.setarOperacao} operacao />
                <Button label="0" click={this.adicionarDigito} double />
                <Button label="." click={this.adicionarDigito} />
                <Button label="=" click={this.setarOperacao} operacao />
            </div>
        )
    }
}