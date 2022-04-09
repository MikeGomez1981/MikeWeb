
import React,{useState, useEffect, useCallback} from 'react';
import {images} from '../../exports/images.js';
import styled from 'styled-components';

const CarouselImg = styled.img`
    padding-top:5%;
    max-width: 100%;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity:1;
    }    
    `;
const ButtonContainer= styled.div`
    justify-content: center;
    display: flex;
    margin-top: 5%;`;


  
const autoplay= Boolean;

export const Carousel = () => {;

    //const images= ['1.png','2.png','3.png'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);
    
    
    const previous = ()=>{
        setLoaded(false);
        setTimeout(()=>{
            const condition = selectedIndex > 0;
            const nextIndex = condition ? selectedIndex -1 : images.length -1 ;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
            
        }, 500);
    }
    const next = useCallback(()=>{
        setLoaded(false);
        setTimeout(()=>{
            const condition = selectedIndex < images.length -1;
            const nextIndex = condition ? selectedIndex +1 : 0;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    },[selectedIndex]);
    
    useEffect(() => {
      if (autoplay ) {
          const interval = setInterval(()=>{
                next(selectedIndex, images);               
          },3000);
      return () => clearInterval(interval);
      }    
    },[next, selectedIndex]);
    

    return (
        <>
            
            <CarouselImg 
                src={selectedImage}
                className={(loaded ? "loaded" : "") } 
                alt="imagen" 
                onLoad={()=>setLoaded(true) }/>
            <ButtonContainer>
                <button className="CarouselButtonIzq" onClick={previous}>{'<'}</button>
                <button className="CarouselButtonDer" onClick={next} >{'>'}</button>
            </ButtonContainer>    

        </>
  
  )
} 
