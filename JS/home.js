<section data-bs-version="5.1" class="header02 tradem5" group="Headers" data-bg-video="{{bg.type == 'video' && bg.value.url}}" mbr-class="{
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
        <input type="color" title="Secondary Color" value="#000000" name="title" condition="showTitle">
        <input type="checkbox" title="Text" name="showText" checked>
        <input type="checkbox" title="Buttons" name="showButtons">
        <header>Background</header>
        <fieldset type="background" name="bg" parallax>
            <input type="image" title="Image" value="https://r.mobirisesite.com/1110484/assets/images/photo-1460925895917-afdab827c52f.jpeg" parallax selected>
            <input type="color" title="Color" value="#E7D7C1">
            <input type="video" title="Video" value="https://www.youtube.com/watch?v=qT5r2Vjjruc">
        </fieldset>
        <input type="checkbox" title="Transparent" name="transparentBg" condition="bg.type === 'color'" checked>
        <header condition="bg.type === 'video'">Fallback Image</header>
        <input type="image" title="Fallback Image" value="../_images/background6.jpg" name="fallBackImage" condition="bg.type === 'video'">
        <input type="checkbox" title="Overlay" name="overlay" condition="bg.type !== 'color'" checked>
        <input type="color" title="Overlay Color" name="overlayColor" value="#000000" condition="overlay && bg.type !== 'color'">
        <input type="range" inline title="Opacity" name="overlayOpacity" min="0" max="1" step="0.1" value="1" condition="overlay && bg.type !== 'color'">
    </mbr-parameters>

    <div class="mbr-fallback-image disabled" mbr-if="bg.type == 'video'"></div>
    <div class="mbr-overlay" mbr-if="overlay && bg.type !== 'color'" opacity="{{overlayOpacity}}" bg-color="{{overlayColor}}"></div>

    <div mbr-class="{'container': !fullWidth, 'container-fluid': fullWidth}">
        <div class="row items-wrap">
            <div class="col-12 card">
                <div class="content-wrapper">
                    <div class="image-wrapper">
                        <img src="https://r.mobirisesite.com/1110484/assets/images/gceb53f5a4ae8a4d6c1f82c106848-h_m632mdz1.png" alt="Mobirise">
                    </div>
                    <h2 class="mbr-section-title mbr-fonts-style" data-app-selector=".mbr-section-title, .mbr-section-btn" mbr-theme-style="display-1" mbr-if="showTitle">Leivi Dominguez Bruno</h2>
                    <div class="text-wrapper">
                        <p class="mbr-text mbr-fonts-style" mbr-theme-style="display-4" mbr-if="showText" data-app-selector=".mbr-text, .text-wrapper"><i>Welcome to my digital playground! I'm a full-stack developer on a mission to impress recruiters and land my first job. Dive into my projects and see what I can do!</i></p>
                    </div>
                    <div mbr-buttons mbr-theme-style="display-4" class="mbr-section-btn" mbr-if="showButtons" data-toolbar="-mbrBtnMove"><a class="btn btn-primary" href="https://mobiri.se" data-app-placeholder="Type Text">Explore My Work</a></div>
                </div>
            </div>
        </div>
    </div>
</section>