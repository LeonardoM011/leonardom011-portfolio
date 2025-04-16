import * as React from "react"

function LinkedIn({ className, fill, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill={'var(--foreground)'}/>
            <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill={'var(--foreground)'}/>
            <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill={'var(--foreground)'}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill={'var(--foreground)'}/>
        </svg>
    )
}

function Github({ className, fill, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" fill={'var(--foreground)'}/>
            <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" fill={'var(--foreground)'}/>
        </svg>
    )
}

function Python({ className, fill, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <metadata id="metadata371">
            </metadata>
            <defs id="defs4">
                <linearGradient id="linearGradient2795">
                    <stop
                        style={{
                            stopColor: "#b8b8b8",
                            stopOpacity: 0.49803922,
                        }}
                        offset={0}
                        id="stop2797"
                    />
                    <stop
                        style={{
                            stopColor: "#7f7f7f",
                            stopOpacity: 0,
                        }}
                        offset={1}
                        id="stop2799"
                    />
                </linearGradient>
                <linearGradient id="linearGradient2787">
                    <stop
                        style={{
                            stopColor: "#7f7f7f",
                            stopOpacity: 0.5,
                        }}
                        offset={0}
                        id="stop2789"
                    />
                    <stop
                        style={{
                            stopColor: "#7f7f7f",
                            stopOpacity: 0,
                        }}
                        offset={1}
                        id="stop2791"
                    />
                </linearGradient>
                <linearGradient id="linearGradient3676">
                    <stop
                        style={{
                            stopColor: "#b2b2b2",
                            stopOpacity: 0.5,
                        }}
                        offset={0}
                        id="stop3678"
                    />
                    <stop
                        style={{
                            stopColor: "#b3b3b3",
                            stopOpacity: 0,
                        }}
                        offset={1}
                        id="stop3680"
                    />
                </linearGradient>
                <linearGradient id="linearGradient3236">
                    <stop
                        style={{
                            stopColor: "#f4f4f4",
                            stopOpacity: 1,
                        }}
                        offset={0}
                        id="stop3244"
                    />
                    <stop
                        style={{
                            stopColor: "white",
                            stopOpacity: 1,
                        }}
                        offset={1}
                        id="stop3240"
                    />
                </linearGradient>
                <linearGradient id="linearGradient4671">
                    <stop
                        style={{
                            stopColor: "#ffd43b",
                            stopOpacity: 1,
                        }}
                        offset={0}
                        id="stop4673"
                    />
                    <stop
                        style={{
                            stopColor: "#ffe873",
                            stopOpacity: 1,
                        }}
                        offset={1}
                        id="stop4675"
                    />
                </linearGradient>
                <linearGradient id="linearGradient4689">
                    <stop
                        style={{
                            stopColor: "#5a9fd4",
                            stopOpacity: 1,
                        }}
                        offset={0}
                        id="stop4691"
                    />
                    <stop
                        style={{
                            stopColor: "#306998",
                            stopOpacity: 1,
                        }}
                        offset={1}
                        id="stop4693"
                    />
                </linearGradient>
                <linearGradient
                    x1={224.23996}
                    y1={144.75717}
                    x2={-65.308502}
                    y2={144.75717}
                    id="linearGradient2987"
                    xlinkHref="#linearGradient4671"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.2702,99.61116)"
                />
                <linearGradient
                    x1={172.94208}
                    y1={77.475983}
                    x2={26.670298}
                    y2={76.313133}
                    id="linearGradient2990"
                    xlinkHref="#linearGradient4689"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.2702,99.61116)"
                />
                <linearGradient
                    xlinkHref="#linearGradient4689"
                    id="linearGradient2587"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.2702,99.61116)"
                    x1={172.94208}
                    y1={77.475983}
                    x2={26.670298}
                    y2={76.313133}
                />
                <linearGradient
                    xlinkHref="#linearGradient4671"
                    id="linearGradient2589"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.2702,99.61116)"
                    x1={224.23996}
                    y1={144.75717}
                    x2={-65.308502}
                    y2={144.75717}
                />
                <linearGradient
                    xlinkHref="#linearGradient4689"
                    id="linearGradient2248"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.2702,99.61116)"
                    x1={172.94208}
                    y1={77.475983}
                    x2={26.670298}
                    y2={76.313133}
                />
                <linearGradient
                    xlinkHref="#linearGradient4671"
                    id="linearGradient2250"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.2702,99.61116)"
                    x1={224.23996}
                    y1={144.75717}
                    x2={-65.308502}
                    y2={144.75717}
                />
                <linearGradient
                    xlinkHref="#linearGradient4671"
                    id="linearGradient2255"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.562541,0,0,0.567972,-11.5974,-7.60954)"
                    x1={224.23996}
                    y1={144.75717}
                    x2={-65.308502}
                    y2={144.75717}
                />
                <linearGradient
                    xlinkHref="#linearGradient4689"
                    id="linearGradient2258"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.562541,0,0,0.567972,-11.5974,-7.60954)"
                    x1={172.94208}
                    y1={76.176224}
                    x2={26.670298}
                    y2={76.313133}
                />
                <radialGradient
                    xlinkHref="#linearGradient2795"
                    id="radialGradient2801"
                    cx={61.518883}
                    cy={132.28575}
                    fx={61.518883}
                    fy={132.28575}
                    r={29.036913}
                    gradientTransform="matrix(1,0,0,0.177966,0,108.7434)"
                    gradientUnits="userSpaceOnUse"
                />
                <linearGradient
                    xlinkHref="#linearGradient4671"
                    id="linearGradient1475"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)"
                    x1={150.96111}
                    y1={192.35176}
                    x2={112.03144}
                    y2={137.27299}
                />
                <linearGradient
                    xlinkHref="#linearGradient4689"
                    id="linearGradient1478"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)"
                    x1={26.648937}
                    y1={20.603781}
                    x2={135.66525}
                    y2={114.39767}
                />
                <radialGradient
                    xlinkHref="#linearGradient2795"
                    id="radialGradient1480"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1.7490565e-8,-0.23994696,1.054668,3.7915457e-7,-83.7008,142.46201)"
                    cx={61.518883}
                    cy={132.28575}
                    fx={61.518883}
                    fy={132.28575}
                    r={29.036913}
                />
            </defs>
            <path
                style={{
                    fill: "url(#linearGradient1478)",
                    fillOpacity: 1,
                }}
                d="M 54.918785,9.1927421e-4 C 50.335132,0.02221727 45.957846,0.41313697 42.106285,1.0946693 30.760069,3.0991731 28.700036,7.2947714 28.700035,15.032169 v 10.21875 h 26.8125 v 3.40625 h -26.8125 -10.0625 c -7.792459,0 -14.6157588,4.683717 -16.7499998,13.59375 -2.46181998,10.212966 -2.57101508,16.586023 0,27.25 1.9059283,7.937852 6.4575432,13.593748 14.2499998,13.59375 h 9.21875 v -12.25 c 0,-8.849902 7.657144,-16.656248 16.75,-16.65625 h 26.78125 c 7.454951,0 13.406253,-6.138164 13.40625,-13.625 v -25.53125 c 0,-7.2663386 -6.12998,-12.7247771 -13.40625,-13.9374997 C 64.281548,0.32794397 59.502438,-0.02037903 54.918785,9.1927421e-4 Z m -14.5,8.21875012579 c 2.769547,0 5.03125,2.2986456 5.03125,5.1249996 -2e-6,2.816336 -2.261703,5.09375 -5.03125,5.09375 -2.779476,-1e-6 -5.03125,-2.277415 -5.03125,-5.09375 -10e-7,-2.826353 2.251774,-5.1249996 5.03125,-5.1249996 z"
                id="path1948"
            />
            <path
                style={{
                    fill: "url(#linearGradient1475)",
                    fillOpacity: 1,
                }}
                d="m 85.637535,28.657169 v 11.90625 c 0,9.230755 -7.825895,16.999999 -16.75,17 h -26.78125 c -7.335833,0 -13.406249,6.278483 -13.40625,13.625 v 25.531247 c 0,7.266344 6.318588,11.540324 13.40625,13.625004 8.487331,2.49561 16.626237,2.94663 26.78125,0 6.750155,-1.95439 13.406253,-5.88761 13.40625,-13.625004 V 86.500919 h -26.78125 v -3.40625 h 26.78125 13.406254 c 7.792461,0 10.696251,-5.435408 13.406241,-13.59375 2.79933,-8.398886 2.68022,-16.475776 0,-27.25 -1.92578,-7.757441 -5.60387,-13.59375 -13.406241,-13.59375 z m -15.0625,64.65625 c 2.779478,3e-6 5.03125,2.277417 5.03125,5.093747 -2e-6,2.826354 -2.251775,5.125004 -5.03125,5.125004 -2.76955,0 -5.03125,-2.29865 -5.03125,-5.125004 2e-6,-2.81633 2.261697,-5.093747 5.03125,-5.093747 z"
                id="path1950"
            />
            <ellipse
                style={{
                    opacity: 0.44382,
                    fill: "url(#radialGradient1480)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: 15.4174,
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                }}
                id="path1894"
                cx={55.816761}
                cy={127.70079}
                rx={35.930977}
                ry={6.9673119}
            />
        </svg>
    )
}

export {
    LinkedIn,
    Github,
    Python
}