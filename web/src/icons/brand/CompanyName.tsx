import { useTheme } from 'styled-components/macro';

export function CompanyName(props: React.SVGProps<SVGSVGElement>) {
    const theme = useTheme();

    return (
        <svg width="89" height="15" viewBox="0 0 89 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M0.33 14V0.319999H5.802C6.77733 0.319999 7.56583 0.516333 8.1675 0.909C8.76917 1.29533 9.20933 1.783 9.488 2.372C9.76667 2.961 9.906 3.55633 9.906 4.158C9.906 4.92433 9.73183 5.56083 9.3835 6.0675C9.0415 6.57417 8.56967 6.913 7.968 7.084V6.609C8.823 6.78633 9.46267 7.18217 9.887 7.7965C10.3177 8.41083 10.533 9.098 10.533 9.858C10.533 10.675 10.381 11.3938 10.077 12.0145C9.77933 12.6352 9.32333 13.1228 8.709 13.4775C8.09467 13.8258 7.322 14 6.391 14H0.33ZM2.952 11.568H6.125C6.47333 11.568 6.78367 11.4952 7.056 11.3495C7.32833 11.1975 7.5405 10.9885 7.6925 10.7225C7.85083 10.4502 7.93 10.1303 7.93 9.763C7.93 9.44 7.8635 9.15183 7.7305 8.8985C7.5975 8.64517 7.39483 8.44567 7.1225 8.3C6.8565 8.148 6.524 8.072 6.125 8.072H2.952V11.568ZM2.952 5.659H5.764C6.05533 5.659 6.315 5.60833 6.543 5.507C6.771 5.40567 6.9515 5.2505 7.0845 5.0415C7.2175 4.82617 7.284 4.55067 7.284 4.215C7.284 3.797 7.15417 3.4455 6.8945 3.1605C6.63483 2.8755 6.258 2.733 5.764 2.733H2.952V5.659ZM17.1967 14.285C16.1453 14.285 15.2175 14.0602 14.4132 13.6105C13.6152 13.1545 12.9882 12.5307 12.5322 11.739C12.0825 10.941 11.8577 10.029 11.8577 9.003C11.8577 7.882 12.0793 6.90667 12.5227 6.077C12.966 5.24733 13.5772 4.6045 14.3562 4.1485C15.1352 3.68617 16.0313 3.455 17.0447 3.455C18.1213 3.455 19.0365 3.70833 19.7902 4.215C20.5438 4.72167 21.1012 5.43417 21.4622 6.3525C21.8232 7.27083 21.9498 8.35067 21.8422 9.592H19.2867V8.642C19.2867 7.597 19.1188 6.8465 18.7832 6.3905C18.4538 5.92817 17.9123 5.697 17.1587 5.697C16.2783 5.697 15.6292 5.96617 15.2112 6.5045C14.7995 7.0365 14.5937 7.825 14.5937 8.87C14.5937 9.82633 14.7995 10.5673 15.2112 11.093C15.6292 11.6123 16.2403 11.872 17.0447 11.872C17.5513 11.872 17.9852 11.7612 18.3462 11.5395C18.7072 11.3178 18.9827 10.998 19.1727 10.58L21.7567 11.321C21.3703 12.2583 20.7592 12.9867 19.9232 13.506C19.0935 14.0253 18.1847 14.285 17.1967 14.285ZM13.7957 9.592V7.673H20.5977V9.592H13.7957ZM28.1482 14.285C27.2046 14.285 26.3781 14.0475 25.6687 13.5725C24.9594 13.0975 24.4052 12.4515 24.0062 11.6345C23.6136 10.8175 23.4172 9.896 23.4172 8.87C23.4172 7.825 23.6167 6.89717 24.0157 6.0865C24.4211 5.2695 24.9879 4.62667 25.7162 4.158C26.4446 3.68933 27.2996 3.455 28.2812 3.455C29.2566 3.455 30.0767 3.6925 30.7417 4.1675C31.4067 4.6425 31.9102 5.2885 32.2522 6.1055C32.5942 6.9225 32.7652 7.844 32.7652 8.87C32.7652 9.896 32.5911 10.8175 32.2427 11.6345C31.9007 12.4515 31.3877 13.0975 30.7037 13.5725C30.0197 14.0475 29.1679 14.285 28.1482 14.285ZM28.5662 11.986C29.1426 11.986 29.6017 11.8562 29.9437 11.5965C30.2921 11.3368 30.5422 10.9727 30.6942 10.504C30.8462 10.0353 30.9222 9.49067 30.9222 8.87C30.9222 8.24933 30.8462 7.70467 30.6942 7.236C30.5422 6.76733 30.2984 6.40317 29.9627 6.1435C29.6334 5.88383 29.1996 5.754 28.6612 5.754C28.0849 5.754 27.6099 5.8965 27.2362 6.1815C26.8689 6.46017 26.5966 6.837 26.4192 7.312C26.2419 7.78067 26.1532 8.3 26.1532 8.87C26.1532 9.44633 26.2387 9.972 26.4097 10.447C26.5807 10.9157 26.8436 11.2893 27.1982 11.568C27.5529 11.8467 28.0089 11.986 28.5662 11.986ZM30.9222 14V6.97H30.5992V0.319999H33.2022V14H30.9222ZM38.7122 14.285C37.9776 14.285 37.3537 14.1457 36.8407 13.867C36.3341 13.582 35.9477 13.2052 35.6817 12.7365C35.4221 12.2615 35.2922 11.739 35.2922 11.169C35.2922 10.694 35.3651 10.2602 35.5107 9.8675C35.6564 9.47483 35.8907 9.12967 36.2137 8.832C36.5431 8.528 36.9832 8.27467 37.5342 8.072C37.9142 7.93267 38.3671 7.80917 38.8927 7.7015C39.4184 7.59383 40.0137 7.4925 40.6787 7.3975C41.3437 7.29617 42.0752 7.18533 42.8732 7.065L41.9422 7.578C41.9422 6.97 41.7966 6.5235 41.5052 6.2385C41.2139 5.9535 40.7262 5.811 40.0422 5.811C39.6622 5.811 39.2664 5.90283 38.8547 6.0865C38.4431 6.27017 38.1549 6.59633 37.9902 7.065L35.6532 6.324C35.9129 5.47533 36.4006 4.785 37.1162 4.253C37.8319 3.721 38.8072 3.455 40.0422 3.455C40.9479 3.455 41.7522 3.59433 42.4552 3.873C43.1582 4.15167 43.6902 4.633 44.0512 5.317C44.2539 5.697 44.3742 6.077 44.4122 6.457C44.4502 6.837 44.4692 7.26133 44.4692 7.73V14H42.2082V11.891L42.5312 12.328C42.0309 13.0183 41.4894 13.5187 40.9067 13.829C40.3304 14.133 39.5989 14.285 38.7122 14.285ZM39.2632 12.252C39.7382 12.252 40.1372 12.1697 40.4602 12.005C40.7896 11.834 41.0492 11.6408 41.2392 11.4255C41.4356 11.2102 41.5686 11.0297 41.6382 10.884C41.7712 10.6053 41.8472 10.2823 41.8662 9.915C41.8916 9.54133 41.9042 9.231 41.9042 8.984L42.6642 9.174C41.8979 9.30067 41.2772 9.40833 40.8022 9.497C40.3272 9.57933 39.9441 9.65533 39.6527 9.725C39.3614 9.79467 39.1049 9.87067 38.8832 9.953C38.6299 10.0543 38.4241 10.1652 38.2657 10.2855C38.1137 10.3995 37.9997 10.5262 37.9237 10.6655C37.8541 10.8048 37.8192 10.96 37.8192 11.131C37.8192 11.3653 37.8762 11.568 37.9902 11.739C38.1106 11.9037 38.2784 12.0303 38.4937 12.119C38.7091 12.2077 38.9656 12.252 39.2632 12.252ZM50.7431 14V0.319999H59.6731V2.733H53.3271V5.659H58.5331V8.072H53.3271V11.587H59.6731V14H50.7431ZM61.9501 14V0.319999H64.2681L68.7901 9.402L73.3121 0.319999H75.6301V14H73.2171V5.83L69.2461 14H68.3341L64.3631 5.83V14H61.9501ZM78.2968 14V0.319999H84.0728C84.2058 0.319999 84.3831 0.326333 84.6048 0.338999C84.8328 0.345333 85.0355 0.364333 85.2128 0.396C86.0298 0.522666 86.698 0.791833 87.2173 1.2035C87.743 1.61517 88.1293 2.1345 88.3763 2.7615C88.6233 3.38217 88.7468 4.07567 88.7468 4.842C88.7468 5.98833 88.4618 6.97 87.8918 7.787C87.3218 8.59767 86.4288 9.098 85.2128 9.288L84.0728 9.364H80.8808V14H78.2968ZM86.0108 14L83.3128 8.433L85.9728 7.92L88.9368 14H86.0108ZM80.8808 6.951H83.9588C84.0918 6.951 84.2375 6.94467 84.3958 6.932C84.5541 6.91933 84.6998 6.894 84.8328 6.856C85.1811 6.761 85.4503 6.60267 85.6403 6.381C85.8303 6.153 85.9601 5.90283 86.0298 5.6305C86.1058 5.35183 86.1438 5.089 86.1438 4.842C86.1438 4.595 86.1058 4.33533 86.0298 4.063C85.9601 3.78433 85.8303 3.53417 85.6403 3.3125C85.4503 3.0845 85.1811 2.923 84.8328 2.828C84.6998 2.79 84.5541 2.76467 84.3958 2.752C84.2375 2.73933 84.0918 2.733 83.9588 2.733H80.8808V6.951Z"
                fill={theme.mode === 'dark' ? 'rgba(255,255,255,0.85)' : theme.primary}
            />
        </svg>
    );
}
