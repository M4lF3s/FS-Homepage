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
import { string } from 'prop-types';

export default () => {


  function linear_interpolation(toItemSize : number, fromItemSize : number, toReferenceSize : number, fromReferenceSize : number, currentValue : number) {
    const slope = (toItemSize - fromItemSize) / (toReferenceSize - fromReferenceSize);
    const base = fromItemSize - slope * fromReferenceSize;
    return (base + (currentValue * slope))
  }

  const handleScroll = e => {

    const h = $('#header').css('max-height').replace('px', '') as unknown as number;
    $('#header').css('height', `${(h - window.scrollY) < 64 ? 64 : (h - window.scrollY)}px`);

    const size = linear_interpolation(
      $('#header').css('min-height').replace('px', '') as unknown as number, 
      $('#logo').css('max-height').replace('px', '') as unknown as number, 
      ($('#header').css('max-height').replace('px', '') as unknown as number)-100,
      0, 
      window.scrollY 
    )

    $('#logo').css('height', `${size < 52 ? 52 : size}px`);
    $('#logo').css('width', `${size < 52 ? 52 : size}px`);

    const position = linear_interpolation(
      6, 
      (($('#logo_section').css('width').replace('px', '') as unknown as number)-($('#logo').css('max-height').replace('px', '') as unknown as number))/2, 
      ($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      0, 
      window.scrollY 
    )

    console.log(position);

    $('#logo_section').css('grid-template-columns', `${position < 6 ? 6 : position}px auto 1fr`);
    
    $('#header').css('height').replace('px', '') as unknown as number < 65 ? $('#header').addClass('mdc-top-app-bar--fixed-scrolled-new') : $('#header').removeClass('mdc-top-app-bar--fixed-scrolled-new');

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <div id="logo" className="mdc-toolbar__logo" />
          </TopAppBarSection>
          <TopAppBarSection id="title_section">
            <span id="title">
              Fachschaft MPI
            </span>
          </TopAppBarSection>
      </TopAppBar>
      <TopAppBarFixedAdjust>
        My exciting content!
      </TopAppBarFixedAdjust>
    </div>
  )
  
}