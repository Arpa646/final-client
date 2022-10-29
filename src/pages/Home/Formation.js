import React from 'react';
import Card from './Card';
import facial from '../../assets/im/facial.webp'
import hair from '../../assets/im/hair.webp'
import pedi from '../../assets/im/pedi.jpg'





const Formation = () => {
    return (
       <div>
       
  <div>
    <h1 className='biggest'>Our Biggest Offer Package</h1>
  </div>
         <div class='grid grid-cols-1 lg:grid-cols-4 gap-0 color b'>
            <Card name={"HairTreatment"} img={ hair} item1={'Oil &Shampoo'} item2={"Hair Rebonding"}  item3={"HairCut"} item4={"Hair Spa"}  price={"7000Tk"}></Card>
            <Card name={"BodyCare"} img={pedi}  item1={'Eye Brue'} item2={"pedicure"}  item3={"Menicure"} item4={"Wax"}  price={"3000Tk"}  ></Card>
            <Card  name={"FaceCleanser"}img={facial}  item1={'Facial'} item2={"White Facial"}  item3={"Bleach"} item4={"acnee treatment"} price={"2000Tk"}   ></Card>
            
        </div>
       </div>
    );
};

export default Formation;