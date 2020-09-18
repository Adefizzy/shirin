import  React from 'react';

export const DashbaordIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <rect width="7" height="7" x="4" y="4" fill={props.hover? "#a475f6": '#fff'} rx="1.5"/>
                <path fill={props.hover? "#a475f6": '#fff'}  d="M9.5 13c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4zm9 0c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4zm0-9c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4z" opacity=".44"/>
            </g>
        </svg>
    );
};