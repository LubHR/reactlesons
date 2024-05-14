import React from 'react';
import {useForm} from "react-hook-form";

interface IFormProps{
    title: string,
    body: string,
    userId: number,
}

const FormComponent = () => {

    let formObj = useForm<IFormProps>();
    let {register,handleSubmit} = formObj

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
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'title'} {...register('title')} />
                <input type={'text'} placeholder={'body'} {...register('body')}/>
                <input type={'number'} placeholder={'userId'} {...register('userId')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;