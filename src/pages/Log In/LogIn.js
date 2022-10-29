// // import React from 'react';
// // import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// // import auth from '../../firebase.init'
// // const LogIn = () => {
// //     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
// //     if(user){
// //         console.log(user)
// //     }
// //     return (
// //     <div className='flex h-screen justify-center items-center'>
// //            <div class="card w-96 bg-base-100 shadow-xl">
// //         <div class="card-body">
// //           <h2 class="text-center text-2xl text-bold">Log In</h2>

// //        <div class="divider">OR</div>

// //        <button
// //        onClick={() => signInWithGoogle()}
// //         class="btn btn-outline btn-accent">continue with google</button>
// //           </div>
// //         </div>
// //       </div>

// //     );
// // };

// // export default LogIn;
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token]=useToken(user||gUser)
  let signInerror;
  const navigate =useNavigate();
  const location =useLocation();
  let from=location.state?.from?.pathname|| "/";
  if (error || gError) {
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    signInerror = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }
 useEffect(()=>{
  if (token) {
    navigate(from,{replace:true})
  }
 },[token,from,navigate])
  if (loading || gLoading) {
    return <Loading></Loading>
  }

  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
    navigate('/appointment')
  }




  return (
    <div className='flex h-screen justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">

          <h2 class="text-center text-2xl text-bold">Log In</h2>



          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label  ">
                <span class="label-text">Email</span>

              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: 'email is required'
                  },

                  pattern:
                  {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'provide a valid email'
                  }
                })}
                type="email"
                placeholder="Email"
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.email?.type === 'required' && <p class="label-text-alt text-red-500">{errors.email.message}</p>}
                {errors.email?.type === 'pattern' && <p class="label-text-alt text-red-500">{errors.email.message}</p>}


              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">password</span>

              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: 'password is required'
                  },

                  minLength:
                  {
                    value: 6,
                    message: 'must be 6 character or longer'
                  }
                })}
                type="password"
                placeholder="password"
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.password?.type === 'required' && <p class="label-text-alt text-red-500">{errors.password.message}</p>}
                {errors.password?.type === 'minLength' && <p class="label-text-alt text-red-500">{errors.password.message}</p>}


              </label>
            </div>
         

            {/* <input 
       
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
       */}
       {signInerror}
            <input className='btn w-full  w-max-xs ' type="submit" value="Log In" />
          </form>
          <p><small>new membar? <Link className="text-primary" to='/signup'>Create New Account</Link></small></p>
          <div class="divider">OR</div>
          <div class="card-actions justify-center">
            <label htmlFor="">

              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline w-full  w-max-xs ">continue with google</button>
            </label>


          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;