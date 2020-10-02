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

export const DealsIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
        <g fill="none" fill-rule="evenodd">
            <path d="M0 0H24V24H0z" transform="translate(0 .5)"/>
            <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M6 3L18 3 20 6.5 4 6.5z" opacity=".44" transform="translate(0 .5)"/>
            <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M18 5c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h12zm-3 4H9c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1z" transform="translate(0 .5)"/>
        </g>
    </svg>
    );
};


export const TasksIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
            <g fill="none" fill-rule="evenodd" transform="translate(0 .5)">
                <path d="M0 0H24V24H0z"/>
                <rect width="16" height="6" x="4" y="5" fill={props.hover || props.click? "#a475f6": '#fff'} opacity=".44" rx="1.5"/>
                <rect width="16" height="6" x="4" y="13" fill={props.hover || props.click? "#a475f6": '#fff'} rx="1.5"/>
            </g>
        </svg>
    );
};


export const ProductIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} fill-rule="nonzero" d="M10.823 8.37l1.91 1.453C13.41 8.931 14.458 8.4 15.6 8.4c1.988 0 3.6 1.612 3.6 3.6s-1.612 3.6-3.6 3.6c-1.019 0-1.964-.422-2.643-1.155l-1.76 1.63C12.291 17.26 13.86 18 15.6 18c3.314 0 6-2.686 6-6s-2.686-6-6-6c-1.95 0-3.681.93-4.777 2.37z" opacity=".44" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M8.4 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" transform="translate(0 .5)"/>
            </g>
        </svg>
    );
};


export const ContactIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0L24 0 24 24 0 24z" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} fill-rule="nonzero" d="M9 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 0c.552 0 1 .448 1 1v2h2c.552 0 1 .448 1 1s-.448 1-1 1h-2v2c0 .552-.448 1-1 1s-1-.448-1-1V8h-2c-.552 0-1-.448-1-1s.448-1 1-1h2V4c0-.552.448-1 1-1z" opacity=".44" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} fill-rule="nonzero" d="M0 20.2C.389 15.426 4.263 13 8.984 13c4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H.727c-.25 0-.747-.54-.726-.8z" transform="translate(0 .5)"/>
            </g>
        </svg>
    );
};


export const CompanyIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M12.521 3.819l7.522 4.596c.594.363.957 1.01.957 1.707V19c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2v-8.878c0-.697.363-1.344.957-1.707L11.48 3.82c.32-.196.722-.196 1.042 0zM14 13h-4c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-3c0-.552-.448-1-1-1z" transform="translate(0 .5)"/>
            </g>
        </svg>
    );
};

export const ActivityOwnerIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M15.95 3.808l-2.925 2.925c-.781.78-.781 2.047 0 2.828l1.414 1.414c.78.781 2.047.781 2.828 0l2.925-2.925c.542 1.995.038 4.206-1.517 5.76-1.83 1.83-4.566 2.206-6.791 1.134l-5.127 5.127c-.78.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828l5.127-5.127c-1.072-2.225-.696-4.961 1.133-6.79 1.555-1.556 3.766-2.06 5.76-1.518z" transform="translate(0 .5)"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M16.657 5.929l1.414 1.414c.39.39.39 1.024 0 1.414l-1.38 1.38c-.39.39-1.023.39-1.414 0l-1.414-1.414c-.39-.39-.39-1.024 0-1.414l1.38-1.38c.39-.39 1.023-.39 1.414 0z" opacity=".44" transform="translate(0 .5)"/>
            </g>
        </svg>
    );
};

export const ParameterIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M17 3c2.21 0 4 1.79 4 4s-1.79 4-4 4H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10zM7 5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M17 13c2.21 0 4 1.79 4 4s-1.79 4-4 4H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" opacity=".44"/>
            </g>
        </svg>
    );
};

export const EmployeeIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0L24 0 24 24 0 24z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} fill-rule="nonzero" d="M12 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity=".44"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} fill-rule="nonzero" d="M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z"/>
            </g>
        </svg>
    );
};

export const CompensationIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M1 0H25V24H1z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M23.23 8.663c.533.143.85.692.706 1.225l-2.588 9.66c-.143.533-.691.85-1.225.706L1.771 15.337c-.534-.143-.85-.692-.707-1.225l2.588-9.66c.143-.533.691-.85 1.225-.706l18.352 4.917zm-9.695-.527c-2.134-.571-4.327.695-4.899 2.829-.571 2.134.695 4.327 2.829 4.899 2.134.571 4.327-.695 4.899-2.829.571-2.134-.695-4.327-2.829-4.899z" opacity=".44"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M22 6c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h19zm-9.5 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"/>
            </g>
        </svg>
    );
};


export const PayrollIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M4 4h16c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2z" opacity=".44"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M18.5 11h-13c-.828 0-1.5.672-1.5 1.5v.5h4.586c.265 0 .52.105.707.293l1 1c.453.453 1.067.707 1.707.707.64 0 1.254-.254 1.707-.707l1-1c.188-.188.442-.293.707-.293H20v-.5c0-.828-.672-1.5-1.5-1.5zM5.5 6C4.672 6 4 6.672 4 7.5V8h16v-.5c0-.828-.672-1.5-1.5-1.5h-13z"/>
            </g>
        </svg>
    );
};

export const ReportIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <rect width="3" height="16" x="13" y="4" fill={props.hover || props.click? "#a475f6": '#fff'} opacity=".44" rx="1.5"/>
                <rect width="3" height="11" x="8" y="9" fill={props.hover || props.click? "#a475f6": '#fff'} rx="1.5"/>
                <rect width="3" height="9" x="18" y="11" fill={props.hover || props.click? "#a475f6": '#fff'} rx="1.5"/>
                <rect width="3" height="7" x="3" y="13" fill={props.hover || props.click? "#a475f6": '#fff'}rx="1.5"/>
            </g>
        </svg>
    );
};

export const SettingIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M15.95 3.808l-2.925 2.925c-.781.78-.781 2.047 0 2.828l1.414 1.414c.78.781 2.047.781 2.828 0l2.925-2.925c.542 1.995.038 4.206-1.517 5.76-1.83 1.83-4.566 2.206-6.791 1.134l-5.127 5.127c-.78.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828l5.127-5.127c-1.072-2.225-.696-4.961 1.133-6.79 1.555-1.556 3.766-2.06 5.76-1.518z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M16.657 5.929l1.414 1.414c.39.39.39 1.024 0 1.414l-1.38 1.38c-.39.39-1.023.39-1.414 0l-1.414-1.414c-.39-.39-.39-1.024 0-1.414l1.38-1.38c.39-.39 1.023-.39 1.414 0z" opacity=".44"/>
            </g>
        </svg>
    );
};

export const AccountIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
        <defs>
            <path id="prefix__a" d="M0 0L24 0 24 24 0 24z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M12 3c2.761 0 5 2.239 5 5v2h1c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2h1V8c0-2.761 2.239-5 5-5zm0 2c-1.657 0-3 1.343-3 3v2h6V8c0-1.657-1.343-3-3-3z"/>
        </g>
    </svg>
    );
};

export const BankIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <rect width="20" height="5" x="2" y="4" fill={props.hover || props.click? "#a475f6": '#fff'}  opacity=".44" rx="1"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M19 7v12c0 1.105-.895 2-2 2h-6V7h8zM8 7v14H7c-1.105 0-2-.895-2-2V7h3z"/>
            </g>
        </svg>
    );
};

export const IncomeTrackerIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0H24V24H0z"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M7 4H17V8H7z" opacity=".44"/>
                <path fill={props.hover || props.click? "#a475f6": '#fff'} d="M17 2c1.105 0 2 .895 2 2v16c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h10zm-1 16c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-4 0H8c-.552 0-1 .448-1 1s.448 1 1 1h4c.552 0 1-.448 1-1s-.448-1-1-1zm-4-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-8-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm1-6H7v4h10V4z"/>
            </g>
        </svg>
    );
};

export const ExpenseTrackerIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
        <path d="M0 1H24V25H0z"/>
        <g  fill={props.hover || props.click? "#a475f6": '#fff'} opacity=".44" transform="rotate(45 7.086 19.243)">
            <path d="M6.354.146c3.313 0 6 2.687 6 6v13c0 1.105-.896 2-2 2h-8c-1.105 0-2-.895-2-2v-12h3c.056 0 .112-.004.166-.013.407 1.171 1.522 2.013 2.834 2.013 1.656 0 3-1.343 3-3 0-1.656-1.344-3-3-3-1.312 0-2.427.842-2.835 2.015-.053-.01-.109-.015-.165-.015H.437c.476-2.838 2.944-5 5.917-5z"/>
            <rect width="8" height="2" x="2.354" y="13.146" rx="1"/>
            <rect width="6" height="2" x="3.354" y="17.146" rx="1"/>
        </g>
    </g>
</svg>
    );
};

