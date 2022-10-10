import './fonts/dmsans/stylesheet.css'
import './fonts/raleway/stylesheet.css'
import 'antd/dist/antd.css';

import { createGlobalStyle, css } from 'styled-components'

const generic = css`
  html,
  body,
  #root,
  .app {
    font-family: 'DMSans-Regular', sans-serif;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    letter-spacing: 0.25px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

const customClasses = css`
  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ant-notification-notice-close {
    top: 20px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .hidden {
    display: none !important;
  }
  .spinning {
    animation: spin-animation 500ms infinite;
    animation-timing-function: linear;
    display: inline-block;
  }
  @keyframes spin-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const print = css`
  @media all {
    .page-break {
      display: none;
    }
    .new-page {
      page-break-before: always;
      display: flex;
      flex-direction: column;
    }
    body {
      overflow: visible;
      display: initial;
    }
  }
  @media print {
    html,
    body {
      height: initial !important;
      overflow: initial !important;
      -webkit-print-color-adjust: exact;
    }
  }
  @media print {
    .page-break {
      margin-top: 1rem;
      display: block;
      page-break-before: auto;
    }
  }
  @page {
    size: auto;
    margin: 20mm;
  }
`

const GlobalStyle = createGlobalStyle`
${generic}
${customClasses}
${print}
`

export default GlobalStyle
