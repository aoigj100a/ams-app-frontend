<script setup lang="ts">
import router from "../router"
const goBack = () => {
    router.back()
}
const logout = () => {
    console.log("logout.")
}
</script>
<template>
    <div class="px-[16px] py-[8px] shadow bg-white">
        <div class="flex justify-between items-center h-[50px]">
            <div @click="goBack" class="cursor-pointer">
                <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"
                        transform="matrix(-1 0 0 1 24 0)" />
                </svg>
            </div>
            <div class="flex justify-center items-center">
                <span @click="logout" ><svg xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="40px"
                        height="40px" viewBox="0 0 16.482828 14.68959" version="1.1" id="svg8634"
                        inkscape:version="0.92.1 r15371" sodipodi:docname="reset.svg">
                        <defs id="defs8628" />
                        <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1"
                            transform="translate(-3.0978698,-4.6612284)">
                            <g transform="matrix(1.2809155,0,0,1.2374188,103.99112,-1219.3652)" id="g4667">
                                <path inkscape:connector-curvature="0" id="path4640"
                                    d="m -72.695687,1000.9938 c -1.972631,-0.2257 -3.790181,-1.49518 -4.687846,-3.27432 -0.175341,-0.34752 -0.468403,-1.12381 -0.468403,-1.24073 0,-0.0266 0.375731,-0.048 0.834956,-0.0476 l 0.834965,7.2e-4 0.163557,0.4041 c 0.519646,1.28389 1.615359,2.24396 2.994703,2.62398 0.49589,0.13662 1.63139,0.13421 2.144474,-0.005 0.522244,-0.14124 1.250991,-0.50448 1.653619,-0.82424 0.687488,-0.546 1.31115,-1.49718 1.539,-2.34722 0.146128,-0.54518 0.177544,-1.43846 0.07041,-2.00269 -0.178809,-0.94189 -0.54809,-1.63735 -1.241568,-2.33827 -0.844669,-0.85372 -1.728666,-1.24944 -2.900391,-1.29837 -0.550547,-0.023 -0.767325,-0.006 -1.18485,0.0941 -1.415428,0.33867 -2.632012,1.39775 -3.122259,2.71804 l -0.103341,0.27832 h -0.842765 -0.842766 l 0.03834,-0.16113 c 0.08466,-0.35604 0.444253,-1.16597 0.699534,-1.57555 0.354919,-0.56944 1.084444,-1.33426 1.637166,-1.71635 3.344531,-2.31207 7.975171,-0.83571 9.268415,2.95499 1.2168,3.56666 -1.256634,7.33132 -5.098284,7.75962 -0.62535,0.07 -0.754641,0.069 -1.386656,0 z"
                                    style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.05859375;stroke-opacity:1" />
                                <g id="g4592-5-0" transform="matrix(0.77578717,0,0,0.61178065,-35.477186,373.83106)">
                                    <rect
                                        style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.04824853"
                                        id="rect3717-9-8-2" width="4.4458065" height="1.1666708" x="-55.705212"
                                        y="1017.3687" />
                                    <path sodipodi:type="star"
                                        style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.93749994"
                                        id="path3783-0-6" sodipodi:sides="3" sodipodi:cx="-109.71203"
                                        sodipodi:cy="1025.7628" sodipodi:r1="8.7855453" sodipodi:r2="6.0797644"
                                        sodipodi:arg1="0.43833656" sodipodi:arg2="1.4855341" inkscape:flatsided="true"
                                        inkscape:rounded="0" inkscape:randomized="0"
                                        d="m -101.75708,1029.4917 -15.16173,1.2959 6.45861,-13.7784 z"
                                        inkscape:transform-center-x="-0.034756175"
                                        inkscape:transform-center-y="0.58213244"
                                        transform="matrix(-0.30321012,-0.03553367,0.03028113,-0.35580483,-117.82847,1375.3296)" />
                                </g>
                            </g>
                        </g>
                    </svg></span>
            </div>
        </div>
    </div>
</template>