import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDateModel} from "../modules/AuthDateModel";
import {authService} from "../service/api.service.";

const FoormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDateModel>({defaultValues:{username:"Lubikkk1",password:"Pas$word123"}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    
    const authenticate = async (formData:AuthDateModel)=>{
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }

    return (
        <div>
            <h3>login form</h3>
            <div>
                {
                    isAuthState? <span>ok</span>: <span>not ok</span>
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type='text' {...register("username")}/>
                <input type='text' {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default FoormComponent;