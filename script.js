const synth = new Tone.Synth().toMaster()

const app = new Vue({
   el: "#app",
   data:{
    keys: [
      {
      "sound": "C3",
      "key": "Q",
      "playing": false
      },
      {
      "sound": "D3",
      "key": "W",
      "playing": false
      },
      {
      "sound": "E3",
      "key": "E",
      "playing": false
      },
      {
      "sound": "F3",
      "key": "R",
      "playing": false
      },
      {
      "sound": "G3",
      "key": "T",
      "playing": false
      },
      {
      "sound": "A3",
      "key": "Y",
      "playing": false
      }
      ,
      {
      "sound": "B3",
      "key": "U",
      "playing": false
      }
      ,
      {
      "sound": "C4",
      "key": "I",
      "playing": false
      }
      ,
      {
      "sound": "D4",
      "key": "O",
      "playing": false
      }
      ,
      {
      "sound": "E4",
      "key": "P",
      "playing": false
      }
      ,
      {
      "sound": "F4",
      "key": "A",
      "playing": false
      }
      ,
      {
      "sound": "G4",
      "key": "S",
      "playing": false
      }
      ,
      {
      "sound": "A4",
      "key": "D",
      "playing": false
      }
      ,
      {
      "sound": "B4",
      "key": "F",
      "playing": false
      }
      ,
      {
      "sound": "C5",
      "key": "G",
      "playing": false
      }
      ,
      {
      "sound": "D5",
      "key": "H",
      "playing": false
      }
      ,
      {
      "sound": "E5",
      "key": "J",
      "playing": false
      }
      ,
      {
      "sound": "F5",
      "key": "K",
      "playing": false
      }
      ,
      {
      "sound": "G5",
      "key": "L",
      "playing": false
      }
      ,
      {
      "sound": "A5",
      "key": "Z",
      "playing": false
      }
      ,
      {
      "sound": "B5",
      "key": "X",
      "playing": false
      }
      ,
      {
      "sound": "C6",
      "key": "C",
      "playing": false
      },
      {
      "sound": "D6",
      "key": "V",
      "playing": false
      },
      {
      "sound": "E6",
      "key": "B",
      "playing": false
      }
    ],
     musics: [
       {"name": "Happy Birtday",
        "time": 400,
       "notes": [
        {"key": "I"},
        {"key": "I"},
        {"key": "O"},
        {"key": "I"},
        {"key": "A"},
        {"key": "P"},
        {"key": "I"},
        {"key": "I"},
        {"key": "O"},
        {"key": "I"},
        {"key": "S"},
        {"key": "A"},
        {"key": "I"},
        {"key": "I"},
        {"key": "G"},
        {"key": "D"},
        {"key": "A"},
        {"key": "P"},
        {"key": "O"},
        {"key": "G"},
        {"key": "G"},
        {"key": "D"},
        {"key": "A"},
        {"key": "S"},
        {"key": "A"}
       ]
       },
       {"name": "TWINKLE TWINKLE LITTLE STAR",
        "time": 370,
       "notes": [
        {"key": "T"},
        {"key": "T"},
        {"key": "O"},
        {"key": "O"},
        {"key": "P"},
        {"key": "P"},
        {"key": "O"},
        {"key": "I"},
        {"key": "I"},
        {"key": "U"},
        {"key": "U"},
        {"key": "Y"},
        {"key": "Y"},
        {"key": "T"},
        {"key": "O"},
        {"key": "O"},
        {"key": "I"},
        {"key": "I"},
        {"key": "U"},
        {"key": "U"},
        {"key": "Y"},
        {"key": "O"},
        {"key": "O"},
        {"key": "I"},
        {"key": "U"},
        {"key": "U"},
        {"key": "Y"},
        {"key": "T"},
        {"key": "T"},
        {"key": "O"},
        {"key": "O"},
        {"key": "P"},
        {"key": "P"},
        {"key": "O"},
        {"key": "I"},
        {"key": "I"},
        {"key": "U"},
        {"key": "U"},
        {"key": "Y"},
        {"key": "Y"},
        {"key": "T"}
       ]
       },
       {"name": "Mario Theme",
        "time": 370,
       "notes": [
        {"key": "F"},
        {"key": "F"},
         {"key": "F"},
         {"key": "S"},
         {"key": "F"},
         {"key": "H"},
         {"key": "O"},
         {"key": "S"},
         {"key": "P"},
         {"key": "U"},
         {"key": "P"},
         {"key": "A"},
         {"key": "P"},
         {"key": "P"},
         {"key": "O"},
         {"key": "F"},
         {"key": "H"},
         {"key": "J"},
         {"key": "G"},
         {"key": "H"},
         {"key": "F"},
         {"key": "S"},
         {"key": "D"},
         {"key": "A"},
         {"key": "S"},
         {"key": "P"},
         {"key": "U"},
         {"key": "P"},
         {"key": "A"},
         {"key": "P"},
         {"key": "P"},
         {"key": "O"},
         {"key": "F"},
         {"key": "H"},
         {"key": "J"},
         {"key": "G"},
         {"key": "H"},
         {"key": "F"},
         {"key": "S"},
         {"key": "D"},
         {"key": "A"},
         {"key": "H"},
         {"key": "G"},
         {"key": "G"},
         {"key": "D"},
         {"key": "F"},
         {"key": "O"},
         {"key": "P"},
         {"key": "S"},
         {"key": "P"},
         {"key": "S"},
         {"key": "D"}
       ]
       }
     ],
     musicas: [],
     tocandoSandoBoxie: {},
     playingSandBoxie: false,
     musicTrain: {"notes": []},
     training: false,
     proximoKeyTrain: {},
     trainingKeyId: 0,
     proximoTecla: {},
     percentTrain: 0,
     errorTrain: 0,
     acertosTrain: 0,
     treinando: false,
     myMusic: [],
     record: false,
     playingMyMusic: false,
     timeRecord: 300,
     stopPlayMyMusicOpa: true,
     puxandoNota: false
   },
   created() {
    window.addEventListener('keydown', (e) => {
      this.playKeyboard(e)
    });
  },
  mounted(){
    this.musicas = this.musics
  },
   methods:{
     stopPlayingMusic(){
       this.playingMyMusic = false
       this.stopPlayMyMusicOpa = false
     },
     play(key){ 
       this.puxandoNota = true
       synth.triggerAttackRelease(key.sound, '5n')
       const id = this.keys.indexOf(key)
          synth.triggerAttackRelease(key.sound, '5n')
          this.keys[id].playing = true
          setTimeout( ()=> {
            this.keys[id].playing = false
          }, 300)
       if(!this.record){
       if(this.training){
         this.train(this.musicTrain)
         this.pressKeyTrain(key.key)
       }
       } else{
         this.myMusic.push({"key": key.key,
              "time": this.timeRecord})
         synth.triggerAttackRelease(key.sound, '5n')
         this.timeRecord = 300
       }
     },
     puxandoNotaA(key){
       if(this.puxandoNota){
       if(!this.record){
       if(this.training){
         this.train(this.musicTrain)
         this.pressKeyTrain(key.key)
       }
       } else{
         this.myMusic.push({"key": key.key,
              "time": this.timeRecord})
         synth.triggerAttackRelease(key.sound, '5n')
         this.timeRecord = 300
       }
          const id = this.keys.indexOf(key)
          synth.triggerAttackRelease(key.sound, '5n')
          this.keys[id].playing = true
          setTimeout( ()=> {
            this.keys[id].playing = false
          }, 300)
       }
     },
     recordOn(){
       this.stopPlayMyMusicOpa = false
       this.myMusic = []
       this.record = true
       if(this.record){
       const await = setInterval( ()=> {
         if(this.record){
         this.myMusic.push({"key": "Ç"})
         }
       }, 1000)
       } else{
         clearInterval(await)
       }
     },
     playKeyboard (event) {
        var keyPress = event.key.toUpperCase()
        if(!this.record){
        if(this.training){
         this.train(this.musicTrain)
         this.pressKeyTrain(keyPress)
        }
        var array = this.keys
        const found = array.find(key => key.key == keyPress);
        const id = this.keys.indexOf(found)
        if(found){
          synth.triggerAttackRelease(found.sound, '5n')
          this.keys[id].playing = true
          setTimeout( ()=> {
            this.keys[id].playing = false
          }, 300)
       }
        } else{
          var array = this.keys
          const found = array.find(key => key.key == keyPress);
          const id = this.keys.indexOf(found)
          synth.triggerAttackRelease(found.sound, '5n')
          this.keys[id].playing = true
          setTimeout( ()=> {
            this.keys[id].playing = false
          }, 300)
          this.myMusic.push(
            {
              "key": keyPress,
              "time": this.timeRecord
            })
        }
     },
     sandBoxie(m){
       if(!this.training){
       if(!this.playingMyMusic){
       if(!this.record){
       if(!this.playingSandBoxie){
       this.tocandoSandoBoxie = m
       this.musicas = this.musics
       var i = 0
       this.playingSandBoxie = true
       const id = setInterval(() => {
         this.percentTrain = (i / m.notes.length)*100
         const found = this.keys.find(key => key.key == m.notes[i].key)
         if(found){
         synth.triggerAttackRelease(found.sound, '5n');
         const idKey = this.keys.indexOf(found)
         this.keys[idKey].playing = true
          setTimeout( ()=> {
              this.keys[idKey].playing = false
            }, m.time - 120)
         }
         if (i == m.notes.length - 1){
           this.percentTrain = 0
           this.playingSandBoxie = false
           clearInterval(id)
         }
         else{
           i++
         }
       }, 300)
       }
       }
       }
       }
     },
     playMyMusic(){
       if(!this.training){
       if(!this.playingSandBoxie){
       if(!this.playingMyMusic){
       if(this.myMusic.length > 0){
       this.stopPlayMyMusicOpa = true
       this.musicas = this.musics
       var i = 0
       this.playingMyMusic = true
       const id = setInterval(() => {
         if(!this.stopPlayMyMusicOpa){
           this.percentTrain = 0
           this.playingMyMusic = false
           clearInterval(id)
           this.record = false
         } else{
         this.percentTrain = (i / this.myMusic.length)*100
         const found = this.keys.find(key => key.key == this.myMusic[i].key)
         if(found){
         synth.triggerAttackRelease(found.sound, '5n');
         const idKey = this.keys.indexOf(found)
         this.keys[idKey].playing = true
          setTimeout( ()=> {
              this.keys[idKey].playing = false
            }, 200)
         }
         if (i == this.myMusic.length - 1){
           this.percentTrain = 0
           this.playingMyMusic = false
           clearInterval(id)
           this.record = false
         }
         else{
           i++
         }
         }
           
       }, 150)
       }
       }
       }
       
       }
     },
     train(m){
       if(!this.record){
         if(!this.traning){
           this.musicTrain = m
           this.training = true
           this.proximoKeyTrain = this.musicTrain.notes[this.trainingKeyId]
         }
       }
     },
     pressKeyTrain(e){
     if(this.training){
       if(this.trainingKeyId < this.musicTrain.notes.length){
         if(e == this.proximoKeyTrain.key){
           this.acertosTrain++
         } else{
          var array = this.keys
          var keyPress = e.toUpperCase()
          const found = array.find(key => key.key == keyPress);
          const id = this.keys.indexOf(found)
          if(found){
           this.errorTrain++
          }
         }
         this.trainingKeyId++
         this.percentTrain = (this.trainingKeyId / this.musicTrain.notes.length)*100
         this.proximoKeyTrain = this.musicTrain.notes[this.trainingKeyId]
         if(this.trainingKeyId + 1 < this.musicTrain.notes.length){
            this.proximoTecla = this.musicTrain.notes[this.trainingKeyId + 1]
         }
       }
       if(this.trainingKeyId >= this.musicTrain.notes.length){
           this.trainingKeyId = 0
           this.proximoTecla = {}
           this.proximoKeyTrain = {}
           this.training = false
           this.treinando = true
           this.percentTrain = 0
       }
     }
   },
     continuar(){
          this.acertosTrain = 0
          this.errorTrain = 0
          this.treinando = false
     }
   }
})