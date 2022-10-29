import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const { data :services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    const imageStorageKey='9717d5d4436d262250f736d12880032f'
  
  
    const onSubmit = async data => {
        console.log('added expert',data)
        const image=data.image[0];
       const formData=new FormData();
       formData.append('image',image)
        const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
     fetch(url,{

        method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(result=>{
       
        if(result.success){
           
            const img =result.data.url
            const expert={
                 name:data.name,
                 email:data.email,
                 speciality: data.Speciality,
                 img:img
            }
            fetch('http://localhost:5000/expert',{


    method:'POST',
    headers:{
        'content-type':'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
    body:JSON.stringify(expert)

            })
            .then(res=>res.json())
            .then(inserted=>
                
                { console.log('added ',inserted)
                    if(inserted.insertedId)
                    {
                        toast.success('expert added successfully')
                     reset();
                    }
                    else{
                        toast.error('Failed to add a expert')
                    }
                    console.log('', inserted)
                })
        }
        // console.log('image',result)
    })
    
    // console.log('data',data)
    
    
     }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'> add service</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs ">
                    <label class="label ">
                        <span class="label-text">Name</span>

                    </label>
                    <input className='m-0'
                    type="text"
                        placeholder="name"
                        class="input input-bordered w-full max-w-xs" 
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required'
                            },


                        })}
                        />
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
                        <span class="label-text">Speciality</span>

                    </label>


                    <select  {...register('Speciality')} class="select input-bordered w-full max-w-xs">
                       

                        {
                            services.map(service => <option   
                              key={service._id}
                                value={service.name}
                                >{service.name}

                                 

                            </option>
                            )
                        }
                    </select>

                </div>

                <div class="form-control w-full max-w-xs ">
                    <label class="label ">
                        <span class="label-text">Photo</span>

                    </label>
                    <input className='m-0'
                    type="file"
                       
                        class="input input-bordered w-full max-w-xs" 
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            },


                        })}
                        />
                    <label class="label">
                        {errors.name?.type === 'required' && <p class="label-text-alt text-red-500">{errors.name.message}</p>}



                    </label>
                </div>








                <input className='btn  w-max-xs ' type="submit" value="Add Product" />
            </form>


        </div>
    );
};

export default AddProduct;