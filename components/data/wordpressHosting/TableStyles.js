import styled from 'styled-components'

export const Styles = styled.div`
  .table {
    font-size: 13px;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      :nth-child(even){background-color: #f2f2f2;}
      :nth-child(odd){background-color: #fff;}
      :hover {background-color: #ddd;}
    }

    .th {
      text-align: left;
      background-color: #fff;
      color: black;
      font-weight: 300;
      border: 1px solid #ddd;
      text-align: left;
      max-width: 100%;
      white-space: nowrap;
      font-size: 16px;
      height: 50px;
      padding-top: 12px;
      padding-bottom: 30px;
      text-align: center;
    }
    .td {
      overflow: hidden;
      border: 1px solid #ddd;
      height: 80px;
      padding-top: 12px;
      padding-bottom: 30px;
      max-width: 100%;
      white-space: nowrap;
      text-align: center;

      :last-child {
        border-right: 0;
      }
    }

    &.sticky {
  
      .header,
      .footer {
        position: sticky;
        z-index: 10;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 0px 0px #ccc;
        margin-bottom: 20px;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
        z-index: 10 !important;
        background: white;
        color: white
        min-width: content-fit
        font-weight: 700;
      }

      [data-sticky-last-left-td] {
        box-shadow: 0px 0px 0px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: 0px 0px 0px #ccc;
      }
    }
  }
`;