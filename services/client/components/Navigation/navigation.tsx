import React, { useEffect } from 'react'
import Link from 'next/link'
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import './navigation.scss';
import head from 'next/head';
import $ from 'jquery';

export default () => {

  function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  const handleScroll = e => {
    //console.log(window.scrollY);
    const header = document.getElementById('header');
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.8;
        header.style.height = `${(h - window.scrollY) < 64 ? 64 : (h - window.scrollY)}px`;
    header.clientHeight < 65 ? header.classList.add('mdc-top-app-bar--fixed-scrolled-new') : header.classList.remove('mdc-top-app-bar--fixed-scrolled-new'); 

    
    const grid = $('#logo_section')
    const logo = $('#logo-container').height()
    console.log(logo)
    const fr = ($(window).height()*0.8-256)/2
    const he = 256 + (Math.round(window.scrollY) * ((256-64) / (0 - vh(80)-64)))
    const firstRow = 64 + window.scrollY * -($(window). height() * 0.8 - 64) / fr 
    console.log(`HEIGHT: ${Math.round(he)} | SCROLLED: [${Math.round(window.scrollY)}/${vh(80)-64}]`);
    //grid.style.gridTemplateRows = `${Math.round(fr - window.scrollY)}px ${Math.round(he)}px ${Math.round(fr - window.scrollY)}px`;
    grid.css('grid-template-rows', `${Math.max(Math.round(firstRow),0)}px ${Math.round(he)}px 1fr`)

  }

  



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  


  return (
    <div>
      <TopAppBar fixed id='header' >
        <TopAppBarRow>
          <TopAppBarSection align='end' role='toolbar'>
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon 
                aria-label="print page" 
                hasRipple 
                icon='print' 
                onClick={() => console.log('print')}
              />
            </TopAppBarIcon>
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon 
                aria-label="print page" 
                hasRipple 
                icon='home' 
                onClick={() => console.log('print')}
              />
            </TopAppBarIcon>
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon 
                aria-label="print page" 
                hasRipple 
                icon='menu' 
                onClick={() => console.log('print')}
              />
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
          <TopAppBarSection id="logo_section">
          <div id="logo-container">
            <div id="logo" className="mdc-toolbar__logo" />
          </div>
          </TopAppBarSection>
      </TopAppBar>
      <TopAppBarFixedAdjust>
        My exciting content!
      </TopAppBarFixedAdjust>
    </div>
  )
  
}