<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 
 ENGLISH
 
 */
global $language;
$lang = $language->language;

if ($lang == 'uk') {
    $lang = 'ua';
}
?>

<div id="page">
    <div class="loader">
        <div class="logo-container">

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="xMinYMin meet"
                 viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve">

                    <!--                    lines-->
                <path class="line" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6
	c-13.2-16.8-90.5-79-122.2-98.7"/>
                <path class="line"
                      d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"
                    />
                <path class="line" d="M151.6-0.1c-0.8,7-1.3,14-1.3,21.1c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4"/>
                <path class="line" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>
                <path class="line" d="M349.5,0.1C321.3,19.4,246.2,82,233,98.8c-5.4,6.9-10.4,14.9-10.5,26.6c0,11.6,5.1,19.6,10.5,26.6
	c13.2,16.8,119.9,97.2,156.9,118.7"/>
                <path class="line" d="M427.7,54.8c-11.9-2.6-24.1-3.9-36.5-3.9c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1
	s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3c0,15.9,2.1,31.5,6.3,46.5"/>
                <path class="line"
                      d="M160.6,270.5c-5.5-16.2-8.5-33.7-8.5-51.8c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1"/>
                <path class="line" d="M421.8,270.5c3.7-14.3,5.6-29,5.6-44c0-23.4-4.6-46-13.6-67.3c-8.7-20.6-21.2-39.1-37.1-55s-34.4-28.4-55-37.1
	c-21.3-9-44-13.6-67.3-13.6c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
	c0,15,1.9,29.7,5.6,44"/>

                <!--<!--line1-->-->
                <path class="line-animated first" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6
	c-13.2-16.8-90.5-79-122.2-98.7"/>
                <!--<!--line 3-->-->
                <path class="line-animated second"
                      d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"
                    />
                <!--<!--                    line4-->-->
                <path class="line-animated first" d="M151.6-0.1c-0.8,7-1.3,14-1.3,21.1c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4"/>
                <!--line5-->
                <path class="line-animated third" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>
                <!--line2-->
                <path class="line-animated second" d="M349.5,0.1C321.3,19.4,246.2,82,233,98.8c-5.4,6.9-10.4,14.9-10.5,26.6c0,11.6,5.1,19.6,10.5,26.6
	c13.2,16.8,119.9,97.2,156.9,118.7"/>
                <!--                    line8-->
                <path class="line-animated fourth" d="M427.7,54.8c-11.9-2.6-24.1-3.9-36.5-3.9c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1
	s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3c0,15.9,2.1,31.5,6.3,46.5"/>
                <!--                    line7-->
                <path class="line-animated third"
                      d="M160.6,270.5c-5.5-16.2-8.5-33.7-8.5-51.8c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1"/>
                <!--                   line 6-->
                <path class="line-animated fourth" d="M421.8,270.5c3.7-14.3,5.6-29,5.6-44c0-23.4-4.6-46-13.6-67.3c-8.7-20.6-21.2-39.1-37.1-55s-34.4-28.4-55-37.1
	c-21.3-9-44-13.6-67.3-13.6c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
	c0,15,1.9,29.7,5.6,44"/>

                <!--                    second-part-->
                <!--                    line5-->
                <!--                <path class="line-animated fifth-line" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1-->
                <!--	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>-->
                <!---->
                <!--                <!--<!--line1-->-->-->
                <!--                <path class="line-animated first-line" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6-->
                <!--	c-13.2-16.8-90.5-79-122.2-98.7"/>-->
                <!--                <!--<!--line 3-->-->-->
                <!--                <path class="line-animated third-line"-->
                <!--                      d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"-->
                <!--                    />-->


                <!--                     logo-->
                <g>
                    <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                    <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                    <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                    <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                    <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                    <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                    <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                    <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                    <polygon class="logo"
                             points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                    <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                    <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                    <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                    <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                        />
                </g>


                <!-- Globe -->
                <circle class="globe" cx="214.9" cy="122.7" r="71.3"/>
                <line class="globe" x1="214.9" y1="51.4" x2="214.9" y2="194"/>
                <line class="globe " x1="286.2" y1="122.7" x2="143.6" y2="122.7"/>
                <g>
                    <path class="globe" d="M146.3,103.3c20.3-11.2,43.7-17.6,68.6-17.6s48.2,6.4,68.6,17.6"/>
                </g>
                <g>
                    <path class="globe " d="M283.5,142.2c-20.3,11.2-43.7,17.6-68.6,17.6s-48.2-6.4-68.6-17.6"/>
                </g>
                <g>
                    <path class="globe " d="M234.3,54.1c11.2,20.3,17.6,43.7,17.6,68.6s-6.4,48.2-17.6,68.6"/>
                </g>
                <g>
                    <path class="globe " d="M195.5,191.3c-11.2-20.3-17.6-43.7-17.6-68.6s6.4-48.2,17.6-68.6"/>
                </g>

                //mock
                <line class="meridian" x1="214.9" y1="51.4" x2="214.9" y2="194"/>
                <line class="meridian " x1="286.2" y1="122.7" x2="143.6" y2="122.7"/>
                <g>
                    <path class="meridian" d="M146.3,103.3c20.3-11.2,43.7-17.6,68.6-17.6s48.2,6.4,68.6,17.6"/>
                </g>
                <g>
                    <path class=" meridian" d="M283.5,142.2c-20.3,11.2-43.7,17.6-68.6,17.6s-48.2-6.4-68.6-17.6"/>
                </g>
                <g>
                    <path class=" meridian" d="M234.3,54.1c11.2,20.3,17.6,43.7,17.6,68.6s-6.4,48.2-17.6,68.6"/>
                </g>
                <g>
                    <path class=" meridian" d="M195.5,191.3c-11.2-20.3-17.6-43.7-17.6-68.6s6.4-48.2,17.6-68.6"/>
                </g>
</svg>

        </div>

    </div>
    <div id="main" class="main">
        <div class="mobile-navigation-section">
            <nav class="mobile-navigation">
                <div class="menu-icon" id="mobile_menu_icon">
                    <span class="line first"></span>
                    <span class="line second"></span>
                    <span class="line third"></span>
                </div>

                <a href="#" class="mobile-menu uppercase" id="mobile_menu">Main</a>

                <div class="logo-container">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve">
                        <!--                     logo-->
                        <g>
                            <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                            <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                            <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                            <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                            <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                            <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                            <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                            <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                            <polygon class="logo"
                                     points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                            <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                            <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                            <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                            <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                                />
                        </g>
</svg>
                </div>
                <div id="side_nav_menu" class="side-nav-menu">
                    <div class="top">
                        <span class="title uppercase">Main</span>
                    <span class="arrow-close" id="close_mobile_menu">
                        <i class="fa fa-arrow-left"></i>
                    </span>
                    </div>
                    <div class="content">
                        <?php
                        // This code snippet is hard to modify. We recommend turning off the
                        // "Main menu" on your sub-theme's settings form, deleting this PHP
                        // code block, and, instead, using the "Menu block" module.
                        // @see https://drupal.org/project/menu_block
                        print theme('links__system_main_menu', array(
                            'links' => $main_menu,
                            'attributes' => array(
                                'class' => array('side-nav-menu-list', 'uppercase'),
                            ),
                            'heading' => array(
                                'text' => t('Main menu'),
                                'level' => 'h2',
                                'class' => array('element-invisible'),
                            ),
                        )); ?>

                        <?php print render($page['header']); ?>
                    </div>
                    <div class="footer">
                        <div class="social-icons">
                            <!-- Icon Bar -->
                            <ul class="icon-bar">
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                            </ul>
                            <!-- Icon Bar -->
                        </div>
                        <div class="phone"></div>
                    </div>
                </div>

            </nav>
        </div>

        <section class="mobile-intro-section">
            <div class="logo-container">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve">

                           <!--                    lines-->
                    <path class="top-story-line" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6
	c-13.2-16.8-90.5-79-122.2-98.7"/>
                    <path class="top-story-line"
                          d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"
                        />
                    <path class="top-story-line" d="M151.6-0.1c-0.8,7-1.3,14-1.3,21.1c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4"/>
                    <path class="top-story-line" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>
                    <path class="top-story-line" d="M349.5,0.1C321.3,19.4,246.2,82,233,98.8c-5.4,6.9-10.4,14.9-10.5,26.6c0,11.6,5.1,19.6,10.5,26.6
	c13.2,16.8,119.9,97.2,156.9,118.7"/>
                    <path class="top-story-line" d="M427.7,54.8c-11.9-2.6-24.1-3.9-36.5-3.9c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1
	s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3c0,15.9,2.1,31.5,6.3,46.5"/>
                    <path class="top-story-line"
                          d="M160.6,270.5c-5.5-16.2-8.5-33.7-8.5-51.8c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1"/>
                    <path class="top-story-line" d="M421.8,270.5c3.7-14.3,5.6-29,5.6-44c0-23.4-4.6-46-13.6-67.3c-8.7-20.6-21.2-39.1-37.1-55s-34.4-28.4-55-37.1
	c-21.3-9-44-13.6-67.3-13.6c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
	c0,15,1.9,29.7,5.6,44"/>

                    <!--<!--line1-->-->
                    <path class="line-animated first" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6
	c-13.2-16.8-90.5-79-122.2-98.7"/>
                    <!--<!--line 3-->-->
                    <path class="line-animated second"
                          d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"
                        />
                    <!--<!--                    line4-->-->
                    <path class="line-animated first" d="M151.6-0.1c-0.8,7-1.3,14-1.3,21.1c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4"/>
                    <!--line5-->
                    <path class="line-animated third" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>
                    <!--line2-->
                    <path class="line-animated second" d="M349.5,0.1C321.3,19.4,246.2,82,233,98.8c-5.4,6.9-10.4,14.9-10.5,26.6c0,11.6,5.1,19.6,10.5,26.6
	c13.2,16.8,119.9,97.2,156.9,118.7"/>
                    <!--                    line8-->
                    <path class="line-animated fourth" d="M427.7,54.8c-11.9-2.6-24.1-3.9-36.5-3.9c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1
	s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3c0,15.9,2.1,31.5,6.3,46.5"/>
                    <!--                    line7-->
                    <path class="line-animated third"
                          d="M160.6,270.5c-5.5-16.2-8.5-33.7-8.5-51.8c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1"/>
                    <!--                   line 6-->
                    <path class="line-animated fourth" d="M421.8,270.5c3.7-14.3,5.6-29,5.6-44c0-23.4-4.6-46-13.6-67.3c-8.7-20.6-21.2-39.1-37.1-55s-34.4-28.4-55-37.1
	c-21.3-9-44-13.6-67.3-13.6c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
	c0,15,1.9,29.7,5.6,44"/>
                    <!--                     logo-->
                    <g>
                        <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                        <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                        <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                        <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                        <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                        <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                        <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                        <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                        <polygon class="logo"
                                 points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                        <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                        <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                        <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                        <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                            />
                    </g>
</svg>
            </div>

            <?php
            $block = module_invoke('views', 'block_view', 'news-block_2');
            print render($block['content']);
            ?>
        </section>

        <section class="top-story-section" id="top_story" data-scroll-index="0">
            <div class="logo-container">

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;" xml:space="preserve">

                          <!--                    lines-->
                    <path class="top-story-line" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6
	c-13.2-16.8-90.5-79-122.2-98.7"/>
                    <path class="top-story-line"
                          d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"
                        />
                    <path class="top-story-line" d="M151.6-0.1c-0.8,7-1.3,14-1.3,21.1c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4"/>
                    <path class="top-story-line" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>
                    <path class="top-story-line" d="M349.5,0.1C321.3,19.4,246.2,82,233,98.8c-5.4,6.9-10.4,14.9-10.5,26.6c0,11.6,5.1,19.6,10.5,26.6
	c13.2,16.8,119.9,97.2,156.9,118.7"/>
                    <path class="top-story-line" d="M427.7,54.8c-11.9-2.6-24.1-3.9-36.5-3.9c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1
	s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3c0,15.9,2.1,31.5,6.3,46.5"/>
                    <path class="top-story-line"
                          d="M160.6,270.5c-5.5-16.2-8.5-33.7-8.5-51.8c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1"/>
                    <path class="top-story-line" d="M421.8,270.5c3.7-14.3,5.6-29,5.6-44c0-23.4-4.6-46-13.6-67.3c-8.7-20.6-21.2-39.1-37.1-55s-34.4-28.4-55-37.1
	c-21.3-9-44-13.6-67.3-13.6c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
	c0,15,1.9,29.7,5.6,44"/>

                    <!--<!--line1-->-->
                    <path class="line-animated first" d="M42.6,270.3C82,246,182.5,168.6,195.6,151.8c5.4-6.9,10.4-14.9,10.5-26.6c0-11.6-5.1-19.6-10.5-26.6
	c-13.2-16.8-90.5-79-122.2-98.7"/>
                    <!--<!--line 3-->-->
                    <path class="line-animated second"
                          d="M425.2,0c1.1,7.9,1.7,16,1.7,24.2c0,95.3-77.5,172.7-172.7,172.7S81.4,119.4,81.4,24.2C81.4,16,82,7.9,83.1,0"
                        />
                    <!--<!--                    line4-->-->
                    <path class="line-animated first" d="M151.6-0.1c-0.8,7-1.3,14-1.3,21.1c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c23.4,0,46-4.6,67.3-13.6c13.2-5.6,25.6-12.8,37-21.4"/>
                    <!--line5-->
                    <path class="line-animated third" d="M217,0c-0.7,6.5-1.1,13.1-1.1,19.8c0,23.4,4.6,46,13.6,67.3c8.7,20.6,21.2,39.1,37.1,55s34.4,28.4,55,37.1
	c21.3,9,44,13.6,67.3,13.6c13.2,0,26.2-1.5,38.8-4.4"/>
                    <!--line2-->
                    <path class="line-animated second" d="M349.5,0.1C321.3,19.4,246.2,82,233,98.8c-5.4,6.9-10.4,14.9-10.5,26.6c0,11.6,5.1,19.6,10.5,26.6
	c13.2,16.8,119.9,97.2,156.9,118.7"/>
                    <!--                    line8-->
                    <path class="line-animated fourth" d="M427.7,54.8c-11.9-2.6-24.1-3.9-36.5-3.9c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1
	s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3c0,15.9,2.1,31.5,6.3,46.5"/>
                    <!--                    line7-->
                    <path class="line-animated third"
                          d="M160.6,270.5c-5.5-16.2-8.5-33.7-8.5-51.8c0-88.4,71.9-160.2,160.2-160.2c45.3,0,86.2,18.9,115.3,49.1"/>
                    <!--                   line 6-->
                    <path class="line-animated fourth" d="M421.8,270.5c3.7-14.3,5.6-29,5.6-44c0-23.4-4.6-46-13.6-67.3c-8.7-20.6-21.2-39.1-37.1-55s-34.4-28.4-55-37.1
	c-21.3-9-44-13.6-67.3-13.6c-23.4,0-46,4.6-67.3,13.6c-20.6,8.7-39.1,21.2-55,37.1s-28.4,34.4-37.1,55c-9,21.3-13.6,44-13.6,67.3
	c0,15,1.9,29.7,5.6,44"/>

                    <!--                     logo-->
                    <g>
                        <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                        <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                        <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                        <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                        <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                        <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                        <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                        <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                        <polygon class="logo"
                                 points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                        <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                        <rect x="234.2" y="151.7" class="logo" width="0.8" height="7.6"/>
                        <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                        <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                            />
                    </g>
</svg>

            </div>
            <?php
            $block = module_invoke('views', 'block_view', 'news-block_2');
            print render($block['content']);
            ?>

           <?php
           $block = module_invoke('views', 'block_view', 'frontteasers-block_3');
            print render($block['content']);
            ?>
            <a href="#" class="phone"><span class="phone-number">+380 (44) 492-75-99</span></a>

        </section>

        <section class="team-section" id="team" data-scroll-index="1">
            <div class="team-content-wrapper">
                <?php
                $block = module_invoke('views', 'block_view', 'team-block');
                print render($block['content']);
                ?>
            </div>
        </section>

        <section class="mobile-top-story-section">
            <?php
            $block = module_invoke('views', 'block_view', 'frontteasers-block_2');
            print render($block['content']);
            ?>
        </section>


        <section class="services-section" id="services" data-scroll-index="2">
            <div class="background-text-wrapper">
                <span class="background-text first-line-companies">
                    <div class="company">
                        telenor
                    </div>
                     <div class="company">
                         google
                     </div>
                     <div class="company">
                         sap
                     </div>
                      <div class="company">
                          WNISEF
                      </div>
                </span>
                <span class="background-text second-line-companies">
                       <div class="company">
                           CNN
                       </div>
                     <div class="company">
                         UCMC
                     </div>
                     <div class="company">
                         UBER
                     </div>
                     <div class="company">
                         EUROVISION
                     </div>
                </span>
                <span class="background-text third-line-companies">
                    <div class="company">
                        USAID
                    </div>
                    <div class="company">
                        NYSE Euronext
                    </div>
                     <div class="company">
                         IDS Group
                     </div>
                     <div class="company">
                         IBRC
                     </div>
                </span>
            </div>

            <?php
            $block = module_invoke('views', 'block_view', 'frontteasers-block_2');
            print render($block['content']);
            ?>


        </section>

        <section class="news-section" id="news" data-scroll-index="3">
            <?php
            $block = module_invoke('views', 'block_view', 'news-block_1');
            print render($block['content']);
            ?>

        </section>

        <section class="mobile-career-section">
            <div class="photo-wrapper"></div>
            <div class="text-wrapper">On the other hand, we denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
                in their duty through weakness of will, which is the same as saying through shrinking from toil and
                pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice
                is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to
                be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures have to be repudiated and annoyances
                accepted. The wise man therefore always holds in these matters to this principle of selection: he
                rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
            </div>
            <div class="button-wrapper">
                <a href="#" class="send-cv">Send CV</a>
            </div>
        </section>

        <section class="career-section" id="careers" data-scroll-index="4">

        <?php
            $nid = 43;
            print drupal_render(node_view(node_load($nid)));
        ?>
        
        </section>
        <section class="contacts-section" id="contacts" data-scroll-index="5">
            <div class="map" id="map"></div>

            <div class="contacts-tab">
                <ul class="nav nav-pills">
                    <li class="active"><a data-toggle="pill" href="#main-office">Kyiv Office</a>
                        <span class="line"></span>
                    </li>
                    <li><a data-toggle="pill" href="#dubai-office">Dubai Office</a>
                        <span class="line"></span></li>
                </ul>

                <div class="tab-content">
                    <div id="main-office" class="tab-pane fade in active">
                        <ul class="contact-address">
                            <ul class="contact-address">
                                <li><span class="icon pointer-icon"></span> <span class="address-text">
                                8 Kostolna str.<br>
                                5th floor<br>
                                Kyiv, 01001, Ukraine
                            </span></li>
                                <li><span class="icon phone-icon"></span> <span class="address-text">
                                Tel.: +380 (44) 492-75-99 <br>
                                Fax: +380 (44) 278-39-07
                                </span>
                                </li>
                                <li><span class="icon email-address-icon"></span> <span class="address-text">
                                gk@cfcentertainment.com
                                </span>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div id="dubai-office" class="tab-pane fade">
                        <ul class="contact-address">
                            <li><span class="icon pointer-icon"></span> <span class="address-text">
                            Dubai Silicon Oasis <br>
                            Headquarters Building, <br>
                            4th floor, C&D Wing <br>
                            P.O. Box 341041, <br>
                            Dubai, UAE
                            </span></li>
                            <li><span class="icon phone-icon"></span> <span class="address-text">
                                Tel.: +971 (04) 3724637 <br>
                                Fax: +971 (04) 5015777
                                </span>
                            </li>
                            <li><span class="icon email-address-icon"></span> <span class="address-text">
                                gk@cfcentertainment.com
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <section class="footer-section" id="footer">
            <ul class="footer-list">
                <li class="left">
                    <span class="footer-text">
                        &copy;
                        CFC Consulting
                    </span>
                </li>
                <li class="right">
                    <span class="footer-text">
                        Relived at the Schroedinger's Cat Lab.
                    </span>
                </li>
            </ul>
        </section>

        <div id="navigation">

            <?php if ($main_menu): ?>
                <nav class="navigation">

                    <div class="left-side-nav">
                        <!-- Language Panel -->
                        <?php print render($page['header']); ?>


                        <!-- Navigation Menu -->
                        <div class="nav-menu">
                            <div class="menu-icon" id="menu_icon">
                                <span class="line first"></span>
                                <span class="line second"></span>
                                <span class="line third"></span>
                            </div>

                            <a href="#" class="dropdown uppercase" id="menu_dropdown">Main</a>

                            <?php
                            // This code snippet is hard to modify. We recommend turning off the
                            // "Main menu" on your sub-theme's settings form, deleting this PHP
                            // code block, and, instead, using the "Menu block" module.
                            // @see https://drupal.org/project/menu_block
                            print theme('links__system_main_menu', array(
                                'links' => $main_menu,
                                'attributes' => array(
                                    'class' => array('dropdown-content', 'uppercase'),
                                    'id' => 'menu_dropdown_content'
                                ),
                                'heading' => array(
                                    'text' => t('Main menu'),
                                    'level' => 'h2',
                                    'class' => array('element-invisible'),
                                ),
                            )); ?>

                            <!-- Navigation Menu -->
                        </div>
                    </div>

                    <nav class="logo-wrapper">
                        <a href="#" data-scroll-goto="0">

                            <div class="logo-container">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 427.7 270.5" style="enable-background:new 0 0 427.7 270.5;"
                                     xml:space="preserve">
                        <!--                     logo-->
                                    <g>
                                        <path class="logo" d="M215.4,125.7h7.3l0.3-6.5h-8.1c-0.5-3-1.3-5.8-2.4-8.3h13c1.3-2.7,2.3-5,3.8-7h-30.1
		c3.5,4.9,6.9,12.6,6.9,21.4c0,7.1-2.2,13.5-4.9,18.2h9.4C213.5,138.9,215.3,132.6,215.4,125.7"/>
                                        <path class="logo" d="M191.4,132.5c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8.1,3.3
		c0,0,1.7-2,2.4-2.9s1.9-2.1,1.9-2.1c-3.4-3.9-8.3-6.4-14-6.4c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c6,0,11-2.7,14.5-6.9
		c0,0-1.4-1.5-2.2-2.4C192.7,134.1,191.4,132.5,191.4,132.5"/>
                                        <path class="logo" d="M257.7,132.6c-2.1,2.3-5,3.7-8.4,3.7c-6.8,0-11.7-5.7-11.7-12.6c0-7,5-12.6,11.7-12.6c3.1,0,6,1.3,8,3.3l4.3-5
		c-3.4-3.9-8.3-6.3-14-6.3c-11.1,0-19.2,9.3-19.2,20.7s8.1,20.7,19.2,20.7c5.9,0,11-2.7,14.5-6.9L257.7,132.6z"/>
                                        <path class="logo" d="M181.1,158.7c0.9,0,1.7-0.3,2.2-0.9l0.5,0.5c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.9-1.6-3.9-3.9
		c0-2.3,1.6-3.9,3.9-3.9c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2
		C178.1,157.4,179.3,158.7,181.1,158.7"/>
                                        <path class="logo" d="M189.8,151.6c2.3,0,3.8,1.6,3.8,3.9c0,2.3-1.6,3.9-3.8,3.9c-2.3,0-3.8-1.6-3.8-3.9
		C185.9,153.2,187.5,151.6,189.8,151.6 M189.8,158.7c1.8,0,3-1.3,3-3.2s-1.2-3.2-3-3.2s-3,1.3-3,3.2S188,158.7,189.8,158.7"/>
                                        <polygon class="logo" points="196.9,151.7 201.7,157.8 201.7,151.7 202.5,151.7 202.5,159.3 202,159.3 197.2,153.3 197.2,159.3
		196.4,159.3 196.4,151.7 	"/>
                                        <path class="logo" d="M209.2,153.1c-0.4-0.4-1-0.7-1.6-0.7c-1,0-1.4,0.7-1.4,1.3c0,1.8,3.7,1.2,3.7,3.6c0,1.1-0.8,2.2-2.3,2.2
		c-0.9,0-1.8-0.4-2.4-1l0.5-0.5c0.4,0.5,1.2,0.8,1.8,0.8c1.1,0,1.6-0.8,1.6-1.4c0-1.7-3.7-1.1-3.7-3.6c0-1,0.7-2.1,2.1-2.1
		c0.8,0,1.6,0.3,2.2,0.9L209.2,153.1z"/>
                                        <path class="logo" d="M217.4,151.7h0.8v4.9c0,1.7-1.2,2.9-2.8,2.9c-1.7,0-2.8-1.1-2.8-2.9v-4.9h0.8v4.9c0,1.3,0.8,2.1,2,2.1
		s2-0.9,2-2.1V151.7z"/>
                                        <polygon class="logo"
                                                 points="222.2,158.7 225.2,158.7 225.2,159.3 221.4,159.3 221.4,151.7 222.2,151.7 	"/>
                                        <polygon class="logo" points="229.5,159.3 228.7,159.3 228.7,152.4 226.5,152.4 226.5,151.7 231.7,151.7 231.7,152.4 229.5,152.4
		"/>
                                        <rect x="234.2" y="151.7" width="0.8" height="7.6"/>
                                        <polygon class="logo" points="238.7,151.7 243.4,157.8 243.4,151.7 244.3,151.7 244.3,159.3 243.7,159.3 239,153.3 239,159.3
		238.1,159.3 238.1,151.7 	"/>
                                        <path class="logo" d="M250.9,155.3h2.8v3c-0.7,0.7-1.6,1.1-2.8,1.1c-2.3,0-3.8-1.6-3.8-3.9c0-2.3,1.6-3.9,3.8-3.9
		c1.1,0,2.1,0.4,2.8,1.1l-0.5,0.5c-0.5-0.6-1.3-0.9-2.2-0.9c-1.8,0-3,1.3-3,3.2s1.2,3.2,3,3.2c0.8,0,1.4-0.2,1.9-0.6v-2h-2V155.3z"
                                            />
                                    </g>
</svg>
                            </div>
                        </a>
                    </nav>
                    <nav class="right-side-nav" id="current_position">
                        <!-- Icon Bar -->
                        <ul class="icon-bar">
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>

                        </ul>
                        <!-- Icon Bar -->

                        <!-- Current Position -->
                        <?php
                            $block = module_invoke('block', 'block_view', '1');
                            print render($block['content']);
                        ?>
                        <!-- Current Position -->
                    </nav>
                </nav>
            <?php endif; ?>

            <?php print render($page['navigation']); ?>
        </div>
    </div>
</div>