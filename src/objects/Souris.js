class Souris extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "souris");
        scene.add.existing(this)
        scene.physics.add.existing(this)

        //Taille
        this.setDisplaySize(41,29);
        this.body.setMaxVelocityX(10)
        this.setVelocityX(-10);

        //Gravité
        this.body.allowGravity=false;

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width,this.body.height);
        this.setOffset(0,0);
        this.setDepth(10);

        //définir les propriété que l'on va utiliser dans notre animation

        // X

        this.setCollideWorldBounds(true);
        //this.setBounce(1);
        this.setVelocityX(20);

        //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
        //ceci a pour effet de décaler les animations pour ce même objet

        this.originalX=x;
        this.minX=x-100;
        this.maxX=x+320;

        // on applique les propriété du début de l'animation
        this.x=this.minX;
        this.alpha=0;
        let me=this;

        //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
        //ceci a pour effet de décaler les animations pour ce même objet
        
        scene.tweens.add({
            targets:this,
            duration:200,
            delay:Math.random()*1000,
            alpha:{
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            },
            onComplete: function () {
                me.start();
            }
        })

}

start(){
    this.scene.tweens.add({
        targets: this,
        x: {
            from: this.minX,
            to:this.maxX,
            duration: 10*1000,
            ease: 'Sine.easeInOut',
            yoyo: -1,
            repeat:-1,
            flipX:true,
        },
        y: {
            from: this.minY,
            to:this.maxY,
            duration: 500,
            ease: 'Sine.easeInOut',
            yoyo: -1,
            repeat:-1
        }
    });
}

}
        
        
        /*scene.tweens.add({
                targets:this,
                duration:0,
                delay:Math.random()*1000,
                alpha:{
                    startDelay:Math.random()*5000,
                    from:0,
                    to:1,
                },
                onComplete: function () {
                    me.start();
                }
            })

    }

    start(){
      this.scene.tweens.add({
            targets: this,
            y: {
                from: this.minY,
                to:this.y, //on monte de 20 px
                duration: 1000,// une  seconde pour monter (et donc la même chose pour descendre)
                ease: 'Sine.easeInOut', //courbe d'accélération/décélération
                yoyo: -1, // de haut en bas, puis de bas en haut
                repeat:-1 //se répète à l'infini

            }
            
        });
    }

    update(){
        //fait changer de sens notre oiseau
        if(this.body){
            if(this.body.velocity.x<0){
                this.flipX=true;
            }else{
                this.flipX=true;
            }
        }

    }
}*/



/*
this.monstre=this.physics.add.sprite(850,this.sys.canvas.height-70,"goomba");
this.monstre.setOrigin(0,0);
this.monstre.setDisplaySize(64,64);
this.monstre.setCollideWorldBounds(true);
this.monstre.setBounce(1);
this.monstre.setVelocityX(80);
this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);*/