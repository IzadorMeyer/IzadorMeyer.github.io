(function(window, opspark, _) {
  const
    createjs = window.createjs,
    draw = opspark.draw,
    phyz = opspark.racket.physikz;

  // create a namespace for the projectile manager //
  _.set(opspark, 'playa.projectile',
    /**
     * Creates and returns the projectile manager.
     */
    function(fx, assets, messenger) {
      const
        objects = [],
        pool = {
          objects: objects,

          get: function() {
            if (objects.length > 0) {
              return objects.pop();
            }
            return makeObject();
          },

          recycle: function(object) {
            messenger.dispatch({ type: 'POOL', bodies: [object] });
            
            object.x = -(object.width);
            object.alpha = 1;
            object.scaleX = object.scaleY = 1;
            objects.push(object);
          }
        };

      function makeObject() {
        return assets.makeProjectile();
      }
      
      function handleCollisionProjectile(impact) {
        // TODO : Consider if particles are necessary here //
        // particleManager.makeEmitter(1, 2, '#FF0000').emit({x: projectile.x, y: projectile.y}, 0.5);
      }

      function onTweenComplete(e) {
        pool.recycle(e.target);
      }

      // return the projectile manager api //
      return {
        fire: function(emitter) {
          console.log(emitter.fireType)
          var projectile, degrees;
          var projectile2
          var projectiles = []

          if(emitter.fireType === 'normal'){
            projectile = pool.get();
            projectile.rotation = emitter.rotation;
            
            //console.log(projectile.rotation);
            
            degrees = emitter.rotation;
            projectile.velocityX = Math.cos(phyz.degreesToRadians(degrees)) * (projectile.velocityMax + emitter.velocityX);
            projectile.velocityY = Math.sin(phyz.degreesToRadians(degrees)) * (projectile.velocityMax + emitter.velocityY);
            projectile.rotationalVelocity = 0;
            
            //console.log(projectile.velocityX);
            //console.log(projectile.velocityY);
  
            var projectilePoint = emitter.getProjectilePoint();
            //projectile.activate();
            projectile.x = projectilePoint.x;
            projectile.y = projectilePoint.y;
            
            // keep a reference on the projectile to who shot the projectile //
            projectile.emitter = emitter;
  
            createjs.Tween.get(projectile, { override: true })
              .wait(500)
              .to({ alpha: 0, scaleX: 0.1, scaleY: 0.1 }, 1000, createjs.Ease.linear)
              .call(onTweenComplete);
              projectiles.push(projectile)
  
            messenger.dispatch({ type: 'SPAWN', bodies: projectiles });
          } else if(emitter.fireType === 'splitShot'){
            projectile = pool.get();
          projectile2 = pool.get();
          projectile.rotation = emitter.rotation;
          projectile2.rotation = emitter.rotation;
          
          //console.log(projectile.rotation);
          
          degrees = emitter.rotation;
          projectile.velocityX = Math.cos(phyz.degreesToRadians(degrees + 10)) * (projectile.velocityMax + emitter.velocityX);
          projectile.velocityY = Math.sin(phyz.degreesToRadians(degrees + 10)) * (projectile.velocityMax + emitter.velocityY);
          projectile.rotationalVelocity = 0;

          projectile2.velocityX = Math.cos(phyz.degreesToRadians(degrees - 10)) * (projectile2.velocityMax + emitter.velocityX);
          projectile2.velocityY = Math.sin(phyz.degreesToRadians(degrees - 10)) * (projectile2.velocityMax + emitter.velocityY);
          projectile2.rotationalVelocity = 0;
          
          //console.log(projectile.velocityX);
          //console.log(projectile.velocityY);

          var projectilePoint = emitter.getProjectilePoint();
          //projectile.activate();
          projectile.x = projectilePoint.x;
          projectile.y = projectilePoint.y;

          projectile2.x = projectilePoint.x;
          projectile2.y = projectilePoint.y;
          
          // keep a reference on the projectile to who shot the projectile //
          projectile.emitter = emitter;
          projectile2.emitter = emitter;

          createjs.Tween.get(projectile, { override: true })
            .wait(500)
            .to({ alpha: 0, scaleX: 0.1, scaleY: 0.1 }, 1000, createjs.Ease.linear)
            .call(onTweenComplete);

          createjs.Tween.get(projectile2, { override: true })
            .wait(500)
            .to({ alpha: 0, scaleX: 0.1, scaleY: 0.1 }, 1000, createjs.Ease.linear)
            .call(onTweenComplete);

           // console.log(projectile)
           // console.log(projectile2)

          messenger.dispatch({ type: 'SPAWN', bodies: [projectile, projectile2] });
          }
         
        },

        fireSplitShot: function(emitter) {
          console.log("fire split shot")
          console.log(emitter.fireType)
          var projectile, degrees;
          var projectile2
          
          projectile = pool.get();
          projectile2 = pool.get();
          projectile.rotation = emitter.rotation;
          projectile2.rotation = emitter.rotation;
          
          //console.log(projectile.rotation);
          
          degrees = emitter.rotation;
          projectile.velocityX = Math.cos(phyz.degreesToRadians(degrees + 10)) * (projectile.velocityMax + emitter.velocityX);
          projectile.velocityY = Math.sin(phyz.degreesToRadians(degrees + 10)) * (projectile.velocityMax + emitter.velocityY);
          projectile.rotationalVelocity = 0;

          projectile2.velocityX = Math.cos(phyz.degreesToRadians(degrees - 10)) * (projectile2.velocityMax + emitter.velocityX);
          projectile2.velocityY = Math.sin(phyz.degreesToRadians(degrees - 10)) * (projectile2.velocityMax + emitter.velocityY);
          projectile2.rotationalVelocity = 0;
          
          //console.log(projectile.velocityX);
          //console.log(projectile.velocityY);

          var projectilePoint = emitter.getProjectilePoint();
          //projectile.activate();
          projectile.x = projectilePoint.x;
          projectile.y = projectilePoint.y;

          projectile2.x = projectilePoint.x;
          projectile2.y = projectilePoint.y;
          
          // keep a reference on the projectile to who shot the projectile //
          projectile.emitter = emitter;
          projectile2.emitter = emitter;

          createjs.Tween.get(projectile, { override: true })
            .wait(500)
            .to({ alpha: 0, scaleX: 0.1, scaleY: 0.1 }, 1000, createjs.Ease.linear)
            .call(onTweenComplete);

          createjs.Tween.get(projectile2, { override: true })
            .wait(500)
            .to({ alpha: 0, scaleX: 0.1, scaleY: 0.1 }, 1000, createjs.Ease.linear)
            .call(onTweenComplete);

           // console.log(projectile)
           // console.log(projectile2)

          messenger.dispatch({ type: 'SPAWN', bodies: [projectile, projectile2] });
        }
      };
    });
}(window, window.opspark, window._));
