import axios from "axios";
import { useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";

export const LeftDiv = () => {
    
    const [data, setData] = useState(["0,00", "0,00", "0,00", "0,00"])

    const amountArray = []
    const periodsArray = Object.keys(data)

console.log(periodsArray)
  
for (const [key, value] of Object.entries(data)){
    amountArray.push(value)
}

    const formSchema = yup.object().shape({
        amount: yup.string().required("Campo obrigatório"),
        installments: yup.string().required("Numero de parcelas obrigat'rio"),
        mdr: yup.number().required("MDR obrigatório"),
        days: yup.string()
    })
    
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(formSchema)
      });

    function OnSubmitForm(newData){

        if(newData.days){

            newData.days =newData.days.split(",")

            axios
            .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", newData)
            .then((response)=>{
                setData(response.data)
            }).catch((err)=>console.log(err))

        }else
        axios
            .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {amount:newData.amount, installments: newData.installments, mdr: newData.mdr})
            .then((response)=>{
                setData(response.data)
            }).catch((err)=>console.log(err))
    }

    return(
        <Container>
            <div className="leftSide">
                <form className="form" onSubmit={handleSubmit(OnSubmitForm)}>
                    <h2>Simule a sua antecipação</h2>
                    <label htmlFor="amount">Informe o valor da venda *</label>
                    <input className="input" id="amount" type="text" {...register("amount")}/>

                    <label htmlFor="installments">Em quantas parcelas *</label>
                    <input className="input" id="installments" type="text" {...register("installments")} />

                    <label htmlFor="mdr">Informe o percentual de MDR *</label>
                    <input className="input" id="mdr" type="text" {...register("mdr")}/>

                    {<label htmlFor="days">Informe um periodo</label>}
                    {<input className="input" id="days" type="text" {...register("days")}/>}

                    <button className="btnSubmit" type="submit">Enviar</button>

                </form>

            </div>

            <div className="rightSide">
                <div className="dashboard">
                    <h3 className="h3RightSide">Você receberá:</h3>
                    <ul>
                        <li className="liDashboard">Em {periodsArray[0]} dia ${amountArray[0]}</li>
                        <li className="liDashboard">Em {periodsArray[1]} dias ${amountArray[1]}</li>
                        <li className="liDashboard">Em {periodsArray[2]} dias ${amountArray[2]}</li>
                        <li className="liDashboard">Em {periodsArray[3]} dias ${amountArray[3]}</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
  }