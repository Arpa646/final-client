import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
//import { useToken } from '../../hooks/useToken.js'
import useToken from '../../hooks/useToken';
import './style.css'
import flower from '../../assets/im/pata.png';
import flower1 from '../../assets/im/pata2.png';
const SignUp = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
 // const [token] = useToken(user || gUser);
  
  const [token]=useToken(user || gUser)
  const navigate = useNavigate()
  let signInerror;
  if (error || gError || updateerror) {
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    signInerror = <p className='text-red-500'><small>{error?.message || gError?.message || updateerror?.message}</small></p>
  }
  if (user || gUser) {
    // console.log('uuuu',user || gUser);
    console.log(gUser)
  }
  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }

  if(token){
     navigate('/appointment')
  }
  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name });
    console.log('update done');
    //  navigate('/appointment')
  }




  return (
    <div>
      <div className='flex h-screen justify-center items-center design '>
      <img src={flower} alt="" />
      <img className='pata2' src={flower1} alt="" />
      
        <div class="card w-96 bg-base-100 shadow-xl ">
          <div class="card-body">

            <h2 class="text-center text-2xl text-bold">sign Up</h2>



            <form onSubmit={handleSubmit(onSubmit)}>

              <div class="form-control w-full max-w-xs ">
                <label class="label ">
                  <span class="label-text">Name</span>

                </label>
                <input className='m-0'
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'name is required'
                    },


                  })}
                  type="text"
                  placeholder="name"
                  class="input input-bordered w-full max-w-xs" />
                <label class="label">
                  {errors.name?.type === 'required' && <p class="label-text-alt text-red-500">{errors.name.message}</p>}



                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>

                </label>
                <input className='m-0'
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
              <input className='color2 w-full  w-max-xs ' type="submit" value="Log In" />
            </form>
            <p><small>Allready have account?<Link className="text-primary" to='/login'> Log In</Link></small></p>
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
    </div>
  );
};

export default SignUp;