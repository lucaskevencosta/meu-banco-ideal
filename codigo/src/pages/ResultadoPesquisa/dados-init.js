export const ExtratoSaldoInit = (firebase)=>{
    let extratoSaldo = []

    firebase.database().ref('Extrato-Saldo').on('value', (snapshot)=> {
        let lista = snapshot.val()
        lista.map((item)=>{
            extratoSaldo.push(item)
        })
    })

    return extratoSaldo
}

export const SaquesInit = (firebase)=>{
    let saques = []
    
    firebase.database().ref('Saques').on('value', (snapshot)=>{
        let lista = snapshot.val()
        lista.map((item)=>{
            saques.push(item)
        })
    })

    return saques
}

export const AnuidadeInit = (firebase)=>{
    let anuidades = []

    firebase.database().ref('anuidade-cartao').on('value', (snapshot)=>{
        let lista = snapshot.val()
        lista.map((item)=>{
            anuidades.push(item)
        })
    })

    return anuidades
}

export const TedInit = (firebase)=>{
    let teds = []

    firebase.database().ref('TED').on('value', (snapshot)=>{
        let lista = snapshot.val()
        lista.map((item)=>{
            teds.push(item)
        })
    })

    return teds
}

export const InicioRelacionamentoInit = (firebase)=>{
    let inicioRelacionamentos = []

    firebase.database().ref('inicio-relacionamento').on('value', (snapshot)=>{
        let lista = snapshot.val()
        lista.map((item)=>{
            inicioRelacionamentos.push(item)
        })
    })

    return inicioRelacionamentos
}