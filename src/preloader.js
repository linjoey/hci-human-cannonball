ajtxz_hcgame.Preloader = function(){
    var game = ajtxz_hcgame.game;

    var percentage = 0; // Loading percentage
    var percentageText; // Text of loading percentage
    var preloadBar;     // Progress bar shape

    this.preload= function () {
        // Display loading page picture
        game.addAsset(this.world.centerX - 170,0,'boot_logo');

        // Add progress bar
        preloadBar = this.add.graphics(this.world.centerX-49,this.world.centerY+103);
        preloadBar.lineStyle(10, 0x000000, 1);
        preloadBar.moveTo(0,0);
        preloadBar.lineTo(126, 0);

        // Initialize progress bar to 0 in length
        preloadBar.scale.x = 0;

        // Load all assets for entire game
        game.loadAsset('cannon_body', 'cannon_body.png', ajtxz_hcgame.AssetType.IMAGE);
        game.loadAsset('cannon_stand', 'cannon_stand.png', ajtxz_hcgame.AssetType.IMAGE);
        game.loadAsset('captain', 'captain.png', ajtxz_hcgame.AssetType.IMAGE);
        game.loadAsset('level_background', 'level_background.png', ajtxz_hcgame.AssetType.IMAGE);
        game.loadAsset('control_board', 'control_board.png', ajtxz_hcgame.AssetType.IMAGE);
        game.loadAsset('fire_button', 'fireButton.png', ajtxz_hcgame.AssetType.IMAGE);



        // Add text for progress indication
        this.add.text(this.world.centerX - 50, this.world.centerY+70, 'LOADING...', {font: '18pt Arial', fill: "#000000", stroke: "#ffffff"});
        percentageText = this.add.text(this.world.centerX + 83, this.world.centerY + 90, percentage + '%', {font:'14pt Arial'});

    };

    this.create= function () {
        //Call to main menu
        this.time.events.add(Phaser.Timer.SECOND/2, function(){this.state.start('lvl1_1');}, this);

    };

    this.update= function () {
        // Update percentage of loading progress
        percentage = this.load.progress;
        percentageText.setText(percentage  + "%");
        preloadBar.scale.x = percentage * 0.01;
    };
};