import React from 'react'
import Button from "@atlaskit/button";
import styled, { css }  from "styled-components" 
import CheckIcon from "@atlaskit/icon/glyph/check"

const ButtonStyled = styled(Button)`
    margin-top: 15px;
    text-align: left;

    &, &:hover {
        ${(p) => p.completed ? 
            css`
                text-decoration: line-through;    
            ` : ''
        }
    }

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon {
        display: none;

        &:hover { 
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }
`

export default function ToDo( { toDo, onCheckBtnClick }) {
  return (
    <ButtonStyled 
        completed={toDo.completed}
        shouldFitContainer 
        iconAfter={
            !toDo.completed &&
            (
            <span className='check-icon' onClick={() => onCheckBtnClick(toDo.id)}>
                <CheckIcon primaryColor='#4fff4f'></CheckIcon>
            </span>
            )
        }
    >{toDo.title}</ButtonStyled>
  )
}
