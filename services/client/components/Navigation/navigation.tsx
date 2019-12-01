import React, {useEffect, useState, Fragment} from 'react'
import Link from 'next/link'
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import head from 'next/head';
import $ from 'jquery';
import { string } from 'prop-types';
import styles from './navigation.module.scss';
import './navigation.global.scss';
import Link from 'next/link';
import {withRouter} from 'next/router';

export default withRouter((props) => {

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

    const opacity = linear_interpolation(
      0,
      1,
      //($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      $('#title').offset().top - ($('#logo').offset().top),
      0,
      window.scrollY
    )


    const margin_title = linear_interpolation(
      0,
      $('#title').css('margin-top').replace('px', '') as unknown as number,
      ($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      0, 
      window.scrollY
    )

    const hw = $('#header').css('width').replace('px', '') as unknown as number;
    const tw = $('#title').css('width').replace('px', '') as unknown as number;
    const hh = $('#header').css('height').replace('px', '') as unknown as number;

    const position_title_x = linear_interpolation(
      0,
      (hw - tw) / 2,
      ($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      0, 
      window.scrollY
    )

    const position_title_y = linear_interpolation(
      0,
      hh / 2,
      ($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      0, 
      window.scrollY
    )

    const size_title = linear_interpolation(
      0.7,
      1,
      ($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      0,
      window.scrollY
    )

    const margin_left_pre_title = linear_interpolation(
      18,
      0,
      ($('#header').css('max-height').replace('px', '') as unknown as number)-70,
      0,
      window.scrollY
    )


    $('#logo_section').css('grid-template-columns', `${position < 6 ? 6 : position}px auto 1fr`);
    
    if($('#header').css('height').replace('px', '') as unknown as number < 65) {
      $('#header').addClass('mdc-top-app-bar--fixed-scrolled-new')
    } else {
      $('#header').removeClass('mdc-top-app-bar--fixed-scrolled-new')
    };

    $('#pre_title').css('opacity', `${(opacity < 0 || opacity > 1) ? 0 : opacity}`);
    //$('#title').css('margin-top', margin_title);
    $('#title_section').css('grid-template-columns', `${position_title_x}px auto 1fr`);
    $('#title_section').css('grid-template-rows', `${position_title_y}px 1fr`);
    $('#pre_title').css('margin-left', `-${margin_left_pre_title > 18 ? 18 : margin_left_pre_title}rem`);
    $('#title').css('transform', `scale(${size_title < 0.7 ? 0.7 : size_title})`);

    window.scrollY > 0 ? $('#menu_section').removeClass(styles.expanded) : $('#menu_section').addClass(styles.expanded);
  }

  const url = props.router.pathname.replace('/', '');

  if(url === 'Home') {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      //window.addEventListener('resize', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
  }



  return (
    <div>
      <TopAppBar fixed id='header' className={`${styles.header} ${url === 'Home' ? styles.expanded : ''} ${url !== 'Home' ? 'mdc-top-app-bar--fixed-scrolled-new' : ''}`}>
          <TopAppBarSection id='menu_section' className={`${styles.menu_section} ${url === 'Home' ? styles.expanded : ''}`} align='end' role='toolbar'>
            <Link href={'/News'}>
            <button className={`${styles.navButton} mdc-button`}>
              <i className="material-icons mdc-button__icon md18" aria-hidden="true">line_style</i>
              <span className="mdc-button__label">News</span>
            </button></Link>
            <Link href={'/Fachschaft'}>
            <button className={`${styles.navButton} mdc-button`}>
              <i className="material-icons mdc-button__icon md18" aria-hidden="true">supervised_user_circle</i>
              <span className="mdc-button__label">Fachschaft</span>
            </button></Link>
          </TopAppBarSection>
            <TopAppBarSection id="logo_section" className={`${styles.logo_section} ${url === 'Home' ? styles.expanded : ''}`}>
              <a href={'/'}>
                <div id="logo" className={`mdc-toolbar__logo ${styles.logo}`} />
              </a>
            </TopAppBarSection>
            <TopAppBarSection id="title_section" className={`${styles.title_section} ${url === 'Home' ? styles.expanded : ''}`}>
          <div id="title" className={styles.title}>
          <span id="pre_title" className={styles.pre_title}>Willkommen in der </span>
          <span>Fachschaft MPI</span>
          </div>
          </TopAppBarSection>
      </TopAppBar>
      <TopAppBarFixedAdjust className={url === 'Home' ? 'expanded' : ''}>
        { props.children }
      </TopAppBarFixedAdjust>
    </div>
  )
  
})