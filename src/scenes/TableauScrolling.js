class TableauScrolling extends Tableau{

  preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/ground.png');

        // Différents plans
        this.load.image('ciel', 'assets/ciel.png');
        this.load.image('plan-buisson', 'assets/plan-buisson.png');
        this.load.image('lumiere', 'assets/lumiere.png');
        this.load.image('plan-troncs1', 'assets/plan-troncs1.png');
        this.load.image('lumiere2', 'assets/lumiere2.png');
        this.load.image('plan-troncs2', 'assets/plan-troncs2.png');
        this.load.image('plan-troncs3', 'assets/plan-troncs3.png');
        this.load.image('plan-troncs4', 'assets/plan-troncs4.png');
        this.load.image('plan-feuilleshaut', 'assets/plan-feuilleshaut.png');

        // Plateformes
        this.load.image('platform', 'assets/platform.png');
        this.load.image('platform-mg', 'assets/platform-mg.png');
        this.load.image('platform-md', 'assets/platform-md.png');
        this.load.image('platform-vg', 'assets/platform-vg.png');
        this.load.image('platform-vd', 'assets/platform-vd.png');

        // Ennemis
        this.load.image('bob-omb', 'assets/bob-omb.png');
        this.load.image('squirrel', 'assets/squirrel.png');
        this.load.image('thwomp', 'assets/thwomp.png');
        this.load.image('souris', 'assets/souris.png');

        //Musique
        this.load.audio('music', 'assets/sounds/music.mp3');

    }
    create() {
        super.create();

        //Taille du tableau
        let largeurDuTableau=4000;

        //Musique
        this.music = this.sound.add('music');

        var musicConfig = {
            mute: false,
            volume: 0.1,
            rate : 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay:0,
        }
        this.music.play(musicConfig);

        let hauteurDuTableau=448; //la hauteur est identique au cadre du jeu
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);

        this.cameras.main.startFollow(this.player, false, 0.05, 0.05);

        //Physique
        this.stars=this.physics.add.group();
        this.platforms=this.physics.add.staticGroup();

        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        // Plateformes
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(224, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(672, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(1008, 428, 'platform-mg').setScale(1).refreshBody();
        this.platforms.create(1008, 348, 'platform-vg').setScale(1).refreshBody();
        this.platforms.create(1232, 348, 'platform-vd').setScale(1).refreshBody();
        this.platforms.create(1232, 428, 'platform-md').setScale(1).refreshBody();

        this.platforms.create(1568, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(1550, 210, 'platform').setScale(1).refreshBody();
        this.platforms.create(1815, 250, 'platform').setScale(1).refreshBody();
        this.platforms.create(2016, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(2464, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(2912, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(2500, 280, 'platform').setScale(1).refreshBody();
        this.platforms.create(2720, 180, 'platform').setScale(1).refreshBody();
        this.platforms.create(2940, 280, 'platform').setScale(1).refreshBody();

        // Ennemis
        new Squirrel(this,550,365);
        new Souris(this,1008,294);
        new Squirrel(this,2200,365);
        //new Souris(this,2720,371);

        //Étoiles
        this.stars.create(350,0,"star");
        this.stars.create(390,0,"star");
        this.stars.create(430,0,"star");

        this.stars.create(960,0,"star");
        this.stars.create(1040,0,"star");
        this.stars.create(1120,0,"star");
        this.stars.create(1200,0,"star");
        this.stars.create(1280,0,"star");

        this.stars.create(1775,0,"star");
        this.stars.create(1815,0,"star");
        this.stars.create(1855,0,"star");
        this.stars.create(2500,0,"star");
        this.stars.create(2720,0,"star");
        this.stars.create(2960,0,"star");

        //star.body.allowGravity=false;
        //star.setCollideWorldBounds(true);

        //this.stars.create(300,0,"star").setCollideWorldBounds(true).setBounce(0.4);

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.platforms, this.stars);

        //Les couches du background
        this.ciel=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'ciel'
            );
        this.ciel.setOrigin(0,0);
        this.ciel.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra

        this.plantroncs4=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-troncs4'
            );
        this.plantroncs4.setScrollFactor(0);
        this.plantroncs4.setOrigin(0,0);
        this.plantroncs4.alpha=1;

        this.plantroncs3=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-troncs3'
            );
        this.plantroncs3.setScrollFactor(0);
        this.plantroncs3.setOrigin(0,0);
        this.plantroncs3.alpha=1;

        this.plantroncs2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-troncs2'
            );
        this.plantroncs2.setScrollFactor(0);
        this.plantroncs2.setOrigin(0,0);
        this.plantroncs2.alpha=1;
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;

        this.lumiere2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'lumiere2'
            );
        this.lumiere2.setScrollFactor(0);
        this.lumiere2.setOrigin(0,0);
        this.lumiere2.alpha=1;

        this.plantroncs1=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-troncs1'
            );
        this.plantroncs1.setScrollFactor(0);
        this.plantroncs1.setOrigin(0,0);
        this.plantroncs1.alpha=1;

        this.lumiere=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'lumiere'
            );
        this.lumiere.setScrollFactor(0);
        this.lumiere.setOrigin(0,0);
        this.lumiere.alpha=1;

        this.planbuisson=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-buisson'
            );
        this.planbuisson.setScrollFactor(0);
        this.planbuisson.setOrigin(0,0);
        this.planbuisson.alpha=1;

        this.planfeuilleshaut=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-feuilleshaut'
            );
        this.planfeuilleshaut.setScrollFactor(0);
        this.planfeuilleshaut.setOrigin(0,0);
        this.planfeuilleshaut.alpha=1;
        this.planfeuilleshaut.setDepth(11);

        //Profondeur des élements
        this.platforms.setDepth(10)
        this.stars.setDepth(10)
        this.player.setDepth(10)

    }
    update(){
        super.update();
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.ciel.tilePositionX=this.cameras.main.scrollX*0.2;
        this.ciel.tilePositionY=this.cameras.main.scrollY*0.2;
        //le deuxième ciel se déplace moins vite pour accentuer l'effet

        this.plantroncs4.tilePositionX=this.cameras.main.scrollX*0.2/*+300*/;
        this.plantroncs4.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plantroncs3.tilePositionX=this.cameras.main.scrollX*0.3;
        this.plantroncs3.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plantroncs2.tilePositionX=this.cameras.main.scrollX*0.5+100;
        this.plantroncs2.tilePositionY=this.cameras.main.scrollY*0.5;

        this.lumiere2.tilePositionX=this.cameras.main.scrollX*0.6;
        this.lumiere2.tilePositionY=this.cameras.main.scrollY*0.1-15;

        this.plantroncs1.tilePositionX=this.cameras.main.scrollX*0.7;
        this.plantroncs1.tilePositionY=this.cameras.main.scrollY*0.1+30;

        this.lumiere.tilePositionX=this.cameras.main.scrollX*0.75;
        this.lumiere.tilePositionY=this.cameras.main.scrollY*0.1-15;

        this.planbuisson.tilePositionX=this.cameras.main.scrollX*0.8;
        this.planbuisson.tilePositionY=this.cameras.main.scrollY*0.1-15;

        this.planfeuilleshaut.tilePositionX=this.cameras.main.scrollX*1;
        this.planfeuilleshaut.tilePositionY=this.cameras.main.scrollY*0.1;

    }
}