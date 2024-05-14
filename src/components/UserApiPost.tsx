import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import './Style.Api.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {validatorPost} from "../resolverPost/validatorPost";


interface IFormProps{
    title: string,
    body: string,
    userId: number,
}

const FormComponent:FC = () => {

    let {register ,
        handleSubmit,
        formState:{errors}
    } = useForm<IFormProps>({mode:"all",resolver: joiResolver(validatorPost)});

    const save = (formValue:IFormProps) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: formValue.title,
                body: formValue.body,
                userId: formValue.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className={'baty'}>
            <h2>PostUserCreate</h2>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'title'} {...register('title')} />
                {errors.title && <p>{errors.title.message}</p>}
                <br/>
                <input type={'text'} placeholder={'body'} {...register('body')}/>
                {errors.body && <p>{errors.body.message}</p>}
                <br/>
                <input type={'number'} placeholder={'userId'} {...register('userId')}/>
                {errors.userId && <p>{errors.userId.message}</p>}
                <br/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;