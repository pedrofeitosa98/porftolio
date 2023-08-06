/* http://css3developer.com/css-animations/
© 2016 CSS3DEVELOPER.COM ALL RIGHTS RESERVED.*/

import { createGlobalStyle } from 'styled-components'

const GlobalAnimations = createGlobalStyle`
  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  }

  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
    
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
    
      100% {
        opacity: 1;
      }
    }
    
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
    
      100% {
        opacity: 1;
      }
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    
    @-webkit-keyframes fadeInLeft {
      0% {
        opacity: 1;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    
    @keyframes fadeInLeft {
      0% {
        opacity: 1;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
  }

  .bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    
    @-webkit-keyframes bounceIn {
    
      0%,
      20%,
      40%,
      60%,
      80%,
      100% {
        -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
    
      0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
    
      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
    
      40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }
    
      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }
    
      80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97);
      }
    
      100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    
    @keyframes bounceIn {
    
      0%,
      20%,
      40%,
      60%,
      80%,
      100% {
        -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
    
      0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
    
      20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
    
      40% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }
    
      60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
      }
    
      80% {
        -webkit-transform: scale3d(.97, .97, .97);
        transform: scale3d(.97, .97, .97);
      }
    
      100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
  }

  .bounceOut {
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    
    @-webkit-keyframes bounceOut {
      20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }
    
      50%,
      55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
    
      100% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
    }
    
    @keyframes bounceOut {
      20% {
        -webkit-transform: scale3d(.9, .9, .9);
        transform: scale3d(.9, .9, .9);
      }
    
      50%,
      55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
      }
    
      100% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
    }
  }

  .bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    
    @-webkit-keyframes bounceOutDown {
      20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }
    
      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }
    
      100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }
    }
    
    @keyframes bounceOutDown {
      20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }
    
      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }
    
      100% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
      }
    }
    animation-fill-mode: both;
  }

  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    
    @-webkit-keyframes bounceInUp {
    
      0%,
      60%,
      75%,
      90%,
      100% {
        -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
    
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
      }
    
      60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }
    
      75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }
    
      90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
      }
    
      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes bounceInUp {
    
      0%,
      60%,
      75%,
      90%,
      100% {
        -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
    
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
      }
    
      60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }
    
      75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
      }
    
      90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
      }
    
      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .rotateIn {
      -webkit-animation-name: rotateIn;
      animation-name: rotateIn;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;

      @-webkit-keyframes rotateIn {
        0% {
          -webkit-transform-origin: center;
          transform-origin: center;
          -webkit-transform: rotate3d(0, 0, 1, -200deg);
          transform: rotate3d(0, 0, 1, -200deg);
          opacity: 0;
        }
        100% {
          -webkit-transform-origin: center;
          transform-origin: center;
          -webkit-transform: none;
          transform: none;
          opacity: 1;
        }
      }
      @keyframes rotateIn {
        0% {
          -webkit-transform-origin: center;
          transform-origin: center;
          -webkit-transform: rotate3d(0, 0, 1, -200deg);
          transform: rotate3d(0, 0, 1, -200deg);
          opacity: 0;
        }
        100% {
          -webkit-transform-origin: center;
          transform-origin: center;
          -webkit-transform: none;
          transform: none;
          opacity: 1;
        }
      }
    }

  .slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes slideInUp {
      0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
      }
      100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      }
    }
    @keyframes slideInUp {
      0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
      }
      100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      }
    } 
  }
`

export default GlobalAnimations
