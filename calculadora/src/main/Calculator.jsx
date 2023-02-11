import React, { Component } from "react";
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this);
        this.setarOperacao = this.setarOperacao.bind(this);
        this.adicionarDigito = this.adicionarDigito.bind(this)
    }

    limparMemoria() {
        console.log('limpar')
    }

    setarOperacao(operacao) {
        console.log(operacao)
    }

    adicionarDigito(n) {
        console.log(n)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={this.limparMemoria} />
                <Button label="/" click={this.setarOperacao}/>
                <Button label="7" click={this.adicionarDigito}/>
                <Button label="8" click={this.adicionarDigito}/>
                <Button label="9" click={this.adicionarDigito}/>
                <Button label="*" click={this.setarOperacao}/>
                <Button label="4" click={this.adicionarDigito}/>
                <Button label="5" click={this.adicionarDigito}/>
                <Button label="6" click={this.adicionarDigito}/>
                <Button label="-" click={this.setarOperacao}/>
                <Button label="1" click={this.adicionarDigito}/>
                <Button label="2" click={this.adicionarDigito}/>
                <Button label="3" click={this.adicionarDigito}/>
                <Button label="+" click={this.setarOperacao}/>
                <Button label="0" click={this.adicionarDigito}/>
                <Button label="." click={this.adicionarDigito}/>
                <Button label="=" click={this.setarOperacao}/>
            </div>
        )
    }
}