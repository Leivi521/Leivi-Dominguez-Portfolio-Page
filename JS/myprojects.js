<section data-bs-version="5.1" class="features04 tradem5" group="Features" mbr-class="{
    'mbr-fullscreen': fullScreen,
    'mbr-parallax-background': bg.parallax}">
    <mbr-parameters>
        <header>Size</header>
        <input type="checkbox" title="Full Screen" name="fullScreen">
        <input type="checkbox" title="Full Width" name="fullWidth">
        <input type="range" inline title="Top" name="paddingTop" min="0" max="12" step="1" value="5" condition="fullScreen == false">
        <input type="range" inline title="Bottom" name="paddingBottom" min="0" max="12" step="1" value="5" condition="fullScreen == false">
        <header>Show/Hide</header>
        <input type="checkbox" title="Title" name="showTitle" checked>
        <input type="checkbox" title="Buttons" name="showButtons">
        <input type="color" title="Border" value="#323046" name="border" selected>
        <input type="color" title="Container BG" value="#292739" name="container" selected>
        <input type="checkbox" title="Gradient" name="showGradient" checked>
        <input type="color" title="Gradient Color" value="#5a1ddd" name="gradient" condition="showGradient" selected>
        <header>Cards</header>
        <input type="checkbox" title="Card Title" name="showCardTitle" checked>
        <input type="checkbox" title="Card List" name="showList" checked>
        <input type="color" title="Marker Color" value="#f50039" name="marker" condition="showList" selected>
        <input type="color" title="Card Border Top" value="#f50039" name="borderTop" selected>
        <input type="color" title="Card BG" value="#292739" name="card" selected>
        <header>Background</header>
        <fieldset type="background" name="bg" parallax>
            <input type="image" title="Image" value="../_images/background2.jpg">
            <input type="color" title="Color" value="#000000" selected>
        </fieldset>
        <header condition="bg.type === 'video'">Fallback Image</header>
        <input type="image" title="Fallback Image" value="../_images/background2.jpg" name="fallBackImage" condition="bg.type === 'video'">
        <input type="checkbox" title="Overlay" name="overlay" condition="bg.type !== 'color'" checked>
        <input type="color" title="Overlay Color" name="overlayColor" value="#080813" condition="overlay && bg.type !== 'color'">
        <input type="range" inline title="Opacity" name="overlayOpacity" min="0" max="1" step="0.1" value="0.7" condition="overlay && bg.type !== 'color'">
    </mbr-parameters>

    <div class="mbr-fallback-image disabled" mbr-if="bg.type == 'video'"></div>
    <div class="mbr-overlay" mbr-if="overlay && bg.type !== 'color'" opacity="{{overlayOpacity}}" bg-color="{{overlayColor}}"></div>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <div class="row">
            <div class="col-12">
                <div class="content-wrapper">
                    <h2 class="mbr-section-title mbr-fonts-style" data-app-selector=".mbr-section-title, .mbr-section-btn" mbr-theme-style="display-5" mbr-if="showTitle">
                        <b>My Favorite Projects</b></h2>
                    <div class="row items-wrap">
                        <div class="item features-image col-12 col-lg-4">
                            <div class="item-wrapper">
                                <div class="item-img">
                                    <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-title" mbr-if="showCardTitle">
                                        <b>CareConnect&nbsp;</b></h4>
                                    <div class="image-wrap">
                                        <img src="../_images/trade/image23.jpg" alt="Mobirise Website Builder">
                                    </div>
                                </div>
                                <div class="border-wrap"></div>
                                <div class="item-content" mbr-if="showList">
                                    <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline mbr-article>
                                        <li class="item-wrap">Assess current investments and provide
                                            personalized recommendations
                                        </li>
                                        <li class="item-wrap">Help users set realistic financial goals and
                                            suggest investment strategies
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item features-image col-12 col-lg-4">
                            <div class="item-wrapper">
                                <div class="item-img">
                                    <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-title" mbr-if="showCardTitle"><b>Gamepidia</b></h4>
                                    <div class="image-wrap">
                                        <img src="../_images/trade/image14.jpg" alt="Mobirise Website Builder">
                                    </div>
                                </div>
                                <div class="border-wrap"></div>
                                <div class="item-content" mbr-if="showList">
                                    <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline mbr-article>
                                        <li class="item-wrap">Provide real-time news updates and alerts related
                                            to market movements
                                        </li>
                                        <li class="item-wrap">Analyze market trends and provide insights on
                                            potential investment
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="item features-image col-12 col-lg-4">
                            <div class="item-wrapper">
                                <div class="item-img">
                                    <h4 class="item-title mbr-fonts-style" mbr-theme-style="display-7" data-app-selector=".item-title" mbr-if="showCardTitle">
                                        <b>Starwars Blog API</b></h4>
                                    <div class="image-wrap">
                                        <img src="../_images/trade/image21.jpg" alt="Mobirise Website Builder">
                                    </div>
                                </div>
                                <div class="border-wrap"></div>
                                <div class="item-content" mbr-if="showList">
                                    <ul class="list mbr-fonts-style" mbr-theme-style="display-4" data-app-selector=".list, .item-wrap" data-multiline mbr-article>
                                        <li class="item-wrap">Offer educational content, including articles,
                                            videos and webinars
                                        </li>
                                        <li class="item-wrap">Provide a comprehensive glossary of investment
                                            terms
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div mbr-buttons mbr-theme-style="display-4" class="mbr-section-btn" mbr-if="showButtons" data-toolbar="-mbrBtnMove">
                        <a class="btn btn-primary" href="https://mobiri.se" data-app-placeholder="Type Text">
                            MORE FEATURES
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>