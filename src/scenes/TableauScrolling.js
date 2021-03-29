class TableauScrolling extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/ground.png');

        // Différents plans
        this.load.image('ciel', 'assets/ciel.png');
        this.load.image('plan-buisson', 'assets/plan-buisson.png');
        this.load.image('plan-buisson2', 'assets/plan-buisson2.png');
<<<<<<< HEAD
<<<<<<< HEAD
        this.load.image('plan_troncs1', 'assets/plan_troncs1.png');
        this.load.image('plan_troncs2', 'assets/plan_troncs2.png');
        this.load.image('plan_troncs3', 'assets/plan_troncs3.png');
        this.load.image('plan_troncs4', 'assets/plan_troncs4.png');
=======
        this.load.image('plan-troncs', 'assets/plan-troncs.png');
        this.load.image('plan-troncs2', 'assets/plan-troncs2.png');
>>>>>>> parent of d4d2529 (changements)
=======
        this.load.image('plan-troncs', 'assets/plan-troncs.png');
        this.load.image('plan-troncs2', 'assets/plan-troncs2.png');
>>>>>>> parent of 2faa5e4 (Merge branch 'main' of https://github.com/Corentin1998/projet-plateformer into main)
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
        this.platforms.create(1550, 230, 'platform').setScale(1).refreshBody();
        this.platforms.create(1815, 270, 'platform').setScale(1).refreshBody();
        this.platforms.create(2016, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(2464, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(2912, 428, 'ground').setScale(1).refreshBody();
        this.platforms.create(2500, 280, 'platform').setScale(1).refreshBody();
        this.platforms.create(2720, 180, 'platform').setScale(1).refreshBody();
        this.platforms.create(2960, 280, 'platform').setScale(1).refreshBody();

        // Ennemis
        new Souris(this,550,371);
        new Squirrel(this,2200,365);
        new Squirrel(this,2720,365);

        //Étoiles
        this.stars.create(350,0,"star");
        this.stars.create(390,0,"star");
        this.stars.create(430,0,"star");
        this.stars.create(1120,0,"star");
        this.stars.create(1815,0,"star");
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

<<<<<<< HEAD
<<<<<<< HEAD
        this.plan_troncs4=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan_troncs4'
            );
        this.plan_troncs4.setScrollFactor(0);
        this.plantroncs4.setOrigin(0,0);
        this.plan_troncs4.alpha=1;

        this.plan_troncs3=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan_troncs3'
            );
        this.plan_troncs3.setScrollFactor(0);
        this.plan_troncs3.setOrigin(0,0);
        this.plan_troncs3.alpha=1;
=======
>>>>>>> parent of d4d2529 (changements)
=======
>>>>>>> parent of 2faa5e4 (Merge branch 'main' of https://github.com/Corentin1998/projet-plateformer into main)

        this.plantroncs2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan_troncs2'
            );
        this.plan_troncs2.setScrollFactor(0);
        this.plan_troncs2.setOrigin(0,0);
        this.plan_troncs2.alpha=1;
        //this.sky.tileScaleX=this.sky.tileScaleY=0.8;


<<<<<<< HEAD
<<<<<<< HEAD
        this.plan_troncs=this.add.tileSprite(
=======
        this.plantroncs=this.add.tileSprite(
>>>>>>> parent of d4d2529 (changements)
=======
        this.plantroncs=this.add.tileSprite(
>>>>>>> parent of 2faa5e4 (Merge branch 'main' of https://github.com/Corentin1998/projet-plateformer into main)
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
<<<<<<< HEAD
<<<<<<< HEAD
            'plan_troncs1'
            );
        this.plan_troncs1.setScrollFactor(0);
        this.plan_troncs1.setOrigin(0,0);
        this.plan_troncs1.alpha=1;
=======
            'plan-troncs'
            );
        this.plantroncs.setScrollFactor(0);
        this.plantroncs.setOrigin(0,0);
        this.plantroncs.alpha=1;
>>>>>>> parent of d4d2529 (changements)
=======
            'plan-troncs'
            );
        this.plantroncs.setScrollFactor(0);
        this.plantroncs.setOrigin(0,0);
        this.plantroncs.alpha=1;
>>>>>>> parent of 2faa5e4 (Merge branch 'main' of https://github.com/Corentin1998/projet-plateformer into main)


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

<<<<<<< HEAD
<<<<<<< HEAD
        this.planbuisson2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'plan-buisson2'
            );
        this.planbuisson2.setScrollFactor(0);
        this.planbuisson2.setOrigin(0,0);
        this.planbuisson2.alpha=1;
=======
>>>>>>> parent of d4d2529 (changements)
=======
>>>>>>> parent of 2faa5e4 (Merge branch 'main' of https://github.com/Corentin1998/projet-plateformer into main)

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

<<<<<<< HEAD
<<<<<<< HEAD
        this.plan_troncs4.tilePositionX=this.cameras.main.scrollX*0.3+300;
        this.plan_troncs4.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plan_troncs3.tilePositionX=this.cameras.main.scrollX*0.4+300;
        this.plan_troncs3.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plan_troncs2.tilePositionX=this.cameras.main.scrollX*0.5+300;
        this.plan_troncs2.tilePositionY=this.cameras.main.scrollY*0.5;

        this.planbuisson2.tilePositionX=this.cameras.main.scrollX*0.6+300;
        this.planbuisson2.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plan_troncs1.tilePositionX=this.cameras.main.scrollX*1+300;
        this.plan_troncs1.tilePositionY=this.cameras.main.scrollY*0.1+30;
=======
        this.plantroncs2.tilePositionX=this.cameras.main.scrollX*0.3+200;
        this.plantroncs2.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plantroncs.tilePositionX=this.cameras.main.scrollX*0.6+500;
        this.plantroncs.tilePositionY=this.cameras.main.scrollY*0.1+30;
>>>>>>> parent of d4d2529 (changements)
=======
        this.plantroncs2.tilePositionX=this.cameras.main.scrollX*0.3+200;
        this.plantroncs2.tilePositionY=this.cameras.main.scrollY*0.5;

        this.plantroncs.tilePositionX=this.cameras.main.scrollX*0.6+500;
        this.plantroncs.tilePositionY=this.cameras.main.scrollY*0.1+30;
>>>>>>> parent of 2faa5e4 (Merge branch 'main' of https://github.com/Corentin1998/projet-plateformer into main)

        this.planbuisson.tilePositionX=this.cameras.main.scrollX*0.8+500;
        this.planbuisson.tilePositionY=this.cameras.main.scrollY*0.1-15;

        this.planfeuilleshaut.tilePositionX=this.cameras.main.scrollX*1+500;
        this.planfeuilleshaut.tilePositionY=this.cameras.main.scrollY*0.1;

    }
}