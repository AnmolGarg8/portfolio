import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to('.loader-container', {
            y: '-100%',
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
            onComplete: onComplete
          });
        }, 300);
      }
    });

    // Set initial opacity
    gsap.set('.loader-text span', { opacity: 0, filter: 'blur(10px)' });
    
    tl.to('.loader-text span', {
      opacity: 1,
      filter: 'blur(0px)',
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to('.loader-bar-fill', {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut'
    }, '-=0.5');

  }, [onComplete]);

  return (
    <div className="loader-container" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: '#060608',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="loader-text" style={{
        fontFamily: 'Clash Display',
        fontWeight: 700,
        fontSize: '3rem',
        color: '#F8FAFC',
        marginBottom: '2rem'
      }}>
        <span>[</span>
        <span style={{ color: '#00E5FF' }}>A</span>
        <span style={{ color: '#7C3AED' }}>G</span>
        <span>]</span>
      </div>
      
      <div className="loader-bar" style={{
        width: '200px',
        height: '2px',
        backgroundColor: 'rgba(248, 250, 252, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="loader-bar-fill" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '0%',
          backgroundColor: '#00E5FF',
          boxShadow: '0 0 10px #00E5FF'
        }}></div>
      </div>
    </div>
  );
};

export default Loader;
