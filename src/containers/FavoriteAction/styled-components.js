import styled from "styled-components";

import Flexbox from "../../components/Flexbox";

export const FavoriteContainer = styled(Flexbox)`
         height: fit-content;
         width: fit-content;
         align-items: center;
         border: 1px solid rgba(22, 21, 21, 1);
         border-radius: 4px;
         background-color: white;
         transition: 1s;
         cursor: pointer;

         .MuiSvgIcon-root {
           color: black;
           margin-right: 7px;
         }
         .favorite-title {
           &.MuiTypography-body1 {
             color: black;
             margin: 5px 9px;
           }
         }

         &:hover {
           background-color: rgba(22, 21, 21, 1);

           .MuiSvgIcon-root {
             color: white;
           }
           .favorite-title {
             &.MuiTypography-body1 {
               color: white;
             }
           }
         }
       `;
