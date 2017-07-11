Runner = function()
{
    Runner.superclass.constructor.call(this);

     // load all assets for game
    this.assetManager.addAssets("required",[
        
        //Stationary Obstacles
        {id:'Building_A',    url:'stationaryObstacles/build_A.png'},
        {id:'Building_B',    url:'stationaryObstacles/build_B.png'},
        {id:'Building_C',    url:'stationaryObstacles/build_C.png'},
        {id:'ufo',  url:'stationaryObstacles/ufo.png'},
        {id:'Darkness',  url:'widgets/darkness.png'},
       
        //Moving Obstacles
        {id:'moving_obstacle_A', 		url:'movingObstacles/moving_obstacle_A.png'},
        {id:'moving_obstacle_B', 		url:'movingObstacles/moving_obstacle_B.png'},
        
        //Coins
        {id:'coin',   					url:'coin.png'},
        
        
        //Player pieces
        {id:'player_running',   		url:'char/run/runAnim2.png'},
        {id:'player_flying', 			url:'char/jump/jumpAnim.png'},
        {id:'player_hang',            url:'char/hang/hangAnim.png'},


        // Backgrounds
        {id:'startscreen_background',   url:'screens/startscreen_background.jpg'},
        {id:'endscreen_background',   	url:'screens/endscreen_background.jpg'},
        {id:'endscreen_background2',     url:'screens/endscreen_background_2.jpg'},
        {id:'gamescreen_background',   	url:'screens/gamescreen_background.jpg'},
        {id:'gamescreen_ground',   		url:'screens/gamescreen_ground.png'},
        {id:'gamescreen_middleground',  url:'screens/gamescreen_middleground.png'},
        {id:'gamescreen_moon',  url:'screens/moon.png'},
           
        // Buttons
        {id:'play_button',   			url:'buttons/play_button.png'},
        {id:'playagain_button',   		url:'buttons/playagain_button.png'},
        
        //UI
        {id:'distance_ui',   					url:'distance_ui.png'},  
        
        //Sounds
        {id:'background_music',			url:'sounds/background_music.ogg',			backup_url:'sounds/background_music.mp3',		assetType:"audio"},
        {id:'hitObstacle_sound',		url: 'sounds/hitObstacle_sound.ogg',		backup_url:'sounds/hitObstacle_sound.mp3',		assetType:"audio"},
        {id:'hitCoin_sound',			url:'sounds/hitCoin_sound.ogg',				backup_url:'sounds/hitCoin_sound.mp3',			assetType:"audio"}, 
        {id:'hitDarkness_sound',        url:'sounds/hitDarkness_sound.ogg',         backup_url:'sounds/hitDarkness_sound.mp3',      assetType:"audio"}
      ]);

    TGE.FirstGameWindow = StartScreen;//GameScreen;//TODO Change to StartScreen once finished.
    
};

extend(Runner,TGE.Game);

