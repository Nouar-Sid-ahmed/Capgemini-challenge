document.onload = includeMap();

function includeMap()
{
    let include_area = document.getElementsByClassName('paris_maps_container')[0];
    include_area.innerHTML = getMap();
}

function getMap()
{
    return `
    <svg
    width="1000"
    height="750"
    id="svg2"
    sodipodi:version="0.32"
    inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)"
    version="1.0"
    sodipodi:docname="Paris_blank_map_nonb.svg"
    inkscape:output_extension="org.inkscape.output.svg.inkscape">
 
    
    <path
        fill="#69bf63"
        id="path35778"
        class="arrondissement arr16"
        d="M 190.14348,559.79467 L 183.46807,557.5 L 154.33273,553.7406 L 120.49814,520.84587 L 115.79889,484.19173 L 129.89664,465.39474 L 152.45303,467.27444 L 158.09213,453.17669 L 187.22746,391.14662 L 219.18235,329.11654 L 243.61844,281.18421 L 273.69363,248.28947 L 275.53165,243.08175 L 276.51318,242.65038 L 338.54325,268.96617 L 347.94175,289.64286 L 362.03949,328.17669 L 370.49814,345.09399 L 370.17877,345.41828 L 345.1222,349.79323 L 317.86656,381.74812 L 273.69363,430.6203 C 273.69363,430.6203 216.33967,519.18768 189.68883,559.70365"
        sodipodi:nodetypes="ccccccccccccccccccccccc"
        inkscape:label="#path35778" onclick="showList(16)">
    <title
        id="title196">Seizieme</title>
    </path>
    <path
        fill="#629460"
        id="path35828"
        class="arrondissement arr09"
        d="m 501.40292,297.16165 -10.60403,-15.97744 4.69925,-20.67669 -0.67417,-67.19925 19.47116,-8.92857 40.41354,15.97744 51.69173,-15.03759 1.80276,-0.14382 0.0769,0.14382 2.34963,106.67293 -46.52257,-9.86842 z"
        sodipodi:nodetypes="cccccccccccc"
        inkscape:label="#path35828" onclick="showList(9)">
    <title
        id="title182">Neuvieme</title>
    </path>
    <path
        fill="#ACECA1"
        id="path35816"
        class="arrondissement arr18"
        d="m 704.82561,45.281956 4.95825,61.090224 -29.13534,69.54887 -0.93985,1.8797 -33.83459,0.93985 -37.74786,6.29131 -1.72582,0.28764 -51.69173,15.03759 -40.41354,-15.97744 -19.47116,8.92857 -0.26568,-7.04887 -8.45864,-22.55639 15.48464,-109.780788 8.95145,-0.18162 62.03007,-0.939849 69.54887,-7.518797 z"
        sodipodi:nodetypes="ccccccccccccccccc"
        inkscape:label="#path35816" onclick="showList(18)">
    <title
        id="title200">Dix-huitieme</title>
    </path>
    <path
		fill="#57733f"
        id="path35852"
        class="arrondissement arr19"
        d="m 678.76882,176.8609 h 3.7594 l 25.37594,7.5188 v 9.3985 l 8.45864,42.29323 31.01504,39.47368 70.82915,-21.53511 12.21805,4.69925 32.89473,-1.8797 26.31579,-9.39849 23.92545,-12.09873 -11.10798,-22.75714 -25.37594,-3.7594 L 855.46055,190.0188 852.641,162.76316 851.70115,127.04887 841.3628,94.15414 826.32521,68.778196 799.06957,47.161655 l -45.11278,-3.759399 -49.13118,1.8797 4.95825,61.090224 -29.13534,69.54887"
        sodipodi:nodetypes="ccccccccccccccccccccccc"
        inkscape:label="#path35852" onclick="showList(19)">
    <title
        id="title202">Dix-neuvieme</title>
    </path>
    <path
        fill="#ACECA1"
        id="path35866"
        class="arrondissement arr20"
        d="m 936.5691,464.4838 -87.34707,-8.40613 -0.0743,-2.39034 0.0743,-7.00815 -3.7594,-18.797 -14.09774,-28.19548 -15.97745,-16.9173 -8.45864,-1.8797 -9.3985,-32.89473 -50.15246,-72.44986 70.82915,-21.53511 12.21805,4.69925 32.89473,-1.8797 26.31579,-9.39849 24.08549,-11.77866 10.34852,50.23106 5.6391,51.69173 5.6391,46.05263 1.87969,50.75188 z"
        sodipodi:nodetypes="cccccccccccccccccccc"
        inkscape:label="#path35866" onclick="showList(20)">
    <title
        id="title204">Vingtieme</title>
    </path>
    <path
        fill="#57733f"
        id="path35966"
        class="arrondissement arr15"
        d="m 316.81913,382.43554 -43.1255,48.18476 c 0,0 -57.79406,89.48758 -83.99753,129.58896 l 23.84715,7.62908 18.797,-6.57894 18.79699,19.26692 40.41353,21.14661 57.33083,31.95489 20.23414,6.50139 8.9012,-12.14049 12.21804,-12.21804 32.89474,-40.41354 36.65414,-52.63158 14.09774,-6.57894 8.20236,-24.60708 0.25629,-0.76886 -31.95489,-17.85715 -10.33835,5.6391 -8.45864,-0.93985 -18.797,-12.21804 -7.51879,5.6391 z"
        sodipodi:nodetypes="cccccccccccccccccccccc"
        inkscape:label="#path35966" onclick="showList(15)">
    <title
        id="title194">Quinzieme</title>
    </path>
    <path
        id="36032"
        fill="#629460"
        class="arrondissement arr14"
        d="m 369.11574,640.12921 46.49518,14.1753 70.48873,19.73684 23.49624,14.09775 42.29323,17.85714 32.05177,-3.69944 0.84297,-9.45845 -3.7594,-24.43609 -9.3985,-36.65414 -0.93985,-21.61654 -6.57895,-30.07519 1.8797,-14.09774 9.89916,-34.17222 -31.5157,-9.06087 -62.03007,-31.95488 -8.92858,24.90601 -13.62781,7.04887 -36.65414,52.63158 -32.89474,40.41354 -12.21804,12.21804 z"
        sodipodi:nodetypes="ccccccccccccccccccccc"
        inkscape:label="#path36032" onclick="showList(14)">
    <title
        id="title192">Quatorzieme</title>
    </path>
    <path
        fill="#69bf63"
        id="path36018"
        class="arrondissement arr13"
        d="M 583.94089,702.2968 L 584.78386,692.83835 L 581.02446,668.40226 L 571.62596,631.74812 L 570.68611,610.13158 L 564.10716,580.05639 L 565.98686,565.95865 L 575.88602,531.78643 L 597.94175,537.76316 L 622.37784,541.52256 L 663.73122,519.90602 L 689.53331,480.66577 L 780.27258,580.99624 L 810.84493,618.2508 L 790.61092,630.80827 L 744.55829,656.18421 L 698.50566,688.1391 C 698.50566,688.1391 655.27258,693.7782 651.51318,693.7782 C 647.75378,693.7782 623.31769,687.19925 623.31769,687.19925 L 601.70115,700.35714 L 583.94089,702.2968 z "
        sodipodi:nodetypes="cccccccccccccccccsccc"
        inkscape:label="#path36018" onclick="showList(13)">
    <title
        id="title190">Treizieme</title>
    </path>
    <path
        fill="#ACECA1"
        id="path36006"
        class="arrondissement arr05"
        d="m 689.79247,480.953 -26.06125,38.95302 -41.35338,21.61654 -24.43609,-3.7594 -22.49492,-6.31437 -31.07651,-7.78338 40.41354,-110.43232 30.07518,15.50751 10.33835,0.93985 19.73684,12.21805 22.55639,14.09774 z"
        sodipodi:nodetypes="cccccccccccc"
        inkscape:label="#path36006" onclick="showList(5)">
    <title
        id="title174">Cinquieme</title>
    </path>
    <path
        fill="#69bf63"
        id="path35990"
        class="arrondissement arr06"
        d="m 584.78386,413.23309 -18.51311,-16.71374 -19.08088,-15.71108 -17.67711,-6.70389 -10.51838,30.20013 -7.5188,15.97745 -8.45864,15.97744 -52.16166,37.59398 31.9549,17.38723 61.56014,32.4248 z"
        sodipodi:nodetypes="ccccccccccc"
        inkscape:label="#path35990" onclick="showList(6)">
    <title
        id="title176">Sixieme</title>
    </path>
    <path
        fill="#629460"
        id="path35978"
        class="arrondissement arr07"
        d="m 316.81913,382.43554 88.56883,88.60688 7.5286,-5.63265 18.82153,12.20408 8.46967,0.93878 10.82237,-4.69388 52.2297,-37.55104 8.46967,-15.95919 7.52862,-15.9592 10.25464,-30.28494 -38.24138,-17.42058 -20.3537,-8.07294 -26.84559,-9.15597 h -39.47368 l -34.10027,5.6391 -25.37594,4.69924 z"
        sodipodi:nodetypes="ccccccccccccccccc"
        inkscape:label="#path35978" onclick="showList(7)">
    <title
        id="title178">Septieme</title>
    </path>
    <path
		fill="#57733f"
        id="path35798"
        class="arrondissement arr08"
        d="m 370.60414,345.25613 -8.29897,-17.07944 -14.09774,-38.53383 -10.80827,-20.67669 13.62782,-30.07519 143.79699,-45.58271 0.93985,67.19925 -4.69925,20.67669 10.33835,15.97744 -11.2782,5.6391 -9.39849,16.9173 -9.80855,28.89281 -26.84559,-9.15597 h -39.47368 z"
        sodipodi:nodetypes="ccccccccccccccc"
        inkscape:label="#path35798" onclick="showList(8)">
    <title
        id="title180">Huitieme</title>
    </path>
    <path
        fill="#96BE8C"
        id="path35790"
        class="arrondissement arr17"
        d="m 501.58429,53.922222 -15.48464,109.780788 8.45864,22.55639 0.26568,7.04887 -144.06267,45.58271 -13.62782,30.07519 -61.11106,-26.1001 3.31031,-10.55404 -31.95489,3.7594 6.57895,-21.61654 18.79699,-31.95489 46.05263,-46.05263 47.93233,-31.01504 43.23309,-26.315788 51.69172,-23.496241 z"
        sodipodi:nodetypes="cccccccccccccccc"
        inkscape:label="#path35790" onclick="showList(17)">
    <title
        id="title198">Dix-septieme</title>
    </path>
    <path
		fill="#96BE8C"
        id="path35890"
        class="arrondissement arr12"
        d="m 849.14773,453.68733 0.0743,2.39034 87.34707,8.40613 -1.22133,1.85079 -8.45865,25.37594 -0.93985,18.79699 -14.09775,42.29323 -25.37594,-7.51879 -33.83458,24.43609 12.21805,15.03759 -33.83459,19.73684 -20.17953,13.75832 -30.57235,-37.25456 -99.46916,-110.48777 1.7248,-10.75283 15.03759,4.69925 14.09774,-46.99248 25.37594,12.21804 z"
        sodipodi:nodetypes="ccccccccccccccccccc"
        inkscape:label="#path35890" onclick="showList(12)">
    <title
        id="title188">Douzieme</title>
    </path>
    <path
        fill="#69bf63"
        id="path35876"
        class="arrondissement arr11"
        d="m 673.59965,312.19925 73.77819,-36.65414 50.15246,72.44986 9.3985,32.89473 8.45864,1.8797 15.97745,16.9173 14.09774,28.19548 3.7594,18.797 -0.0743,7.00815 -112.10821,-24.00688 -25.99572,-11.91833 -8.77871,-23.79595 -9.3985,-45.11279 -9.39849,-26.31579 z"
        sodipodi:nodetypes="ccccccccccccccc"
        inkscape:label="#path35876" onclick="showList(11)">
    <title
        id="title186">Onzieme</title>
    </path>
    <path
        fill="#57733f"
        id="path35918"
        class="arrondissement arr03"
        d="M 630.00618,298.83331 L 616.89228,338.77689 L 612.97934,350.26315 L 643.05453,362.01128 L 704.45896,401.42913 L 702.26506,393.96617 L 692.86656,348.85338 L 683.46807,322.53759 L 673.59965,312.19925 L 630.00618,298.83331 z "
        sodipodi:nodetypes="cccccccccc"
        inkscape:label="#path35918" onclick="showList(3)">
    <title
        id="title170">Troisieme</title>
    </path>
    <path
        fill="#629460"
        id="path35932"
        class="arrondissement arr04"
        d="M 704.45896,401.42913 L 711.04377,417.76212 L 697.56581,464.45489 L 682.52822,459.75564 L 680.71286,470.4081 L 667.49062,455.99624 L 644.93423,441.8985 L 625.19739,429.68045 L 614.85904,428.7406 L 584.78386,413.23309 L 596.06205,395.84587 L 612.97934,349.79323 L 643.05453,362.01128 L 704.45896,401.42913 z "
        sodipodi:nodetypes="cccccccccccccc"
        inkscape:label="#path35932" onclick="showList(4)">
    <title
        id="title172">Quatrieme</title>
    </path>
    <path
        fill="#96BE8C"
        id="path35842"
        class="arrondissement arr10"
        d="M 607.34025,185.31955 L 610.1598,292.46241 L 674.06957,312.19925 L 747.37784,275.54511 L 716.3628,236.07143 L 707.90416,193.7782 L 707.90416,184.3797 L 682.52822,176.8609 L 679.70867,176.39098 L 679.70867,177.80075 L 645.87408,178.7406 L 608.12622,185.03191 L 607.34025,185.31955 z "
        sodipodi:nodetypes="ccccccccccccc"
        inkscape:label="#path35842" onclick="showList(10)">
    <title
        id="title184">Dixieme</title>
    </path>
    <path
        fill="#ACECA1"
        id="path35904"
        class="arrondissement arr02"
        d="m 610.62973,292.63262 -46.52257,-10.50856 -62.70424,15.03759 16.65161,19.73685 78.94737,24.43609 19.81361,-3.15855 13.19067,-39.34273 z"
        sodipodi:nodetypes="cccccccc"
        inkscape:label="#path35904" onclick="showList(2)">
    <title
        id="title168">Deuxieme</title>
    </path>
    <path
        fill="#96BE8C"
        id="path35946"
        class="arrondissement arr01"
        d="m 470.91768,348.61086 21.76091,8.70117 36.83417,16.79235 17.67711,6.70389 19.03309,15.8609 3.5233,2.93609 15.0376,13.62783 11.27819,-17.38722 16.91729,-45.58272 3.83617,-12.08711 -19.81361,3.15855 -78.94737,-24.43609 -16.65161,-19.73685 -11.54388,5.6391 -9.39849,16.9173 z"
        sodipodi:nodetypes="cccccccccccccccc"
        inkscape:label="#path35946" onclick="showList(1)">
    <title
        id="title166">Premier</title>
    </path>
    <g
        style="display:inline; fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:black;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;"
        id="g15699">
        <path
            id="path15799"
            d="M 275.53165,243.08175 L 273.69363,248.28947 L 243.61844,281.18421 L 219.18235,329.11654 L 187.22746,391.14662 L 158.09213,453.17669 L 152.45303,467.27444 L 129.89664,465.39474 L 115.79889,484.19173 L 120.49814,520.84587 L 154.33273,553.7406 L 183.46807,557.5 L 190.14348,559.79467"
              />
        <path
            inkscape:label="#path13113"
            id="path13113"
            d="M 501.09149,54.103842 L 461.66355,55.620301 L 409.97183,79.116542 L 366.73874,105.43233 L 318.80641,136.44737 L 272.75378,182.5 L 253.95679,214.45489 L 247.37784,236.07143 L 279.33273,232.31203 L 275.53165,243.08175"
              />
        <path
            id="path22908"
            d="M 704.56662,45.281956 L 642.11468,45.281956 L 572.56581,52.800753 L 510.53574,53.740602 L 501.09149,54.103842"
              />
        <path
            id="path27364"
            d="M 912.11052,235.45165 L 902.45303,212.57519 L 877.07709,208.81579 L 855.46055,190.0188 L 852.641,162.76316 L 851.70115,127.04887 L 841.3628,94.15414 L 826.32521,68.778196 L 799.06957,47.161655 L 753.95679,43.402256 L 704.56662,45.281956"
             
            sodipodi:nodetypes="ccccccccccc" />
        <path
            sodipodi:nodetypes="cccccc"
            id="path19362"
            d="M 935.5703,462.55159 L 937.22746,434.3797 L 935.34777,383.62782 L 929.70867,337.57519 L 924.06957,285.88346 L 912.43059,236.09179"
              />
        <path
            id="path26473"
            d="M 810.20431,618.04978 L 831.02446,604.49248 L 864.85905,584.75564 L 852.641,569.71805 L 886.47558,545.28196 L 911.85152,552.80075 L 925.94927,510.50752 L 926.88912,491.71053 L 935.34777,466.33459 L 935.5703,462.55159"
              />
        <path
            id="path27374"
            d="M 190.14348,559.79467 L 213.54325,567.83834 L 232.34025,561.2594 L 251.13724,580.52632 L 291.55077,601.67293 L 348.8816,633.62782 L 369.61304,640.05165"
              />
        <path
            id="path27370"
            d="M 584.03777,702.35677 L 601.70115,700.35714 L 623.31769,687.19925 C 623.31769,687.19925 647.75378,693.7782 651.51318,693.7782 C 655.27258,693.7782 698.50566,688.1391 698.50566,688.1391 L 744.55829,656.18421 L 790.61092,630.80827 L 810.20431,618.04978"
              />
        <path
            id="path24688"
            d="M 369.61304,640.05165 L 415.61092,654.30451 L 486.09965,674.04135 L 509.59589,688.1391 L 551.88912,705.99624 L 584.03777,702.35677"
              />
    </g>
    <text
        xml:space="preserve"
        class="number"
        x="354.63672"
        y="192.68657"
        id="text274"><tspan
        sodipodi:role="line"
        id="tspan280"
        x="354.63672"
        y="192.68657">17</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="574.20422"
        y="122.90658"
        id="text282"><tspan
        sodipodi:role="line"
        id="tspan280"
        x="574.20422"
        y="122.90658">18</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="759.20416"
        y="172.83739"
        id="text286"><tspan
        sodipodi:role="line"
        id="tspan284"
        x="759.20416"
        y="172.83739">19</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="846.26306"
        y="358.47751"
        id="text290"><tspan
        sodipodi:role="line"
        id="tspan288"
        x="846.26306"
        y="358.47751">20</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="643.97925"
        y="255.41525"
        id="text294"><tspan
        sodipodi:role="line"
        id="tspan292"
        x="643.97925"
        y="255.41525">10</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="542.8374"
        y="252.21454"
        id="text298"><tspan
        sodipodi:role="line"
        id="tspan296"
        x="542.8374"
        y="252.21454">9</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="408.40833"
        y="290.62286"
        id="text302"><tspan
        sodipodi:role="line"
        id="tspan300"
        x="408.40833"
        y="290.62286">8</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="563.96191"
        y="321.98962"
        id="text306"><tspan
        sodipodi:role="line"
        id="tspan304"
        x="563.96191"
        y="321.98962">2</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="645.89972"
        y="352.71628"
        id="text310"><tspan
        sodipodi:role="line"
        id="tspan308"
        x="645.89972"
        y="352.71628">3</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="635.65747"
        y="416.73013"
        id="text314"><tspan
        sodipodi:role="line"
        id="tspan312"
        x="635.65747"
        y="416.73013">4</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="536.43604"
        y="366.15918"
        id="text318"><tspan
        sodipodi:role="line"
        id="tspan316"
        x="536.43604"
        y="366.15918">1</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="722.71631"
        y="370.64014"
        id="text322"><tspan
        sodipodi:role="line"
        id="tspan320"
        x="722.71631"
        y="370.64014">11</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="777.12805"
        y="512.75092"
        id="text326"><tspan
        sodipodi:role="line"
        id="tspan324"
        x="777.12805"
        y="512.75092">12</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="643.97925"
        y="610.05194"
        id="text330"><tspan
        sodipodi:role="line"
        id="tspan328"
        x="643.97925"
        y="610.05194">13</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="602.3703"
        y="492.90659"
        id="text334"><tspan
        sodipodi:role="line"
        id="tspan332"
        x="602.3703"
        y="492.90659">5</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="524.27338"
        y="457.69897"
        id="text338"><tspan
        sodipodi:role="line"
        id="tspan336"
        x="524.27338"
        y="457.69897">6</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="473.70242"
        y="607.49139"
        id="text342"><tspan
        sodipodi:role="line"
        id="tspan340"
        x="473.70242"
        y="607.49139">14</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="318.78894"
        y="535.15576"
        id="text346"><tspan
        sodipodi:role="line"
        id="tspan344"
        x="318.78894"
        y="535.15576">15</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="411.60901"
        y="405.20764"
        id="text350"><tspan
        sodipodi:role="line"
        id="tspan348"
        x="411.60901"
        y="405.20764">7</tspan></text>
    <text
        xml:space="preserve"
        class="number"
        x="213.80624"
        y="413.52945"
        id="text354"><tspan
        sodipodi:role="line"
        id="tspan352"
        x="213.80624"
        y="413.52945">16</tspan></text>
</svg>`;
}